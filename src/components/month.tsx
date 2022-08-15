import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

export function Month() {
  // const [month, setmonth] = useState("janary");

  const [muaji, setMuaj] = useState([
    {
      id: 1,
      title: "Janary",
      day: 31,
    },
    {
      id: 2,
      title: "Febrary",
      day: 29,
    },
    {
      id: 3,
      title: "March",
      day: 31,
    },
    {
      id: 4,
      title: "April",
      day: 30,
    },
    {
      id: 5,
      title: "May",
      day: 31,
    },
    {
      id: 6,
      title: "June",
      day: 30,
    },
    {
      id: 7,
      title: "Jule",
      day: 31,
    },
    {
      id: 8,
      title: "Agust",
      day: 30,
    },
    {
      id: 9,
      title: "September",
      day: 31,
    },
    {
      id: 10,
      title: "October",
      day: 30,
    },
    {
      id: 1,
      title: "November",
      day: 31,
    },
    {
      id: 1,
      title: "December",
      day: 31,
    },
  ]);

  return (
    <div>
      <div>
        <h2>Calendar 2022</h2>
      </div>

    {
    muaji.map((muaj) => {
    return(
      <div>
      <button onClick={() => {
        setMuaj (muaji)
      }}>{muaj.title}</button>
      
    
      </div>
    )
    })

    }



      {/* <button
        onClick={() => {
          setMuaj(muaji);
        }}
      >
        back
      </button>
    
      {muaji}
      <button
        onClick={() => {
          setMuaj(muaji);
        }}
      >
        next
      </button> */}
    </div>
  );
}
