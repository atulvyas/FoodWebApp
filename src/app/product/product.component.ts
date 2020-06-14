import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  i=1;
  items = [];
  public datasource;
  products = [{
    id:this.i++,
    name: 'Indian Thali',
    img : '../../assets/indianthali.jpg',
    webprice: 160
 },
 {
  id:this.i++,
  name: 'Chole Batoore',
  img : '../../assets/chole batore.jpg',
  webprice: 100
},
{
  id:this.i++,
  name: 'South India Dosa',
  img : '../../assets/dosa.jpg',
  webprice: 40
},
{
  id:this.i++,
  name: 'Spicy Hot Dog',
  img : '../../assets/hotdog.jpg',
  webprice: 80
},
{
  id:this.i++,
  name: 'Butter PavBhaji',
  img : '../../assets/pavbhaji.jpg',
  webprice: 100
},
{
  id:this.i++,
  name: 'Samosa',
  img : '../../assets/samosa.jpg',
  webprice: 20
},
{
  id:this.i++,
  name: 'Sandwich',
  img : '../../assets/sandwich.jpg',
  webprice: 50
},
{
  id:this.i++,
  name: 'Chilli Paneer',
  img : '../../assets/chillipaneer.jpg',
  webprice: 70
},
{
  id:this.i++,
  name: 'Dal Makhani',
  img : '../../assets/food.jpg',
  webprice: 70
},
{
  id:this.i++,
  name: 'Spicy Bhel Puri',
  img : '../../assets/bhelpuri.jpg',
  webprice: 30
}]

  constructor(private router:Router) { }

  ngOnInit() {
    this.datasource = new MatTableDataSource(this.products);
  }
  addToCart(product_id){   
    if(this.items.some(item => item.id===product_id)){
      console.log('Already Added')
    }else{     
     this.products.forEach(value=>{
      if(value.id == product_id)
         this.items.push(value);
    });
    }
  }
  checkout(){
     this.router.navigate(['/checkout'],{state: {data:this.items}})
  }
  filterdata(value){
    if(value!=null)
        this.datasource.filter = value.trim().toLowerCase();
  }
}
