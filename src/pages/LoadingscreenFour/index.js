import React from "react";

import { Stack, Img } from "components";
import { useNavigate } from "react-router-dom";

const LoadingscreenFourPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/loadingscreenfive");
  }

  return (
    <>
      <Stack
        className="common-pointer bg-gray_900 h-[982px] mx-[auto] sm:p-[15px] md:p-[261px] p-[399px] relative w-[100%]"
        onClick={handleNavigate7}
      >
        <Img
          src="images/img_svgjsg2062_cyan_300_183X183.svg"
          className="absolute h-[183px] inset-[0] justify-center m-[auto] max-w-[183px] sm:pl-[15px] sm:pr-[15px] w-[100%] md:w-[119px] sm:w-[92px]"
          alt="SvgjsG2062"
        />
      </Stack>
    </>
  );
};

export default LoadingscreenFourPage;
