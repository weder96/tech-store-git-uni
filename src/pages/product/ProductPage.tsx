import { Fragment, useContext, useEffect } from "react";

import ProductsStore from '../../store/products/ProductsStore';
import ShowComponents from "../../components/ShowComponents";
import { observer } from "mobx-react";
import ProductBox  from "../../components/views/products/productBox";
import { useParams } from "react-router-dom";
import { BtnBreadcrumbView } from "../../components/views/headers/btnBreadcrumbView";
import Header from "../../components/views/headers/header";

function ProductPage() {

  const { code } = useParams(); 
  
  const productsStore = useContext(ProductsStore);

  if (!productsStore) throw Error("Store shouldn't be null");

  useEffect(() => {        
    function fetchCategories() {
      console.log('code :',code)
      if(code !== undefined)      
        productsStore.findByProducts(code);
    }
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, []);

  return (
    <Fragment>
      <Header />      
      <div className="homeProduct">      
        <BtnBreadcrumbView  label={code?.toLocaleUpperCase()} code={code} /> 
        <ShowComponents case={productsStore.products.length > 0}>
          <div className="grid">
            {productsStore.getProducts().map((product: any) =>
              <ProductBox product={product} key={product.id} />
            )}
          </div>
        </ShowComponents>
      </div>
    </Fragment>
  )
}

export default observer(ProductPage);