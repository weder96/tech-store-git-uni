import { createContext } from 'react';
import { makeAutoObservable } from "mobx";
import apiLocal from '../../services/api/apiLocal';
import { configure } from "mobx"

configure({ enforceActions: 'never' }); // components won't re-render if state is modified without action


class ProductsStore {
  
  public products: any = []   
  public product: any = {}

  
  public constructor() {
      makeAutoObservable(this);
  }

  findByProducts = (baseApi: string) => {               
    baseApi = this.getConverterName(baseApi.toLowerCase());
    apiLocal.get(baseApi)
    .then(res =>  this.setProducts(res.data));
  };

  findByProductsById = (baseApi: string, id : any) => {    
    baseApi = this.getConverterName(baseApi.toLowerCase());               
    apiLocal.get(baseApi+'/'+id)
    .then(res =>  this.setProduct(res.data));
  };
  
  
  setProducts(products: any) {
      // Intermediate states will not become visible to observers.
      this.products = products;      
  }

  getProducts(){
    return this.products;
  }

    
  setProduct(product: any) {
    // Intermediate states will not become visible to observers.
    this.product = product;      
  }

getProduct = () => {
  console.log('this.product :', this.product)
  return this.product;
}

  getConverterName(url: string){   
    const ing : string[] = ["mouses", "mousepads", "keyboards", "headphones", "monitors","speakers"];
    const pt : string[] = ["mouses", "mousepads", "keyboards", "headphones", "monitors","speakers"];
    const index = pt.indexOf(url);
    console.log('url :',url)

    if (index !== -1)
      return ing[index]
    return "mouses";
  }

}

export default createContext(new ProductsStore());