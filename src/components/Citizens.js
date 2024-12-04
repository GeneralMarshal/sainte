import "../styles/AdminCitizens.css";
import CitizenCard from "./CitizenCard";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function Citizens() {
  const [postArray, setPostArray] = useState([
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
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 2.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 15.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 11.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 9.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 10.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 13.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 4.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 9.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 6.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 12.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 15.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 1.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 2.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 2.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 8.png",
      isVerified: true,
    },
    {
      Card: CitizenCard,
      name: "Eduard Marco",
      img: "/Citizen-pics/Citizen 6.png",
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
      img: "/Citizen-pics/Citizen 13.png",
      isVerified: true,
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const [currentPosts, setCurrentPosts] = useState(
    postArray.slice(firstPostIndex, lastPostIndex)
  );

  const citizensRef = useRef(null)

  useEffect(() => {
    setCurrentPosts(postArray.slice(firstPostIndex, lastPostIndex));
    citizensRef.current.scrollIntoView({ behavior: "smooth" });

  }, [currentPage]);

  const noOfPages = Math.ceil(postArray.length / postPerPage);

  let pages = [];
  for (let i = 1; i <= noOfPages; i++) {
    pages.push(i);
  }

  function setPage(e) {
    e.preventDefault();
    const selectedPage = Number(e.target.value);
    setCurrentPage(selectedPage);
  }

  function nextPage() {
    setCurrentPage((prevPage) => {
      return prevPage < noOfPages ? prevPage + 1 : 1;
    });
  }

  function prevPage() {
    setCurrentPage((prevPage) => {
      return prevPage > 1 ? prevPage - 1 : noOfPages;
    });
  }

  return (
    <main className="citizens w-[100%] " ref={citizensRef}>
      <div className=" w-[100%]">
        <SearchBar/>
        <section className="citizen-main">
          <div className="citizen-grid">
            {currentPosts.map((card, index) => {
              return <card.Card img={card.img} name={card.name} isVerified={card.isVerified} key={index} />;
            })}
            <div className="w-[100%] flex justify-left col-span-full">
              <div className="pagination  my-[20px]">
                <button
                  className="page-nav rotate-180"
                  onClick={() => prevPage()}
                >
                  <img src="/citizen-icons/right.svg" alt="" />
                </button>
                <div className=" flex gap-[4px]">
                  {pages.map((page, index) => (
                    <button
                      className={`page-no ${
                        currentPage === page ? "active-page" : ""
                      }`}
                      key={index}
                      value={page}
                      onClick={(e) => setPage(e)}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button className="page-nav" onClick={() => nextPage()}>
                  <img src="/citizen-icons/right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}    

