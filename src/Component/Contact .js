import { useState } from "react";
import "../Style/Contact.css";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [pasword, setpasword] = useState("");
  const [confirmpasword, setconfirmpasword] = useState("");

  const [ErrorEmail, setErrorEmail] = useState("");
  const [ErrorUsername, setErrorUsername] = useState("");
  const [Errorpasword, setErrorpasword] = useState("");
  const [Errorconfirmpasword, setErrorconfirmpasword] = useState("");

  const [emailcolor, setemailcolor] = useState("");
  const [usercolor, setusercolor] = useState("");
  const [pasworccolor, setpaswordcolor] = useState("");
  const [confirmpaswordcolor, setconfirmpaswordcolor] = useState("");

  const valide = (e) => {
    e.preventDefault();
    if (username.length > 8 && username !== "") {
      setErrorUsername("");
      setusercolor("green");
    } else {
      setErrorUsername("usename must be 8 latter long");
      setusercolor("red");
    }
    if (email.includes("@gmail.com") && email !== "") {
      setErrorEmail("");
      setemailcolor("green");
    } else {
      setErrorEmail("email must be include  @gmail.com  with email");
      setemailcolor("red");
    }
    if (pasword.length > 8) {
      setErrorpasword("");
      setpaswordcolor("green");
    } else {
      setErrorpasword("Pasword should be 8 latter");
      setpaswordcolor("red");
    }
    if (confirmpasword === pasword && pasword !== "") {
      setErrorconfirmpasword("");
      setconfirmpaswordcolor("green");
    } else {
      setErrorconfirmpasword("pasword did't matched ");
      setconfirmpaswordcolor("green");
    }
  };
  return (
    <div className="bg w-full flex justify-center items-center ">
      <div className="form bg-black bg-opacity-70 rounded-lg">
        <label>Name</label>
        <input
          type="text"
          placeholder="eneter your Name"
          value={username}
          style={{ borderColor: usercolor }}
          onChange={(e) => setusername(e.target.value)}
        />
        <p className="error">{ErrorUsername}</p>

        <label> E-mail</label>
        <input
          type="text"
          value={email}
          placeholder=" enter your Email"
          style={{ borderColor: emailcolor }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{ErrorEmail}</p>

        <label> Password</label>
        <input
          type="password"
          value={pasword}
          placeholder=" enet your Password"
          style={{ borderColor: pasworccolor }}
          onChange={(e) => setpasword(e.target.value)}
        />
        <p className="error">{Errorpasword}</p>

        <label> Confirm Password</label>
        <input
          type="password"
          value={confirmpasword}
          placeholder="confirmpasword"
          style={{ borderColor: confirmpaswordcolor }}
          onChange={(e) => setconfirmpasword(e.target.value)}
        />
        <p className="error">{Errorconfirmpasword}</p>

        <button className="btn" onClick={valide}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Contact;
