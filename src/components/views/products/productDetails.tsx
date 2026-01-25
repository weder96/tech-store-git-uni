// Dynamically import all images in the _fairImages folder
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProductsStore from "../../../store/products/ProductsStore";
import CartStore from "../../../store/cart/CartStore";
import toastStore from "../../../store/toast/ToastStore";

import { observer } from "mobx-react";
import { imgUrl } from "../../../utils/utils";
import ShowComponents from "../../ShowComponents";
import Rating from "../../Rating/Rating";
import ProductBox from "./productBox";
import Header from "../headers/header";

function ProductDetails(props: any) {
  console.log(props)
  const { code, id } = useParams();

  const [indxImg, setIndxImg]: any = useState(0)

  const productsStore = useContext(ProductsStore);
  const cartStore = useContext(CartStore);


  if (!productsStore) throw Error("Store shouldn't be null");

  console.log('code :', code)
  console.log('id :', id)

  const handleToImgProductClick = (indx: any) => {
    setIndxImg(indx);
  }


  const handleCheckObject = (object: any) => {
    console.log('productsStore.getProduct() :', object);
    console.log('keys', Object.keys(object).length > 0);
    return Object.keys(object).length > 0
  }

  const addItemCart = (product: any) => {
    if(cartStore.getOrders().length === 0){
      addItemOrderDetails(product);
    } else {
      if(cartStore.checkExistItemOrder(product)){
        const errorMessage = "item Já Existe no Carinho " + product.name;
        toastStore.exibirMensagensErro([errorMessage])
      } else {
        addItemOrderDetails(product);
      }
    }
  }

  const addItemOrderDetails = (product: any) => {
    cartStore.addItemOrder(product);
    const successMessage = "item Criado com Sucesso " + product.name;
    toastStore.exibirMensagensSucesso([successMessage])
  }


  useEffect(() => {
    function fetchProduct() {
      console.log('code :', code)
      if (code !== undefined) {
        productsStore.findByProductsById(code, id);
        productsStore.findByProducts(code);
      }

    }
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, [id]);


  return (
    <>
      <Header />
      <div className="homeApp">
        <ShowComponents case={handleCheckObject(productsStore.getProduct())}>
          <div className="grid">
            <div className="col-6 col-img-prod bg-primary border-round-xl mt-4 mr-4">
              {productsStore.getProduct().imageUrl &&
                <>
                  <div className="box-prod-lg">
                    <div className="box-prod-lg-img-01">
                      <img src={imgUrl(productsStore.getProduct().imageUrl[0])} width='70px' onClick={() => handleToImgProductClick(0)} className="small-image" />
                      <img src={imgUrl(productsStore.getProduct().imageUrl[1])} width='70px' onClick={() => handleToImgProductClick(1)} className="small-image" />
                      <img src={imgUrl(productsStore.getProduct().imageUrl[2])} width='70px' onClick={() => handleToImgProductClick(2)} className="small-image" />
                      <img src={imgUrl(productsStore.getProduct().imageUrl[3])} width='70px' onClick={() => handleToImgProductClick(3)} className="small-image" />
                    </div>
                    <div className="box-prod-big">
                      <img src={imgUrl(productsStore.getProduct().imageUrl[indxImg])} width='500px' className="large-image" />
                    </div>
                  </div>
                </>
              }
            </div>
            <div className="col-5 col-details-prod bg-primary border-round-xl mt-4">
              <div className="card">
                <p className="info-topo">Novo | 100 vendidos</p>
                <h1 className="titulo">{productsStore.getProduct().name}</h1>
                <p className="estoque">Disponível em estoque</p>
                <div className="avaliacoes">
                  <span className="estrelas"><Rating totalStars={productsStore.getProduct().rating} quantity={productsStore.getProduct().numberOfReviews} /></span>
                </div>

                <div className="preco">
                  <span className="atual">R$ {productsStore.getProduct().basePrice}</span>
                  <span className="desconto">↓{productsStore.getProduct().discountPercentage}%</span>
                  <span className="de">De: R$ 300,00</span>
                </div>

                <div className="paginacao">
                  <button>&lt;</button>
                  <span>1</span>
                  <button>&gt;</button>
                </div>

                <h2 className="descricao-titulo">Descrição</h2>
                <p className="descricao-texto">
                  {productsStore.getProduct().description}
                </p>

                <button className="btn-carrinho" onClick={()=> addItemCart(productsStore.getProduct())} >ADICIONAR AO CARRINHO</button>

                <div className="entrega">
                  <span className="icone">🚚</span>
                  <div>
                    <strong>Entrega via FSPackt</strong><br />
                    <span className="entrega-info">Envio para todo brasil</span> <span className="frete">Frete grátis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ShowComponents>
        <ShowComponents case={productsStore.products.length > 0}>
          <>
            <div className="flex align-items-center w-full mt-7">
              <p className="text-xl font-bold w-10">{"Produtos recomendados".toUpperCase()}</p>
            </div>
            <div className="grid">
              {productsStore.getProducts().map((product: any) =>
                <ProductBox product={product} key={product.id} />
              )}
            </div>
          </>
        </ShowComponents>
      </div>
    </>
  )
}


export default observer(ProductDetails)
