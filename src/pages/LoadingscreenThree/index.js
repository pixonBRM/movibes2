import React from "react";

import { Stack, Img } from "components";
import { useNavigate } from "react-router-dom";

const LoadingscreenThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/loadingscreenfour");
  }

  return (
    <>
      <Stack
        className="common-pointer bg-gray_900 h-[982px] mx-[auto] sm:p-[15px] md:p-[258px] p-[394px] relative w-[100%]"
        onClick={handleNavigate2}
      >
        <Img
          src="images/img_svgjsg2062_cyan_300.svg"
          className="absolute h-[192px] inset-[0] justify-center m-[auto] max-w-[192px] sm:pl-[15px] sm:pr-[15px] w-[100%] md:w-[125px] sm:w-[97px]"
          alt="SvgjsG2062"
        />
      </Stack>
    </>
  );
};

export default LoadingscreenThreePage;
