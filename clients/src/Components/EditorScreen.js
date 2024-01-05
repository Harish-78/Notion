import { DropZone, Puck } from "@measured/puck";
import * as React from "react";
import "@measured/puck/puck.css";
import ReactPlayer from "react-player";
import { Box, Button, Card, CssBaseline, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import useURLParams from "../hooks/useUrlParams";
import DataContext from "../context/DataContext";
import config from "../config/config";

// Describe the initial data
const initialData = {
  content: [],
  root: {},
};

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

// Render Puck editor
export function EditorScreen() {
  const { data } = React.useContext(DataContext);
  const retrivedData = data;
  const { getValueFromQueryString } = useURLParams();
  const redirectUrl = getValueFromQueryString("redirecturl") ?? null;
  const location = useLocation();
  const componentName = location.state?.data || {};
  var editData = location.state?.userData || {};
  const navigate = useNavigate();
  const handlePublishPage = async (data) => {
    const filteredArray = retrivedData.filter((x) => x._id === editData._id);

    console.log(filteredArray);
    if (filteredArray.length > 0) {
      const id = filteredArray[0]?._id;
      console.log(data);
      await axios
        .patch(`http://localhost:4000/update/${id}`, { id: id, data: data })
        .then((response) => {
          console.log(response);
          navigate(`${redirectUrl}?id=${id}`);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Data entered by post");
      const { root } = data;
      console.log(data);
      if (root?.props?.title) {
        await axios
          .post("http://localhost:4000/addpuck", { componentName, data })
          .then((response) => {
            const { result } = response?.data;
            const { _id } = result;
            const dataToPass = { _id };
            navigate(`${redirectUrl}?id=${_id}`, {
              state: { data: dataToPass },
            });
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("Please fill the title");
      }
    }
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Main>
          <div>
            <Puck
              config={config}
              data={editData ? editData?.data : initialData}
              onPublish={handlePublishPage}
            />
          </div>
        </Main>
      </Box>
    </div>
  );
}
