import React from "react";
import "../News/News.scss";
function News(props) {
  return (
    <section id="news" className="news">
      <div className="container">
        <div className="news__tabs">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Điện Ảnh 24h
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Review
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Khuyến Mãi
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="movieNews">
                <div className="row row__content">
                  <div className="col-md-6 co-sm-12">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2021/03/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title ">
                      Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                      Lật Mặt: 48H đậm chất
                    </a>
                    <p className="news__description">
                      Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                      rượt đuổi gay cấn thót tim fans hâm mộ
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>

                  <div className="col-md-6 co-sm-12">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2021/03/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title">
                      [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM
                      ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH
                      ĐÁM
                    </a>
                    <p className="news__description">
                      Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ,
                      Hollywood cũng không thiếu những tác phẩm đình đám được
                      chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là
                      cả trò chơi điện tử.
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />{" "}
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>
                </div>

                <div className="row row__content">
                  <div className="col-md-4 col-sm-12">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2021/03/Carey%20Mulligan%205-5684f1.jpg"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title ">
                      PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan
                      và màn trả thù đàn ông để đời
                    </a>
                    <p className="news__description">
                      Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở
                      hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu"
                      nhất sự nghiệp của cô trong phim Cô gái
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <img
                      src="https://kenh14cdn.com/thumb_w/600/203336854389633024/2021/4/13/photo1618288918504-1618288918696713355585.png"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title ">
                      VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY
                      DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM
                    </a>
                    <p className="news__description">
                      Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao
                      về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và
                      Choi Woo Sik, tác phẩm kinh dị – hành
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                          alt="small__img"
                        />

                        <span>
                          Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                        </span>
                      </a>
                    </div>

                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                          alt="small__img"
                        />

                        <span>
                          “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                        </span>
                      </a>
                    </div>

                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                          alt="small__img"
                        />

                        <span>
                          Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2
                          tuần công chiếu
                        </span>
                      </a>
                    </div>

                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                          alt="small__img"
                        />

                        <span>
                          NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT
                          KẾ...
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="movieNews">
                <div className="row row__content">
                  <div className="col-md-6 co-sm-12">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title ">
                      Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên
                      kết
                    </a>
                    <p className="news__description">
                      Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ
                      Ám
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>

                  <div className="col-md-6 co-sm-12">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title">
                      Review: Dinh Thự Oan Khuất (Ghost Of War)
                    </a>
                    <p className="news__description">
                      Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự
                      Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />{" "}
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>
                </div>

                <div className="row row__content">
                  <div className="col-md-4 col-sm-12">
                    <img
                      src="https://mediaproxy.salon.com/width/1200/height/675/https://media.salon.com/2018/08/women-kkk-BlacKkKlansman.jpg"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title ">
                      ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
                    </a>
                    <p className="news__description">
                      Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019
                      của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt
                      chủng tộc - nỗi đau gây nhức nhối của đất
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title ">
                      American Sniper - Chính nghĩa hay phi nghĩa?
                    </a>
                    <p className="news__description">
                      American Sniper khắc họa một tay súng bắn tỉa “huyền
                      thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông.
                      Câu chuyện phim chậm rãi đưa người
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
                          alt="small__img"
                        />

                        <span>
                          COVID-19 là bản chính thức của MEV-1 phim contagion
                          (2011)
                        </span>
                      </a>
                    </div>

                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/05/review-spider-man-into-the-spider-vesre-15886520889426.png"
                          alt="small__img"
                        />

                        <span>Review: Spider-Man: Into The Spider-Vesre</span>
                      </a>
                    </div>

                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/03/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                          alt="small__img"
                        />

                        <span>
                          Review: Siêu Vệ Sĩ Sợ Vợ - Giải cứ Tổng thống chưa bao
                          giờ lầy lội và hài hước...
                        </span>
                      </a>
                    </div>

                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                          alt="small__img"
                        />

                        <span>
                          Review: Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu
                          anh hùng Valiant
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="movieNews">
                <div className="row row__content">
                  <div className="col-md-6 co-sm-12">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title ">
                      BHD 59K/VÉ CẢ TUẦN!!!
                    </a>
                    <p className="news__description">
                      Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với
                      giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên
                      ZaloPay.
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>

                  <div className="col-md-6 co-sm-12">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title">
                      TIX 1K/VÉ NGẠI CHI GIÁ VÉ
                    </a>
                    <p className="news__description">
                      Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm
                      02 voucher thanh toán ZaloPay thả ga
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />{" "}
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>
                </div>

                <div className="row row__content">
                  <div className="col-md-4 col-sm-12">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/09/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title ">
                      ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX
                    </a>
                    <p className="news__description">
                      ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và
                      Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé
                      qua TIX.
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
                      alt="news--img"
                      className="news__img img-fluid"
                    />
                    <a href="/#" className="news__title ">
                      BHD STAR VÉ CHỈ 59.000 CẢ TUẦN!!!
                    </a>
                    <p className="news__description">
                      Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với
                      giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay
                      hoặc Mục Vé Phim trên ZaloPay
                    </p>
                    <div className="news__icon">
                      <i className="far fa-thumbs-up" />
                      <span className="icon__text mr-3">10</span>
                      <i className="far fa-comment-alt" />{" "}
                      <span className="icon__text mr-3">0</span>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
                          alt="small__img"
                        />

                        <span>
                          Beta Cineplex trở lại với hàng loại ưu đãi mới
                        </span>
                      </a>
                    </div>

                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2019/11/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg"
                          alt="small__img"
                        />

                        <span>
                          [123Phim] Thứ 6 Không Đen tối-Ưu đãi hủy diệt 11k/Vé
                        </span>
                      </a>
                    </div>

                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                          alt="small__img"
                        />

                        <span>[Mega GS] Một đóa hoa thay ngàn lời yêu</span>
                      </a>
                    </div>

                    <div className="inside__row ">
                      <a href="/#" className="small__link">
                        <img
                          src="https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                          alt="small__img"
                        />

                        <span>
                          [123Phim] Nhập mã 'PSM30k'-Giảm ngay 30k khi đặt vé
                          Pháp sư mù
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
