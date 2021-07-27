import '../Assets/Styles/HomeLeftMenu.css'
import explore from '../Assets/menuSVG/explore.svg'
import home from '../Assets/menuSVG/home.svg'
import notifications from '../Assets/menuSVG/notifications.svg'
import profile from '../Assets/menuSVG/profile.svg'

function HomeLeftMenu() {
  return (
    <div id='HomeLeftMenuContainer'>
      <div className='MenuItem'>
        <img src={home} alt="home" />
        <p>algo</p>
      </div>
      <div className='MenuItem'>
        <img src={explore} alt="explore" />
        <p>algo</p>
      </div>
      <div className='MenuItem'>
        <img src={notifications} alt="notifications" />
        <p>algo</p>
      </div>
      <div className='MenuItem'>
        <img src={profile} alt="profile" />
        <p>algo</p>
      </div>
    </div>
  );
}

export default HomeLeftMenu
