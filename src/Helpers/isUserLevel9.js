import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/firebase/index";
import React from "react";
import { useCallback } from "react";

const isUserLevel9 =  (() => {
  const [user] = useAuthState(auth) || {}
  const {displayName} = user || {}
  let isAdmin = displayName && displayName === "userLevel9" || false
  return isAdmin
})

export default isUserLevel9;
