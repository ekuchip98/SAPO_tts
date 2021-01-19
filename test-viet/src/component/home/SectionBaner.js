import "../../css/style.css"

import slider1  from '../../BigFood/Slider + banner/slider-1.jpg'
import slider2  from '../../BigFood/Slider + banner/slider-2.jpg'
import slider3  from '../../BigFood/Slider + banner/slider-3.jpg'
import banner1  from '../../BigFood/Slider + banner/banner-3.jpg'
import banner2  from '../../BigFood/Slider + banner/banner-4.jpg'

const SectionBanner = () => {
    return (
        <section class="awe-section-1">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slider1} class="d-block w-100" alt="slider1" />
                    </div>
                    <div class="carousel-item">
                        <img src={slider2} class="d-block w-100" alt="slider2" />
                    </div>
                    <div class="carousel-item">
                        <img src={slider3} class="d-block w-100" alt="slider3" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="section-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 d-sm-none d-lg-block">
                            <div class="banner_effect">
                                <a href="#" title="Banner 1" class="banner_1">
                                    <img class="img-responsive center-base lazyload loaded"
                                        src={banner1}
                                        data-src="BigFood/Slider + banner/banner-3.jpg" alt="Banner 1"
                                        data-was-processed="true" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="banner_effect">
                                <a href="#" title="Banner 2" class="banner_2">
                                    <img class="img-responsive center-base lazyload loaded"
                                        src={banner2}
                                        data-src="BigFood/Slider + banner/banner-4.jpg" alt="Banner 2"
                                        data-was-processed="true" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionBanner;