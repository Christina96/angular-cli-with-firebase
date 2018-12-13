import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/service/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private auth: AuthService, private router: Router,
    private formGroup: FormBuilder) { 
    this.createForm();
  }
  
  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.formGroup.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  login(value){
    this.auth.login(value.email,value.password)
    .then(res => {
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

}
