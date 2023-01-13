import React from "react";

import { Img, Text, Line, CheckBox, Button, Stack } from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const LoginpageTwoPage = () => {
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

  function handleNavigate14() {
    navigate("/loginpageone");
  }
  function handleNavigate15() {
    navigate("/signuppage");
  }
  function handleNavigate16() {
    navigate("/");
  }

  return (
    <>
      <div className="bg-gray_900 flex flex-col font-poppins items-end justify-start mx-[auto] sm:pl-[15px] md:pl-[40px] pl-[62px] w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end max-w-[1450px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <div className="flex flex-col justify-start sm:mt-[23px] md:mt-[30px] mt-[47px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
              <Img
                src="images/img_clock.svg"
                className="sm:h-[18px] md:h-[23px] h-[35px] max-w-[100%] mb-[1px] sm:w-[17px] md:w-[22px] w-[35px]"
                alt="clock"
              />
              <Img
                src="images/img_trash.svg"
                className="max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[2px] sm:w-[100%] w-[69%]"
                alt="trash"
              />
            </div>
            <Text
              className="ml-[126px] sm:ml-[63px] md:ml-[82px] mt-[145px] sm:mt-[73px] md:mt-[95px] text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Welcome back, Olivia
            </Text>
            <div className="flex flex-col justify-start ml-[119px] md:ml-[77px] mt-[15px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
              <Text className="text-gray_400_b2 w-[auto]" variant="body1">
                Welcome back! Please enter your details.
              </Text>
              <div
                className="common-pointer border border-gray_801 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[22px] md:mt-[29px] mt-[45px] md:p-[11px] p-[18px] sm:px-[15px] sm:py-[9px] rounded-radius20 w-[100%]"
                onClick={googleSignIn}
              >
                <Img
                  src="images/img_google.png"
                  className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[35px] max-w-[100%] mb-[1px] sm:ml-[31px] md:ml-[40px] ml-[62px] sm:w-[17px] md:w-[22px] w-[35px]"
                  alt="Google"
                />
                <Text
                  className="flex-grow font-normal md:ml-[10px] ml-[16px] sm:ml-[8px] sm:mr-[31px] md:mr-[41px] mr-[63px] not-italic text-white_A700"
                  as="h6"
                  variant="h6"
                >
                  Log in with Google
                </Text>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[25px] md:mt-[32px] mt-[50px] w-[100%]">
                <Line className="bg-gray_800 h-[1px] sm:my-[4px] md:my-[5px] my-[9px] w-[39%]" />
                <Text
                  className="font-normal not-italic text-gray_400 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  or
                </Text>
                <Line className="bg-gray_800 h-[1px] sm:my-[4px] md:my-[5px] my-[9px] w-[39%]" />
              </div>
              <Text
                className="font-normal sm:mt-[27px] md:mt-[35px] mt-[54px] not-italic text-gray_400 w-[auto]"
                as="h6"
                variant="h6"
              >
                oliviabrooke3435@gmail.com
              </Text>
              <Line className="bg-gray_800 h-[1px] mt-[12px] sm:mt-[6px] md:mt-[7px] w-[100%]" />
              <Text
                className="font-normal sm:mt-[22px] md:mt-[29px] mt-[45px] not-italic text-gray_400 w-[auto]"
                as="h3"
                variant="h3"
              >
                ********
              </Text>
              <Line className="bg-gray_800 h-[1px] mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]" />
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[13px] md:mt-[17px] mt-[27px] sm:px-[0] w-[100%]">
                <CheckBox
                  className="font-normal not-italic pl-[12px] sm:pl-[6px] md:pl-[7px] text-[14px] text-white_A700_7f"
                  inputClassName="h-[15px] mr-[5px] w-[15px]"
                  name="Remembermefor"
                  label="Remember me for 30 days"
                ></CheckBox>
                <a
                  href={"javascript:"}
                  className="font-normal mt-[1px] not-italic text-[14px] text-white_A700 underline w-[auto]"
                  rel="noreferrer"
                >
                  Forgot password
                </a>
              </div>
              <Button
                className="common-pointer cursor-pointer font-semibold sm:mt-[20px] md:mt-[26px] mt-[40px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[100%]"
                onClick={handleNavigate16}
                size="lg"
              >
                Log in
              </Button>
              <Text
                className="common-pointer font-normal sm:ml-[28px] md:ml-[37px] ml-[57px] sm:mt-[17px] md:mt-[22px] mt-[34px] not-italic text-white_A701 w-[auto]"
                variant="body5"
                onClick={handleNavigate15}
              >
                <span className="text-gray_400_d8 text-[14px] font-poppins">
                  Don’t have an account ?
                </span>
                <span className="text-white_A701 text-[14px] font-poppins">
                  {" "}
                </span>
                <span className="text-white_A700 text-[14px] font-poppins">
                  Sign up for free
                </span>
                <span className="text-white_A701 text-[14px] font-poppins">
                  {" "}
                </span>
              </Text>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col items-center justify-end md:ml-[117px] ml-[180px] sm:mx-[0] sm:pt-[15px] md:pt-[505px] pt-[772px] sm:w-[100%] w-[53%]"
            style={{ backgroundImage: "url('images/img_group51.png')" }}
          >
            <div className="bg-gray_900_33 flex flex-row md:flex-wrap sm:flex-wrap items-start md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
              <div className="flex flex-col justify-start md:mb-[11px] mb-[17px] sm:mb-[8px] md:ml-[5px] ml-[8px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                <Text
                  className="text-shadow-ts1 text-white_A700 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  She-Hulk: Attorney at Law
                </Text>
                <Text
                  className="font-semibold text-shadow-ts1 text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  TV Series | 2022 | TV-14
                </Text>
                <Text
                  className="font-semibold mt-[15px] sm:mt-[7px] md:mt-[9px] text-shadow-ts1 text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Genres : Action , Adventure , Comedy
                </Text>
              </div>
              <Stack className="h-[111px] md:ml-[11px] ml-[18px] sm:ml-[9px] sm:mt-[28px] md:mt-[37px] mt-[57px] relative w-[12%]">
                <Img
                  src="images/img_imdb.png"
                  className="absolute h-[50px] left-[2%] max-w-[100%] top-[0] sm:w-[25px] md:w-[32px] w-[50px]"
                  alt="IMDb"
                />
                <Img
                  src="images/img_circleddownle.png"
                  className="common-pointer absolute h-[70px] max-w-[100%] sm:w-[35px] md:w-[45px] w-[70px]"
                  onClick={handleNavigate14}
                  alt="CircledDownLe"
                />
                <Img
                  src="images/img_star.png"
                  className="absolute h-[20px] max-w-[100%] right-[0] top-[14%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="Star"
                />
              </Stack>
              <div className="flex flex-col items-end justify-start sm:mt-[34px] md:mt-[44px] mt-[68px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                <Text
                  className="font-semibold text-shadow-ts text-white_A700 w-[auto]"
                  variant="body2"
                >
                  5.4 / 10
                </Text>
                <Img
                  src="images/img_circleddownle_70X70.png"
                  className="sm:h-[36px] md:h-[46px] h-[70px] max-w-[100%] mr-[2px] mt-[3px] sm:w-[35px] md:w-[45px] w-[70px]"
                  alt="CircledDownLe One"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginpageTwoPage;
