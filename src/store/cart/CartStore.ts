import { createContext } from 'react';
import { makeAutoObservable } from "mobx";
import { configure } from "mobx"

configure({ enforceActions: 'never' }); // components won't re-render if state is modified without action


class CartStore {
  
  public orders: any = []  
  public subTotal: any = 0;
  public discount: any = 0;
  public total: any = 0;

  public constructor() {
      makeAutoObservable(this);
  }

  addItemOrder = (item: any) => {       
    this.orders.push(item);  
    console.log('this.orders ', this.getOrders())  
  };

  removeItemOrder = (product: any) => {   
    this.orders = this.orders.filter((item:any) => item.id !== product.id);              
  }

  checkExistItemOrder = (product: any) => {       
    return this.orders.filter((order: any) => order.id === product.id).length > 0
  }
  
  getOrders() {      
      return this.orders;
  }

  getSubTotalOrders() { 
    this.subTotal = this.orders.reduce((acc:any, curr:any) => acc + curr.basePrice, 0);
    return this.subTotal.toFixed(2);
  }

  getDiscountOrders() { 
    
    const productsWithDiscount = this.orders.map((product:any) => {
            return { ...product, discount: (product.basePrice * (product.discountPercentage/100))};
    });
    this.discount = productsWithDiscount.reduce((acc:any, curr:any) => acc + curr.discount, 0);
    return this.discount.toFixed(2);
  }

  getTotalOrders() { 
    this.total = this.subTotal - this.discount;
    return this.total.toFixed(2);
 }


}

export default createContext(new CartStore());