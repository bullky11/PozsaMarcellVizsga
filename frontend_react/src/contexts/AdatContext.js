import { createContext, useContext, useState, useEffect } from "react";
import axios from "../api/axios";

const AdatContext = createContext();

export const AdatProvider = ({ children }) => {
  const [temaLista, setTemaLista] = useState([]);
  const [szavakLista, setSzavakLista] = useState([]);

  const getLista = async (vegpont, callBack) => {
    const { data } = await axios.get(vegpont);
    callBack(data);
  };

  const postAdat = async ({ ...adat }, vegpont) => {
    try {
      await axios.post(vegpont, adat);
      getLista("api/szavak", setSzavakLista);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLista("api/szavak", setSzavakLista);
    getLista("api/tema", setTemaLista);
  }, []);

  return (
    <AdatContext.Provider value={{ temaLista, szavakLista, postAdat }}>
      {children}
    </AdatContext.Provider>
  );
};
export default function useAdatContext(){
    return useContext(AdatContext);
}
