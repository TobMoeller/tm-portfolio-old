import React from "react";
import { ContextProvider } from "./src/components/Context/ContextProvider";

export function wrapPageElement({ element }) {
  return <ContextProvider>{element}</ContextProvider>;
}

export function onRouteUpdate({ location }) {
  console.log(location);
}
