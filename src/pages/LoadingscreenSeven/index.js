import React from "react";

import { Img } from "components";
import { useNavigate } from "react-router-dom";

const LoadingscreenSevenPage = () => {
  const navigate = useNavigate();

  function handleNavigate27() {
    navigate("/signuppage");
  }

  return (
    <>
      <div
        className="common-pointer bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center mx-[auto] sm:p-[15px] md:p-[270px] p-[413px] w-[100%]"
        onClick={handleNavigate27}
      >
        <Img
          src="images/img_svgjsg2062.svg"
          className="h-[150px] sm:h-[77px] md:h-[99px] max-w-[150px] mb-[4px] sm:ml-[22px] md:ml-[29px] ml-[auto] mr-[auto] mt-[1px] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[76px] md:w-[98px]"
          alt="SvgjsG2062"
        />
        <Img
          src="images/img_vector_cyan_300.svg"
          className="max-w-[408px] sm:ml-[17px] md:ml-[22px] ml-[auto] sm:mr-[22px] md:mr-[29px] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
          alt="Vector"
        />
      </div>
    </>
  );
};

export default LoadingscreenSevenPage;
