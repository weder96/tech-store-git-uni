import team_3epn from '../../assets/imgError/team_3epn.svg';


import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function Error500(props: any) { 
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
                    <img src={team_3epn} alt="" />
                    <div className="text-404">
                    <p>Sorry, It's not you. It's us </p>
                    </div>
                    <p>
                         We're experencing an internal Server Problem
                         Please try again later
                    </p>
                    <div className="btn-404">
                        <Button label="Go Back" icon="pi pi-arrow-left" onClick={(e) => goPageInitial(e)} />
                    </div>
                </div>    
            </div>
        </>
    )
}

export default  Error500