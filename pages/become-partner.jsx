import Layout from "@/src/layouts/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
const BecomePartner = () => {
  const { t } = useTranslation();

  return (
    <Layout headerExtaClass={"two"}>
      <section
        className="hero-section about blog-page gap"
        style={{ backgroundImage: "url(/assets/img/blog-img-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="about-text">
                <ul className="crumbs d-flex">
                  <li>
                    <Link href="/">{t("vendor.Home")}</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      {t("vendor.Vendor")}
                    </Link>
                  </li>
                </ul>
                <h2>                {t("vendor.Want to join partnership?")}
</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="join-courier">
                <h3>                {t("vendor.Join As Partner")}
</h3>
                <p>
                {t("vendor.line_1")}
                </p>
                <br/>
                <p>
                {t("vendor.line_2")}

                </p>

                <br/>
                <p>
                {t("vendor.line_3")}

                </p>
                {/* <form
                  onSubmit={(e) => e.preventDefault()}
                  className="blog-form"
                >
                  <div className="name-form">
                    <i className="fa-regular fa-user" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="name-form">
                    <i className="fa-solid fa-phone" />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div className="name-form">
                    <i className="fa-regular fa-envelope" />
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <textarea
                    placeholder="Enter your message"
                    defaultValue={""}
                  />
                  <button className="button-price">Submit Application</button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Benefit-section gap">
        <div className="container">
          <div className="row">
            <div
              className="offset-xl-1 col-lg-5"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="benefit-text">
                <h2>{t("vendor.Benefits you get with VOOOM")}</h2>
                <p>
                {t("vendor.benefits")}

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Benefit-team gap no-top">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="team-description">
                <h4>
                  <i className="fa-solid fa-people-group" />
                 
                  {t("vendor.Friendly Team")}
                </h4>
                
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="team-description">
                <h4>
                  <i className="fa-regular fa-calendar-days" />
                  
                  {t("vendor.Flexible Schedule")}
                </h4>
               
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="team-description">
                <h4>
                  <i className="fa-solid fa-briefcase" />
                  
                  {t("vendor.Official Employment")}
                </h4>
                
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="team-description end">
                <h4>
                  <i className="fa-solid fa-money-bill-1-wave" />
                  
                  {t("vendor.Stable Income")}
                </h4>
                
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="team-description end">
                <h4>
                  <i className="fa-solid fa-arrow-up-right-dots" />
                  
                  {t("vendor.Career Growth")}
                </h4>
                
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="team-description end">
                <h4>
                  <i className="fa-solid fa-folder-open" />
                  
                  {t("vendor.Full Insurance")}
                </h4>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="join-community-section gap no-top">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="join-img-blog">
                <img alt="join" src="/assets/img/join-img.jpg" />
              </div>
            </div>
            <div
              className="offset-xl-1 col-lg-5"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="join-the">
                <h2>Frequently asked questions</h2>
                <p>
                  Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
                  Mauris augue neque gravida in fermentum et sollicitudin. Amet
                  est placerat in egestas erat imperdiet.
                </p>
              </div>
              <div className="counter-blog">
                <div className="counter-img-data">
                  <h2>74</h2>
                  <span>
                    Couriers <br />
                    in Your city
                  </span>
                </div>
                <div className="counter-img-data">
                  <h2>12</h2>
                  <span>
                    Best
                    <br />
                    Restaurants
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default BecomePartner;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}