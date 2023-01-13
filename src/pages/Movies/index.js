import React from "react";

import { Img, Text, Line, Stack, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const MoviesPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }
  function handleNavigate1() {
    navigate("/loginpageone");
  }
  function handleNavigate6() {
    navigate("/moviesone");
  }

  return (
    <>
      <div className="bg-gray_900 flex flex-col font-poppins items-center justify-end mx-[auto] sm:pr-[15px] md:pr-[33px] pr-[51px] w-[100%]">
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1461px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <aside className="md:hidden sm:hidden w-[16%]">
            <div className="">
              <div className="bg-gray_901 flex flex-col justify-start sm:py-[15px] md:py-[36px] py-[56px] rounded-bl-[0] rounded-br-[45px] rounded-tl-[0] rounded-tr-[45px] w-[100%]">
                <Img
                  src="images/img_vector_cyan_300.svg"
                  className="max-w-[100%] sm:ml-[27px] md:ml-[35px] ml-[54px] sm:w-[100%] w-[53%]"
                  alt="Vector"
                />
                <div
                  className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[27px] ml-[42px] mt-[109px] sm:mt-[55px] md:mt-[71px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]"
                  onClick={handleNavigate}
                >
                  <Img
                    src="images/img_home_25X25.png"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[25px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[25px]"
                    alt="Home"
                  />
                  <Text
                    className="flex-grow font-semibold ml-[15px] sm:ml-[7px] md:ml-[9px] text-gray_700 text-shadow-ts"
                    as="h6"
                    variant="h6"
                  >
                    Home
                  </Text>
                </div>
                <div className="bg-cyan_300_66 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mt-[23px] md:mt-[30px] mt-[47px] px-[2px] shadow-bs1 w-[100%]">
                  <Img
                    src="images/img_movieprojector_25X25.png"
                    className="sm:h-[13px] md:h-[17px] h-[25px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[25px]"
                    alt="MovieProjector"
                  />
                  <Text
                    className="font-semibold ml-[15px] sm:ml-[7px] md:ml-[9px] text-cyan_300 text-shadow-ts w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Movies
                  </Text>
                  <Line className="bg-cyan_300_bf sm:h-[44px] md:h-[57px] h-[86px] sm:ml-[35px] md:ml-[45px] ml-[69px] shadow-bs1 w-[1px]" />
                </div>
                <div className="flex flex-col justify-start md:ml-[27px] ml-[42px] sm:mt-[23px] md:mt-[30px] mt-[46px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                    <Img
                      src="images/img_tvshow.png"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[25px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[25px]"
                      alt="TVShow"
                    />
                    <Text
                      className="flex-grow font-semibold ml-[15px] sm:ml-[7px] md:ml-[9px] text-gray_700 text-shadow-ts"
                      as="h6"
                      variant="h6"
                    >
                      TV Series
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[38px] md:mt-[49px] mt-[75px] w-[100%]">
                    <Img
                      src="images/img_calendar.png"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[25px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[25px]"
                      alt="Calendar"
                    />
                    <Text
                      className="flex-grow font-semibold ml-[15px] sm:ml-[7px] md:ml-[9px] text-gray_700 text-shadow-ts"
                      as="h6"
                      variant="h6"
                    >
                      Upcoming
                    </Text>
                  </div>
                </div>
                <Stack className="h-[240px] sm:ml-[14px] md:ml-[18px] ml-[28px] sm:mt-[24px] md:mt-[31px] mt-[48px] relative sm:w-[100%] w-[76%]">
                  <div className="absolute bg-gray_900 bottom-[0] flex flex-col items-center justify-center p-[15px] sm:p-[7px] md:p-[9px] rounded-radius20 shadow-bs1 w-[100%]">
                    <Text
                      className="font-semibold leading-[normal] sm:mt-[13px] md:mt-[17px] mt-[27px] sm:mx-[0] text-gray_200_cc sm:w-[100%] w-[98%]"
                      variant="body4"
                    >
                      Play movie quizes
                      <br />
                      and earn
                      <br />
                      free tickets
                    </Text>
                    <Text
                      className="font-medium leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[9px] text-gray_700 w-[100%]"
                      variant="body7"
                    >
                      50k people are playing
                      <br />
                      now
                    </Text>
                    <Button
                      className="cursor-pointer font-medium mb-[1px] min-w-[80%] sm:mt-[4px] md:mt-[5px] mt-[8px] text-[12px] text-center text-cyan_300 w-[max-content]"
                      variant="OutlineBlack9003f"
                    >
                      Start playing
                    </Button>
                  </div>
                  <div className="absolute bg-cyan_300_66 flex flex-col sm:h-[31px] md:h-[40px] h-[60px] inset-x-[0] items-center justify-start mx-[auto] px-[12px] sm:px-[6px] md:px-[7px] rounded-radius50 shadow-bs3 top-[0] sm:w-[30px] md:w-[39px] w-[60px]">
                    <Stack
                      className="bg-cover bg-no-repeat h-[35px] mb-[1px] relative sm:w-[17px] md:w-[22px] w-[35px]"
                      style={{
                        backgroundImage: "url('images/img_group38.png')",
                      }}
                    >
                      <Img
                        src="images/img_ticketconfirme.png"
                        className="absolute h-[35px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[35px]"
                        alt="TicketConfirme"
                      />
                    </Stack>
                  </div>
                </Stack>
                <div
                  className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[13px] sm:mb-[6px] md:mb-[8px] md:ml-[27px] ml-[42px] sm:mt-[22px] md:mt-[28px] mt-[44px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]"
                  onClick={handleNavigate1}
                >
                  <Img
                    src="images/img_logout.png"
                    className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                    alt="Logout"
                  />
                  <Text
                    className="flex-grow font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] text-gray_700 text-shadow-ts"
                    as="h6"
                    variant="h6"
                  >
                    Log out
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[42px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
              <div className="bg-gray_901 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] my-[2px] p-[13px] sm:p-[6px] md:p-[8px] rounded-radius30 shadow-bs4 sm:w-[100%] w-[75%]">
                <Img
                  src="images/img_search.png"
                  className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[35px] max-w-[100%] sm:ml-[14px] md:ml-[18px] ml-[28px] sm:w-[17px] md:w-[22px] w-[35px]"
                  alt="Search"
                />
                <Text
                  className="flex-grow font-semibold sm:ml-[12px] md:ml-[16px] ml-[25px] mt-[1px] text-gray_700 text-shadow-ts"
                  as="h3"
                  variant="h3"
                >
                  Search for movies, TV shows...
                </Text>
              </div>
              <div className="bg-gray_901 flex flex-col sm:h-[36px] md:h-[46px] h-[70px] items-center ml-[145px] sm:ml-[73px] md:ml-[95px] px-[15px] sm:px-[7px] md:px-[9px] rounded-radius50 shadow-bs sm:w-[35px] md:w-[45px] w-[70px]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col sm:h-[21px] md:h-[27px] h-[40px] items-end justify-start px-[4px] sm:w-[20px] md:w-[26px] w-[40px]"
                  style={{ backgroundImage: "url('images/img_group22.png')" }}
                >
                  <div className="bg-cyan_300 sm:h-[5px] md:h-[6px] h-[8px] sm:mb-[12px] md:mb-[15px] mb-[24px] mr-[4px] rounded-radius50 shadow-bs1 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                </div>
              </div>
              <Img
                src="images/img_rectangle10.png"
                className="sm:h-[36px] md:h-[46px] h-[70px] sm:ml-[12px] md:ml-[15px] ml-[24px] rounded-radius50 sm:w-[35px] md:w-[45px] w-[70px]"
                alt="RectangleTen"
              />
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[19px] md:mt-[25px] mt-[39px] w-[100%]">
              <List
                className="sm:gap-[20px] md:gap-[26px] gap-[40.4px] grid min-h-[auto] sm:mt-[4px] md:mt-[5px] mt-[9px] sm:w-[100%] w-[76%]"
                orientation="vertical"
              >
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                    style={{ backgroundImage: "url('images/img_group34.png')" }}
                  >
                    <div className="bg-gray_200_26 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[4px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                      <Img
                        src="images/img_star.png"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="Star"
                      />
                      <Text
                        className="flex-grow sm:mx-[2px] md:mx-[3px] mx-[5px] text-gray_200"
                        variant="body3"
                      >
                        8.8
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                    style={{ backgroundImage: "url('images/img_group35.png')" }}
                    onClick={handleNavigate6}
                  >
                    <div className="bg-gray_900_26 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[4px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                      <Img
                        src="images/img_star.png"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="Star One"
                      />
                      <Text
                        className="flex-grow sm:mx-[2px] md:mx-[3px] mx-[5px] text-gray_200"
                        variant="body3"
                      >
                        8.5
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                    style={{ backgroundImage: "url('images/img_group36.png')" }}
                  >
                    <div className="bg-gray_200_26 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[4px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                      <Img
                        src="images/img_star.png"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="Star Two"
                      />
                      <Text
                        className="flex-grow sm:mx-[2px] md:mx-[3px] mx-[5px] text-gray_200"
                        variant="body3"
                      >
                        7.0
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                    style={{ backgroundImage: "url('images/img_group37.png')" }}
                  >
                    <div className="bg-gray_200_26 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[4px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                      <Img
                        src="images/img_star.png"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="Star Three"
                      />
                      <Text
                        className="flex-grow sm:mx-[2px] md:mx-[3px] mx-[5px] text-gray_200"
                        variant="body3"
                      >
                        7.8
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Text
                        className="font-semibold text-gray_200 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Upcoming
                      </Text>
                      <Text
                        className="font-semibold mt-[1px] text-gray_700 w-[auto]"
                        variant="body4"
                      >
                        See all
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[13px] md:mt-[17px] mt-[27px] w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_group23.png')",
                        }}
                      >
                        <div className="bg-gray_900_26 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[4px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                          <Img
                            src="images/img_star.png"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="Star One"
                          />
                          <Text
                            className="flex-grow md:mx-[3px] sm:mx-[3px] mx-[6px] text-gray_200"
                            variant="body3"
                          >
                            7.3
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_group24.png')",
                        }}
                      >
                        <div className="bg-gray_200_19 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[4px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                          <Img
                            src="images/img_star.png"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="Star One One"
                          />
                          <Text
                            className="flex-grow sm:mx-[2px] md:mx-[3px] mx-[5px] text-gray_200"
                            variant="body3"
                          >
                            7.4
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_rectangle19.png"
                        className="max-w-[100%] rounded-radius20 w-[23%]"
                        alt="RectangleNineteen"
                      />
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_group25.png')",
                        }}
                      >
                        <div className="bg-gray_200_19 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[4px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                          <Img
                            src="images/img_star.png"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="Star Two One"
                          />
                          <Text
                            className="flex-grow sm:mx-[2px] md:mx-[3px] mx-[5px] text-gray_200"
                            variant="body3"
                          >
                            7.4
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-semibold text-gray_200 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        TV Series
                      </Text>
                      <Text
                        className="font-semibold text-gray_700 w-[auto]"
                        variant="body4"
                      >
                        See all
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[18px] md:mt-[23px] mt-[36px] w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_group26.png')",
                        }}
                      >
                        <div className="bg-gray_900_26 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[2px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                          <Img
                            src="images/img_star.png"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="Star Two"
                          />
                          <Text
                            className="flex-grow md:mx-[3px] sm:mx-[3px] mx-[6px] text-gray_200"
                            variant="body3"
                          >
                            6.8
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_group27.png')",
                        }}
                      >
                        <div className="bg-gray_200_19 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[2px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                          <Img
                            src="images/img_star.png"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="Star One Two"
                          />
                          <Text
                            className="flex-grow md:mx-[3px] sm:mx-[3px] mx-[6px] text-gray_200"
                            variant="body3"
                          >
                            5.0
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_group28.png')",
                        }}
                      >
                        <div className="bg-gray_200_19 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[2px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                          <Img
                            src="images/img_star.png"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="Star Two Two"
                          />
                          <Text
                            className="flex flex-grow items-center md:mx-[3px] sm:mx-[3px] mx-[6px] text-gray_200"
                            variant="body3"
                          >
                            8.7
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_group29.png')",
                        }}
                      >
                        <div className="bg-gray_200_19 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[2px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                          <Img
                            src="images/img_star.png"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="Star Three One"
                          />
                          <Text
                            className="flex-grow sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mr-[4px] md:mr-[5px] mr-[9px] text-gray_200"
                            variant="body3"
                          >
                            7.3
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Text
                        className="font-semibold text-gray_200 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Popular movies on september
                      </Text>
                      <Text
                        className="font-semibold sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_700 w-[auto]"
                        variant="body4"
                      >
                        See all
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[13px] md:mt-[17px] mt-[27px] w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_group30.png')",
                        }}
                      >
                        <div className="bg-gray_900_26 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[2px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                          <Img
                            src="images/img_star.png"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="Star Three"
                          />
                          <Text
                            className="flex-grow md:mx-[3px] sm:mx-[3px] mx-[6px] text-gray_200"
                            variant="body3"
                          >
                            6.5
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_group31.png')",
                        }}
                      >
                        <div className="bg-gray_200_19 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[2px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                          <Img
                            src="images/img_star.png"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="Star One Three"
                          />
                          <Text
                            className="flex-grow sm:ml-[2px] md:ml-[3px] ml-[5px] mr-[12px] sm:mr-[6px] md:mr-[7px] text-gray_200"
                            variant="body3"
                          >
                            6.1
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_group32.png')",
                        }}
                      >
                        <div className="bg-gray_900_19 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[2px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                          <Img
                            src="images/img_star.png"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="Star Two Three"
                          />
                          <Text
                            className="flex flex-grow items-center sm:ml-[2px] md:ml-[3px] ml-[5px] sm:mr-[4px] md:mr-[5px] mr-[8px] text-white_A701"
                            variant="body3"
                          >
                            6.7
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] pb-[132px] sm:pb-[15px] md:pb-[86px] pl-[132px] sm:pl-[15px] md:pl-[86px] rounded-radius20 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_group33.png')",
                        }}
                      >
                        <div className="bg-gray_200_19 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[101px] mb-[155px] sm:mb-[78px] p-[2px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[20px] w-[100%]">
                          <Img
                            src="images/img_star.png"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="Star Three Two"
                          />
                          <Text
                            className="flex-grow md:mx-[3px] sm:mx-[3px] mx-[6px] text-gray_200"
                            variant="body3"
                          >
                            6.0
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="font-medium text-gray_200 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Categories
                  </Text>
                  <Text
                    className="font-medium mt-[1px] text-gray_700 w-[auto]"
                    variant="body5"
                  >
                    Uncheck all
                  </Text>
                </div>
                <div className="bg-gray_901 flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[33px] p-[15px] sm:p-[7px] md:p-[9px] rounded-radius30 w-[100%]">
                  <List
                    className="sm:gap-[2px] md:gap-[3px] gap-[5.6px] grid min-h-[auto] sm:w-[100%] w-[94%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            Action
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] sm:mt-[2px] md:mt-[3px] mt-[5px] w-[100%]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            Adventure
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo One"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] w-[100%]" />
                      </div>
                    </div>
                  </List>
                  <List
                    className="sm:gap-[2px] md:gap-[3px] gap-[5.87px] grid min-h-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:w-[100%] w-[96%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            Animated
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo Two"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] w-[100%]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            Comedy
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo Three"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] w-[100%]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            Crime
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo Four"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] sm:w-[100%] w-[99%]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            Fantasy
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo Five"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] sm:w-[100%] w-[98%]" />
                      </div>
                    </div>
                  </List>
                  <Text
                    className="mb-[1px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-gray_700 w-[auto]"
                    variant="body6"
                  >
                    See more
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[13px] md:mt-[17px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="font-medium text-gray_200 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Services
                  </Text>
                  <Text
                    className="font-medium mt-[2px] text-gray_700 w-[auto]"
                    variant="body5"
                  >
                    Uncheck all
                  </Text>
                </div>
                <div className="bg-gray_901 flex flex-col items-center justify-start sm:mt-[19px] md:mt-[24px] mt-[38px] p-[15px] sm:p-[7px] md:p-[9px] rounded-radius30 w-[100%]">
                  <List
                    className="sm:gap-[2px] md:gap-[3px] gap-[5.6px] grid min-h-[auto] sm:w-[100%] w-[96%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-center justify-start ml-[4px] sm:mx-[0] my-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            Netflix
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo Six"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] sm:mt-[2px] md:mt-[3px] mt-[5px] w-[100%]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[3px] sm:mx-[0] my-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            Prime video
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo Seven"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] w-[100%]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[2px] sm:mx-[0] my-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            Disney +
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo Eight"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] w-[100%]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:mx-[0] mx-[auto] my-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            HBO max
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo Nine"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] w-[100%]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start my-[0] sm:px-[0] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            Hulu
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo Ten"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] sm:w-[100%] w-[99%]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start my-[0] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Text
                            className="flex-grow font-medium text-gray_200"
                            variant="body4"
                          >
                            Starz
                          </Text>
                          <Img
                            src="images/img_checkedcheckbo.png"
                            className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                            alt="CheckedCheckbo Eleven"
                          />
                        </div>
                        <Line className="bg-gray_700_4c h-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] sm:w-[100%] w-[98%]" />
                      </div>
                    </div>
                  </List>
                  <Text
                    className="mb-[1px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-gray_700 w-[auto]"
                    variant="body6"
                  >
                    See more
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[19px] md:mt-[24px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="flex-grow font-medium mt-[2px] text-gray_200"
                    as="h6"
                    variant="h6"
                  >
                    Filters
                  </Text>
                  <Img
                    src="images/img_expandarrow.png"
                    className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                    alt="ExpandArrow"
                  />
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[16px] md:mt-[21px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="flex-grow font-medium text-gray_200"
                    as="h6"
                    variant="h6"
                  >
                    Mood
                  </Text>
                  <Img
                    src="images/img_expandarrow.png"
                    className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                    alt="ExpandArrow One"
                  />
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[16px] md:mt-[21px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="flex-grow font-medium text-gray_200"
                    as="h6"
                    variant="h6"
                  >
                    Year
                  </Text>
                  <Img
                    src="images/img_expandarrow.png"
                    className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                    alt="ExpandArrow Two"
                  />
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[16px] md:mt-[21px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="flex-grow font-medium text-gray_200"
                    as="h6"
                    variant="h6"
                  >
                    Language
                  </Text>
                  <Img
                    src="images/img_expandarrow.png"
                    className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                    alt="ExpandArrow Three"
                  />
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[16px] md:mt-[21px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="flex-grow font-medium text-gray_200"
                    as="h6"
                    variant="h6"
                  >
                    Age rating
                  </Text>
                  <Img
                    src="images/img_expandarrow.png"
                    className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                    alt="ExpandArrow Four"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
