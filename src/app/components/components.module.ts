import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ExpandableComponent } from './expandable/expandable.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations:[
        ExpandableComponent,
        MenuComponent
    ],
    exports:[
        ExpandableComponent,
        MenuComponent
    ],
    imports:[
        CommonModule,
        IonicModule
    ]
})

export class ComponentsModule{}