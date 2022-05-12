import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCustomerService } from '../Services/register-customer.service';
import { SignUpPasswordValidation } from './SignUpPasswordValidation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm:FormGroup;

  constructor(private fb:FormBuilder,private registerService:RegisterCustomerService,private router:Router) {
    this.registrationForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      mobileNumber:['',Validators.required],
      emailId:['',Validators.required],
      dateOfBirth:['',Validators.required],
      address:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    },
    {validator:SignUpPasswordValidation}
    );
   }

  ngOnInit(): void {
  }

  onRegister(){
    this.registerService.register(this.registrationForm.value)
    .subscribe((res)=>{
      console.log(res);
      alert("Registered successfully");
      this.registrationForm.reset();
      this.router.navigate(['/login'])
    },err=>{
      alert("Invalid username or password");
    }
    )
  }

}
