import { useState } from "react";
import "../Assets/Styles/Register.css";
import twitterLogo from "../Assets/twitterLogo.svg";

function Register() {
  const [form, setForm] = useState({ name: "", lastName: "", nickname: "", date:'', email: "", password: "" });

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
        <img src={twitterLogo} alt="Twitter Logo" />
        <h1>Create your Account</h1>
        <form>
          <input label="name" name="name" type="text" placeholder="Enter your Name" value={form.name} onChange={handleChange} />
          <input label="lastName" name="lastName" type="text" placeholder="Enter your Last Name" value={form.lastName} onChange={handleChange} />
          <input label="nickname" name="nickname" type="text" placeholder="Insert a nickname" value={form.nickname} onChange={handleChange} maxLength="10" />
          <input label="date" name="date" type="date" placeholder="Insert your date of birth" value={form.date} onChange={handleChange} />
          <input label="email" name="email" type="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
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
