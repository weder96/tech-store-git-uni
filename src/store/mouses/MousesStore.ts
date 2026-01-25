import { createContext } from 'react';
import { makeAutoObservable } from "mobx";
import apiLocal from '../../services/api/apiLocal';
import { configure } from "mobx"

configure({ enforceActions: 'never' }); // components won't re-render if state is modified without action


class MousesStore {
  
  public mouses: any = []   

  
  public baseApi: string = "/mouses";

  public constructor() {
      makeAutoObservable(this);
  }

  findByMouses = () => {       
    apiLocal.get(this.baseApi)
    .then(res =>  this.setMouses(res.data));
  };
  
  setMouses(mouses: any) {
      // Intermediate states will not become visible to observers.
      this.mouses = mouses      
  }

  getMouses() {    
    return this.mouses;
}

}

export default createContext(new MousesStore());