import Subscribe from "@/src/components/Subscribe";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Contacts = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="hero-section about gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="about-text">
                <ul className="crumbs d-flex">
                  <li>
                    <Link href="/">{t("contacts.Home")}</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      {t("contacts.Contacts")}
                    </Link>
                  </li>
                </ul>
                <h2>{t("contacts.Contact Us")}</h2>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="address">
                    <i className="fa-solid fa-location-dot" />
                    <h5>
                    {t("contacts.location")}
                    </h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="address">
                    <i className="fa-solid fa-envelope" />
                    <a href="mailto:info@vooomapp.com">
                      <h6>info@vooomapp.com</h6>
                    </a>
                    <span>{t("contacts.Contacts")}</span>
                    
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="contact-us-img">
                <img alt="contacts-img-girl" src="/assets/img/contacts-1.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact map */}
      <section className="gap no-top">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="contact-map-data">
                <div className="join-courier content">
                  <h3>{t("contacts.Get in touch with us")}</h3>
                  <p>
                  {t("contacts.Get in touch with us")}
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
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0194956959376!2d31.272948282239888!3d29.97886971038419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458392bbc4e3c1b%3A0x9e8eccd6b6ec4d8b!2sVooom%20Company!5e0!3m2!1sen!2sus!4v1699356992693!5m2!1sen!2sus"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
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
export default Contacts;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
