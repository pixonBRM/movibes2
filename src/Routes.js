import React from "react";
import MoviesOne from "pages/MoviesOne";
import Movies from "pages/Movies";
import Home1 from "pages/Home1";
import LoginpageTwo from "pages/LoginpageTwo";
import LoginpageOne from "pages/LoginpageOne";
import SignuppageconfirmedTwo from "pages/SignuppageconfirmedTwo";
import SignuppageconfirmedOne from "pages/SignuppageconfirmedOne";
import SignuppageprocessingFive from "pages/SignuppageprocessingFive";
import SignuppageprocessingFour from "pages/SignuppageprocessingFour";
import SignuppageprocessingThree from "pages/SignuppageprocessingThree";
import SignuppageprocessingTwo from "pages/SignuppageprocessingTwo";
import SignuppageprocessingOne from "pages/SignuppageprocessingOne";
import Signuppagefilled from "pages/Signuppagefilled";
import Signuppage from "pages/Signuppage";
import LoadingscreenTwo from "pages/LoadingscreenTwo";
import LoadingscreenSeven from "pages/LoadingscreenSeven";
import LoadingscreenSix from "pages/LoadingscreenSix";
import LoadingscreenFive from "pages/LoadingscreenFive";
import LoadingscreenFour from "pages/LoadingscreenFour";
import LoadingscreenThree from "pages/LoadingscreenThree";
import LoadingscreenOne from "pages/LoadingscreenOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/loadingscreenone" element={<LoadingscreenOne />} />
        <Route path="/loadingscreenthree" element={<LoadingscreenThree />} />
        <Route path="/loadingscreenfour" element={<LoadingscreenFour />} />
        <Route path="/loadingscreenfive" element={<LoadingscreenFive />} />
        <Route path="/loadingscreensix" element={<LoadingscreenSix />} />
        <Route path="/loadingscreenseven" element={<LoadingscreenSeven />} />
        <Route path="/loadingscreentwo" element={<LoadingscreenTwo />} />
        <Route path="/signuppage" element={<Signuppage />} />
        <Route path="/signuppagefilled" element={<Signuppagefilled />} />
        <Route
          path="/signuppageprocessingone"
          element={<SignuppageprocessingOne />}
        />
        <Route
          path="/signuppageprocessingtwo"
          element={<SignuppageprocessingTwo />}
        />
        <Route
          path="/signuppageprocessingthree"
          element={<SignuppageprocessingThree />}
        />
        <Route
          path="/signuppageprocessingfour"
          element={<SignuppageprocessingFour />}
        />
        <Route
          path="/signuppageprocessingfive"
          element={<SignuppageprocessingFive />}
        />
        <Route
          path="/signuppageconfirmedone"
          element={<SignuppageconfirmedOne />}
        />
        <Route
          path="/signuppageconfirmedtwo"
          element={<SignuppageconfirmedTwo />}
        />
        <Route path="/loginpageone" element={<LoginpageOne />} />
        <Route path="/loginpagetwo" element={<LoginpageTwo />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/moviesone" element={<MoviesOne />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
