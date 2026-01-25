import { Fragment, useContext, useEffect } from "react";

import CategoriesStore from '../../store/categories/CategoriesStore';
import ShowComponents from "../../components/ShowComponents";
import { observer } from "mobx-react";
import { CatalogView } from "../../components/views/catalog/CatalogView";
import { Button } from "primereact/button";
import Header from "../../components/views/headers/header";

function CatalogPage() {

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
       <Fragment>
        <Header />  
        <div className="homeCatalog">
          <Button label="CATÁLOGO" severity="secondary" outlined  rounded icon='pi pi-th-large' className="mb-4 btn-top"/>            
          <ShowComponents case={categoriesStore.categories.length > 0}>
            <div className="grid">
                {categoriesStore.getCategories().map((catalog: any) =>                 
                    <CatalogView catalog={catalog} key={catalog.id}/>                     
                )}       
            </div>          
          </ShowComponents>
      </div>
      </Fragment>
    )
  }
  
  export default observer(CatalogPage);