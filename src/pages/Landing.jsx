import banner from "./../assets/Landing/banner.png";
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
          <p className="text-justify">Whatever good things we build end up building us</p>
          <p className="text-justify">
            At NCI Homes, we transform your dreams into reality. From concept to
            completion, our expert team delivers high-quality construction
            solutions tailored to your vision. Build your future with
            confidence—build with NCI Homes."
          </p>
          <h1 className="text-6xl poltawski motion-preset-slide-right">NCI HOMES</h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
