
import { observer } from "mobx-react";
import  Banner  from "../../components/views/banners/banner";
import  BtnHeader  from "../../components/views/headers/btnHeader";
import  ProductOffers  from "../../components/views/products/productOffers";
import  BannerMiddle  from "../../components/views/banners/bannerMiddle";
import BannerDiscount from "../../components/views/banners/bannerDiscount";
import ProductTechInfo from "../../components/views/products/productTechInfo";
import ProductHeadphones from "../../components/views/products/productHeadphones";
import Header from "../../components/views/headers/header";



// eslint-disable-next-line react-refresh/only-export-components
const HomeTech = (props: any) => {
  console.log('props :', props)
  
  return (
    <>                   
      <Header />
      <div className="homeApp">           
          <Banner />
          <BtnHeader />
          <ProductOffers />
          <BannerDiscount />
          <ProductTechInfo />
          <BannerMiddle />   
          <ProductHeadphones />       
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default observer(HomeTech)
