import React from "react";

import { Img, Text, Line, Input, Button } from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const SignuppagePage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  function handleNavigate24() {
    navigate("/loginpageone");
  }
  function handleNavigate25() {
    navigate("/signuppagefilled");
  }

  return (
    <>
      <div className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-start mx-[auto] sm:pr-[15px] md:pr-[53px] pr-[81px] w-[100%]">
        <div
          className="bg-cover bg-no-repeat flex flex-col items-center justify-start max-w-[936px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
          style={{ backgroundImage: "url('images/img_group41.png')" }}
        >
          <div className="bg-gray_900_07 flex flex-col justify-start sm:p-[15px] md:p-[30px] p-[47px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[14px] md:ml-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
              <Img
                src="images/img_cut.svg"
                className="sm:h-[18px] md:h-[23px] h-[35px] max-w-[100%] mb-[1px] sm:w-[17px] md:w-[22px] w-[35px]"
                alt="cut"
              />
              <Img
                src="images/img_vector.svg"
                className="max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[2px] sm:w-[100%] w-[69%]"
                alt="Vector"
              />
            </div>
            <Text
              className="font-medium leading-[normal] md:mb-[120px] mb-[184px] sm:mb-[93px] md:ml-[5px] ml-[9px] sm:mt-[178px] md:mt-[230px] mt-[352px] sm:mx-[0] text-shadow-ts text-white_A700 sm:w-[100%] w-[83%]"
              variant="body4"
            >
              <span className="text-white_A700 text-[32px] font-poppins font-semibold sm:text-[28px] md:text-[30px]">
                Benefits of your free IMDb account
                <br />
              </span>
              <span className="text-white_A700 text-[24px] font-poppins font-semibold sm:text-[20px] md:text-[22px]">
                <br />
              </span>
              <span className="text-white_A700 text-[20px] font-poppins font-semibold">
                Personalized Recommendations
                <br />
              </span>
              <span className="text-white_A700 text-[20px] font-poppins font-normal not-italic">
                {`Discover shows you'll love.`}
                <br />
              </span>
              <span className="text-white_A700 text-[15px] font-poppins">
                <br />
                <br />
              </span>
              <span className="text-white_A700 text-[20px] font-poppins font-semibold">
                Your Ratings
                <br />
              </span>
              <span className="text-white_A700 text-[20px] font-poppins font-normal not-italic">
                {`Rate and remember everything you've seen.`}
                <br />
              </span>
              <span className="text-white_A700 text-[20px] font-poppins">
                <br />
                <br />
              </span>
              <span className="text-white_A700 text-[20px] font-poppins font-semibold">
                Contribute to IMDb
                <br />
              </span>
              <span className="text-white_A700 text-[20px] font-poppins font-normal not-italic">
                Add data that will be seen by millions of people and get cool
                badges
              </span>
              <span className="text-white_A700 text-[20px] font-poppins">
                .
              </span>
            </Text>
          </div>
        </div>
        <div className="flex flex-col justify-start max-w-[415px] sm:ml-[40px] md:ml-[52px] ml-[auto] mr-[auto] md:mt-[114px] mt-[175px] sm:mt-[88px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="sm:ml-[15px] md:ml-[20px] ml-[31px] text-white_A700 w-[auto]"
            as="h2"
            variant="h2"
          >
            Create an account{" "}
          </Text>
          <Text
            className="mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_400_b2 w-[auto]"
            variant="body1"
          >
            Let’s get started with your 30 days free trial.
          </Text>
          <div className="flex flex-col items-center justify-start ml-[10px] md:ml-[6px] sm:mt-[26px] md:mt-[34px] mt-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
            <div
              className="common-pointer flex flex-col justify-start w-[100%]"
              onClick={handleNavigate25}
            >
              <Text
                className="font-normal not-italic text-gray_400 w-[auto]"
                as="h6"
                variant="h6"
              >
                Name
              </Text>
              <Line className="bg-gray_800 h-[1px] md:mt-[10px] mt-[16px] sm:mt-[8px] w-[100%]" />
            </div>
            <Input
              className="font-normal not-italic p-[0] text-[20px] placeholder:text-gray_400 text-gray_400 w-[100%]"
              wrapClassName="md:mt-[23px] mt-[36px] sm:mt-[18px] w-[100%]"
              type="email"
              name="Group103"
              placeholder="Email"
            ></Input>
            <Input
              className="font-normal not-italic p-[0] text-[20px] placeholder:text-gray_400 text-gray_400 w-[100%]"
              wrapClassName="md:mt-[23px] mt-[36px] sm:mt-[18px] w-[100%]"
              type="password"
              name="Group105"
              placeholder="Password"
            ></Input>
            <Button
              className="cursor-pointer font-semibold sm:mt-[30px] md:mt-[39px] mt-[61px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[100%]"
              size="xl"
            >
              Create account
            </Button>
            <div
              className="common-pointer border border-gray_801 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[15px] md:mt-[19px] mt-[30px] md:p-[11px] p-[18px] sm:px-[15px] sm:py-[9px] rounded-radius20 w-[100%]"
              onClick={googleSignIn}
            >
              <Img
                src="images/img_google.png"
                className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[35px] max-w-[100%] mb-[1px] sm:ml-[31px] md:ml-[40px] ml-[62px] sm:w-[17px] md:w-[22px] w-[35px]"
                alt="Google"
              />
              <Text
                className="flex-grow font-normal ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mr-[25px] md:mr-[32px] mr-[50px] not-italic text-white_A700"
                as="h6"
                variant="h6"
              >
                Sign up with Google
              </Text>
            </div>
            <Text
              className="common-pointer font-normal sm:mt-[19px] md:mt-[25px] mt-[39px] not-italic text-white_A701 w-[auto]"
              variant="body5"
              onClick={handleNavigate24}
            >
              <span className="text-gray_400_d8 text-[14px] font-poppins">
                Already have an account ?
              </span>
              <span className="text-white_A701 text-[14px] font-poppins">
                {" "}
              </span>
              <span className="text-white_A700 text-[14px] font-poppins">
                Log in
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignuppagePage;
