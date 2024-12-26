import logo from "./../assets/logo.png";
import burger from "./../assets/burger.svg";
import { Link } from "wouter";

function Nav() {
  return (
    <div className="h-fit flex justify-center items-center font-thin text-lg bg-white z-50 max-[940px]:h-full max-[940px]:justify-between">
      {/*normal nav*/}
      <div className="flex justify-between w-full px-10 h-[10dvh] max-[940px]:hidden">
        <ul className="flex items-center justify-start w-2/3 h-full">
          <Link href="/" className="text-white no-underline">
            <li className="flex items-center justify-center px-3 text-black text-nowrap cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              <img
                src={logo}
                alt="logo-for-nav"
                className="h-[8dvh] object-contain"
              />
            </li>
          </Link>
          <Link
            href="/"
            className="font-semibold text-white no-underline lg:text-sm xl:text-base"
          >
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Home
            </li>
          </Link>
          <Link
            href="/something"
            className="font-semibold text-white no-underline lg:text-sm xl:text-base"
          >
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs"
            >
              Menu
            </li>
          </Link>
          <Link
            href="/services"
            className="font-semibold text-white no-underline lg:text-sm xl:text-base"
          >
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Services
            </li>
          </Link>
        </ul>
        <ul className="flex items-center justify-end w-1/3 h-full">
          <Link
            href="/aboutus"
            className="font-semibold text-white no-underline lg:text-sm xl:text-base"
          >
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              About Us
            </li>
          </Link>
          <Link
            href="/contact"
            className="font-semibold text-white no-underline lg:text-sm xl:text-base"
          >
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Contact Us
            </li>
          </Link>
          <Link
            href="/projects"
            className="font-semibold text-white no-underline lg:text-sm xl:text-base"
          >
            <li className="flex items-center justify-center text-black text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Projects
            </li>
          </Link>
        </ul>
      </div>
      {/*burger button*/}
      <div
        className="hidden place-items-center h-[10dvh] px-10 cursor-pointer place-content-center py-6 max-[940px]:grid text-black"
        data-coreui-toggle="modal"
        data-coreui-target="#staticBackdrop"
      >
        <img src={burger} alt="burger-icon" className="scale-150" />
      </div>
      {/*logo for small screen nav*/}
      <div className="hidden max-[940px]:block pr-6">
        <img src={logo} alt="logo-for-small-screen" className="scale-75" />
      </div>
      {/*Nav Modal for small screens*/}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-coreui-backdrop="static"
        data-coreui-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-coreui-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="flex flex-col items-center justify-start h-full gap-6 font-medium">
                <Link href="/" className="w-full text-white no-underline">
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Home
                  </li>
                </Link>
                <Link
                  href="/something"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Menu
                  </li>
                </Link>
                <Link
                  href="/services"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Services
                  </li>
                </Link>
                <Link
                  href="/aboutus"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    About Us
                  </li>
                </Link>
                <Link
                  href="/contact"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Contact Us
                  </li>
                </Link>
                <Link
                  href="/projects"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Projects
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
