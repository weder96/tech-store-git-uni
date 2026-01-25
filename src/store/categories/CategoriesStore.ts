import { createContext } from 'react';
import { makeAutoObservable } from "mobx";
import apiLocal from '../../services/api/apiLocal';
import { configure } from "mobx"

configure({ enforceActions: 'never' }); // components won't re-render if state is modified without action


class CategoriesStore {
  
  public categories: any = []   

  
  public baseApi: string = "/categories";

  public constructor() {
      makeAutoObservable(this);
  }

  findByCategories = () => {       
    apiLocal.get(this.baseApi)
    .then(res =>  this.setCategory(res.data));
  };
  
  setCategory(categories: any) {
      // Intermediate states will not become visible to observers.
      this.categories = categories;      
  }

  getCategories(){
    return this.categories;
  }

}

export default createContext(new CategoriesStore());