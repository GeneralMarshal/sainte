import "../styles/AdminDashboard.css";

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
  Bar

} from "recharts";

export default function DashMain(props) {



  const appointments = [
    {
      name: "Jan",
      uv: 140,
    },
    {
      name: "Feb",
      uv: 125,
    },
    {
      name: "Mar",
      uv: 210,
    },
    {
      name: "Apr",
      uv: 150,
    },
    {
      name: "May",
      uv: 150,
    },
    {
      name: "Jun",
      uv: 135,
    },
    {
      name: "Jul",
      uv: 180,
    },
    {
      name: "Aug",
      uv: 175,
    },
    {
      name: "Sep",
      uv: 140,
    },
    {
      name: "Oct",
      uv: 220,
    },
    {
      name: "Nov",
      uv: 180,
    },
    {
      name: "Dec",
      uv: 250,
    },
  ];
  const ageDistribution = [
    {
      name: "18-25",
      uv: 29,
    },
    {
      name: "26-35",
      uv: 35,
    },
    {
      name: "36-45",
      uv: 52,
    },
    {
      name: "46-55",
      uv: 40,
    },
    {
      name: "56+",
      uv: 36,
    },
  ];
  return (
    <main className="">
      {/* <Header toggleSidebar={props.toggleSidebar} sidebar={props.sidebar}/> */}
      <div className="welcome">
        <p>Hey jane -</p>
        <span>here's what is happening today</span>
      </div>
      <div className="overview-card">
        <h2 className=" overview-h">
          <img src="/dashboard-icons/down.svg" alt="" className="mr-[16px]" />
          Overview
        </h2>
        <div className=" flex gap-[14px] pl-[48px]">
          <div className="overview-data">
            <p>Total Citizens</p>
            <h3>4,567</h3>
          </div>
          <span className=" w-[1px] bg-[#828282]"></span>
          <div className="overview-data">
            <p>Care Team</p>
            <h3>905</h3>
          </div>
          <span className=" w-[1px] bg-[#828282]"></span>
          <div className="overview-data">
            <p>Appointments</p>
            <h3>12,243</h3>
          </div>
        </div>
      </div>
      <section className=" w-[100%] h-[auto]">
        <div className=" w-[100%]  pt-[20px] mt-[30px]">
          <div className="age-graph">
            <h3>Appointments</h3>
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

          <div className=" age-graph">
            <h3 className="">Age Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={ageDistribution}
                margin={{
                  top: 5,
                  bottom: 5,
                }}
                stroke="#9ae1ff"
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
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
                  iconType="square"
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
                          alignItems: "center",
                          // Stack items vertically
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
                <Bar
                  dataKey="uv"
                  fill="#9ae1ff"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                  barSize={4}
                  name="Age"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </main>
  );
}
