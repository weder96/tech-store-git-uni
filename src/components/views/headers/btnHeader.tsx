import { useContext, useEffect } from "react";

import CategoriesStore from '../../../store/categories/CategoriesStore';
import ShowComponents from "../../ShowComponents";
import { observer } from "mobx-react";
import { BtnHeaderView } from "./btnHeaderView";

function BtnHeader() {

   const categoriesStore = useContext(CategoriesStore);
      
    if (!categoriesStore) throw Error("Store shouldn't be null");
  
    useEffect(() => {
      function fetchCategories() { 
        if(categoriesStore.categories.length === 0)       
           categoriesStore.findByCategories();
      }
      fetchCategories();
      // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, []);

    return (
        <div className="grid">
          <ShowComponents case={categoriesStore.categories.length > 0}>
            {categoriesStore.getCategories().map((category: any) =>                
              <BtnHeaderView category={category} key={category.id}/>
            )}       
            </ShowComponents>
      </div>
    )
  }
  
  export default observer(BtnHeader);