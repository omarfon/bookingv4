import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { NgxAgoraService, Stream, AgoraClient, ClientEvent, StreamEvent } from 'ngx-agora';
import { Router, ActivatedRoute } from '@angular/router';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { PermissionsVideoService } from 'src/app/services/permissions-video.service';


@Component({
  selector: 'app-page-video',
  templateUrl: './page-video.page.html',
  styleUrls: ['./page-video.page.scss'],
})
export class PageVideoPage implements OnInit {
  @Input('date') date
  topVideoFrame = 'partner-video';
  userId: string;
  partnerId: string;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;
  hora;

  title = 'angular-video';
  public localCallId;
  remoteCalls: string[] = [];
  public channel;
  public token;

  public client: AgoraClient;
  public localStream: Stream;
  public uid;
  public dates;
  public nombreDoctor;
  public idDoctor;
  public time;

  public dataPermissions;

  constructor(
    public elRef: ElementRef,
    public router: Router,
    public ngxAgoraService: NgxAgoraService,
    public activateRoute: ActivatedRoute,
    public appointmetSrv: AppoinmentService,
    public nav: NavController,
    public routes: ActivatedRoute,
    public permissionSrv: PermissionsVideoService) {

    const data = this.routes.snapshot.paramMap.get('data');
    this.dataPermissions = JSON.parse(data);
    console.log('dataPermissions:', this.dataPermissions);
    if (data) {
      this.getPermissionVideo();
    }
  }

  ngOnInit() {
    this.crhono();
    this.nombreDoctor = localStorage.getItem('doctor');
    this.idDoctor = localStorage.getItem('idDoctor')
  }

  getPermissionVideo() {
    let appoinmentid = this.dataPermissions.appointmentId;
    let patientId = this.dataPermissions.patientId;
    if (this.dataPermissions.familiar === true) {
      this.permissionSrv.getAuthoParent(patientId, appoinmentid).subscribe(async data => {
        console.log('data', data);
        this.channel = data.channel;
        this.token = data.token;
        this.localCallId = data.uid.toString();
        this.uid = data.uid;
        this.initVideo();
      });
    } else {
      this.permissionSrv.getPermissionsVideo(appoinmentid).subscribe(data => {
        console.log('data', data);
        this.channel = data.channel;
        this.token = data.token;
        this.localCallId = data.uid.toString();
        this.uid = data.uid;
        this.initVideo();
      }, err => {
        console.log(err)
      })
    }
  }

  initVideo() {
    this.client = this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'h264' });
    this.assignClientHandlers();

    this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });
    this.assignLocalStreamHandlers();
    this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error)));
    this.localStream.setVideoProfile('720p_3');
  }

  crhono() {
    setInterval(() => {
      this.updateTime();
    }, 1000)
  }

  updateTime() {
    this.time = moment().format('hh:mm:ss');
  }


  join(onSuccess?: (uid: number | string) => void, onFailure?: (error: Error) => void): void {
    this.client.join(this.token, this.channel, this.uid, onSuccess, onFailure);
  }

  /**
   * Attempts to upload the created local A/V stream to a joined chat room.
   */
  publish(): void {
    this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
  }

  private assignLocalStreamHandlers(): void {
    this.localStream.on(StreamEvent.MediaAccessAllowed, () => {
      console.log('accessAllowed');
    });

    // The user has denied access to the camera and mic.
    this.localStream.on(StreamEvent.MediaAccessDenied, () => {
      console.log('accessDenied');
    });
  }

  private initLocalStream(onSuccess?: () => any): void {
    this.localStream.init(
      () => {
        // The user has granted access to the camera and mic.
        console.log(this.localCallId);
        this.localStream.play(this.localCallId);

        if (onSuccess) {
          onSuccess();
        }
      },
      err => console.error('getUserMedia failed', err)
    );
  }

  private assignClientHandlers(): void {
    this.client.on(ClientEvent.LocalStreamPublished, evt => {
      console.log('Publish local stream successfully');
    });

    this.client.on(ClientEvent.Error, error => {
      console.log('Got error msg:', error.reason);
      if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.client.renewChannelKey(
          '',
          () => console.log('Renewed the channel key successfully.'),
          renewError => console.error('Renew channel key failed: ', renewError)
        );
      }
    });

    this.client.on(ClientEvent.RemoteStreamAdded, evt => {
      const stream = evt.stream as Stream;
      this.client.subscribe(stream, { audio: true, video: true }, err => {
        console.log('Subscribe stream failed', err);
      });
    });

    this.client.on(ClientEvent.RemoteStreamSubscribed, evt => {
      const stream = evt.stream as Stream;
      const id = this.getRemoteId(stream);
      if (!this.remoteCalls.length) {
        this.remoteCalls.push(id);
        setTimeout(() => stream.play(id), 1000);
      }
    });

    this.client.on(ClientEvent.RemoteStreamRemoved, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = [];
        console.log(`Remote stream is removed ${stream.getId()}`);
      }
    });

    this.client.on(ClientEvent.PeerLeave, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }

  private getRemoteId(stream: Stream): string {
    return `agora_remote-${stream.getId()}`;
  }

  closePage() {
    this.nav.back();
    this.client.leave(() => {
      console.log("Leavel channel successfully");
    }, (err) => {
      console.log("Leave channel failed");
    });
    this.localStream.close();
  }

  leave() {
    this.client.leave(() => {
      console.log("Leavel channel successfully");
    }, (err) => {
      console.log("Leave channel failed");
    });
    this.router.navigate(['/home']);
    this.localStream.close();
  }

  mute() {
    this.client.on(ClientEvent.RemoveVideoMuted, evt => {
      console.log('video desactivado');
    })

    this.client.on(ClientEvent.PeerLeave, () => {
      console.log('eliminar a otro usuario');
    })
  };


  /*  dejar(){
 
     this.client.on('peer-leave', (evt) => {
       const stream = evt.stream;
       if (stream) {
         stream.stop();
         this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
         console.log(`${evt.uid} left from this channel`);
       }
     });
   }*/
  /*   remove(){
      this.ngxAgoraService.client.on( "stream-removed" () ,(evt) => {
        const stream = evt.stream;
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
        console.log(`Remote stream is removed ${stream.getId()}`);
      });
    }  */

  closeSession() {
    this.localStream.on(StreamEvent.MediaAccessDenied, () => {
      console.log('access Denied');
    });
    this.client.leave();
    this.localStream.stop();
    this.client.off;

    console.log('cerrar localStream');
  }

}
