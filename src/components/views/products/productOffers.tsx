import { observer } from "mobx-react";
import ProductBox  from "./productBox";
import { useContext, useEffect } from "react";

import MousesStore from '../../../store/mouses/MousesStore';
import ShowComponents from "../../ShowComponents";


function ProductOffers(props: any) {
  console.log(props)

  const mousesStore = useContext(MousesStore);
    
  if (!mousesStore) throw Error("Store shouldn't be null");

  useEffect(() => {
    function fetchProducts() {      
      mousesStore.findByMouses();
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, []);

    return (
      <>
      <div className="flex align-items-center w-full">        
        <p className="text-xl font-bold w-10">Promoções</p>
      </div> 
      <ShowComponents case={mousesStore.mouses.length > 0}>
        <div className="grid">
          {mousesStore.getMouses().map((mouse: any) =>                         
            <ProductBox product={mouse} key={mouse.id} />            
          )}
        </div>       
      </ShowComponents>
      </>  
    )
  }

export default observer(ProductOffers);