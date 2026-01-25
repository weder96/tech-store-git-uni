import security_o890 from '../../assets/imgError/security_o890.svg';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function Error403(props: any) {   
    console.log('props :', props) 
    const navigate = useNavigate();

    const goPageInitial = (e: any) => {
        e.preventDefault();
        navigate("/")
    }

    return (
        <>
            <div id="page-base">   
                <div id="page-base-404">         
                    <img src={security_o890} alt="" width="40%"/>
                    <div className="text-404">
                        <p>We are Sorry...</p>
                    </div>
                    <p>
                         The page you're trying to access has restricted access
                         Please refer to your system administrator
                    </p>
                    <div className="btn-404">
                        <Button label="Go Back" icon="pi pi-arrow-left" onClick={(e) => goPageInitial(e)} />
                    </div>
                </div>    
            </div>
        </>
    )
}

export default Error403