import { observer } from "mobx-react";
import ProductBox from "./productBox";
import { useContext, useEffect } from "react";

import KeyboardsStore from '../../../store/keyboards/KeyboardsStore';
import ShowComponents from "../../ShowComponents";


function ProductTechInfo(props: any) {
  console.log(props)

  const keyboardsStore = useContext(KeyboardsStore);
    
  if (!keyboardsStore) throw Error("Store shouldn't be null");

  useEffect(() => {
    function fetchProducts() {      
      keyboardsStore.findByKeyboards();
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, []);

    return (
      <>
      <div className="flex align-items-center  w-full">        
        <p className="text-xl font-bold w-10">Teclados</p>
      </div> 
      <ShowComponents case={keyboardsStore.keyboards.length > 0}>
        <div className="grid">
          {keyboardsStore.getKeyboards().map((keyboard: any) =>                         
            <ProductBox product={keyboard} key={keyboard.id} />            
          )}
        </div>       
      </ShowComponents>
      </>  
    )
  }

export default observer(ProductTechInfo);