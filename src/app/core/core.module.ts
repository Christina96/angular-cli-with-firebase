import {NgModule} from "@angular/core";
import { CustomMaterialModule } from './material.module';
import { AuthService } from './service/auth/auth.service';
import { UserService } from './service/user/user.service';


@NgModule({
  imports: [
    CustomMaterialModule
  ],
  providers:[
    AuthService,
    UserService
  ],
  exports: [
    CustomMaterialModule
   ],
})
export class CoreModule { }