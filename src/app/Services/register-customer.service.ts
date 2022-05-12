import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'

})

export class RegisterCustomerService{
    baseUrl="http://localhost:8080/";
constructor(private http:HttpClient){
}

//calling register-customer api(endpoint)
register(registerBody:any) {
    const url=`${this.baseUrl}register-customer`
return this.http.post(url,registerBody);
}

//calling customer-login api(endpoint)
getLogin(login:any){
    const url=`${this.baseUrl}customer-login`
return this.http.post(url,login);
}

//calling fetch-list-of-account api(endpoint)
getAccounts(customerId:any){
    const url=`${this.baseUrl}fetch-list-of-account/${customerId}`
    return this.http.get(url)
}

//calling fetch-account-details api(endpoint)
getAccountDetails(customerId:any,accountType:any){
    const url=`${this.baseUrl}fetch-account-details/${customerId}/${accountType}`
    return this.http.get(url)
}


//calling send-money endpoint
sendMoneyFromAccount(sendMoneyBody:any){
    const url=`${this.baseUrl}send-money`
    return this.http.post(url,sendMoneyBody);
}
}