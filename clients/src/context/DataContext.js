import axios from "axios";
import React, { createContext } from "react";
import { DropZone } from "@measured/puck";
import "@measured/puck/puck.css";
import config from "../config/config";

const Columns3 = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
    <DropZone zone="left-column" />
    <DropZone zone="right-column" />
  </div>
);



const DataContext = createContext();
const DataContextProvider = (props) => {
  const [data, setData] = React.useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/getPuck`);
      const { db } = response.data;
      setData(db);
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={{ data, config, fetchData }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;

export { DataContextProvider };
