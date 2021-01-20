import React from 'react';

function Footer() {
  return (
    <footer>
        <div className="mid-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="widget-ft last social_footer">
                  <h4 className="title-menu">
                    <span>Về chúng tôi </span>
                  </h4>
                  <div className="blocklogo">
                    <a href="a" className="logofooter">
                      <img className="lazyload loaded" src={window.location.origin + "/images/logo/logo-footer.png"} alt="logo-footer" data-was-processed="true" />
                    </a>
                  </div>
                  <div className="about-footer">
                    <p>
                      CITIBike được thành lập với niềm đam mê và khát vọng thành công trong lĩnh vực Thể thao. Chúng tôi đã và đang khẳng định được vị trí hàng đầu bằng những sản phẩm tốt nhất.
                        </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xsm-12">
                <div className="row">
                  <div className="col-lg-4  col-sm-4">
                    <div className="widget-ft last social_footer">
                      <h4 className="title-menu">
                        <span>Dịch vụ</span>
                      </h4>
                    </div>
                    <div className="menu-footer">
                      <ul className="list-item">
                        <li className="item-menu"><a href="a">Đăng ký tên miền</a></li>
                        <li className="item-menu"><a href="a">Tên miền miễn phí</a></li>
                        <li className="item-menu"><a href="a">Dịch vụ email</a></li>
                        <li className="item-menu"><a href="a">Quảng cáo Google Adwords</a></li>
                        <li className="item-menu"><a href="a">Phần mềm quản lý bán hàng</a></li>
                        <li className="item-menu"><a href="a">Thiết kế web đa ngành</a></li>
                        <li className="item-menu"><a href="a">Nhà phát triển ứng dụng</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="widget-ft last social_footer">
                      <h4 className="title-menu">
                        <span>Đăng ký nhận tin</span>
                      </h4>
                    </div>
                    <div className="send-mail">
                      <p>Nhập thông tin của email của bạn để nhận những chính sách ưu đãi từ chúng tôi</p>
                      <input type="text" placeholder="Nhập email của bạn ..." />
                      <div className="icon-send">
                        <a href="a"><img src={window.location.origin + "/images/logo/facebook.png"} alt="fb" /></a>
                        <a href="a"><img src={window.location.origin + "/images/logo/twtiter.png"} alt="tw" /></a>
                        <a href="a"><img src={window.location.origin + "/images/logo/google.png"} alt="google" /></a>
                        <a href="a"><img src={window.location.origin + "/images/logo/p.png"} alt="P" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <div className="widget-ft last social_footer">
                      <h4 className="title-menu">
                        <span>Liên hệ với chúng tôi</span>
                      </h4>
                    </div>
                    <div className="footer-add">
                      <p>Địa chỉ: Tầng 4 - Toà nhà HaNoi Group - 442 Đội Cấn - Ba Đình - Hà Nội</p>
                      <div className="contact-footer">
                        <a href="a"><i className="fas fa-mobile-alt" /> Điện thoại: (84-4) 66558868</a>
                        <a href="a"><i className="fas fa-fax" /> (84-4) 66558868</a>
                        <a href="a"><i className="far fa-envelope" /> Email: info@dkt.com.vn</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="footer-c d-flex justify-content-between">
              <p> © Copyright 2008-2015 DKT Technology JSC</p>
              <div className="icon-bank">
                <a href="a"><i className="far fa-closed-captioning" /></a>
                <a href="a"><i className="fab fa-cc-mastercard" /></a>
                <a href="a"><i className="fab fa-cc-paypal" /></a>
                <a href="a"><i className="fab fa-cc-visa" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
