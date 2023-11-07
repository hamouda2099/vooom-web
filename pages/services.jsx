import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
const Services = () => {
  const { t } = useTranslation();
  return (
    <Layout>
       <section
        className="hero-section about gap"
        style={{ backgroundImage: "url(/assets/img/background-1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="about-text">
                <ul className="crumbs d-flex">
                  <li>
                    <Link href="/"> {t("services.Home")}</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" /> {t("services.service")}
                    </Link>
                  </li>
                </ul>
                <h2> {t("services.Service shows good taste")}</h2>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="about-img">
                <img alt="man" src="/assets/img/photo-9.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Cards */}
      <section className="services-cards gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="services-info">
                <h2>{t("services.Make you easier and happier")}</h2>
               
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="services-card-style">
                <i className="fa-regular fa-clock" />
                <h4>
                  {" "}
                  <a href="#">
                  {t("services.save")}
                    <br />
                    {t("services.time")}
                  </a>
                </h4>
                
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-plate-wheat" />
                <h4>
                  {" "}
                  <a href="#">
                  {t("services.Variety")}
                    <br />
                    {t("services.Food")}
                  </a>
                </h4>
              
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={600}
              data-aos-duration={700}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-utensils" />
                <h4>
                  {" "}
                  <a href="#">
                  {t("services.Free")}
                    <br />
                    {t("services.Delivery")}
                  </a>
                </h4>
                
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="flip-up"
              data-aos-delay={700}
              data-aos-duration={800}
            >
              <div className="services-card-style">
                <i className="fa-solid fa-tag" />
                <h4>
                  {" "}
                  <a href="#">
                  {t("services.regular")}
                    <br />
                    {t("services.discounts")}
                  </a>
                </h4>
                
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={900}
              data-aos-duration={1000}
            >
              <div className="services-cards-text">
                <h2>{t("services.Best quality Food and Restaurant")}</h2>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* works-section */}
      <section className="works-section gap" style={{ background: "#fcfcfc" }}>
        <div className="container">
          <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <h2>{t("services.How It Works")}</h2>
          </div>
          <div className="row ">
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/Illustration-1.png" />
                <h4>{t("services.Select shop")}</h4>
                
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/Illustration-2.png" />
                <h4>{t("services.Make your order")}</h4>
                
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="work-card service">
                <img alt="img" src="/assets/img/illustration-3.png" />
                <h4>{t("services.Wait for delivery")}</h4>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sit at Home Section */}
      <section className="sit-at-home-section gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="sit-at-img">
                <img alt="man" src="/assets/img/man-3.jpg" />
                <div className="counter-img-data">
                  <h2>1M+</h2>
                  <span>
                  {t("services.Orders")}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="offset-xl-1 col-xl-5 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="sit-at-home-description">
                <h2>{t("services.Sit at Home We Will Take Care Your Order")}</h2>
                <ul className="food-dishes">
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-burger" />
                      {t("services.Burgers")}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-drumstick-bite" />
                      {t("services.Steaks")}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-cheese" />
                      {t("services.Pizza")}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-pizza-slice" />
                      {t("services.Fried Chiecken")}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa-solid fa-fish" />
                      {t("services.Orental")}
                    </a>
                  </li>
                </ul>{" "}
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* subscribe-section */}
      <Subscribe />
    </Layout>
  );
};
export default Services;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}