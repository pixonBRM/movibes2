import React from "react";

import { Stack, Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const SignuppageconfirmedTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/loginpageone");
  }

  return (
    <>
      <div
        className="common-pointer bg-gray_900 flex flex-col font-poppins items-center justify-end mx-[auto] sm:p-[15px] md:p-[174px] p-[266px] w-[100%]"
        onClick={handleNavigate5}
      >
        <Stack className="bg-cyan_300 h-[300px] max-w-[300px] ml-[auto] mr-[auto] sm:mt-[37px] md:mt-[48px] mt-[74px] sm:pl-[15px] sm:pr-[15px] relative rounded-radius50 shadow-bs1 w-[100%] sm:w-[152px] md:w-[196px]">
          <div className="absolute bg-cyan_300 sm:h-[153px] md:h-[197px] h-[300px] rotate-[90deg] rounded-radius50 shadow-bs2 sm:w-[152px] md:w-[196px] w-[300px]"></div>
          <Img
            src="images/img_done.png"
            className="absolute h-[200px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[101px] md:w-[131px] w-[200px]"
            alt="Done"
          />
        </Stack>
        <Text
          className="font-medium sm:mt-[24px] md:mt-[32px] mt-[49px] text-white_A701 w-[auto]"
          as="h3"
          variant="h3"
        >
          Confirmed!
        </Text>
      </div>
    </>
  );
};

export default SignuppageconfirmedTwoPage;
