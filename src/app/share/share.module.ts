import {NgModule} from "@angular/core";
import { PasswordValidation } from './passwordValidation';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CustomMaterialModule } from '../core/material.module';


@NgModule({
  declarations:[
    NavBarComponent
  ],
  imports:[
    CustomMaterialModule
  ],
  providers:[
    PasswordValidation
  ],
  exports: [
    NavBarComponent
   ], 
})
export class SareModule { }