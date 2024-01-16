import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="login">
      <main>
        <h1 style={{ fontWeight: "400" }} className="heading">
          Login
        </h1>
        <div>
          <label className="heading" style={{ fontWeight: "600" }}>
            Gender
          </label>
          <select
            style={{ fontWeight: "600" }}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" className="heading">
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="heading" style={{ fontWeight: "600" }}>
            Date Of Birth
          </label>
          <input
            style={{ fontWeight: "600" }}
            className="heading"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <p>Already Signed In Once</p>
          <button>
            <FcGoogle /> <span>Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
