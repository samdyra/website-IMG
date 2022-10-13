import React, { useState } from "react";
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../../Config/firebase/index";
import { toast } from "react-toastify";
import "../login.css";
import NavbarAdmin from "../../components/NavbarAdmin";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSignup = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        toast("super admin is born", { type: "success" });
      } catch (error) {
        toast(error.code, { type: "error" });
      }
    };
  return (
    <div style={{paddingBottom: 100}}>
        <NavbarAdmin></NavbarAdmin>
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Sign Up Massa
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
                  onClick={handleSignup}
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
