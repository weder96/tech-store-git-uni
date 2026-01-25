import { useContext, useEffect } from "react";

import OrdersStore from '../../store/orders/OrdersStore';
import ShowComponents from "../../components/ShowComponents";
import { observer } from "mobx-react";
import { Button } from "primereact/button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import Header from "../../components/views/headers/header";
import MyOrdersView from "../../components/views/orders/myOrdersView";

function MyOrdersPage() {

    const ordersStore = useContext(OrdersStore);
      
    if (!ordersStore) throw Error("Store shouldn't be null");
  
    useEffect(() => {
      function fetchOrders() { 
        if(ordersStore.orders.length === 0)       
          ordersStore.findByMyOrdes();
      }
      fetchOrders();
      // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, []);

    return (
      <>
        <Header />          
        <div className="homeCatalog">
          <Button label="MEUS PEDIDOS" severity="secondary" outlined  rounded  icon={<FontAwesomeIcon icon={faBasketShopping} />} className="mb-4 btn-top" />                    
          <ShowComponents case={ordersStore.orders.length > 0}>
            <div className="grid">                               
              <MyOrdersView orders={ordersStore.orders} />                                     
            </div>          
          </ShowComponents>
      </div>
      </>
    )
  }
  
  export default observer(MyOrdersPage);