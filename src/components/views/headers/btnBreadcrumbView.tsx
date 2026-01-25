/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse, faDisplay, faHeadphones, faKeyboard, faVolumeHigh, faTablet} from '@fortawesome/free-solid-svg-icons'


export function BtnBreadcrumbView(props: any) {
    console.log('BtnHeaderView :', props)    
    const code = props.code;
    const label = props.label;
    const [icon, setIcon] :any = useState(faComputerMouse); // Estado para o ícone

      useEffect(() => {
         function getIcon() { 
          if(code.toLowerCase() === "mouses") 
            setIcon(faComputerMouse)
          if(code.toLowerCase() === "mousepads") 
            setIcon(faTablet)
          if(code.toLowerCase() === "keyboards") 
            setIcon(faKeyboard)
          if(code.toLowerCase() === "headphones") 
            setIcon(faHeadphones)
          if(code.toLowerCase() === "monitors") 
            setIcon(faDisplay)
          if(code.toLowerCase() === "speakers") 
            setIcon(faVolumeHigh)
          
         }
         getIcon();
         // eslint-disable-next-line react-hooks/exhaustive-deps    
       }, []); 

    return (        
        <div className="text-left font-bold mb-6" key={code}>                     
          <Button label={code?.toUpperCase()} outlined rounded className="mt-4 btn-top text-white-alpha-90" icon={<FontAwesomeIcon icon={icon} />} />         
        </div>    
    )
  }