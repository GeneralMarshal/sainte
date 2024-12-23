import "../styles/AdminCitizensView.css"
import SearchBar from "./SearchBar"
import CitizenCardShort from "./CitizenCardShort"
import CitizenCard from "./CitizenCard";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { progressColumns,progressData, activityData, activityColumns, appointments } from "./CitizensViewTableData"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  BarChart,
  Rectangle,
  Bar,
} from "recharts";

export default function CitizensView(){
    const [citizen, setCitizen] = useState(
      {
        name: "Eduard Marco",
        img: "/Citizen-pics/Citizen 1.png",
        isVerified: true,
      },
    );
    const [peerMentors, setPeerMentors] = useState([
      {
        Card: CitizenCard,
        name: "Eduard Marco",
        img: "/Citizen-pics/Citizen 1.png",
        isVerified: true,
      },
      {
        Card: CitizenCard,
        name: "Nneoma Zarah",
        img: "/Citizen-pics/Citizen 3.png",
        isVerified: false,
      },
      {
        Card: CitizenCard,
        name: "Eduard Marco",
        img: "/Citizen-pics/Citizen 7.png",
        isVerified: true,
      },
      {
        Card: CitizenCard,
        name: "Eduard Marco",
        img: "/Citizen-pics/Citizen 5.png",
        isVerified: true,
      },
      {
        Card: CitizenCard,
        name: "Eduard Marco",
        img: "/Citizen-pics/Citizen 8.png",
        isVerified: true,
      }
    ]);
    const [paroleOfficers, setParole] = useState([
      {
        Card: CitizenCard,
        name: "Eduard Marco",
        img: "/Citizen-pics/Citizen 1.png",
        isVerified: true,
      },
      {
        Card: CitizenCard,
        name: "Nneoma Zarah",
        img: "/Citizen-pics/Citizen 3.png",
        isVerified: false,
      },
      {
        Card: CitizenCard,
        name: "Eduard Marco",
        img: "/Citizen-pics/Citizen 7.png",
        isVerified: true,
      },
      {
        Card: CitizenCard,
        name: "Eduard Marco",
        img: "/Citizen-pics/Citizen 5.png",
        isVerified: true,
      },
    ]);
    const progressTableStyles = {
      header:{
        style:{
          height: "44px",
        }
      },
      rows: {
        style: {
          background: "#1c1c1c",
          color: "#fff",
        },
      },
      cells: {
        style: {
          border: "none",
          borderBottom: "1px solid rgba(130, 130, 130, 0.3)",
          height: "60px"
        },
      },
    };
    const activityTableStyles = {
      header: {
        style: {
          height: "44px",
        },
      },
      rows: {
        style: {
          background: "#1c1c1c",
          color: "#fff",
        },
      },
      cells: {
        style: {
          border: "none",
          borderBottom: "1px solid rgba(130, 130, 130)",
          height: "60px",
        },
      },
    };
    return (
      <main className="citizens-view w-[100%]">
        <SearchBar />
        <div className=" my-[46px] mx-[5px] gap-[20px] flex flex-wrap w-[100%]">
          <CitizenCardShort
            img={citizen.img}
            name={citizen.name}
            isVerified={citizen.isVerified}
          />
          <div className="citizen-frame  ">
            <div className=" relative flex flex-col  flex-[60%] h-[100%]">
              <div className=" h-[100%] flex flex-col justify-center gap-[10px] md:gap-[15px] ">
                <div className="flex items-end  gap-[11px]">
                  <p
                    className="citizen-header text-[36px] font-[600] leading-none
                "
                  >
                    Citizen
                  </p>
                  {citizen.isVerified ? (
                    <p className="is-verified font-[600] text-[16px] text-[#3ae6bd] ">
                      Verified
                    </p>
                  ) : (
                    <p className="is-verified font-[600] text-[16px] text-[#ff6760] underline">
                      Unverified
                    </p>
                  )}
                </div>
                <div className="citizen-active ">
                  <p className=" text-[#22c55e]">Active Since</p>
                  <p>21/10/2024</p>
                </div>
              </div>
              <div className="appointment-info flex relative mt-auto">
                <p className=" flex-1">Appointments: 456</p>
                <p className=" flex-1">Care Team: 7</p>
              </div>
            </div>
            <div className="  flex-[40%]">
              <div className="flex flex-wrap gap-[10px]">
                <button className=" text-[#ffffff]">
                  <img src="/citizen-icons/bin.svg" alt="" />
                  Delete
                </button>
                <button className="bg-[#ffffff] text-[#252c32]">
                  <img src="/citizen-icons/Pencil edit.svg" alt="" />
                  Edit
                </button>
                <button className="bg-[#3ae6bd]">
                  <img src="/citizen-icons/Trending up.svg" alt="" />
                  Match
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-mentors-cont my-[100px]">
          <div className=" p-mentors ">
            <p className=" peer-h text-[13px] font-[500] mb-[19px]">
              Peer mentors
            </p>

            {peerMentors.map((mentors, index) => {
              return (
                <mentors.Card
                  img={mentors.img}
                  name={mentors.name}
                  isVerified={mentors.isVerified}
                  key={index}
                />
              );
            })}
          </div>

          <div className=" p-officers mt-[50px] ">
            <p className=" peer-h text-[13px] font-[500] mb-[19px]">
              Parole Officer
            </p>
            {paroleOfficers.map((officers, index) => {
              return (
                <officers.Card
                  img={officers.img}
                  name={officers.name}
                  isVerified={officers.isVerified}
                  key={index}
                />
              );
            })}
            <div />
          </div>
        </div>
        <section className=" pl-[17px] flex flex-col gap-[120px]  ">
          <p className="text-[13px] font-[500] mb-[-100px] ml-[-17px]">Progress</p>
          <div>
            <p className="text-[13px] font-[500]  mb-[19px]">Goals</p>
            <DataTable
              columns={progressColumns}
              data={progressData}
              customStyles={progressTableStyles}
            />
            <button className=" flex items-center justify-center text-[#f5f5f5] text-[14px] font-[400] p-[4px] gap-[8px] rounded-[10px] border-[1px] border-solid border-[#828282] w-[139px] h-[52px] ml-auto mt-[19px]">
              Goal history
              <img src="citizen-icons/360.svg" alt="" />
            </button>
          </div>
          <div>
            <p className="text-[13px] font-[500] mb-[19px]">Daily Activities</p>
            <DataTable
              columns={activityColumns}
              data={activityData}
              customStyles={activityTableStyles}
            />
          </div>
          <div className=" appointments-graph">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
                width={500}
                height={300}
                data={appointments}
              >
                <CartesianGrid strokeDasharray="3" vertical={false} />
                <XAxis
                  dataKey="name"
                  padding={{ left: 30, right: 30 }}
                  tick={{ fontSize: 10, fontWeight: 600, fill: "white" }}
                />
                <YAxis
                  tick={{ fontSize: 10, fontWeight: 600, fill: "white" }}
                  axisLine={false}
                />
                <Tooltip />
                <Legend
                  layout="horizontal"
                  align="right"
                  verticalAlign="top"
                  iconType="line"
                  wrapperStyle={{
                    position: "absolute", // Make the legend float above the chart
                    right: -10, // Position it on the right side
                    top: -10, // Adjust top position if needed
                    zIndex: 10, // Ensure it's not overlapped
                    width: 100,
                  }}
                  content={(props) => {
                    const { payload } = props;
                    return (
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column", // Stack items vertically
                          listStyleType: "none",
                          padding: 0,
                          margin: 0,
                        }}
                      >
                        {payload.map((entry, index) => (
                          <li
                            key={`item-${index}`}
                            style={{
                              marginBottom: 10,
                              color: "#a0a4a8",
                              fontSize: "10px",
                            }} // Color of the text
                          >
                            <span
                              style={{
                                backgroundColor: entry.color,
                                width: 12,
                                height: 12,
                                display: "inline-block",
                                marginRight: 5,
                              }}
                            ></span>
                            {entry.value}
                          </li>
                        ))}
                      </ul>
                    );
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="#3ae6bd"
                  dot={false}
                  strokeWidth={2}
                  name="Number of Appointments"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    );
}