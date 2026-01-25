import Home01 from "../../../assets/banners/banner-home-01-full.png"


function Banner() {
  return (
    <div className="grid">
        <div className="col">
            <div className="text-center border-round-sm bg-primary font-bold">
                <img src={Home01} width='100%' height='500px'/>
            </div>
        </div>            
    </div>
  )
}

export default Banner;