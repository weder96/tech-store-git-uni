import { observer } from "mobx-react";
import ProductBox from "./productBox";
import { useContext, useEffect } from "react";

import HeadphonesStore from '../../../store/headphones/HeadphonesStore';
import ShowComponents from "../../ShowComponents";


function ProductHeadphones(props: any) {
  console.log(props)

  const headphonesStore = useContext(HeadphonesStore);
    
  if (!headphonesStore) throw Error("Store shouldn't be null");

  useEffect(() => {
    function fetchProducts() {      
      headphonesStore.findByHeadphones();
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, []);

    return (
      <>
      <div className="flex align-items-center w-full">        
        <p className="text-xl font-bold w-10">Fones</p>
      </div> 
      <ShowComponents case={headphonesStore.headphones.length > 0}>
        <div className="grid">
          {headphonesStore.getHeadphones().map((headphone: any) =>                         
            <ProductBox product={headphone} key={headphone.id} />            
          )}
        </div>       
      </ShowComponents>
      </>  
    )
  }

export default observer(ProductHeadphones);