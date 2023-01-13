import React from "react";

import { Img, Text, Line, Stack, Button, Input, List } from "components";
import { useNavigate } from "react-router-dom";

const MoviesOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate28() {
    navigate("/");
  }
  function handleNavigate29() {
    navigate("/loginpageone");
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
                  onClick={handleNavigate28}
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
                  onClick={handleNavigate29}
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
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mt-[22px] md:mt-[29px] mt-[45px] sm:p-[15px] md:p-[56px] p-[86px] rounded-radius20 w-[100%]"
              style={{ backgroundImage: "url('images/img_group56.png')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                <Stack className="bg-white_A700_59 h-[110px] outline outline-[1px] outline-gray_200_33 sm:p-[15px] md:p-[18px] p-[28px] relative rounded-radius50 shadow-bs1 w-[110px] sm:w-[55px] md:w-[72px]">
                  <Img
                    src="images/img_play_54X54.png"
                    className="absolute h-[54px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[27px] md:w-[35px] w-[54px]"
                    alt="Play"
                  />
                </Stack>
                <Text
                  className="font-medium sm:mt-[4px] md:mt-[5px] mt-[9px] text-gray_200 text-shadow-ts w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Watch Trailer
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <div className="flex flex-col items-center sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] rounded-radius15 sm:w-[100%] w-[99%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                      <Text
                        className="sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_200 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        <span className="text-gray_200 text-[23px] font-poppins font-medium sm:text-[19px] md:text-[21px]">
                          Top Gun: Maverick
                        </span>
                        <span className="text-gray_200 text-[23px] font-poppins font-normal sm:text-[19px] md:text-[21px] not-italic">
                          <br /> • <br />
                        </span>
                        <span className="text-gray_200 text-[23px] font-poppins font-medium sm:text-[19px] md:text-[21px]">
                          2022
                        </span>
                        <span className="text-gray_200 text-[23px] font-poppins font-normal sm:text-[19px] md:text-[21px] not-italic">
                          <br /> • <br />
                        </span>
                        <span className="text-gray_200 text-[23px] font-poppins font-medium sm:text-[19px] md:text-[21px]">
                          PG-13
                        </span>
                        <span className="text-gray_200 text-[23px] font-poppins font-bold sm:text-[19px] md:text-[21px]">
                          <br /> • <br />
                        </span>
                        <span className="text-gray_200 text-[23px] font-poppins font-medium sm:text-[19px] md:text-[21px]">
                          2h 10m
                        </span>
                      </Text>
                      <Text
                        className="border border-gray_200_59 border-solid font-medium mb-[2px] md:ml-[11px] ml-[17px] sm:ml-[8px] md:px-[11px] sm:px-[15px] px-[17px] py-[3px] rounded-radius15 text-gray_200_cc text-shadow-ts w-[auto]"
                        variant="body4"
                      >
                        Action
                      </Text>
                      <Text
                        className="border border-gray_200_59 border-solid font-medium mb-[2px] ml-[11px] sm:ml-[5px] md:ml-[7px] px-[15px] sm:px-[7px] md:px-[9px] py-[3px] rounded-radius15 text-gray_200_cc text-shadow-ts w-[auto]"
                        variant="body4"
                      >
                        Drama
                      </Text>
                    </div>
                    <Text
                      className="font-normal leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[25px] not-italic text-gray_200 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      After thirty years, Maverick is still pushing the envelope
                      as a top naval aviator,
                      <br />
                      {`but must confront ghosts of his past when he leads TOP GUN's elite graduates`}
                      <br />
                      on a mission that demands the ultimate sacrifice from
                      those chosen to fly it.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Line className="bg-gray_200_3f h-[1px] w-[100%]" />
                    <div className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[21px] w-[100%]">
                      <Text
                        className="font-normal md:ml-[3px] sm:ml-[3px] ml-[6px] not-italic text-white_A701 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        <span className="text-gray_200 text-[20px] font-poppins">
                          Director :
                        </span>
                        <span className="text-white_A701 text-[20px] font-poppins">
                          {" "}
                        </span>
                        <span className="text-cyan_300 text-[20px] font-poppins">
                          Joseph Kosinski
                        </span>
                      </Text>
                      <Line className="bg-gray_200_3f h-[1px] mt-[15px] sm:mt-[7px] md:mt-[9px] w-[100%]" />
                    </div>
                    <Input
                      className="font-normal not-italic p-[0] text-[20px] placeholder:text-gray_200 text-gray_200 w-[100%]"
                      wrapClassName="md:mt-[13px] mt-[21px] sm:mt-[10px] w-[100%]"
                      name="language"
                      placeholder="Writers :  Jim Cash, Jack Epps Jr,  Peter Craig"
                    ></Input>
                    <Input
                      className="font-normal not-italic p-[0] text-[20px] placeholder:text-gray_200 text-gray_200 w-[100%]"
                      wrapClassName="md:mt-[13px] mt-[21px] sm:mt-[10px] w-[100%]"
                      name="GroupEightySix"
                      placeholder={`Stars
: Tom Cruise, Jennifer Connelly, Miles Teller`}
                    ></Input>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <div className="bg-gray_900_cc flex flex-row md:flex-wrap sm:flex-wrap items-center sm:pr-[15px] md:pr-[17px] pr-[26px] rounded-radius10 shadow-bs5 w-[100%]">
                        <Button
                          className="cursor-pointer font-medium min-w-[34%] text-[20px] text-center text-white_A701 w-[max-content]"
                          shape="RoundedBorder10"
                          size="md"
                          variant="FillCyan300b2"
                        >
                          Top rated movie #65
                        </Button>
                        <Text
                          className="font-medium sm:ml-[12px] md:ml-[15px] ml-[24px] text-gray_200 text-shadow-ts2 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Awards
                          <br /> 9 nominations
                        </Text>
                        <Img
                          src="images/img_expandarrow.png"
                          className="sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:ml-[111px] md:ml-[144px] ml-[220px] sm:w-[15px] md:w-[19px] w-[30px]"
                          alt="ExpandArrow"
                        />
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[23px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                        <Text
                          className="flex-grow font-medium text-gray_200"
                          as="h4"
                          variant="h4"
                        >
                          Top Cast
                        </Text>
                        <Img
                          src="images/img_expandarrow_30X30.png"
                          className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] ml-[14px] sm:ml-[7px] md:ml-[9px] sm:w-[15px] md:w-[19px] w-[30px]"
                          alt="ExpandArrow One"
                        />
                      </div>
                      <List
                        className="sm:gap-[33px] md:gap-[43px] gap-[66px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[15px] md:mt-[20px] mt-[31px] sm:w-[100%] w-[98%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                          <div className="bg-teal_50 flex flex-col h-[140px] sm:h-[72px] md:h-[92px] items-center justify-start rounded-radius50 w-[140px] sm:w-[71px] md:w-[91px]">
                            <Img
                              src="images/img_ellipse9.png"
                              className="h-[140px] sm:h-[72px] md:h-[92px] rounded-radius50 w-[100%]"
                              alt="EllipseNine"
                            />
                          </div>
                          <Text
                            className="font-medium leading-[normal] mt-[15px] sm:mt-[7px] md:mt-[9px] text-center text-gray_200 w-[100%]"
                            variant="body4"
                          >
                            <span className="text-gray_200 text-[15px] font-poppins">
                              Tom Cruise
                              <br />
                            </span>
                            <span className="text-gray_200_7f text-[15px] font-poppins">
                              Capt. Pete Mitchell
                              <br />
                              (Maverick)
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                          <div className="bg-gray_100 flex flex-col h-[140px] sm:h-[72px] md:h-[92px] items-center justify-start rounded-radius50 w-[100%]">
                            <Img
                              src="images/img_ellipse10.png"
                              className="h-[140px] sm:h-[72px] md:h-[92px] rounded-radius50 w-[100%]"
                              alt="EllipseTen"
                            />
                          </div>
                          <Text
                            className="font-medium leading-[normal] mt-[15px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] text-center text-gray_200 sm:w-[100%] w-[98%]"
                            variant="body4"
                          >
                            <span className="text-gray_200 text-[15px] font-poppins">
                              Jennifer Connelly
                              <br />
                              <br />
                            </span>
                            <span className="text-gray_200_7f text-[15px] font-poppins">
                              Penny Benjamin
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                          <div className="bg-teal_51 flex flex-col h-[140px] sm:h-[72px] md:h-[92px] items-center justify-start rounded-radius50 w-[140px] sm:w-[71px] md:w-[91px]">
                            <Img
                              src="images/img_ellipse9_140X140.png"
                              className="h-[140px] sm:h-[72px] md:h-[92px] rounded-radius50 w-[100%]"
                              alt="EllipseNine One"
                            />
                          </div>
                          <Text
                            className="font-medium leading-[normal] mt-[15px] sm:mt-[7px] md:mt-[9px] text-center text-gray_200 w-[100%]"
                            variant="body4"
                          >
                            <span className="text-gray_200 text-[15px] font-poppins">
                              Miles Teller
                              <br />
                              <br />
                            </span>
                            <span className="text-gray_200_7f text-[15px] font-poppins">
                              Lt. Bradley Bradshaw
                              <br />
                              (Rooster)
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                          <div className="bg-bluegray_300 flex flex-col h-[140px] sm:h-[72px] md:h-[92px] items-center justify-start rounded-radius50 w-[140px] sm:w-[71px] md:w-[91px]">
                            <Img
                              src="images/img_ellipse9_1.png"
                              className="h-[140px] sm:h-[72px] md:h-[92px] rounded-radius50 w-[100%]"
                              alt="EllipseNine Two"
                            />
                          </div>
                          <Text
                            className="font-medium leading-[normal] mt-[15px] sm:mt-[7px] md:mt-[9px] text-center text-gray_200 w-[100%]"
                            variant="body4"
                          >
                            <span className="text-gray_200 text-[15px] font-poppins">
                              Val Kilmer
                              <br />
                              <br />
                            </span>
                            <span className="text-gray_200_7f text-[15px] font-poppins">
                              Adm. Tom Kazansky
                              <br />
                              (Iceman)
                            </span>
                          </Text>
                        </div>
                      </List>
                      <Line className="bg-gray_200_3f h-[1px] sm:mt-[17px] md:mt-[22px] mt-[34px] w-[100%]" />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[3px] ml-[6px] mt-[15px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="flex-grow font-normal not-italic text-gray_200"
                          as="h6"
                          variant="h6"
                        >
                          All cast & crew
                        </Text>
                        <Img
                          src="images/img_expandarrow.png"
                          className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                          alt="ExpandArrow Two"
                        />
                      </div>
                      <Line className="bg-gray_200_3f h-[1px] mt-[15px] sm:mt-[7px] md:mt-[9px] w-[100%]" />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[15px] sm:mt-[7px] md:mt-[9px] sm:px-[0] w-[100%]">
                        <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                          <Text
                            className="font-medium leading-[normal] sm:mx-[0] text-gray_200 sm:w-[100%] w-[91%]"
                            as="h6"
                            variant="h6"
                          >
                            {`'Top Gun' Trivia, Facts, and`}
                            <br />
                            Figures
                          </Text>
                          <Text
                            className="font-normal leading-[normal] mt-[15px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_200 w-[100%]"
                            variant="body2"
                          >
                            How expensive was Top Gun to
                            <br />
                            {`make? In this episode of "By the`}
                            <br />
                            {`Numbers," we break down all the`}
                            <br />
                            statistics you need to know
                            <br />
                            {`(and some you don't) of the`}
                            <br />
                            {`original '80s classic 'Top Gun.'`}
                          </Text>
                          <Text
                            className="font-normal mt-[15px] sm:mt-[7px] md:mt-[9px] not-italic text-cyan_300 w-[auto]"
                            variant="body2"
                          >
                            Learn more
                          </Text>
                        </div>
                        <Img
                          src="images/img_rectangle35.png"
                          className="max-w-[100%] rounded-radius10 sm:w-[100%] w-[59%]"
                          alt="RectangleThirtyFive"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:mt-[19px] md:mt-[24px] mt-[38px] sm:px-[0] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                        <Text
                          className="font-semibold text-gray_200 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Similar Movies
                        </Text>
                        <Text
                          className="font-semibold mt-[2px] text-gray_700 w-[auto]"
                          variant="body4"
                        >
                          See all
                        </Text>
                      </div>
                      <List
                        className="sm:gap-[15px] md:gap-[20px] gap-[30.53px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[13px] md:mt-[17px] mt-[27px] w-[100%]"
                        orientation="horizontal"
                      >
                        <Stack className="h-[271px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle17.png"
                            className="absolute h-[271px] max-w-[100%] right-[1%] rounded-radius20 w-[100%]"
                            alt="RectangleSeventeen"
                          />
                          <div className="absolute bg-gray_900_26 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] p-[1px] rounded-bl-[22px] rounded-br-[0] rounded-tl-[0] rounded-tr-[22px] sm:w-[100%] w-[34%]">
                            <Img
                              src="images/img_star.png"
                              className="flex-shrink-0 md:h-[10px] h-[15px] sm:h-[8px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[9px] mt-[3px] w-[15px] sm:w-[7px] md:w-[9px]"
                              alt="Star"
                            />
                            <Text
                              className="flex-grow font-medium ml-[4px] sm:mr-[4px] md:mr-[5px] mr-[9px] mt-[2px] text-gray_200"
                              variant="body7"
                            >
                              6.9
                            </Text>
                          </div>
                        </Stack>
                        <Stack className="h-[271px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle18.png"
                            className="absolute h-[271px] max-w-[100%] right-[1%] rounded-radius20 w-[100%]"
                            alt="RectangleEighteen"
                          />
                          <div className="absolute bg-gray_200_19 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] p-[1px] rounded-bl-[22px] rounded-br-[0] rounded-tl-[0] rounded-tr-[22px] sm:w-[100%] w-[34%]">
                            <Img
                              src="images/img_star.png"
                              className="flex-shrink-0 md:h-[10px] h-[15px] sm:h-[8px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[9px] mt-[3px] w-[15px] sm:w-[7px] md:w-[9px]"
                              alt="Star One"
                            />
                            <Text
                              className="flex-grow font-medium ml-[4px] sm:mr-[4px] md:mr-[5px] mr-[9px] mt-[2px] text-gray_200"
                              variant="body7"
                            >
                              7.9
                            </Text>
                          </div>
                        </Stack>
                        <Stack className="h-[271px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle19_271X173.png"
                            className="absolute h-[271px] max-w-[100%] right-[1%] rounded-radius20 w-[100%]"
                            alt="RectangleNineteen"
                          />
                          <div className="absolute bg-gray_900_34 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] p-[1px] rounded-bl-[22px] rounded-br-[0] rounded-tl-[0] rounded-tr-[22px] sm:w-[100%] w-[34%]">
                            <Img
                              src="images/img_star.png"
                              className="flex-shrink-0 md:h-[10px] h-[15px] sm:h-[8px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[9px] mt-[3px] w-[15px] sm:w-[7px] md:w-[9px]"
                              alt="Star Two"
                            />
                            <Text
                              className="flex-grow font-medium ml-[4px] sm:mr-[4px] md:mr-[5px] mr-[9px] mt-[2px] text-gray_200"
                              variant="body7"
                            >
                              8.3
                            </Text>
                          </div>
                        </Stack>
                        <Stack className="h-[271px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle20.png"
                            className="absolute h-[271px] max-w-[100%] right-[1%] rounded-radius20 w-[100%]"
                            alt="RectangleTwenty"
                          />
                          <div className="absolute bg-gray_200_19 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] p-[1px] rounded-bl-[22px] rounded-br-[0] rounded-tl-[0] rounded-tr-[22px] sm:w-[100%] w-[34%]">
                            <Img
                              src="images/img_star.png"
                              className="flex-shrink-0 md:h-[10px] h-[15px] sm:h-[8px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[9px] mt-[3px] w-[15px] sm:w-[7px] md:w-[9px]"
                              alt="Star Three"
                            />
                            <Text
                              className="flex-grow font-medium ml-[4px] sm:mr-[4px] md:mr-[5px] mr-[9px] mt-[2px] text-gray_200"
                              variant="body7"
                            >
                              7.0
                            </Text>
                          </div>
                        </Stack>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                <div className="flex flex-col items-center justify-start pt-[2px] w-[100%]">
                  <div className="flex flex-col items-end justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                      <Img
                        src="images/img_heart.png"
                        className="sm:h-[18px] md:h-[23px] h-[35px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[35px]"
                        alt="Heart"
                      />
                      <Img
                        src="images/img_share.png"
                        className="sm:h-[18px] md:h-[23px] h-[35px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[17px] md:w-[22px] w-[35px]"
                        alt="Share"
                      />
                      <Img
                        src="images/img_bookmark.png"
                        className="sm:h-[18px] md:h-[23px] h-[35px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[17px] md:w-[22px] w-[35px]"
                        alt="Bookmark"
                      />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[13px] ml-[20px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                        <Img
                          src="images/img_star.png"
                          className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                          alt="Star Four"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[4px] md:ml-[5px] ml-[9px] mt-[4px] text-gray_200"
                          as="h3"
                          variant="h3"
                        >
                          <span className="text-gray_200 text-[25px] font-poppins sm:text-[21px] md:text-[23px]">
                            8.5{" "}
                          </span>
                          <span className="text-gray_700 text-[20px] font-poppins">
                            | 350k
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[25px] w-[100%]">
                      <div className="bg-cyan_300_cc flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center p-[12px] sm:p-[6px] md:p-[7px] rounded-radius10 w-[100%]">
                        <Img
                          src="images/img_twotickets.png"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[25px] max-w-[100%] sm:ml-[37px] md:ml-[48px] ml-[74px] sm:w-[12px] md:w-[16px] w-[25px]"
                          alt="TwoTickets"
                        />
                        <Text
                          className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mr-[37px] md:mr-[48px] mr-[74px] mt-[1px] text-shadow-ts3 text-white_A701"
                          as="h6"
                          variant="h6"
                        >
                          See Showtimes
                        </Text>
                      </div>
                      <div className="bg-gray_900_cc flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mt-[12px] sm:mt-[6px] md:mt-[7px] p-[12px] sm:p-[6px] md:p-[7px] rounded-radius10 shadow-bs5 w-[100%]">
                        <Img
                          src="images/img_list.png"
                          className="flex-shrink-0 sm:h-[12px] md:h-[16px] h-[23px] max-w-[100%] sm:ml-[25px] md:ml-[33px] ml-[51px] sm:w-[11px] md:w-[15px] w-[23px]"
                          alt="List"
                        />
                        <Text
                          className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[7px] sm:mr-[25px] md:mr-[33px] mr-[51px] mt-[1px] text-gray_200 text-shadow-ts4"
                          as="h6"
                          variant="h6"
                        >
                          More watch options
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[33px] md:pt-[122px] sm:pt-[15px] pt-[187px] rounded-radius10 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group52.png')" }}
                >
                  <div className="bg-gray_900_7f flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 w-[100%]">
                    <Img
                      src="images/img_list.png"
                      className="flex-shrink-0 sm:h-[12px] md:h-[16px] h-[23px] max-w-[100%] mt-[3px] sm:w-[11px] md:w-[15px] w-[23px]"
                      alt="List One"
                    />
                    <Text
                      className="flex-grow font-medium mt-[4px] text-gray_200 text-shadow-ts2"
                      variant="body5"
                    >
                      The Best Movies and Shows in September
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:gap-[16px] md:gap-[21px] gap-[33px] grid min-h-[auto] sm:mt-[16px] md:mt-[21px] mt-[33px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="border border-gray_200_4c border-solid flex flex-col items-center justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 shadow-bs1 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <div className="flex flex-col justify-start mb-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                        <Text
                          className="font-normal leading-[normal] not-italic text-gray_200 w-[100%]"
                          variant="body5"
                        >
                          The Billion-Dollar Film Club: 50
                          <br />
                          Movies to Reach $1 Billion Worldwide
                        </Text>
                        <Text
                          className="font-normal mt-[15px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_200_99 w-[auto]"
                          variant="body7"
                        >
                          updated 1 week ago
                          <br /> • <br />
                          50 images
                        </Text>
                      </div>
                      <Img
                        src="images/img_rectangle40.png"
                        className="max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[7px] rounded-radius10 w-[23%]"
                        alt="RectangleForty"
                      />
                    </div>
                  </div>
                  <div className="border border-gray_200_4c border-solid flex flex-col items-center justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 shadow-bs1 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <div className="flex flex-col justify-start mb-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                        <Text
                          className="font-normal not-italic text-gray_200 w-[auto]"
                          variant="body5"
                        >
                          2022 Summer Movie Guide
                        </Text>
                        <Text
                          className="font-normal sm:mt-[18px] md:mt-[23px] mt-[36px] not-italic text-gray_200_99 w-[auto]"
                          variant="body7"
                        >
                          updated 1 month ago
                          <br /> • <br />
                          52 images
                        </Text>
                      </div>
                      <Img
                        src="images/img_rectangle40_83X74.png"
                        className="max-w-[100%] rounded-radius10 w-[23%]"
                        alt="RectangleForty One"
                      />
                    </div>
                  </div>
                  <div className="border border-gray_200_4c border-solid flex flex-col items-center justify-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 shadow-bs1 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <div className="flex flex-col justify-start mb-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                        <Text
                          className="font-normal leading-[normal] sm:mx-[0] not-italic text-gray_200 sm:w-[100%] w-[81%]"
                          variant="body5"
                        >
                          Upcoming Action and
                          <br />
                          Adventure Movies and TV
                        </Text>
                        <Text
                          className="font-normal mt-[15px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_200_99 w-[auto]"
                          variant="body7"
                        >
                          updated 3 months ago
                          <br /> • <br />
                          26 images
                        </Text>
                      </div>
                      <Img
                        src="images/img_rectangle40_1.png"
                        className="max-w-[100%] rounded-radius10 w-[23%]"
                        alt="RectangleForty Two"
                      />
                    </div>
                  </div>
                </List>
                <List
                  className="sm:gap-[16px] md:gap-[21px] gap-[33px] grid min-h-[auto] sm:mt-[16px] md:mt-[21px] mt-[33px] w-[100%]"
                  orientation="vertical"
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start md:pt-[122px] sm:pt-[15px] pt-[187px] rounded-radius10 w-[100%]"
                    style={{ backgroundImage: "url('images/img_group65.png')" }}
                  >
                    <div className="bg-gray_900_7f flex flex-row md:flex-wrap sm:flex-wrap items-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_list.png"
                        className="flex-shrink-0 sm:h-[12px] md:h-[16px] h-[23px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[3px] sm:w-[11px] md:w-[15px] w-[23px]"
                        alt="List Two"
                      />
                      <Text
                        className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[7px] mt-[4px] text-gray_200 text-shadow-ts2"
                        variant="body5"
                      >
                        Top 50 TV Dramas
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end md:pt-[122px] sm:pt-[15px] pt-[187px] rounded-radius10 w-[100%]"
                    style={{ backgroundImage: "url('images/img_group66.png')" }}
                  >
                    <div className="bg-gray_900_7f flex flex-row md:flex-wrap sm:flex-wrap items-start sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 w-[100%]">
                      <Img
                        src="images/img_list.png"
                        className="flex-shrink-0 sm:h-[12px] md:h-[16px] h-[23px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[3px] sm:w-[11px] md:w-[15px] w-[23px]"
                        alt="List Three"
                      />
                      <Text
                        className="flex-grow font-medium ml-[12px] sm:ml-[6px] md:ml-[7px] mt-[4px] text-gray_200 text-shadow-ts2"
                        variant="body5"
                      >
                        New & Upcoming Sequels, Prequels
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="border border-gray_200_4c border-solid flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[33px] sm:p-[4px] md:p-[5px] p-[8px] rounded-radius10 shadow-bs1 w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <div className="flex flex-col justify-start mb-[2px] md:mt-[3px] sm:mt-[3px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                      <Text
                        className="font-normal not-italic text-gray_200 w-[auto]"
                        variant="body5"
                      >
                        Favourite
                      </Text>
                      <Text
                        className="font-normal sm:mt-[18px] md:mt-[23px] mt-[36px] not-italic text-gray_200_99 w-[auto]"
                        variant="body7"
                      >
                        created 2 months ago
                        <br /> • <br />
                        48 images
                      </Text>
                    </div>
                    <Img
                      src="images/img_rectangle40_2.png"
                      className="max-w-[100%] rounded-radius10 w-[23%]"
                      alt="RectangleForty Three"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesOnePage;
