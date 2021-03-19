import React, { useState, useEffect } from "react";
import Splash from "./Screens/Splash";
import AppNavigator from "./Navigation";

export default function Main() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 4000);
  }, []);

  return splash ? <Splash /> : <AppNavigator />;
}