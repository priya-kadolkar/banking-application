import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCustomerService } from '../Services/register-customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb:FormBuilder,private loginService:RegisterCustomerService,private router:Router) { 
    this.loginForm=this.fb.group({
      emailId:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){
    this.loginService.getLogin(this.loginForm.value)
    .subscribe((res:any)=>{
      console.log(res);
      alert("Logged in successfully!!")
      this.router.navigate(["/list-of-accounts",res["response"].customerId])
    },err=>{
      alert("Invalid username or password");
    })
  }
}
