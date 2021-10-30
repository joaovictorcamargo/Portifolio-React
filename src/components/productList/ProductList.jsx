import "./productList.css";
import Product from "./product/Product";
import { products } from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">..........</h1>
                <p className="pl-desc">
                    .....................
                </p>
            </div>
            <div className="pl-list">
                {products.map(item => (
                    <Pruduct key={item.id} img={item.img} link={item.link} />
                ))}


            </div>
        </div>
    )
}

export default ProductList;