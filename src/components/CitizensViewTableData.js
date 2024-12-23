export const progressColumns = [
  {
    name: "Goal",
    selector: (row) => row.goal,
  },
  {
    name: "Date Created",
    selector: (row) => row.dateCreated,
  },
  {
    name: "Progress",
    selector: (row) => row.percentage,
    cell:(row)=>(
         <div className="flex items-center w-[100%] gap-[12px]">
            <div className="relative h-[8px] flex rounded-[8px] bg-[#3d3d3d] flex-1 overflow-hidden ">
                <span className=" absolute h-[100%] bg-[#fff]  rounded-[8px] "
                style={{width:`${row.percentage}%`}}
                >

                </span>
            </div>
            <p>{row.percentage}</p>
         </div>

    )
  },
  {
    name: "Start date",
    selector: (row) => row.startDate,
  },
  {
    name: "End date",
    selector: (row) => row.endDate,
  },
];

export const progressData = [
  {
    id: 1,
    goal: "Read a book",
    dateCreated: "22 jan 2022",
    percentage: 50,
    startDate: "22 jan 2022",
    endDate: "22 jan 2022",
  },
  {
    id: 2,
    goal: "Lose 10 pounds",
    dateCreated: "22 jan 2022",
    percentage: 72,
    startDate: "22 jan 2022",
    endDate: "22 jan 2022",
  },
  {
    id: 3,
    goal: "Get a job",
    dateCreated: "22 jan 2022",
    percentage: 50,
    startDate: "22 jan 2022",
    endDate: "22 jan 2022",
  },
  {
    id: 4,
    goal: "Start a business",
    dateCreated: "22 jan 2022",
    percentage: 23,
    startDate: "22 jan 2022",
    endDate: "22 jan 2022",
  },
  {
    id: 5,
    goal: "Finish reading my bible",
    dateCreated: "22 jan 2022",
    percentage: 90,
    startDate: "22 jan 2022",
    endDate: "22 jan 2022",
  },
  {
    id: 6,
    goal: "Run a marathon",
    dateCreated: "22 jan 2022",
    percentage: 52,
    startDate: "22 jan 2022",
    endDate: "22 jan 2022",
  },
  {
    id: 7,
    goal: "Get married",
    dateCreated: "22 jan 2022",
    percentage: 20,
    startDate: "22 jan 2022",
    endDate: "22 jan 2022",
  },
];

export const activityColumns = [
  {
    name: "Daily activities",
    selector: (row) => row.dailyActivites,
  },
  {
    name: "Streak",
    selector: (row) => row.streak,
  },
  {
    name: "Date Created",
    selector: (row) => (
      <div>
        <div className=" opacity-[0.3]">{row.dateCreated}</div>
      </div>
    ),
  },
  {
    name: "Frequency",
    selector: (row) => <div className="flex gap-[50px] opacity-[0.3]">
      {row.frequency}
      <img src="citizen-icons/frequency.svg" alt="" />
      
      </div>,
  },
];
export const activityData = [
  {
    id: 1,
    dailyActivites: "Catalog",
    streak: 50,
    dateCreated: "22 jan 2022",
    frequency: "22 jan 2022",
  },
  {
    id: 2,
    dailyActivites: "Catalog",
    streak: 50,
    dateCreated: "22 jan 2022",
    frequency: "22 jan 2022",
  },
  {
    id: 3,
    dailyActivites: "Catalog",
    streak: 50,
    dateCreated: "22 jan 2022",
    frequency: "22 jan 2022",
  },
  {
    id: 4,
    dailyActivites: "Catalog",
    streak: 50,
    dateCreated: "22 jan 2022",
    frequency: "22 jan 2022",
  },
  {
    id: 5,
    dailyActivites: "Catalog",
    streak: 50,
    dateCreated: "22 jan 2022",
    frequency: "22 jan 2022",
  },
  {
    id: 6,
    dailyActivites: "Catalog",
    streak: 50,
    dateCreated: "22 jan 2022",
    frequency: "22 jan 2022",
  },
];
export const appointments = [
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
