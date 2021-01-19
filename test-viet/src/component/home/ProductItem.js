import "../../css/style.css"
import img from "../../BigFood/Ảnh sản phẩm/4.jpg"

const ProductItem = () => {
    return (
        <div className="product-box">
            <div className="product-thumbnail">
                <a className="img-thumbnail1" href="#">
                    <img className="img-responsive lazyload loaded"
                        src={img} alt="Pizza nhân bò phô mai"
                        data-was-processed="true" />
                    <div className="overlay-img">
                        <button className="bt-buy">Mua hàng</button>
                    </div>
                </a>
            </div>
            <div className="product-info">
                <div className="block-price">
                    <span className="product-price">
                        245.000 Đ
                    </span>
                </div>
                <h3 className="product-name">
                    <a href="#">Bánh nướng Augosuti Alena</a>
                </h3>
                <div className="product-rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                     (5 Đánh giá)
                </div>
            </div>
        </div>
    );
}

export default ProductItem;