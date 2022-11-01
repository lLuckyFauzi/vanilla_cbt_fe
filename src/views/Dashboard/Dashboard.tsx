import React, { useState } from "react";
import Departement from "./Partials/Departement";
import Title from "./Partials/Title";
import TableList from "./Partials/TableList";
import Image from "next/image";
import Accountancy from "../../public/image/currency.png";
import Enginer from "../../public/image/CodeTyping.png";
import Hotel from "../../public/image/hotel.jpg";

const Dashboard = () => {
  const data = [
    {
      title: "Akuntansi",
      image: Accountancy,
    },
    {
      title: "Rekayasa Perangkat Lunak",
      image: Enginer,
    },
    {
      title: "Perhotelan",
      image: Hotel,
    },
  ];

  return (
    <div
      style={{
        minWidth: "70vw",
        height: "100vh",
      }}
    >
      <Title />
      <div>
        <div
          style={{
            display: "flex",
            gap: "28px",
          }}
        >
          {data.map((el) => {
            return (
              <Departement
                image={<Image width={"100%"} height={"100%"} src={el.image} />}
                title={el.title}
              />
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          <hr
            style={{
              marginTop: "15px",
              backgroundColor: "#B8AFAF",
              borderColor: "#B8AFAF",
              width: "96%",
              borderRadius: "12px",
            }}
          />
        </div>
      </div>
      <TableList />
    </div>
  );
};

export default Dashboard;