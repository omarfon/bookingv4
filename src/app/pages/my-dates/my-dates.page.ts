import { Component, OnInit } from '@angular/core';
import { API_IMAGES } from 'src/environments/environment';
import { DependensService } from 'src/app/services/dependens.service';
import { AppoinmentService } from 'src/app/services/appoinment.service';
import { RecipesService } from 'src/app/services/recipes.service';
import { LoadingController, PopoverController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-dates',
  templateUrl: './my-dates.page.html',
  styleUrls: ['./my-dates.page.scss'],
})
export class MyDatesPage implements OnInit {
  tasks: any[];
  tasksParents: any[];
  private mostrar;
  public sinpasadas;
  private sinParents;
  citas;
  private citaspasadas;
  private _citaspasadas;
  private $citaspasadas ;
  private recipe;
  private nombre;
  private nombreCortado;

  public dependens;
  public conCitas;
  public _conCitas;
  private SERVERImage = API_IMAGES;

  constructor(
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public appointmentProvider: AppoinmentService,
    public dependentsProvider: DependensService,
    public recipePvr: RecipesService,
    public dependentsPvr: DependensService,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController,
    public router: Router) { }

  ngOnInit() {
               /*   let loading = this.loadingCtrl.create({
                  content:'actualiando datos...'
                })
                loading.present(); */
                /* this.viewCtrl.dismiss(); */

                const nombrePatient = localStorage.getItem('patientName');
                const separador = " ";
                if(nombrePatient){
                  this.nombre = nombrePatient.split(separador ,  1);
                  this.nombreCortado = nombrePatient.slice(0,1);
                }else{
                  console.log("seguir normal es invitado")
                }

              // CON ESTA LLAMADA JALAMOS A LOS FAMILIARES
              this.dependentsPvr.getDependens().subscribe(data =>{
                  this.dependens = data;
              console.log('los dependientes:', this.dependens);
                });

              // CON ESTA LLAMADA LAS CITAS DEL USUARIO PRINCIPAL
          this.appointmentProvider.getAppointmentsPeruser().subscribe(data =>{
            this.citas = 'miscitas';
            this.tasks = data;
            console.log('los tasks:', this.tasks);
            this.mostrar = this.tasks.length;
            // console.log('mis citas:',this.tasks);
            // console.log('tasks:', this.tasks);
          },
          err =>{
            console.error('algo fallo')
          });
          

          // CON ESTA LLAMADA TENEMOS LAS CITAS PASADAS DE LOS DEPENDIENTES
          this.dependentsProvider.getOldDependetsDay().subscribe((data:any)=>{
              this.citaspasadas = data;
              this.sinpasadas = this.citaspasadas.length;
              console.log('citas pasadas:', this.citaspasadas);
          });

            // AQUI LLAMAMOS A LAS CITAS PENDIENTES DE LOS FAMILIARES- AQUI VIENEN TODOS LOS FAMILIARES TENGAN CITAS PENDIENTES O  NO
          this.dependentsProvider.getdependesDay().subscribe((data:any)=>{
          this.tasksParents = data;
          console.log('las citas de los familiares:', this.tasksParents);
      
           this.conCitas = this.tasksParents.filter(t => t.appointments.length > 0);
          console.log('conCitas', this.conCitas); 
        });
  }


  gotoDetails(task){
    /* this.navCtrl.push(MyDateModalPage, { task:task}); */
    console.log('task datos:', task);
  let datos = JSON.stringify(task);
  this.router.navigate(['my-date', datos]);
  /*   console.log('task de familiar  que van a details:', task);
    let modal = this.modalCtrl.create(MyDateModalPage, {
      task:task
    },
    {showBackdrop:true, enableBackdropDismiss: true}
    );
    modal.present(); */
}

goToDetailsTask(task){
  console.log('task datos:', task);
  let datos = JSON.stringify(task);
  this.router.navigate(['my-date', datos]);
  /* this.navCtrl.push(MyDateModalPage, {task:task}); */
 /*  let modal = this.modalCtrl.create(MyDateModalPage, 
    {task:task},
    {showBackdrop:true, enableBackdropDismiss: true}
  );
  modal.present(); */
}

goToRecipe(citaspa){
  console.log('citaspa', citaspa);
  let id = citaspa.encuentro;
  console.log('id:', id);
  this.recipePvr.getRecipes(id).subscribe((data:any)=>{
      this.recipe = data;
      const datos = JSON.stringify(this.recipe);
      console.log('this.recipe:', this.recipe);
      this.router.navigate(['recipe', datos])
      /* this.navCtrl.push (RecipePage, {recipe: this.recipe}) */
  });
}

getDatesUser(){
    // traer nuevamente las citas de el usuario pincipal y renderizarlas
    this.dependentsProvider.getOldDependetsDay().subscribe((data:any)=>{
      this._citaspasadas = data;
      this.citaspasadas = this._citaspasadas;
      this.sinpasadas = this.citaspasadas.length;
      console.log('citas pasadas:', this.citaspasadas);
  });
}

getDatesDepends(dep){
  const id = dep.patientId;
  this.dependentsProvider.getDependentDay(id).subscribe(data =>{
    this.$citaspasadas = data;
    console.log('citas de dependientes jalada:', this.$citaspasadas);
    this.citaspasadas = this.$citaspasadas[0].encuentros;
  })
  // console.log('conseguir los datos del los dependientes', this.citaspasadas);
}

openVideo(){
  this.router.navigate(['page-video']);
  /* this.navCtrl.push(PagesVideoPage); */
}

}
