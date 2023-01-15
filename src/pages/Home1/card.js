import { defaults } from "autoprefixer";
import React from "react";
import "../Home1/style.css";

import { Img, Text, Line, Stack, Button, List } from "components";
import { useNavigate } from "react-router-dom";

const Card = (movie) => {
    const navigate = useNavigate();

    function handleNavigate31() {
        navigate("/moviesone");
      }

    let API_IMG ="https://image.tmdb.org/t/p/w500/";
    console.log(movie.info);
    return (
        <>   
            <div className="movie common-pointer" onClick={handleNavigate31}>
                <img src={API_IMG+movie.info.poster_path} alt="img" className=" poster" style={{height: "100%"}}></img>
                {/* <p className="overview">{movie.info.overview}</p> */}
                <div className="Box">
                    <h4 className="title">{movie.info.title}</h4>
                    <Img
                    src="images/img_star.png"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="Star One"
                    />
                    <Text
                    className=" rating flex-grow sm:mx-[2px] md:mx-[3px] mx-[5px] text-gray_200"
                    variant="body3"
                    >
                    {movie.info.vote_average}
                    </Text>
                </div>
            </div>          
        </>
    )
}

export default Card;

