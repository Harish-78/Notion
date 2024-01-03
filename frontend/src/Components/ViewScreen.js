import { Render } from "@measured/puck";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewScreen = () => {
  const [db, setDb] = useState([]);
  const [data, setData] = useState([]);
  const [config, setConfig] = useState({}); // Fixed here

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getpuck");
      const { db } = response?.data; // Fixed here
      setDb(db);
      const configData = db.map((data, i) => data.config);
      setConfig(configData);
      const publishedData = db.map((data, i) => data.data); // Fixed here
      setData(publishedData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("config: " + config);
  console.log("data" + data);
  return (
    <div>
      <Render config={config} data={data} />{" "}
    </div>
  );
};

export default ViewScreen;
