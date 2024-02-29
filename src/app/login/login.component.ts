import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AmdinService } from '../services/amdin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string = ""
  password:string= ""

  constructor(private toaster:ToastrService,private api:AmdinService,private router:Router){
  }

  login(){
    //admin login logic
    if(this.email && this.password){
      // this.toaster.success("proceed to api call")
      this.api.getAdminDetails().subscribe({
        next:(res:any)=>{
          console.log(res);
          const {email,password} = res
          if(email==this.email && password == this.password){
            this.toaster.success("Login Succesfull")
            sessionStorage.setItem("adminDetails",JSON.stringify(res))
            this.email=""
            this.password=""
            //naviagte
            this.router.navigateByUrl("/dashboard")
          }else{
            this.toaster.error("Invalid Email / Password");
          }
        },
        error:(reson:any)=>{
          this.toaster.error(reson.message);
        }
      })
    }else{
      this.toaster.info("Please fill the form completely!!!")
    }
  }
}
