import React from "react";
import Sor from "./Sor";
import useAdatContext from "../contexts/AdatContext";

export default function Publikus() {
  const { szavakLista } = useAdatContext();
  return (
    <>
      <table className="table table-hover table-striped table-borderd">
        <thead>
          <tr>
            <th>ANGOL</th>
            <th>MAGYAR</th>
            <th>visszajelzés</th>
          </tr>
        </thead>
        <tbody>
          {szavakLista.map((elem, index) => {
            return <Sor adat={elem} key={index} />;
          })}
        </tbody>
      </table>
    </>
  );
}
