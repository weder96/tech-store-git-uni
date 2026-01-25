import Fones from "../../../assets/banners/banner-fones.png"
import Mouses from "../../../assets/banners/banner-mouses.png"


function BannerDiscount() {
  return (
    <div className="grid">
       <div className="col">
            <div className="text-center border-round-sm bg-primary font-bold">
                <img src={Mouses} width='100%' height='300px'/>
            </div>
        </div>    
        <div className="col">
            <div className="text-center border-round-sm bg-primary font-bold">
                <img src={Fones} width='100%' height='300px'/>
            </div>
        </div>                     
    </div>
  )
}

export default BannerDiscount;