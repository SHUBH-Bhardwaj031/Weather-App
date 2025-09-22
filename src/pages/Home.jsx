import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import HomeImg from "../assets/HomeImg.png";
import WeatherIcon from "../assets/WeatherIcon.jpg"
function Home() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    setLocation(event.target.value);
  }
  return (
    <div 
       style={{
              backgroundImage: `url(${HomeImg})`,
              backgroundSize: 500,
            }}
    className="p-10 items-center h-screen bg-400  flex flex-col justify-center">
     <div className="flex flex-col justify-center  items-center bg-gray-600 h-100 w-100 rounded-2xl ">
      <h1 className="text-3xl py-2 mb-3 text-white font-bold">Welcome to Weather App</h1>
           
      {/* city selection */}
     
      <div 
      className="flex gap-1 flex-col mt-10">
           
       <label htmlFor="">Enter location</label>
        <input
          onChange={handleChange}
          className="px-40 py-2 mb-33 w-[400px] rounded text-slate-900 bg-white"
          type="text"
          placeholder="Enter here"
        />
      </div>

      <div>
        <button 
          onClick={() => {
            if (location.trim() == "") {
              toast.error("Location required");
              return;
            }

            navigate(`/weather/${location}`);
          }}
          className="flex bg-gray-950 justify-center cursor-pointer text-white px-3 py-2 rounded-2xl hover:bg-gray-800"
        >
          Show Weather
        </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
