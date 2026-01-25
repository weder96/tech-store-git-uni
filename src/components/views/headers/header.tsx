import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CartStore from "../../../store/cart/CartStore";
import { observer } from "mobx-react";
import logo from '../../../assets/img/logo/logo2.png'
import Cart from "../cart/cart";


function Header() {

    const cartStore = useContext(CartStore);
    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);
    const [position, setPosition]: any = useState('center');
    
    const show = (position: any) => {
        setPosition(position);
        setVisible(true);
    };

    const runLogin = () => {        
        navigate('/auth/login');
    };


    return (
        <>
            <>
            <div className="div-dialog">
                <Dialog header="🛒 CARRINHO"  visible={visible} position={position} style={{ width: '400px', height: '100vh'}}
                    onHide={() => { if (!visible) return; setVisible(false); }}                    
                    draggable={false}
                    resizable={false}   
                    className="dialog-app"                 
                    >
                    <div className="m-0">
                        <Cart />
                    </div>
                </Dialog>
            </div>    
            </>
            <div className="grid border-bottom-1">
                <div className="col-4">
                    <div className="text-left p-2 font-bold">
                        <div className="grid">
                            <div className="col">
                                <div className="text-left p-3 font-bold">
                                    <NavLink to="/homeTech" className="my-link"> 
                                        <span className="tech-link"><img src={logo} alt="logo" height='30px'></img> Tech Uni</span> Store 
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="text-center p-1 font-bold">
                        <div className="grid">
                            <div className="col">
                                <div className="text-center pt-5 font-bold">
                                    <NavLink to="/homeTech" className="my-link"> Home </NavLink>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center pt-5 font-bold ">
                                    <NavLink to="/catalog" className="my-link"> Catálogo </NavLink>
                                </div>
                            </div>
                            <div className="col">
                                <div className="text-center pt-5 font-bold ">
                                    <NavLink to="/orders" className="my-link"> Meus Pedidos </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="text-right p-1 font-bold gap-3">
                        <Button label="Entrar" 
                                severity="secondary" 
                                outlined icon="pi pi-user" 
                                className="ml-2 pt-2" 
                                onClick={()=> runLogin()}/>
                        <i className="pi pi-cart-minus pl-4 pr-2 pt-3 m-2 p-overlay-badge" style={{ fontSize: '2rem' }} onClick={() => show('top-right')}>                            
                            <Badge value={cartStore.orders.length}></Badge>
                        </i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default observer(Header);