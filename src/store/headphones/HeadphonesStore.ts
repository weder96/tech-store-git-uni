import { createContext } from 'react';
import { makeAutoObservable } from "mobx";
import apiLocal from '../../services/api/apiLocal';
import { configure } from "mobx"

configure({ enforceActions: 'never' }); // components won't re-render if state is modified without action


class HeadphonesStore {
  
  public headphones: any = []   

  
  public baseApi: string = "/headphones";

  public constructor() {
      makeAutoObservable(this);
  }

  findByHeadphones = () => {       
    apiLocal.get(this.baseApi)
    .then(res =>  this.setHeadphones(res.data));
  };
  
  setHeadphones(headphones: any) {
      // Intermediate states will not become visible to observers.
      this.headphones = headphones      
  }

  getHeadphones() {    
    return this.headphones;
}

}

export default createContext(new HeadphonesStore());