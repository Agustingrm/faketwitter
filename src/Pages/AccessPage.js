import "../Assets/Styles/AccessPage.css";
import twitterLogo from "../Assets/twitterLogo.svg";
import twitterLogoWhite from "../Assets/twitterLogoWhite.svg";

function AccessPage() {
  return (
    <div id="contentDiv">
      <div id="leftDiv">
          <img src={twitterLogoWhite} alt='Twitter Logo' />
      </div>
      <div id="rightDiv">
        <img src={twitterLogo} alt="Twitter Logo" />
        <h1>Happening now</h1>
        <h2>Join Twitter today.</h2>
        <button id='signInButton'>Sign up</button>
        <button id='logInButton'>Log in</button>
      </div>
    </div>
  );
}

export default AccessPage;
