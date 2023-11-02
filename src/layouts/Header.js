import Link from "next/link";
import { useState } from "react";
import LocaleSwitcher from "./../components/locale-switcher";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import CheckoutFuntion from "../components/CheckoutFuntion";
import MobileMenu from "./MobileMenu";

const Header = ({ extraClass }) => {
  const router = useRouter();
  const { t } = useTranslation("");
  useEffect(() => {
    let dir = router.locale == "ar" ? "rtl" : "ltr";
    let lang = router.locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);
  const onClick = (e) => {
    const body = document.querySelector("body");
    body.classList.toggle("active");
    e.preventDefault();
  };
  // mobile menu
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <header className={extraClass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2">
            <div className="header-style">
              <Link href="/">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50.000000pt" height="50.000000pt" viewBox="0 0 834.000000 522.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,522.000000) scale(0.100000,-0.100000)"
fill="#7422FF" stroke="none">
<path d="M1345 4926 c-669 -113 -1160 -673 -1192 -1361 -10 -230 33 -437 136
-650 137 -284 368 -517 661 -669 58 -29 138 -66 178 -80 242 -86 519 -88 766
-5 221 74 520 261 796 497 171 147 175 150 195 133 587 -519 859 -667 1260
-687 205 -10 404 31 600 126 177 85 263 150 654 493 l101 89 127 -109 c310
-265 473 -385 638 -467 199 -98 337 -130 555 -129 368 1 713 146 981 413 267
266 409 613 409 999 0 229 -40 411 -134 607 -194 406 -563 698 -999 791 -116
25 -380 25 -497 -1 -296 -64 -491 -182 -948 -574 l-133 -114 -27 23 c-15 13
-67 62 -117 108 -342 317 -682 514 -979 566 -437 76 -856 -102 -1388 -588 -64
-59 -120 -107 -124 -107 -4 0 -49 39 -101 88 -240 221 -446 374 -636 471 -121
61 -184 86 -307 118 -118 31 -349 40 -475 19z m3040 -286 c248 -63 570 -276
853 -563 l73 -74 -112 -129 c-61 -71 -115 -130 -118 -132 -4 -1 -47 34 -96 79
-147 133 -365 290 -560 402 -209 121 -376 101 -650 -77 -216 -141 -426 -345
-815 -791 -370 -424 -529 -573 -812 -762 -145 -96 -257 -151 -373 -185 -113
-32 -342 -32 -460 0 -219 59 -425 180 -576 338 -149 157 -240 341 -285 580
-25 134 -15 366 20 493 106 378 396 676 771 794 183 57 399 62 555 12 221 -71
490 -250 737 -489 73 -71 133 -131 133 -135 0 -11 -220 -256 -230 -256 -5 0
-51 38 -101 85 -139 128 -229 202 -337 278 -121 86 -186 122 -282 158 -66 24
-89 28 -190 28 -99 0 -125 -4 -188 -26 -151 -54 -310 -173 -399 -296 -135
-189 -180 -473 -109 -687 106 -315 400 -535 715 -535 147 0 224 28 393 142
243 163 485 394 818 783 243 283 451 497 590 607 246 195 541 349 722 377 84
13 220 5 313 -19z m2700 -14 c359 -106 657 -385 780 -730 54 -149 68 -247 62
-416 -10 -292 -110 -526 -316 -742 -210 -220 -473 -344 -752 -355 -249 -10
-429 55 -685 248 -171 130 -443 368 -450 395 -5 18 0 35 16 57 30 41 182 217
187 217 2 0 56 -47 120 -105 192 -176 451 -361 574 -411 101 -41 200 -51 305
-30 165 32 324 124 451 260 125 134 183 289 183 493 0 311 -126 540 -375 682
-224 129 -431 142 -630 41 -220 -111 -541 -390 -800 -695 -446 -524 -666 -739
-950 -929 -123 -83 -295 -168 -395 -196 -96 -27 -265 -37 -366 -21 -142 23
-244 66 -384 162 -107 73 -560 433 -579 460 -10 14 -11 26 -4 42 12 25 201
237 211 237 4 0 88 -68 187 -151 397 -332 500 -389 702 -389 134 0 235 36 412
145 79 49 138 102 388 349 163 160 393 399 512 531 335 373 484 512 703 658
166 111 316 180 458 212 106 24 322 14 435 -19z m-5443 -617 c127 -27 223
-100 461 -352 l137 -145 -177 -180 c-246 -249 -331 -302 -481 -302 -203 0
-362 100 -454 286 -38 77 -42 94 -46 174 -3 70 0 103 16 157 79 256 311 411
544 362z m2684 -33 c134 -71 330 -225 484 -380 l74 -76 -29 -31 c-41 -43 -316
-268 -443 -362 -56 -42 -119 -81 -140 -87 -57 -15 -136 -12 -191 9 -59 22
-189 106 -294 190 -96 77 -297 269 -297 285 0 13 169 173 284 270 86 73 252
182 314 207 72 29 152 21 238 -25z m2607 23 c293 -99 433 -417 302 -686 -134
-273 -444 -365 -691 -205 -55 36 -169 134 -358 308 -67 61 -78 76 -73 96 8 32
342 359 429 421 37 27 91 57 120 67 74 27 190 26 271 -1z"/>
<path d="M2274 1656 c-134 -30 -256 -119 -313 -227 -54 -100 -62 -145 -68
-359 -8 -319 22 -446 130 -554 76 -77 158 -115 294 -136 102 -17 447 -14 534
5 199 41 314 152 381 365 21 67 23 94 23 255 -1 199 -19 304 -71 406 -51 101
-152 187 -270 231 -54 20 -80 22 -319 24 -192 3 -276 0 -321 -10z m589 -269
c65 -33 109 -87 127 -160 8 -29 11 -113 8 -234 -3 -182 -4 -190 -31 -241 -29
-56 -84 -102 -145 -124 -51 -18 -439 -17 -502 1 -72 21 -125 64 -156 127 -27
56 -28 60 -28 248 -1 105 2 207 7 227 11 54 61 122 107 148 61 34 114 40 345
38 208 -2 210 -2 268 -30z"/>
<path d="M3825 1660 c-191 -40 -336 -176 -382 -359 -20 -79 -28 -385 -14 -495
33 -246 172 -385 427 -426 101 -17 447 -14 532 4 177 37 318 163 373 335 30
91 39 417 15 530 -44 209 -187 358 -387 406 -71 16 -489 20 -564 5z m546 -256
c65 -30 113 -76 140 -136 23 -50 24 -64 24 -253 0 -189 -1 -203 -23 -247 -31
-62 -99 -122 -159 -139 -58 -17 -448 -15 -503 3 -56 18 -117 65 -145 112 -38
65 -46 130 -37 316 9 181 22 229 78 284 72 71 142 86 394 82 163 -2 191 -4
231 -22z"/>
<path d="M5346 1654 c-184 -44 -323 -183 -371 -369 -21 -84 -21 -466 0 -550
34 -130 128 -246 245 -303 100 -48 209 -64 448 -63 298 1 390 29 512 157 118
122 144 222 137 529 -4 223 -9 252 -67 365 -53 104 -190 204 -322 235 -86 20
-497 20 -582 -1z m542 -247 c88 -31 148 -93 174 -182 8 -24 12 -108 12 -210 0
-140 -3 -180 -18 -224 -24 -69 -85 -132 -152 -156 -102 -36 -487 -29 -565 10
-91 46 -106 79 -119 261 -14 205 -2 360 34 414 39 59 111 89 237 100 143 12
344 5 397 -13z"/>
<path d="M6593 1655 c-65 -28 -63 -11 -63 -670 l0 -595 83 -2 c113 -2 130 1
145 19 9 13 12 100 13 352 0 319 1 335 17 312 9 -13 95 -162 190 -330 102
-180 187 -319 207 -339 29 -27 42 -32 81 -32 41 0 51 4 87 43 23 24 91 133
157 252 64 116 144 256 177 313 l60 103 5 -319 c7 -398 -2 -374 142 -370 l101
3 3 588 c2 659 4 645 -65 673 -56 24 -111 13 -148 -29 -16 -19 -140 -227 -274
-462 -210 -367 -246 -425 -257 -411 -6 9 -124 211 -260 448 -261 452 -273 468
-339 468 -16 -1 -44 -7 -62 -15z"/>
<path d="M1587 1641 c-36 -18 -21 11 -272 -505 -106 -217 -179 -356 -184 -350
-5 5 -97 191 -205 413 -107 222 -205 415 -217 428 -21 22 -29 23 -150 23
l-128 0 33 -72 c18 -40 151 -314 295 -608 289 -590 295 -600 375 -600 82 0 86
5 354 550 191 386 353 724 352 734 0 1 -50 2 -110 2 -83 1 -118 -3 -143 -15z"/>
</g>
</svg>
              </Link>
              <div className="extras bag">
                <a href="#" className="menu-btn" onClick={(e) => onClick(e)}>
                  <i className="fa-solid fa-bag-shopping" />
                </a>
                <div className="bar-menu" onClick={() => setMobileToggle(true)}>
                  <i className="fa-solid fa-bars" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <nav className="navbar">
              <ul className="navbar-links">
                <li className="navbar-dropdown">
                  <Link href="/">{t("header.Home")}</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="about">{t("header.About")}</Link>
                </li>
                <li className="navbar-dropdown">
                  <Link href="services">{t("header.Services")}</Link>  
                </li>
                <li className="navbar-dropdown">
                  <Link href="become-partner">{t("header.Vendor")}</Link>  
                </li>
                <li className="navbar-dropdown">
                  <Link href="faq">{t("header.FAQ")}</Link>  
                </li>
                <li className="navbar-dropdown">
                  <Link href="contacts">{t("header.Contacts")}</Link>
                </li>
                <li> <LocaleSwitcher /></li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="extras bag">
              <a
                href="#"
                id="desktop-menu"
                className="menu-btn"
                onClick={(e) => onClick(e)}
              >
                <i className="fa-solid fa-bag-shopping" />
              </a>
              <Link href="" className="button button-2">
              {t("header.Order Now")}
              </Link>
            </div>
          </div>
          <div className="menu-wrap">
            <div className="menu-inner ps ps--active-x ps--active-y">
              <span className="menu-cls-btn" onClick={(e) => onClick(e)}>
                <i className="cls-leftright" />
                <i className="cls-rightleft" />
              </span>
              <CheckoutFuntion sidebar />
            </div>
          </div>
          <div
            className={`mobile-nav hmburger-menu ${mobileToggle ? "open" : ""}`}
            id="mobile-nav"
            style={{ display: "block" }}
          >
            <div className="res-log">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={163}
                  height={38}
                  viewBox="0 0 163 38"
                >
                  <g id="Logo-m" transform="translate(-260 -51)">
                    <g
                      id="Logo-2-m"
                      data-name="Logo"
                      transform="translate(260 51)"
                    >
                      <g id="Elements-m">
                        <path
                          id="Path_3429"
                          data-name="Path 3429"
                          d="M315.086,140.507H275.222v-.894c0-11.325,8.941-20.538,19.933-20.538s19.931,9.213,19.931,20.538Z"
                          transform="translate(-270.155 -115.396)"
                          fill="#f29f05"
                        />
                        <path
                          id="Path_3430"
                          data-name="Path 3430"
                          d="M301.13,133.517a1.488,1.488,0,0,1-1.394-.994,11.361,11.361,0,0,0-10.583-7.54,1.528,1.528,0,0,1,0-3.055,14.353,14.353,0,0,1,13.37,9.527,1.541,1.541,0,0,1-.875,1.966A1.444,1.444,0,0,1,301.13,133.517Z"
                          transform="translate(-264.176 -113.935)"
                          fill="#fff"
                        />
                        <path
                          id="Path_3431"
                          data-name="Path 3431"
                          d="M297.343,146.544a14.043,14.043,0,0,1-13.837-14.211h2.975a10.865,10.865,0,1,0,21.723,0h2.975A14.043,14.043,0,0,1,297.343,146.544Z"
                          transform="translate(-266.247 -108.544)"
                          fill="#363636"
                        />
                        <path
                          id="Path_3432"
                          data-name="Path 3432"
                          d="M302.183,132.519a7.064,7.064,0,1,1-14.122,0Z"
                          transform="translate(-264.027 -108.446)"
                          fill="#363636"
                        />
                        <path
                          id="Path_3433"
                          data-name="Path 3433"
                          d="M320.332,134.575H273.3a1.528,1.528,0,0,1,0-3.055h47.033a1.528,1.528,0,0,1,0,3.055Z"
                          transform="translate(-271.815 -108.923)"
                          fill="#f29f05"
                        />
                        <path
                          id="Path_3434"
                          data-name="Path 3434"
                          d="M289.154,123.4a1.507,1.507,0,0,1-1.487-1.528v-3.678a1.488,1.488,0,1,1,2.975,0v3.678A1.508,1.508,0,0,1,289.154,123.4Z"
                          transform="translate(-264.154 -116.667)"
                          fill="#f29f05"
                        />
                        <path
                          id="Path_3435"
                          data-name="Path 3435"
                          d="M284.777,138.133H275.3a1.528,1.528,0,0,1,0-3.055h9.474a1.528,1.528,0,0,1,0,3.055Z"
                          transform="translate(-270.84 -107.068)"
                          fill="#363636"
                        />
                        <path
                          id="Path_3436"
                          data-name="Path 3436"
                          d="M284.8,141.691h-6.5a1.528,1.528,0,0,1,0-3.055h6.5a1.528,1.528,0,0,1,0,3.055Z"
                          transform="translate(-269.379 -105.218)"
                          fill="#363636"
                        />
                      </g>
                    </g>
                    <text
                      id="Quickeat-m"
                      transform="translate(320 77)"
                      fill="#363636"
                      fontSize={20}
                      fontFamily="Poppins"
                      fontWeight={700}
                    >
                      <tspan x={0} y={0}>
                        QUICK
                      </tspan>
                      <tspan y={0} fill="#f29f05">
                        EAT
                      </tspan>
                    </text>
                  </g>
                </svg>
              </Link>
            </div>
            <MobileMenu />
            <a href="#" id="res-cross" onClick={() => setMobileToggle(false)} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
