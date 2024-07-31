import { Phone } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  {
    text: "About Us",
    link: "/about",
  },
  {
    text: "Events",
    link: "/events",
  },
  {
    text: "Gallery",
    link: "/gallery",
  },
  {
    text: "News",
    link: "/news",
  },

  {
    text: "Membership",
    link: "/membership",
  },

  {
    text: "Resources",
    link: "/resources",
  },
];

const addressList = [
  {
    name: "ABUJA CHAPTER OFFICE",
    location:
      "Suit F9, 1st Floor, Fatima Plaza Opposite Holy Rosary Catholic Church, Wuse Zone 2, P.O Box 1992, Garki, Abuja Nigeria.",
  },
];

interface FooterProps {}
const Footer: FC<FooterProps> = () => {
  return (
    <div className="lg:h-[50.6rem] flex flex-col  bg-primary relative">
      <img
        src="/images/bgPatterns/footer_pattern.svg"
        alt="/images/bgPatterns/footer_pattern.svg"
        className="absolute top-0 lg:bottom-0 left-0  h-[15%] lg:h-full lg:w-[43%]"
      />
      <div className="w-frame lg:h-[90%] flex flex-col lg:flex-row">
        <div className="lg:w-[40%] h-full flex p-[3rem] lg:py-[6rem] ">
          <div className="text-white space-y-16">
            <h3 className="font-roboto uppercase font-medium text-2xl lg:text-[3rem] leading-[3rem] lg:leading-[4.6rem]">
              Nigerian Institute of public relations
            </h3>
            <h3 className=" text-[2.4rem] leading-[3.1rem] lg:text-[4rem] lg:leading-[7.465rem]">
              Strategy, Influence, Responsibility
            </h3>
          </div>
        </div>

        <div className="lg:w-[60%] flex text-white p-[3rem] lg:p-[6rem]">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-8">
            <div className="flex flex-col gap-12">
              {quickLinks.map((linkItem, index) => (
                <Link
                  className="text-[1.6rem] lg:text-[1.6rem] leading-[2.34rem]"
                  key={index}
                  to={linkItem.link}
                >
                  {linkItem.text}
                </Link>
              ))}
            </div>
            <div className="space-y-10">
              <div className="space-y-8">
                {addressList.map((addressItem, index) => (
                  <div key={index} className="flex flex-col gap-7">
                    <h6 className="font-semibold text-[1.6rem] leading-[1.875rem]">
                      {addressItem.name}
                    </h6>
                    <span className="text-[1.6rem]  font-thin font-roboto leading-[1.875rem]">
                      {addressItem.location}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-8">
                <span className="rounded-full grid place-content-center border h-[2.8rem] w-[2.8rem]">
                  <Phone size={16} />
                </span>

                <span className="font-roboto font-semibold text-[1.6rem]">
                  • +2348060126048 • +2348054771414 • +2348039652051
                </span>
              </div>
              <div className="flex gap-8">
                <span className="rounded-full grid place-content-center border h-[3em] w-[3rem]">
                  <FaLinkedin size={20} />
                </span>
                <span className="rounded-full grid place-content-center border h-[3rem] w-[3rem]">
                  <FaInstagram size={20} />
                </span>
                <span className="rounded-full grid place-content-center border h-[3rem] w-[3rem]">
                  <FaFacebookF size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white w-frame">
        <hr className="bg-white mb-6" />
        <div className="flex justify-between items-center">
          <span>© Nigerian Institute of public relations</span>
          <ul className="flex gap-4 items-center">
            <li>
              <Link to="/feeds">Feeds</Link>
            </li>
            <li>
              <Link to="/copyright">Copyright</Link>
            </li>
            <li>
              <Link to="/terms-and-condition">Terms And Condition</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
