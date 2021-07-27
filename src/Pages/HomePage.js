import "../Assets/Styles/HomePage.css";
import HomeLeftMenu from "../Components/HomeLeftMenu";
import HomeTopBar from "../Components/HomeTopBar";

function HomePage() {
  return (
    <div>
      <div id="homeLeft">
        <HomeLeftMenu />
      </div>
      <div id="homeRight">
        <HomeTopBar />
      </div>
    </div>
  );
}

export default HomePage;
