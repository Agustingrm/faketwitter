import { useContext, useState } from "react";
import "../Assets/Styles/LogInPage.css";
import twitterLogo from "../Assets/twitterLogo.svg";
import Register from "../Components/Register";
import TwitterContext from "../Context/TwitterContext";

function LogInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const context = useContext(TwitterContext);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {context.displayRegisterWindow && <Register />}
      <div id="logInContainer">
        <img src={twitterLogo} alt="Twitter Logo" />
        <h1>Log in to Twitter</h1>
        <form>
          <input label="email" name="email" type="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
          <input label="password" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
          <button type="submit" onClick={handleSubmit}>
            Log in
          </button>
          <p onClick={context.handleOpenRegisterBox}>Sign up for twitter</p>
        </form>
      </div>
    </div>
  );
}

export default LogInPage;
