import React, { useContext, useEffect, useState } from "react";
import person from "../../assets/images/person2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../layouts/Main";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  // COMMENT: Dark Theme config start
  const [theme] = useContext(ThemeContext);
  const [dark, setDark] = useState(theme === "dark");
  useEffect(() => {
    theme === "dark" ? setDark(true) : setDark(false);
  }, [theme]);

  // COMMENT: Dark Theme config end

  return (
    <div
      className={`relative mx-4 min-xxl:mx-0.5 -bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-3 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
          {/* <div className=" relative bottom-9">
            <div className="flex justify-center">
              <div className="w-66 h-18 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div> */}
        </div>

        {/* Profile Description */}
        <div className="max-sm:w-full w-[33rem] min-[1160px]:p-5">
          {/* w-134 */}
          {/* text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full */}
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8 ${
              dark && "text-black"
            }`}
          >
            I am Professional User Experience Designer
          </h2>
          <div
            className={`text-xs xxs:text-lg lg:text-[18px] font-normal ${
              dark ? "text-gray-800" : "text-gray-600"
            }`}
          >
            <p className={``}>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p className="mt-3">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
          </div>
          <div className="mt-8 flex max-sm:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 min-xxs:py-3 btn-primary text-[16px]"
              href="#!"
            >
              My Projects
            </a>
            {/* w-47.5 h-12 */}
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 min-xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-[16px] ${
                dark && "bg-transparent"
              }`}
              href="#!"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
