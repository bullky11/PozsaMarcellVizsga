import React, { useState } from "react";
import useAdatContext from "../contexts/AdatContext";

export default function Urlap() {
  const { Lista, postAdat, setTemaLista } = useAdatContext();
  const temaLista = ["Főnév", "Ige", "Mondat"];

  const [tema, setTema] = useState("valassz");
  const [szavak, setSzavak] = useState("valassz");

  function kuld(event) {
    event.preventDefault();
    let adat = {
      temanev: tema,
    };
    if (!(tema === "valassz" || szavak === "valassz")) {
      postAdat(adat, "api/tema", setTemaLista);
    } else {
      console.log("hibás adatok");
    }
  }

  return (
    <form className="my-3" onSubmit={kuld}>
      <select
        className="form-select"
        id="tema"
        name="tema"
        onChange={(event) => {
          setTema(event.target.value);
        }}
      >
        <option value="valassz">Válassz Témát!</option>
        {temaLista.map((elem, index) => {
/*           console.log(temaLista[]); */
          return (
            <option value={elem} key={index}>
              {elem}
            </option>
          );
        })}
      </select>
    </form>
  );
}
