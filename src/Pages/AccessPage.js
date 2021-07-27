import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/AccessPage.css";
import twitterLogo from "../Assets/twitterLogo.svg";
import twitterLogoWhite from "../Assets/twitterLogoWhite.svg";
import Register from "../Components/Register";
import TwitterContext from "../Context/TwitterContext";

function AccessPage() {
  const context = useContext(TwitterContext)

  return (
    <div id="contentDiv">
      {context.displayRegisterWindow && <Register />}
      <div id="leftDiv">
        <img src={twitterLogoWhite} alt="Twitter Logo" />
      </div>
      <div id="rightDiv">
        <img src={twitterLogo} alt="Twitter Logo" />
        <h1>Happening now</h1>
        <h2>Join Twitter today.</h2>
        <button id="signInButton" onClick={context.handleOpenRegisterBox}>
          Sign up
        </button>
        <button id="logInButton"><Link to='/login'>Log in</Link></button>
      </div>
    </div>
  );
}

export default AccessPage;
