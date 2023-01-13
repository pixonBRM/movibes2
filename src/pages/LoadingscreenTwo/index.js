import React from "react";

import { Stack, Img } from "components";
import { useNavigate } from "react-router-dom";

const LoadingscreenTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate19() {
    navigate("/loadingscreenthree");
  }

  return (
    <>
      <Stack
        className="common-pointer bg-gray_900 h-[982px] mx-[auto] sm:p-[15px] md:p-[252px] p-[386px] relative w-[100%]"
        onClick={handleNavigate19}
      >
        <Img
          src="images/img_svgjsg2062_cyan_300_208X208.svg"
          className="absolute h-[208px] inset-[0] justify-center m-[auto] max-w-[208px] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[105px] md:w-[136px]"
          alt="SvgjsG2062"
        />
      </Stack>
    </>
  );
};

export default LoadingscreenTwoPage;
