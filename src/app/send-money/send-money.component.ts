import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCustomerService } from '../Services/register-customer.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {
  
  sendMoneyForm: FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private sendMoneyService:RegisterCustomerService) { 
    this.sendMoneyForm=this.fb.group({
      transactionAmount:['',Validators.required],
      toName:['',Validators.required],
      fromName:['',Validators.required],
      transactionDate:['',Validators.required],
      accountId:['',Validators.required],
      accountType:['',Validators.required]

    })
  }

  ngOnInit(): void {
  }

  sendMoney(){
    this.sendMoneyService.sendMoneyFromAccount(this.sendMoneyForm.value)
    .subscribe((res)=>{
      console.log(res)
      alert("Transaction done successfully!!")
      this.sendMoneyForm.reset();
    },err=>{
      alert("Insufficient balance to transfer money");
      this.sendMoneyForm.reset();
    })
  }
}
