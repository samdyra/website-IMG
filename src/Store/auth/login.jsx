import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Config/firebase/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import style from "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { isUserLevel9 } from "../../Helpers";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let isAdmin = false

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user = getAuth();
        isAdmin = user.currentUser.displayName === "userLevel9"
      })
      .then(() => {
        if (isAdmin) {
          navigate("/admin/kegiatan")
        } else navigate("/Pojokimg")
      })
      .catch(() => toast(error.code, { type: "error" }))
  };
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab"></label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  style={{ marginBottom: 50 }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
              </div>
              <div class="group">
                <input
                  type="submit"
                  class="button"
                  value="Sign In"
                  onClick={handleLogin}
                />
              </div>
              <div class="hr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
