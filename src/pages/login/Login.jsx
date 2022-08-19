import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">ThinkBigCommunity</h3>
          <span className="loginDesc">
          Tap into the power of social media. Engage with the world. Engage with the world.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Get In</button>
            <span className="loginForgot">Lost Your Password?</span>
            <button className="loginRegisterButton">
              Make a Brand New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}