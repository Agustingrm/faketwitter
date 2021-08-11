import "../Assets/Styles/HomeLeftMenu.css";
import explore from "../Assets/menuSVG/explore.svg";
import home from "../Assets/menuSVG/home.svg";
import notifications from "../Assets/menuSVG/notifications.svg";
import profile from "../Assets/menuSVG/profile.svg";
import twitterLogo from "../Assets/twitterLogo.svg";

function HomeLeftMenu() {
  return (
    <div id="HomeLeftMenuContainer">
      <img src={twitterLogo} alt="Twitter Logo" id='menuLogo' />
      <div className="MenuItem">
        <img src={home} alt="home" />
        <p>Home</p>
      </div>
      <div className="MenuItem">
        <img src={explore} alt="explore" />
        <p>Explore</p>
      </div>
      <div className="MenuItem">
        <img src={notifications} alt="notifications" />
        <p>Notifications</p>
      </div>
      <div className="MenuItem">
        <img src={profile} alt="profile" />
        <p>Profile</p>
      </div>
      <div>
        <p>Username</p>
        <p>Password</p>
      </div>
    </div>
  );
}

export default HomeLeftMenu;
