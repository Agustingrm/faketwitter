import { useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/LogInPage.css";
import twitterLogo from "../Assets/twitterLogo.svg";

function LogInPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id="logInContainer">
      <img src={twitterLogo} alt="Twitter Logo" />
      <h1>Log in to Twitter</h1>
      <form>
        <input label="email" name="email" type="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
        <input label="password" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Log in
        </button>
        <Link to="/">Sign up for twitter</Link>
      </form>
    </div>
  );
}

export default LogInPage;
