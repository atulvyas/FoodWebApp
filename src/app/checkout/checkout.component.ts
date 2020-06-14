import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  total_price=0;
  items_list;
  constructor() { }

  ngOnInit() {
    this.items_list = history.state.data;
    this.items_list.forEach(element => {
      element.quantity= 1;
    });
    this.totalprice();
    console.log(this.items_list);
  }
 
  deleteFromCart(id){
    this.items_list.forEach((element,index) => {
      if(element.id == id){
        console.log(id);
        this.items_list.splice(index,1);
        this.totalprice();
      }
    });
  }

  totalprice(){
    this.total_price = 0;
    this.items_list.forEach(element => {
      this.total_price = this.total_price + element.webprice*element.quantity;
      console.log(element.webprice,element.quantity,element.webprice*element.quantity)
    });
  }

  addquantity(id){
    this.items_list.forEach(element => {
      if(element.id == id){
         element.quantity++;
         this.totalprice();
      }
    });
  }
  removequantity(id){
    this.items_list.forEach(element => {
      if(element.id == id){
         element.quantity--;
         this.totalprice();
      }
    });
  }
}
