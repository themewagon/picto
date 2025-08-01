import React, { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000  ${
        style && style
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-11 h-11 min-sm:w-18 min-sm:h-18 ${
          hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"
        } text-center center rounded-md`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-sm:p-2 sm:w-8 sm:h-8"
        >
          <path d={data?.svgPath} fill={`${hover ? "#FFFFFF" : "#A53DFF"}`} />
        </svg>
      </div>
      <div className="mt-3 min-xs:mt-8 min-sm:mt-8">
        <p className="font-semibold min-sm:text-xl">{`${data?.id}. ${data?.title}`}</p>
        <p className="mt-3 text-[13px] min-sm:text-[16px] text-[#697482] md:font-medium">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
