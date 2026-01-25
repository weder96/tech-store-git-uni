import { Link } from "react-router-dom";

export function Footer() {  
  return (
    <div className="grid mt-8 footer-div">
        <div className="col">
           <Link to="/homeTech" className="my-link">          
            <div className="text-center font-bold">
                <p>© 2025 Copyright <span className="tech-link">Tech Uni </span> Store </p>
            </div>
            </Link>
        </div>            
    </div>
  )
}
