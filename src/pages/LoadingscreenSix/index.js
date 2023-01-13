import React from "react";

import { Stack, Img } from "components";
import { useNavigate } from "react-router-dom";

const LoadingscreenSixPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/loadingscreenseven");
  }

  return (
    <>
      <Stack
        className="common-pointer bg-gray_900 h-[982px] mx-[auto] sm:p-[15px] md:p-[268px] p-[409px] relative w-[100%]"
        onClick={handleNavigate3}
      >
        <Img
          src="images/img_svgjsg2062_cyan_300_162X162.svg"
          className="absolute h-[162px] inset-[0] justify-center m-[auto] max-w-[162px] sm:pl-[15px] sm:pr-[15px] w-[100%] md:w-[106px] sm:w-[82px]"
          alt="SvgjsG2062"
        />
      </Stack>
    </>
  );
};

export default LoadingscreenSixPage;
