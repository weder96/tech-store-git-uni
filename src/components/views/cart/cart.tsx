import { observer } from "mobx-react"
import '../../../styles/css/cart.css';
import CartStore from "../../../store/cart/CartStore";
import { useContext, useState } from "react";
import { imgUrl } from "../../../utils/utils";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { Dialog } from "primereact/dialog";
import toastStore from "../../../store/toast/ToastStore";
 
function Cart() {
  const cartStore = useContext(CartStore);
  const [visible, setVisible] : any = useState(false);
  const [selectProduct, setSelectProduct] : any = useState(undefined);

  const onVisibleCheck =(product: any) => {
    setSelectProduct(product)
    setVisible(true)
  }

  const yesRemoveItem =() => {
    cartStore.removeItemOrder(selectProduct);
    const successMessage = "item Removido com Sucesso " + selectProduct.name;
    toastStore.exibirMensagensSucesso([successMessage])
    setVisible(false)
  }

  const footerContent = (
        <div>
            <Button label="Não" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Sim" icon="pi pi-check" onClick={() => yesRemoveItem()} autoFocus />
        </div>
  );

   
    return (
    <>
      <div className="card flex justify-content-center">      
      <Dialog header="Confirmação Remoção Item !" 
              visible={visible} 
              style={{ width: '50vw' }} 
              onHide={() => {if (!visible) return; setVisible(false); }} 
              footer={footerContent}
              className="removeDialog">
          <div className="m-0">
            <p>Tem Certeza da Remoção do Item do Seu Carrinho</p>
            <p>{selectProduct?.name}</p>              
          </div>
      </Dialog>
      </div>

        <div className="carrinho">        
        {cartStore.getOrders().length > 0 &&
        <>
        {cartStore.getOrders().map((product: any) => 
        <div className="produto" key={product.id}>
          <img src={imgUrl(product.imageUrl[0])} alt={product.name} />
          <div className="info">
            <div className="titulo">{product.name}</div>
            <div className="preco">R$ {product.basePrice} <span className="preco-original">R$ 719,90</span></div>
            <div className="controle">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          <div className="lixeira" onClick={() => onVisibleCheck(product)}><FontAwesomeIcon icon={faTrash}/></div>
        </div>          
        )}

        <div className="resumo">
          <div className="resumo-item">
            <span>Subtotal</span>
            <span> R$ {cartStore.getSubTotalOrders()}</span>
          </div>
          <div className="resumo-item">
            <span>Entrega</span>
            <span>GRÁTIS</span>
          </div>
          <div className="resumo-item">
            <span>Descontos</span>
            <span>– R$ {cartStore.getDiscountOrders()}</span>
          </div>
      
          <div className="total">
            <span>Total</span>
            <span>R$ {cartStore.getTotalOrders()}</span>
          </div>          
        </div>  
        <Button className="botao-finalizar">FINALIZAR COMPRA</Button>                  
        </>
       }
      </div>
      </>
    )
}

export default observer(Cart)
