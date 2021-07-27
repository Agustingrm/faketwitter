import { useContext, useState } from "react";
import "../Assets/Styles/Register.css";
import twitterLogo from "../Assets/twitterLogo.svg";
import cross from "../Assets/cross.svg";
import TwitterContext from "../Context/TwitterContext";

function Register(props) {
  const context = useContext(TwitterContext)
  const [form, setForm] = useState({ name: "", lastName: "", username: "", date: "", email: "", password: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id="background">
      <div id="registerContainer">
        <div id="imgContainer">
          <img src={twitterLogo} alt="Twitter Logo" id="logo" />
          <img src={cross} alt="Twitter Logo" id="cross" onClick={context.handleCloseRegisterBox} />
        </div>
        <h1>Create your Account</h1>
        <form>
          <input label="name" name="name" type="text" placeholder="Enter your Name" value={form.name} onChange={handleChange} />
          <input label="lastName" name="lastName" type="text" placeholder="Enter your Last Name" value={form.lastName} onChange={handleChange} />
          <input label="username" name="username" type="text" placeholder="Insert a username" value={form.username} onChange={handleChange} maxLength="10" />
          <input label="date" name="date" type="date" placeholder="Insert your date of birth" value={form.date} onChange={handleChange} />
          <input label="email" name="email" type="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
          <input label="password" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        </form>
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
