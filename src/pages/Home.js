import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
  
      <ul>
        <li>
          <Link to="/loadingscreenone">LoadingscreenOne</Link>
        </li>
        <li>
          <Link to="/loadingscreenthree">LoadingscreenThree</Link>
        </li>
        <li>
          <Link to="/loadingscreenfour">LoadingscreenFour</Link>
        </li>
        <li>
          <Link to="/loadingscreenfive">LoadingscreenFive</Link>
        </li>
        <li>
          <Link to="/loadingscreensix">LoadingscreenSix</Link>
        </li>
        <li>
          <Link to="/loadingscreenseven">LoadingscreenSeven</Link>
        </li>
        <li>
          <Link to="/loadingscreentwo">LoadingscreenTwo</Link>
        </li>
        <li>
          <Link to="/signuppage">Signuppage</Link>
        </li>
        <li>
          <Link to="/signuppagefilled">Signuppagefilled</Link>
        </li>
        <li>
          <Link to="/signuppageprocessingone">SignuppageprocessingOne</Link>
        </li>
        <li>
          <Link to="/signuppageprocessingtwo">SignuppageprocessingTwo</Link>
        </li>
        <li>
          <Link to="/signuppageprocessingthree">SignuppageprocessingThree</Link>
        </li>
        <li>
          <Link to="/signuppageprocessingfour">SignuppageprocessingFour</Link>
        </li>
        <li>
          <Link to="/signuppageprocessingfive">SignuppageprocessingFive</Link>
        </li>
        <li>
          <Link to="/signuppageconfirmedone">SignuppageconfirmedOne</Link>
        </li>
        <li>
          <Link to="/signuppageconfirmedtwo">SignuppageconfirmedTwo</Link>
        </li>
        <li>
          <Link to="/loginpageone">LoginpageOne</Link>
        </li>
        <li>
          <Link to="/loginpagetwo">LoginpageTwo</Link>
        </li>
        <li>
          <Link to="/">Home1</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/moviesone">MoviesOne</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
