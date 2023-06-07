import React from "react"
import { useNavigate } from "react-router-dom"
import style from "./Home.module.css"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <h1>City Route</h1>
      <div className={style.buttonContainer}>
        <button onClick={() => navigate("/newTrip")}>Click to view trip form</button>
        <button onClick={() => navigate("/tripResult")}>Click to view trip result</button>
      </div>
    </div>
  )
}

export default Home