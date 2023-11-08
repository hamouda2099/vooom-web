import Subscribe from "@/src/components/Subscribe";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale
  );
  return (
    <Layout>
      <section
        className="hero-section gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="restaurant">
                <h1>{t("home.Home title")}</h1>
                <p>
                {t("home.Home description")}
                                </p>
                <div className="nice-select-one">
                  <Link href="#" className="button button-2">
                  {t("home.Order Now")}
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="img-restaurant">
                <img alt="man" src="assets/img/photo-1.png" />
                <div className="wilmington">
                  <img alt="img" src="assets/img/photo-2.jpg" />
                  <div>
                    <p>{t("home.Resturant of the month")}</p>
                    <h6>{t("home.Shawrmaa El-Reem")}</h6>

                  </div>
                </div>
                <div className="wilmington location-restaurant">
                  <i className="fa-solid fa-location-dot" />
                  <div>
                    <h6>{t("home.Local Stores")}</h6>
                    <p>{t("home.In your city")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
      {/* works-section */}
      <section className="works-section gap no-top">
        <div className="container">
          <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <h2>{t("home.How It Works")}</h2>
            <p>
           </p>
          </div>
          <div className="row ">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/Illustration-1.png" />
                <h4>
                  <span>01</span> {t("home.Select shop")}
                </h4>
                {/* <p>
                  Non enim praesent elementum facilisis leo vel fringilla.
                  Lectus proin nibh nisl condimentum id. Quis varius quam
                  quisque id diam vel.
                </p> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/Illustration-2.png" />
                <h4>
                  <span>02</span> {t("home.Make your order")}
                </h4>
                {/* <p>
                  Eu mi bibendum neque egestas congue quisque. Nulla facilisi
                  morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla
                  pharetra diam sit amet.
                </p> */}
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/illustration-3.png" />
                <h4>
                  <span>03</span> {t("home.Wait for delivery")}
                </h4>
                {/* <p>
                  Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat
                  nisl vel pretium lectus quam id leo. A scelerisque purus
                  semper eget. Tincidunt arcu non.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* best-restaurants */}
      <section
        className="best-restaurants gap"
        style={{ background: "#fcfcfc" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="city-restaurants">
                <h2>{t("home.Local Stores in Your City")}</h2>
                <p>
                  
                  {t("home.Support local stores by ordering from VOOOM")}
                </p>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="logos-card">
                <img alt="logo" src="assets/img/logos-2.jpg" />
                <div className="cafa">
                  <h4>
                   
                   {t("home.Heart Attack")}
                   
                  </h4>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">{t("home.Burger")}</a> <a href="#">{t("home.Fried Chiecken")}</a>{" "}
                    <a className="end" href="#">
                      {t("home.Sandwiches")}
                    </a>
                  </div>
                  {/* <p>
                    Non enim praesent elementum facilisis leo vel fringilla.
                    Lectus proin nibh nisl condimentum id. Quis varius quam
                    quisque id diam vel.
                  </p> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="logos-card two">
                <img alt="logo" src="assets/img/logos-1.jpg" />
                <div className="cafa">
                  <h4>
                   
                   {t("home.Shawrmaa El-Reem")}
                   
                  </h4>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">{t("home.Shawerma")}</a> <a href="#">{t("home.Orental")}</a>{" "}
                    <a className="end" href="#">
                    {t("home.Grill")}
                    </a>
                  </div>
                  {/* <p>
                    Vulputate enim nulla aliquet porttitor lacus luctus.
                    Suscipit adipiscing bibendum est ultricies integer. Sed
                    adipiscing diam donec adipiscing tristique.
                  </p> */}
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="logos-card three">
                <img alt="logo" src="assets/img/logos-3.jpg" />
                <div className="cafa">
                  <h4>
                    
                    {t("home.Bazooka")}
                    
                  </h4>
                  
                  <div className="cafa-button">
                    {" "}
                    <a href="#">{t("home.Burger")}</a> <a href="#"> {t("home.Sandwiches")}</a>{" "}
                    <a className="end" href="#">
                    {t("home.Fried Chiecken")}
                                        </a>
                  </div>
                  {/* <p>
                    Tortor at risus viverra adipiscing at in tellus. Cras semper
                    auctor neque vitae tempus. Dui accumsan sit amet nulla
                    facilisi. Sed adipiscing diam donec adipiscing tristique.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="button-gap">
            <Link href="become-partner" className="button button-2 non">
            {t("home.join")}
            {activeLocale === 'en' ? <i className="fa-solid fa-arrow-right" /> : <i className="fa-solid fa-arrow-left" /> }  
            </Link>
          </div>
        </div>
      </section>
      {/* your-favorite-food */}
      <section
        className="your-favorite-food gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="food-photo-section">
                <img alt="img" src="assets/img/photo-3.png" />{" "}
                <a href="#" className="one">
                  <i className="fa-solid fa-burger" />
                  {t("home.Burger")}
                </a>{" "}
                <a href="#" className="two">
                  <i className="fa-solid fa-cheese" />
                  {t("home.Sandwiches")}
                </a>{" "}
               
              </div>
            </div>
            <div
              className="col-lg-6 offset-lg-1"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="food-content-section">
                <h2>   {t("home.Food from your favorite restaurants to your table")}</h2>
                <p>
                {t("home.Experience the future of")}
                </p>{" "}
                <Link href="#" className="button button-2">
                {t("home.Order Now")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters-section */}
      <section className="counters-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div>
                <h2>{t("home.Service shows good taste.")}
</h2>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="count-time">
                <h2
                  className="timer count-title count-number"
                  data-to={976}
                  data-speed={2000}
                >
                  
                  2019
                </h2>
                <p>
                {t("home.Since")}          
                      </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="count-time">
                <h2
                  className="timer count-title count-number"
                  data-to={12}
                  data-speed={2000}
                >
                  1.3K+
                </h2>
                <p>
                {t("home.shops")}
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="count-time sp">
                <h2
                  className="timer count-title count-number"
                  data-to={1}
                  data-speed={2000}
                >
                  1M+
                </h2>
                <p>
                {t("home.orders")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* reviews-sections */}
      <section className="reviews-sections gap">
        <div className="container">
          
        </div>
      </section>
      {/* join-partnership */}
      <section
        className="join-partnership gap"
        style={{ backgroundColor: "#363636" }}
      >
        <div className="container">
          <h2>
            
            {t("home.Want to Join Partnership?")}
            </h2>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="join-img">
                <img alt="img" src="assets/img/photo-7.jpg" />
                <div className="Join-courier">
                  {/* <h3 >
                  {t("home.Join A Vooomer")}
                    </h3> */}
                  <Link href="https://play.google.com/store/apps/details?id=com.nabil.vooomd&hl=en_US&gl=US" className="button button-2">
                  {t("home.join")} <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="join-img">
                <img alt="img" src="assets/img/photo-6.jpg" />
                <div className="Join-merchant">
                  {/* <h3>
                  {t("home.Join Merchant")}
                                      </h3> */}
                  <Link href="contacts" className="button button-2">
                  {t("home.join")}
                  {activeLocale === 'en' ? <i className="fa-solid fa-arrow-right" /> : <i className="fa-solid fa-arrow-left" /> }  
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news-section */}
      <section className="news-section gap">
        <div className="container">
          <h2> {t("home.Latest news and events")}</h2>
          <div className="row">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="news-posts-one">
                <img alt="man" src="assets/img/photo-8.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">{t("home.news")}</a> <a href="#">{t("home.vooom")}</a>
                </div>
                <h3>{t("home.nile pioneers")}</h3>
                {/* <p>
                  Donec adipiscing tristique risus nec feugiat in fermentum.
                  Sapien eget mi proin sed libero. Et magnis dis parturient
                  montes nascetur. Praesent semper feugiat nibh sed pulvinar
                  proin gravida.
                </p>{" "} */}
                <Link href="https://fintechgate.net/2023/03/11/%d9%85%d8%a8%d8%a7%d8%af%d8%b1%d8%a9-%d8%b1%d9%88%d8%a7%d8%af-%d8%a7%d9%84%d9%86%d9%8a%d9%84-%d8%aa%d9%81%d8%aa%d8%ad-%d8%a8%d8%a7%d8%a8-%d8%a7%d9%84%d8%aa%d9%82%d8%af%d9%8a%d9%85-%d9%84%d9%84%d8%af-2/?fbclid=IwAR1o_8EKkmFEOOV1LkwBvsqaDiXyTuR2DcVo-NBDsLWxzRvWweNqgPpsDg0">
                {t("home.see all")}
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      {t("home.by vooom")}
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      {t("home.mar 2023")}
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="news-post-two">
                <img alt="food-img" src="assets/img/food-1.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#">{t("home.delivery")}</a> 
                  </div>
                  <h6>
                    <Link href="https://alwatnalakbr.com/%d8%b4%d8%b1%d9%83%d8%a9-%d9%81%d9%88%d9%88%d9%88%d9%85-%d8%aa%d8%b9%d9%84%d9%86-%d9%85%d9%82%d8%a7%d8%b7%d8%b9%d8%a9-%d8%aa%d9%88%d8%b5%d9%8a%d9%84-%d8%b7%d9%84%d8%a8%d8%a7%d8%aa-%d9%85%d9%86-%d9%85/">
                    {t("home.Boycotting the delivery")}
                    </Link>
                  </h6>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p> */}
                  <ul className="data">
                    <li>
                      <h6>
                        <i className="fa-solid fa-user" />
                        {t("home.by vooom")}
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-regular fa-calendar-days" />
                        {t("home.nov 2023")}
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="news-post-two">
                <img alt="food-img" src="assets/img/food-2.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#"> {t("home.supermarkets")}</a> 
                  </div>
                  <h6>
                    <Link href="https://www.facebook.com/photo?fbid=330620126002332&set=a.213925597671786"> {t("home.SOOON VMart in Tanta")} </Link>
                  </h6>
                  <ul className="data">
                    <li>
                      <h6>
                        <i className="fa-solid fa-user" />
                        {t("home.by vooom")}
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-regular fa-calendar-days" />
                        {t("home.sep 2023")}
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="news-post-two end">
                <img alt="food-img" src="assets/img/food-3.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#"> {t("home.shops")}</a> <a href="#"> {t("home.delivery")}</a>
                  </div>
                  <h6>
                    <Link href="">
                    {t("home.Online Delivery in Tanta")} 
                    </Link>
                  </h6>
                  <ul className="data">
                    <li>
                      <h6>
                        <i className="fa-solid fa-user" />
                        {t("home.by vooom")}
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-regular fa-calendar-days" />
                        {t("home.jan 2023")}
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe-section */}
    </Layout>
  );
};
export default Index;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}