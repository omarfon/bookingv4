import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateparentPage } from './createparent.page';

describe('CreateparentPage', () => {
  let component: CreateparentPage;
  let fixture: ComponentFixture<CreateparentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateparentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateparentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
