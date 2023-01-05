import { Home } from "./screens/Home";
import { Login } from "./screens/Login";

import './App.css'
import { useState } from "react";

export function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
   isLogged ? <Home setIsLogged={setIsLogged}/> : <Login setIsLogged={setIsLogged}/>
  )
}

