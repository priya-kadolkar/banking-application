import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RegisterCustomerService } from '../Services/register-customer.service';

@Component({
  selector: 'app-list-of-accounts',
  templateUrl: './list-of-accounts.component.html',
  styleUrls: ['./list-of-accounts.component.css']
})
export class ListOfAccountsComponent implements OnInit {
listOfAccountTypes:any;
firstname:any;
lastname:any;

customerId:any;

  
  constructor(private route:ActivatedRoute,private typeOfAccount:RegisterCustomerService,private router:Router) {
    this.customerId=this.route.snapshot.params["customerId"];//access the parameters
    
    // console.log(this.route.snapshot)
   }

  ngOnInit(): void {
    this.getTypeOfAccounts();
  
  }

  callAcccountDetails(accountType:any){
      this.router.navigate(["/account-details",this.customerId,accountType])
    }


  getTypeOfAccounts(){
    this.typeOfAccount.getAccounts(this.customerId)
    .subscribe((accountType:any)=>{
      console.log(accountType)
      this.listOfAccountTypes=accountType.response.accountType//last accountType is the field name passed in array of object from backend
      this.firstname=accountType.response["firstName"]
      this.lastname=accountType.response["lastName"]
    })
  }
}
