import '../css/style.css'
import payment from "../BigFood/payment.jpg"
const Footer = () => {
    let list_col = [
        { "title": "Về chúng tôi", "items": ["Giới thiệu chung", "Quy chế hoạt động", "Lịch sử hình thành", "Góp ý, khiếu nại", "Bản đồ chỉ đường", "Chính sách tuyển dụng"] },
        { "title": "Thông tin khách hàng ", "items": ["Tài khoản của tôi", "Chính sách đổi trả", "Thông tin cá nhân", "Lịch sử mua hàng", "Danh sách đơn hàng", "Giao hàng & Thanh toán"] },
        { "title": "Hướng dẫn mua hàng", "items": ["Mua hàng trả góp", "Hướng dẫn mua hàng", "Chính sách đổi trả", "Thông tin khiếu nại", "Mua hàng online", "Giao dịch chuyển khoản"] },
        { "title": "Dịch vụ ưu đãi", "items": ["Bảo hành miễn phí", "Thông tin khuyến mại", "Chính sách ưu đãi", "Chuyển phát nhanh", "Tài liệu hướng dẫn", "Mua hàng Online"] }
    ]

    let list_menu_items = list_col.map(col => {
        let li_menu = col.items.map (row => <li class="li-menu"><a href="">{row}</a></li>)
        return (
            <div className=" col-sm-6 col-md-3 col-lg-3">
            <h4 className="title-menu">
                {col.title}
            </h4>
            <div className="collapse-list">
                <ul className="list-menu">
                    {li_menu}
                </ul>
            </div>
        </div>
        )      
    })

    return (
        <footer className="footer">
            <div className="mid-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                {list_menu_items}
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <h4 class="title-menu">
                                Đăng kí nhận tin
                        </h4>
                            <div class="content-search">
                                <span>Đăng ký nhận thông tin ưu đãi cùng với khuyến mãi khủng từ Big Food</span>
                            </div>
                            <div class="search-bar">
                                <form>
                                    <input type="email" value="" placeholder="Email của bạn" name="EMAIL" id="mail"
                                        aria-label="general-newsletter_form-newsletter_email" />
                                    <button class="button_subscribe subscribe" name="subscribe" id="subscribe"><i
                                        class="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                            <div class="social-footer">
                                <ul class="follow-option d-flex">
                                    <li>
                                        <a class="facebook" href="#" title="Theo dõi Facebook Big Food"><i
                                            class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a class="twitter" href="#" title="Theo dõi Twitter Big Food"><i
                                            class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a class="google" href="#" title="Theo dõi Google Plus Big Food"><i
                                            class="fab fa-google"></i></a>
                                    </li>
                                    <li>
                                        <a class="instagram" href="#" title="Theo dõi Insta Big Food"><i
                                            class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a class="vimeo" href="#" title="Theo dõi Vimeo Big Food"><i
                                            class="fab fa-vimeo"></i></a>
                                    </li>
                                    <li>
                                        <a class="rss" href="#" title="Theo dõi Rss Big Food"><i class="fas fa-rss"></i></a>
                                    </li>
                                    <li>
                                        <a class="youtube" href="#" title="Theo dõi Youtube Big Food"><i
                                            class="fab fa-youtube"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="last-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="contact-footer">
                                <h4 class="title-contact">
                                    Công ty Cố phần Công nghệ BigFood
                            </h4>
                                <div class="address">
                                    <div>Địa chỉ: Tầng 4 Tòa nhà Hanoi Group, 442 Đội Cấn, Ba Đình, Hà Nội</div>
                                    <div>Chi nhánh: Lầu 3 - Tòa nhà Lữ Gia - Số 70 Lữ Gia - Phường 15 - Quận 11 - TP Hồ Chí
                                    Minh</div>
                                    <div>ĐT: (84-4) 6655 8853 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fax: (84-4) 3786 8904
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: info@dkt.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="container">
                    <div class="row tablet">
                        <div class="col-lg-6">
                            <div class="wsp">
                                <span>@ Copyright 2008-2015 BIGFOOD JSC. All right reserved. Phát triển bởi
                                <b> Bizweb</b></span>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="payment">
                                <img src={payment} alt="Các hình thức thành toán" data-was-processed="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;