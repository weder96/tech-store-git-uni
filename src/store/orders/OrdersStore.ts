import { createContext } from 'react';
import { makeAutoObservable } from "mobx";
import apiLocal from '../../services/api/apiLocal';
import { configure } from "mobx"

configure({ enforceActions: 'never' }); // components won't re-render if state is modified without action


class OrdersStore {
  
  public orders: any = []   

  
  public baseApi: string = "/myOrders";

  public constructor() {
      makeAutoObservable(this);
  }

  findByMyOrdes = () => {       
    apiLocal.get(this.baseApi)
    .then(res =>  this.setOrders(res.data));
  };
  
  setOrders(orders: any) {
      // Intermediate states will not become visible to observers.
      this.orders = orders;      
  }

  getOrders(){
    return this.orders;
  }

}

export default createContext(new OrdersStore());