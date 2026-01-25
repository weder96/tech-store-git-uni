import { Column } from 'primereact/column';
import { observer } from "mobx-react";

import { useEffect, useState } from 'react';
import { DataTable, DataTableExpandedRows, DataTableRowEvent, DataTableValueArray } from 'primereact/datatable';
import { Tag } from 'primereact/tag';
import toastStore from '../../../store/toast/ToastStore';

interface Orders {
  id: number;
  numberOrder: string;
  date: string;
  amount: number,
  paymentType: number,
  customerId: string;
  status: string;
  products?: Products[]
}

interface Products {
    productId :string;
    name: string,              
    quantity: number,
    unitPrice: number,
    categoryId: string,
    rating: number,
    inventoryStatus: string
}

const MyOrdersView = (props: any) => {
  console.log('MyOrdersView :', props)  

  const [orders, setOrders] = useState<Orders[]>([]);
    const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray | undefined>(undefined);    

    useEffect(() => {
      setOrders(props.orders);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRowExpand = (event: DataTableRowEvent) => {   
        console.log('event', event)   
        const successMessage = "item Expandido com Sucesso, numberOrder:  " + event.data.numberOrder;
        toastStore.exibirMensagensSucesso([successMessage])
    };

    const onRowCollapse = (event: DataTableRowEvent) => {        
        const warningMessage = "item Collapse com Sucesso , numberOrder: " + event.data.numberOrder;
        toastStore.exibirMensagensWarn([warningMessage])
    };


    const statusBodyTemplate = (rowData: Orders) => {
        return <Tag value={rowData.status} severity={getProductSeverity(rowData)}></Tag>;
    };

 

    const getProductSeverity = (product: Orders) => {
        switch (product.status) {
            case 'PAID':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

 

    const allowExpansion = (rowData: Products) => {
        return rowData !== undefined;
    };

    const rowExpansionTemplate = (data: Orders) => {
        return (
            <div className="p-3">                
               <p>{data.customerId}</p>
            </div>
        );
    };

  return (    
    <div className="col">            
        <DataTable value={orders} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} rowExpansionTemplate={rowExpansionTemplate}
                dataKey="id" tableStyle={{ width: '100%' }}
                className='datatable-demo'>
            <Column field="numberOrder" header="numberOrder" />                
            <Column field="status" header="Status" body={statusBodyTemplate} />
            <Column field="date" header="Data" />
            <Column field="paymentType" header="Pagamento" />                              
            <Column expander={allowExpansion}  header="Detalhes do Pedido" style={{ width: '15rem' }} />  
        </DataTable>
    </div>
  )
}

export default observer(MyOrdersView)