import React from "react";

import { Text } from "components";
import { useNavigate } from "react-router-dom";

const SignuppageconfirmedOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate13() {
    navigate("/signuppageconfirmedtwo");
  }

  return (
    <>
      <div
        className="common-pointer bg-gray_900 flex flex-col font-poppins items-center justify-end mx-[auto] sm:p-[15px] md:p-[169px] p-[259px] w-[100%]"
        onClick={handleNavigate13}
      >
        <div className="bg-cyan_300 flex flex-col sm:h-[153px] md:h-[197px] h-[300px] items-center justify-start max-w-[300px] ml-[auto] mr-[auto] sm:mt-[41px] md:mt-[53px] mt-[82px] sm:pl-[15px] sm:pr-[15px] rounded-radius50 shadow-bs1 w-[100%] sm:w-[152px] md:w-[196px]">
          <div className="bg-cyan_300 sm:h-[153px] md:h-[197px] h-[300px] rotate-[90deg] rounded-radius50 shadow-bs2 sm:w-[152px] md:w-[196px] w-[300px]"></div>
        </div>
        <Text
          className="font-medium sm:mt-[26px] md:mt-[34px] mt-[52px] text-white_A701 w-[auto]"
          as="h3"
          variant="h3"
        >
          Processing ...
        </Text>
      </div>
    </>
  );
};

export default SignuppageconfirmedOnePage;
