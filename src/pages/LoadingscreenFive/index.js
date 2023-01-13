import React from "react";

import { Stack, Img } from "components";
import { useNavigate } from "react-router-dom";

const LoadingscreenFivePage = () => {
  const navigate = useNavigate();

  function handleNavigate21() {
    navigate("/loadingscreensix");
  }

  return (
    <>
      <Stack
        className="common-pointer bg-gray_900 h-[982px] mx-[auto] sm:p-[15px] md:p-[252px] p-[385px] relative w-[100%]"
        onClick={handleNavigate21}
      >
        <Img
          src="images/img_svgjsg2062_cyan_300_211X211.svg"
          className="absolute h-[211px] inset-[0] justify-center m-[auto] max-w-[211px] sm:pl-[15px] sm:pr-[15px] w-[100%] sm:w-[107px] md:w-[138px]"
          alt="SvgjsG2062"
        />
      </Stack>
    </>
  );
};

export default LoadingscreenFivePage;
