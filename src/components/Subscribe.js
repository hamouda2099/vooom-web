import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "@/src/sliderProps";
import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <section
      className="subscribe-section gap"
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
            <div className="img-subscribe">
              <img alt="Illustration" src="/assets/img/illustration-4.png" />
            </div>
          </div>
          <div
            className="col-lg-5 offset-lg-1"
            data-aos="flip-up"
            data-aos-delay={300}
            data-aos-duration={400}
          >
            <div className="get-the-menu">
              <h2>{t("home.With us or against us?")}</h2>
              <p>
              {t("home.Be positive")}.
              </p>
              {/* <section className="counters-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <img alt="logo-img" src="/assets/img/logo-1.png" />
            </div>
          
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <img alt="logo-img" src="/assets/img/logo-2.png" />
            </div>
          </div>
        </div>
      </section> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}