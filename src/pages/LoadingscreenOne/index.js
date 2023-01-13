import React from "react";

import { Stack, Img } from "components";
import { useNavigate } from "react-router-dom";

const LoadingscreenOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate30() {
    navigate("/loadingscreentwo");
  }

  return (
    <>
      <Stack
        className="common-pointer bg-gray_900 h-[982px] mx-[auto] sm:p-[15px] md:p-[272px] p-[416px] relative w-[100%]"
        onClick={handleNavigate30}
      >
        <Img
          src="images/img_svgjsg2062.svg"
          className="absolute h-[150px] inset-[0] justify-center m-[auto] max-w-[150px] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[76px] md:w-[98px]"
          alt="SvgjsG2062"
        />
      </Stack>
    </>
  );
};

export default LoadingscreenOnePage;
