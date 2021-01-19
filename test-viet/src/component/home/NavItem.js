import img from "../../BigFood/Ảnh sản phẩm/1.jpg"

const NavItem = () => {
    return (
        <div className="product-item">
            <div className="product-image">
                <a href="">
                    <img className="img-thumb" src={img} alt="a" />
                </a>
            </div>
            <div className="product-shop">
                <h3 className="product-name">
                    <a href="">Bánh Nướng Augosuti Alena Somia</a>
                </h3>
                <div className="product-price">
                    <span className="special-price">
                        245.000 Đ
                    </span>
                </div>
            </div>
        </div>
    );
}

export default NavItem;