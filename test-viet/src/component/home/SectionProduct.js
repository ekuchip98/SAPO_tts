import ProductItem from "./ProductItem";
import "../../css/style.css"
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import NavItem from "./NavItem";

import mid_banner from '../../BigFood/Slider + banner/mid-banner.jpg' 
import banner1 from '../../BigFood/Slider + banner/banner-1.jpg'
import banner2 from '../../BigFood/Slider + banner/banner-2.jpg'
import CategoryList from "./category/CategoryList";

const SectionProduct = () => {
    return (
        <section className="awe-section-2">
            <section className="main-product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 ">
                            <div className="row">
                                <div className="col-lg-12">
                                    <CategoryList/>
                                    <div className="aside-mini-list-product">
                                        <div className="aside-article">
                                            <h2 className="h2">
                                                <a href="">Sản phẩm bán chạy</a>
                                            </h2>
                                        </div>
                                        <div className="aside-content">
                                            <NavItem/>
                                            <NavItem/>
                                            <NavItem/>
                                            <NavItem/>
                                            <NavItem/>
                                        </div>
                                    </div>
                                    <div className="aside-mini-list-product">
                                        <div className="aside-article">
                                            <h2 className="h2">
                                                <a href="">Sản phẩm khuyến mãi</a>
                                            </h2>
                                        </div>
                                        <div className="aside-content">
                                           <NavItem/>
                                           <NavItem/>
                                           <NavItem/>
                                           <NavItem/>
                                           <NavItem/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="best-sale">
                                <div className="title-module-main">
                                    <h2 className="h2">
                                        <a href="#" title="Sản phẩm nổi bật">Sản phẩm nổi bật</a>
                                    </h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="owl-section-2 owl-carousel owl-theme carousel">
                                            <div className="item">
                                                <ProductItem/>
                                                <ProductItem/>
                                            </div>

                                            <div className="item">
                                                <ProductItem/>
                                                <ProductItem/>
                                            </div>

                                            <div className="item">
                                                <ProductItem/>
                                                <ProductItem/>
                                            </div>

                                            <div className="item">
                                                <ProductItem/>
                                                <ProductItem/>
                                            </div>
                                           
                                        
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="best-sale-banner img-effect">
                                            <a href="" className="banner-3">
                                            <img src={mid_banner}/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="title-module-main">
                                            <h2 className="h2">
                                                <a href="#" title="Sản phẩm nổi bật">Sản phẩm mới nhất</a>
                                            </h2>
                                        </div>
                                        <div className="owl-section-2 owl-carousel owl-theme carousel">
                                            <div className="item">
                                                <ProductItem/>
                                            </div>
                                            <div className="item">
                                                <ProductItem/>
                                            </div>
                                            <div className="item">
                                                <ProductItem/>
                                            </div>
                                            <div className="item">
                                               <ProductItem/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="product_index_banner img-effect">
                                            <a href="">
                                                <img className="loaded center-base" src={banner1}
                                                    alt='banner-1' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="product_index_banner img-effect">
                                            <a href="">
                                                <img className="loaded center-base" src={banner2}
                                                    alt='banner-2' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="title-module-main">
                                            <h2 className="h2">
                                                <a href="#" title="Sản phẩm nổi bật">Mua nhiều trong tuần </a>
                                            </h2>
                                        </div>
                                        <div className="owl-section-2 owl-carousel owl-theme carousel">
                                            <div className="item">
                                                <ProductItem/>
                                            </div>
                                            <div className="item">
                                               <ProductItem/>
                                            </div>
                                            <div className="item">
                                                <ProductItem/>
                                            </div>
                                            <div className="item">
                                                <ProductItem/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section >
    </section >
     );
}

export default SectionProduct;