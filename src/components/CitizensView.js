import "../styles/AdminCitizensView.css"
import SearchBar from "./SearchBar"
import CitizenCardShort from "./CitizenCardShort"
import { useState } from "react";

export default function CitizensView(){
    const [citizen, setCitizen] = useState(
      {
        name: "Eduard Marco",
        img: "/Citizen-pics/Citizen 1.png",
        isVerified: true,
      },
    );
    return (
      <main className="citizens-view w-[100%]">
        <SearchBar />
        <div className=" flex">
          <CitizenCardShort
            img={citizen.img}
            name={citizen.name}
            isVerified={citizen.isVerified}
          />
          <div className="citizen-frame flex flex-wrap justify-between">
            <div>
              <div className="flex">
                <p className="">Citizen</p>
                {citizen.isVerified ? (
                  <p className="">Verified</p>
                ) : (
                  <p className="">Unverified</p>
                )}
              </div>
              <div className="flex">
                <p>Active Since</p>
                <p>21/10/2024</p>
              </div>
              <div className="flex">
                <p>Appointments: 456</p>
                <p>Care Team: 7</p>
              </div>
            </div>
            <div className="">
              <button>
                <img src="/citizen-icons/bin.svg" alt="" />
                Delete
              </button>
              <button>
                <img src="/citizen-icons/Pencil edit.svg" alt="" />
                Edit
              </button>
              <button>
                <img src="/citizen-icons/Trending up.svg" alt="" />
                Match
              </button>
            </div>
          </div>
        </div>
      </main>
    );
}