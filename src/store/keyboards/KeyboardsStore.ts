import { createContext } from 'react';
import { makeAutoObservable } from "mobx";
import apiLocal from '../../services/api/apiLocal';
import { configure } from "mobx"

configure({ enforceActions: 'never' }); // components won't re-render if state is modified without action


class KeyboardsStore {
  
  public keyboards: any = []   

  
  public baseApi: string = "/keyboards";

  public constructor() {
      makeAutoObservable(this);
  }

  findByKeyboards = () => {       
    apiLocal.get(this.baseApi)
    .then(res =>  this.setKeyboards(res.data));
  };
  
  setKeyboards(keyboards: any) {
      // Intermediate states will not become visible to observers.
      this.keyboards = keyboards      
  }

  getKeyboards() {    
    return this.keyboards;
}

}

export default createContext(new KeyboardsStore());