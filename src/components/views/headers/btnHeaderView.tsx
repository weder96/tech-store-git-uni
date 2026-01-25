/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse, faDisplay, faHeadphones, faKeyboard, faVolumeHigh, faTablet} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export function BtnHeaderView(props: any) {
    console.log('BtnHeaderView :', props)    
    const category = props.category;
    const [icon, setIcon] :any = useState(faComputerMouse); // Estado para o ícone

      useEffect(() => {
         function getIcon() { 
          if(category.name.toLowerCase() === "mouses") 
            setIcon(faComputerMouse)
          if(category.name.toLowerCase() === "mousepads") 
            setIcon(faTablet)
          if(category.name.toLowerCase() === "keyboards") 
            setIcon(faKeyboard)
          if(category.name.toLowerCase() === "headphones") 
            setIcon(faHeadphones)
          if(category.name.toLowerCase() === "monitors") 
            setIcon(faDisplay)
          if(category.name.toLowerCase() === "speakers") 
            setIcon(faVolumeHigh)
          
         }
         getIcon();
         // eslint-disable-next-line react-hooks/exhaustive-deps    
       }, []); 

    return (
        <div className="col" key={category.id}>
        <div className="text-center p-3 font-bold">
        <Link to={'/product/'+category.name}>              
          <Button label={category.name} outlined className="uniform-button" icon={<FontAwesomeIcon icon={icon} />} />          
        </Link>  
        </div>
      </div>
    )
  }