import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import "../../css/style.css"
import OwlCarousel from 'react-owl-carousel';  
import brand_img from "../../BigFood/brand_img.png"

const SectionBrand = () => {
    let listBrand = [{ "name": "BigFood", "src": "../BigFood/brand_img.png" },{ "name": "BigFood", "src": "../BigFood/brand_img.png" },
                     { "name": "BigFood", "src": "../BigFood/brand_img.png" },{ "name": "BigFood", "src": "../BigFood/brand_img.png" },
                     { "name": "BigFood", "src": "../BigFood/brand_img.png" },{ "name": "BigFood", "src": "../BigFood/brand_img.png" },
                     { "name": "BigFood7", "src": "../BigFood/brand_img.png" }]
    let brands = listBrand.map(brand => (
        <div className="item">
            <img className="brand-img" src={brand_img} alt={brand.name} data-was-processed="true" />
        </div>
    ))
    return (
        <section className="awe-section-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2">Thương hiệu nổi bật</h2>
                    </div>
                    <div className="col-lg-12 list-brand">
                        <div className="owl-carousel  owl-theme owl-section-3">
                            {brands}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionBrand;