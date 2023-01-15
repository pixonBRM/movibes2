import React, {useState, useEffect} from "react";
import Card from "../Home1/card";
import "../Home1/style.css";
import { Img, Text, Line, Stack, Button, List, } from "components";
import { useNavigate } from "react-router-dom";

let API_key="&api_key=035daaa1b16558de2f41c0a4d2275f9c";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr = ["Action","Adventure","Animated","Comedy","Crime","Fantasy"];

const Home1Page = () => {
  const navigate = useNavigate();

  function handleNavigate22() {
    navigate("/movies");
  }
  function handleNavigate23() {
    navigate("/loginpageone");
  }
  function handleNavigate31() {
    navigate("/moviesone");
  }

const [moviesData, setMovies] = useState([]);
const [url_set, setUrl] = useState(url);
const [search, setSearch] = useState();

useEffect(() => {
    fetch(url_set)
    .then((res) => res.json())
    .then(data=>{
      // console.log(data.results);
      setMovies(data.results);
    });
  },[url_set])


   const getData=(movieType)=>{
    if(movieType=="Upcoming")
    {
      url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
    }
    if(movieType=="Popular")
    {
      url=base_url+"/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"+API_key;
    }
    if(movieType=="Adventure")
    {
      url=base_url+"/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"+API_key;
    }
    if(movieType=="Action")
    {
      url=base_url+"/discover/movie?with_people=108916,7467&sort_by=popularity.desc"+API_key;
    }
    if(movieType=="Animation")
    {
      url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
    }
    if(movieType=="Comedy")
    {
      url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
    }
    if(movieType=="Fantasy")
    {
      url=base_url+"/discover/movie?with_people=287,819&sort_by=vote_average.desc"+API_key;
    }
    setUrl(url);
  }

  const searchMovie=(evt)=>{
    if(evt.key==="Enter")
     {
      url=base_url+"/search/movie?api_key=035daaa1b16558de2f41c0a4d2275f9c&query="+search;
      setUrl(url);
      setSearch(" ");
    }
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
                <div className="bg-cyan_300_66 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mt-[41px] md:mt-[53px] mt-[81px] px-[2px] shadow-bs1 w-[100%]">
                  <Img
                    src="images/img_home.png"
                    className="sm:h-[13px] md:h-[17px] h-[25px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[25px]"
                    alt="Home"
                  />
                  <Text
                    className="font-semibold ml-[15px] sm:ml-[7px] md:ml-[9px] text-cyan_300 text-shadow-ts w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Home
                  </Text>
                  <Line className="bg-cyan_300_bf sm:h-[44px] md:h-[57px] h-[86px] sm:ml-[40px] md:ml-[52px] ml-[80px] shadow-bs1 w-[1px]" />
                </div>
                <div className="flex flex-col justify-start md:ml-[27px] ml-[42px] sm:mt-[23px] md:mt-[30px] mt-[47px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                  <div
                    className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]"
                    onClick={handleNavigate22}
                  >
                    <Img
                      src="images/img_movieprojector.png"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[25px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[25px]"
                      alt="MovieProjector"
                    />
                    <Text
                      className="flex-grow font-semibold ml-[15px] sm:ml-[7px] md:ml-[9px] text-gray_700 text-shadow-ts"
                      as="h6"
                      variant="h6"
                    >
                      Movies
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[37px] md:mt-[48px] mt-[74px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
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
                  onClick={handleNavigate23}
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
          <div className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[42px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
              <div className="bg-gray_901 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] my-[2px] p-[13px] sm:p-[6px] md:p-[8px] rounded-radius30 shadow-bs4 sm:w-[100%] w-[75%]">
                <input
                  type="text" style={{backgroundColor: "#19191933", width: "50%", borderRadius: "10px"}}
                   placeholder="Enter Movie here" onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyPress={searchMovie} alt="Search"
                />
                <Text
                  className="flex-grow font-semibold sm:ml-[12px] md:ml-[16px] ml-[25px] mt-[1px] text-gray_700 text-shadow-ts"
                  as="h6"
                  variant="h6"
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
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[18px] md:mt-[24px] mt-[37px] w-[100%]">
              <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col items-end justify-end md:p-[12px] sm:p-[15px] p-[19px] rounded-radius20 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group19.png')" }}
                >
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end mr-[13px] md:mr-[8px] sm:mt-[105px] md:mt-[135px] mt-[207px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                    <div className="bg-gray_200_19 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius15 shadow-bs1 sm:w-[100%] w-[41%]">
                      <Img
                        src="images/img_play.png"
                        className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[35px] max-w-[100%] ml-[14px] sm:ml-[7px] md:ml-[9px] sm:w-[17px] md:w-[22px] w-[35px]"
                        alt="Play"
                      />
                      <Text
                        className="flex-grow font-semibold md:ml-[3px] sm:ml-[3px] ml-[6px] mr-[15px] sm:mr-[7px] md:mr-[9px] text-gray_200 text-shadow-ts"
                        as="h6"
                        variant="h6"
                      >
                        Play
                      </Text>
                    </div>
                    <div className="bg-gray_200_19 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[17px] ml-[26px] sm:mx-[0] p-[12px] sm:p-[6px] md:p-[7px] rounded-radius15 shadow-bs1 sm:w-[100%] w-[52%]">
                      <Img
                        src="images/img_info.png"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[25px] max-w-[100%] md:ml-[3px] sm:ml-[3px] ml-[6px] sm:w-[12px] md:w-[16px] w-[25px]"
                        alt="Info"
                      />
                      <Text
                        className="flex-grow font-semibold ml-[11px] sm:ml-[5px] md:ml-[7px] sm:mr-[3px] md:mr-[4px] mr-[7px] mt-[1px] text-gray_200 text-shadow-ts"
                        as="h6"
                        variant="h6"
                      >
                        More info
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:gap-[20px] md:gap-[26px] gap-[40.4px] grid min-h-[auto] sm:mt-[18px] md:mt-[24px] mt-[37px] sm:pt-[4px] md:pt-[5px] pt-[8px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                        <Text
                          className="font-semibold text-gray_200 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Trending
                        </Text>
                        <Text
                          className="font-semibold mt-[1px] text-gray_700 w-[auto]"
                          variant="body4"
                        >
                          See all
                        </Text>
                      </div>
                      <div className="container ">
                          {
                            (moviesData.length===0)?<p className="notfound"></p>:moviesData.map((res,pos)=>{
                              return(
                              <Card info={res} key={pos}/>
                              )
                            })
                          }
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col items-center justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
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
                    className="sm:gap-[2px] md:gap-[3px] gap-[5.6px] grid min-h-[auto] sm:w-[100%] w-[96%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-center justify-start ml-[4px] sm:mx-[0] my-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <ul
                            className="flex-grow font-medium text-gray_200"
                            variant="body4" 
                          >
                          <li >  
                            {
                               arr.map((value)=>{
                                 return(
                                  <p style={{paddingBottom: "30px", display: "flex", justifyContent: "space-between"}} name={value} onClick={(e)=>{getData(e.target.name)}}>
                                  {value}
                                  <Img
                                    src="images/img_checkedcheckbo.png"
                                    className="flex-shrink-0 sm:h-[16px] md:h-[20px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[19px] w-[30px]"
                                    alt="CheckedCheckbo"/>
                                  </p>
                                 )
                               })
                             }
                             <Line className="bg-gray_700_4c h-[2px] sm:mt-[2px] md:mt-[3px] mt-[5px] w-[100%]" />
                          </li>
                          
                          </ul>
                          
                        </div>
                        
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

export default Home1Page;
