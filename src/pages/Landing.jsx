import banner from "./../assets/Landing/banner.png";
import call from "./../assets/Landing/call.png";
import email from "./../assets/Landing/email.png";
import location from "./../assets/Landing/location.png";

import ServiceCard from "../components/ServiceCard";
import { Link } from "wouter";

import card_1 from "./../assets/Services/card_1.png";
import card_2 from "./../assets/Services/card_2.png";
import card_3 from "./../assets/Services/card_3.png";
import card_4 from "./../assets/Services/card_4.png";

function Landing() {
  return (
    <div>
      {/*banner*/}
      <div
        className="relative flex bg-center bg-cover h-dvh"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute bottom-0 h-full inset-0 bg-gradient-to-br from-[#000000D4] to-[#000000D4]"></div>
        {/*left side*/}
        <div className="z-10 flex flex-col items-start justify-center w-2/3 gap-6 p-12 text-white max-sm:w-full max-md:p-6">
          <h1 className="text-3xl">Build Your Dream With Us</h1>
          <p className="text-justify">
            Whatever good things we build end up building us
          </p>
          <p className="text-justify">
            At NCI Homes, we transform your dreams into reality. From concept to
            completion, our expert team delivers high-quality construction
            solutions tailored to your vision. Build your future with
            confidence—build with NCI Homes."
          </p>
          <h1 className="text-6xl poltawski motion-preset-slide-right">
            NCI HOMES
          </h1>
        </div>
      </div>
      {/*contact details*/}
      <div className="relative h-[10dvh] flex justify-center bg-[#F1F1F1] max-md:p-6 max-md:h-fit max-sm:p-3">
        <div className="md:h-[20dvh] z-20 flex w-full text-sm bg-white rounded-lg md:-translate-y-1/2 md:w-5/6 md:absolute max-md:flex-col">
          <div className="flex flex-col items-center justify-center w-1/3 gap-3 max-md:w-full max-md:py-3">
            <img src={call} alt="call" />
            <p>+94 812 213 613</p>
            <p>+94 777 860 950</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/3 gap-3 max-md:w-full max-md:py-3">
            <img src={email} alt="call" />
            <p>ifor@ncihomes.com</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/3 gap-3 max-md:w-full max-md:py-3">
            <img src={location} alt="call" />
            <p>NCI BUILDING</p>
            <p className="text-center">No. 381 A, Katugastota Road, Kandy</p>
          </div>
        </div>
      </div>
      {/*who we are*/}
      <div className="bg-[#F1F1F1] px-12 py-6 max-md:px-6 max-sm:p-3 flex flex-col items-center gap-3">
        <h1 className="text-5xl font-semibold text-center poltawski">
          Who We Are
        </h1>
        <p className="text-justify sm:text-center max-sm:text-sm">
          NCI Homes Private Limited is a well-established Civil Engineering and
          Constructio company located in Kandy-Sri Lanka. In last two decades we
          have earned its reputation as a creative and innovative construction
          institution that offers high quality construction services in Sri
          Lanka
        </p>
        <h1 className="text-2xl text-[#407CE0] font-semibold text-center poltawski">
          Our Services
        </h1>
        <p className="text-justify sm:text-center max-sm:text-sm">
          We treat our customers with the best we have. Therefore we provide
          them a quality customer service which would saticfy their
          expectations. We offers many facilities as follows:
        </p>
        {/*service card grid*/}
        <div className="grid grid-cols-4 gap-6 w-fit max-sm:w-full place-items-center max-lg:grid-cols-2 max-sm:grid-cols-1">
          <ServiceCard
            text={"Floor area counting"}
            url={"floor-area-counting"}
            img={card_1}
          ></ServiceCard>

          <ServiceCard
            text={"Provides special loan facilities"}
            url={"special-loans"}
            img={card_2}
          ></ServiceCard>

          <ServiceCard
            text={"Planning approvals"}
            url={"planning-approvals"}
            img={card_3}
          ></ServiceCard>

          <ServiceCard
            text={"Landscaping with new and old designs"}
            url={"landscaping"}
            img={card_4}
          ></ServiceCard>
        </div>
        <div className="flex justify-center items-center h-[5dvh] w-full">
            <Link href="/services">
                <p className="underline underline-offset-4">View All</p>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
