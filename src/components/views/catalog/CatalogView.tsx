import { Link } from "react-router-dom";
import { imgUrl } from "../../../utils/utils";

export function CatalogView(props: any) {
  console.log('CatalogView :', props)
  const catalog = props.catalog;
  return (
    <div className="col-6" key={catalog.id}>
      <Link to={'/product/'+catalog.name} className="my-link">      
      <div className="container-cat">
        <img src={imgUrl(catalog.imageUrl)} />
        <div className="container-cat-txt">
          <p className="footer-text">{catalog.name}</p>
        </div>
      </div>
      </Link>
    </div>
  )
}