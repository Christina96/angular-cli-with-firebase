import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  login:any;
  constructor(private auth:AuthService, private route: Router) { 
    this.login=false;
  }
  

  ngOnInit() {
    const self=this;
    self.login=false;
    this.auth.checkLogin().then(function(email){
      self.login=true;
    })
    .catch(function(err){
      console.log(err);
      if (window.location.href.indexOf('/login')<0 && window.location.href.indexOf('/register')<0 ){
        self.route.navigate(['/login']);
      }
    });
  }

  logout(){
    const self=this;
    this.login=false;
    this.auth.doLogout().then(function(res){
      self.route.navigate(['/login']);
    })
    .catch(function(err){
      self.route.navigate(['/login']);
    });
  }

  

}
