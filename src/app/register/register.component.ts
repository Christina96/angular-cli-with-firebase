import { Component } from '@angular/core';
import { AuthService } from '../core/service/auth/auth.service'
import { Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PasswordValidation } from '../share/passwordValidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
   }

   createForm() {
     this.registerForm = this.fb.group({
       email: ['', Validators.required ],
       password: ['',Validators.required],
       confirm: ['',Validators.required]
     },{
      validator:  PasswordValidation.MatchPassword
     });
   }

   register(value){
     const self=this;
     this.authService.doRegister(value)
     .then(res => {

       console.log(res);
       this.errorMessage = "";
       this.successMessage = "Your account has been created";
       self.router.navigate(['/login']);

     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
   }


}
