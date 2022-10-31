import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  public name: string ="";
  public price: number=0;
  public quantity: number=0;


  public carts:any=[
    {name:'box',price:'20',quantity: '2'},
    {name:'pen',price:'20',quantity: '2'},
    {name:'pencil',price:'20',quantity: '2'},

 
  ]

 

  constructor() { }

  ngOnInit(): void {
  }
   any(){
    let cart = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
    }
    this.carts.push(cart)
    this.name ="";
    this.price =0;
    this.quantity=0;

    alert("Registered Successfully!!!");
    

}
delete(i:number){
  this.carts.splice(i,1);

}
}