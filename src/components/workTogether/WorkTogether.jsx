import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WorkTogether = () => {
  return (
    <div className="content pt-25 pb-25">
      <div className="min-sm:w-155 mx-auto text-center">
        <p className="text-white font-semibold text-2xl min-sm:text-3xl min-md:text-5xl pb-8">
          Do you have Project Idia? Let's discuss your project!
        </p>
        <p className="text-[#A5ACB5] text-2xs min-sm:text-lg font-normal text-center pb-8">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <a href="#!" className="btn btn-primary min-sm:w-60 h-10 min-sm:h-12">
          Let's work Together
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
