import Frete from "../../../assets/banners/banner-frete.png"


function BannerMiddle() {
  return (
    <div className="grid">
        <div className="col">
            <div className="text-center border-round-sm bg-primary font-bold">
                <img src={Frete} width='100%' height='300px'/>
            </div>
        </div>            
    </div>
  )
}

export default BannerMiddle;