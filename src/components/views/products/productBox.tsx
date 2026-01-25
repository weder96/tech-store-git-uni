// Dynamically import all images in the _fairImages folder
import { Link } from "react-router-dom";
import { imgUrl } from "../../../utils/utils";
import Rating from "../../Rating/Rating";
import { observer } from "mobx-react";

function ProductBox( props: any ) {
  console.log('ProductBox: ', props )
  const product = props.product;  
  console.log('product.name :',product.name)
  console.log('prod :', product.imageUrl)

    return (
      <>         
      {(product.name && product.imageUrl) &&   
      <div className="col">
        <div className="text-left font-bold">
        <Link to={'/product/details/'+product.categoryId+"/"+product.id} className="my-link">  
            <div className="box-prod bg-primary">
              {product.discountPercentage > 0 &&
                <div className="box-discount"><i className="pi pi-arrow-down font-bold" style={{ color: 'white' }}> {product.discountPercentage}{'%'}</i></div>
              }
              <img src={imgUrl(product.imageUrl[0])} />
            </div>
            <br/>
            <div className="product-card">
              <div className="product-name"><span className="text-base">{product.name}</span></div>
              <div className="product-price">
                <span className="text-xl font-bold highlight">R$ {product.basePrice.toFixed(2)} 
                  {product.discountPercentage > 0 &&
                    <span className="text-sm pr-2 font-bold strikethrough">R$ {(product.basePrice + (product.basePrice *(product.discountPercentage / 100))).toFixed(2)}</span>
                  }
                  </span>   
                  <br/>                  
              </div>
              <div className="product-rating">
              <Rating totalStars={product.rating} quantity={product.numberOfReviews}></Rating>
              </div>
            </div>  
          </Link>                     
        </div>             
      </div>             
      }    
      </>  
    )
  }
  
  export default observer(ProductBox)