import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Assets/Styles/LogInPage.css";

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
      <form>
        <input label="email" name="email" type="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
        <input label="password" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button variant="secondary" type="submit" onClick={handleSubmit}>
          Log in
        </button>
        <p>Sign up for Twitter</p>
      </form>
    </div>
  );
}

export default LogInPage;
