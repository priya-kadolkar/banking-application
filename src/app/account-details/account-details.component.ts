import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterCustomerService } from '../Services/register-customer.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  customerId:any;
  account_type:any;

  accountDetails:any;

  constructor(private route:ActivatedRoute,private accountDetailsService:RegisterCustomerService,private router:Router) {
    this.customerId=this.route.snapshot.params["customerId"];
    this.account_type=this.route.snapshot.params["accountType"];
   }

  ngOnInit(): void {
     this.fetchAccountDetails();
  }


  fetchAccountDetails(){
    this.accountDetailsService.getAccountDetails(this.customerId,this.account_type)
    .subscribe((accountDetails:any)=>{
       console.log(accountDetails)
       this.accountDetails=accountDetails["response"];
    })
  }

  callSendMoney(){
    this.router.navigate(["send-money"])
  }
}
