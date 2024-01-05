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

const Columns3 = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
    <DropZone zone="left-column" />
    <DropZone zone="right-column" />
  </div>
);

const config = {
  root: {
    fields: {
      title: { type: "text" },
    },
    defaultProps: {
      title: "Page Title",
    },
  },
  categories: {
    Layouts: {
      components: ["Columns", "VerticalSpace"],
      label: "Text",
      type: "text",
      defaultExpanded: true,
    },
    Typography: {
      components: ["Heading", "ParagraphBlock"],
      label: "Text",
      type: "text",
      defaultExpanded: true,
    },
    Actions: {
      components: ["Button"],
      label: "Text",
      type: "text",
      defaultExpanded: true,
    },
  },
  components: {
    ParagraphBlock: {
      fields: {
        title: {
          type: "text",
        },
      },
      defaultProps: {
        title: "Paragraph Block",
      },
      render: ({ title }) => {
        return <p>{title}</p>;
      },
    },

    Heading: {
      fields: {
        title: {
          type: "text",
        },
        margin: {
          type: "text",
        },
        padding: {
          type: "text",
        },
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        fontStyle: {
          type: "select",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Italic", value: "italic" },
          ],
        },
        fontFamily: {
          type: "select",
          options: [
            { label: "Arial", value: "Arial, sans-serif" },
            { label: "Helvetica", value: "Helvetica, sans-serif" },
            { label: "Times New Roman", value: "Times New Roman, serif" },
            { label: "Georgia", value: "Georgia, serif" },
            { label: "Courier New", value: "Courier New, monospace" },
            { label: "Verdana", value: "Verdana, sans-serif" },
            { label: "Impact", value: "Impact, sans-serif" },
            { label: "Trebuchet MS", value: "Trebuchet MS, sans-serif" },
            { label: "Palatino", value: "Palatino, serif" },
            { label: "Book Antiqua", value: "Book Antiqua, serif" },
            { label: "Fantasy", value: "fantasy" },
            { label: "Monospace", value: "monospace" },
          ],
        },
        color: {
          type: "custom",
          render: ({ name, onChange, value }) => (
            <div>
              <label>Color: </label>
              <input
                type="color"
                defaultValue={value}
                name={name}
                onChange={(e) => onChange(e.currentTarget.value)}
              />
            </div>
          ),
        },
        fontSize: {
          type: "text",
        },
        Size: {
          type: "select",
          options: [
            { label: "XXL", value: "h1" },
            { label: "XL", value: "h2" },
            { label: "L", value: "h3" },
            { label: "M", value: "h4" },
            { label: "S", value: "h5" },
            { label: "XS", value: "h6" },
          ],
        },
      },
      defaultProps: {
        title: "Heading",
        margin: "10",
        padding: "10",
        textAlign: "center",
        fontSize: "",
        Size: "h1",
        color: "",
      },
      render: ({
        title,
        color,
        margin,
        Size,
        padding,
        textAlign,
        fontSize,
        textDecoration,
        fontStyle,
        fontFamily,
      }) => {
        return (
          <div>
            <Typography
              variant={Size}
              style={{
                margin: margin + "px",
                padding: padding + "px",
                textAlign: textAlign,
                fontSize: fontSize + "px",
                color: color,
                textDecoration: textDecoration,
                fontStyle: fontStyle,
                fontFamily: fontFamily,
              }}
            >
              {title}
            </Typography>
          </div>
        );
      },
    },

    //<grid>
    Columns: {
      render: () => {
        return (
          <div>
            <Columns3 />
          </div>
        );
      },
    },

    VerticalSpace: {
      render: () => {
        return (
          <div>
            <br />
            <br />
            <br />
          </div>
        );
      },
    },

    Card: {
      fields: {
        CardText: {
          type: "text",
        },
      },
      defaultProps: {
        CardText: "This is a Card",
      },
      render: ({ CardText }) => {
        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              margin: "10px",
              padding: "10px",
            }}
          >
            <Card>
              <DropZone />
            </Card>
          </div>
        );
      },
    },

    Button: {
      fields: {
        ButtonText: {
          type: "text",
        },
      },
      defaultProps: {
        ButtonText: "Button",
      },
      render: ({ ButtonText }) => {
        return (
          <div>
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            >
              {ButtonText}
            </button>
          </div>
        );
      },
    },

    //<image/>
    Image: {
      fields: {
        imageUrl: {
          type: "text",
        },
        alt: {
          type: "text",
        },
        width: {
          type: "text",
        },
        height: {
          type: "text",
        },
      },
      defaultProps: {
        imageUrl: "",
        alt: "",
        width: "200px",
        height: "200px",
      },
      render: ({ imageUrl, alt, width, height }) => {
        return (
          <div>
            <img src={imageUrl} alt={alt} width={width} height={height} />
          </div>
        );
      },
    },
    //<image/>
    Link: {
      fields: {
        title: {
          type: "text",
        },
        url: {
          type: "text",
        },
        margin: {
          type: "text",
        },
        padding: {
          type: "text",
        },
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        fontStyle: {
          type: "select",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Italic", value: "italic" },
          ],
        },
        fontFamily: {
          type: "select",
          options: [
            { label: "Arial", value: "Arial, sans-serif" },
            { label: "Helvetica", value: "Helvetica, sans-serif" },
            { label: "Times New Roman", value: "Times New Roman, serif" },
            { label: "Georgia", value: "Georgia, serif" },
            { label: "Courier New", value: "Courier New, monospace" },
            { label: "Verdana", value: "Verdana, sans-serif" },
            { label: "Impact", value: "Impact, sans-serif" },
            { label: "Trebuchet MS", value: "Trebuchet MS, sans-serif" },
            { label: "Palatino", value: "Palatino, serif" },
            { label: "Book Antiqua", value: "Book Antiqua, serif" },
            { label: "Fantasy", value: "fantasy" },
            { label: "Monospace", value: "monospace" },
          ],
        },
        color: {
          type: "custom",
          render: ({ name, onChange, value }) => (
            <div>
              <label>Color: </label>
              <input
                type="color"
                defaultValue={value}
                name={name}
                onChange={(e) => onChange(e.currentTarget.value)}
              />
            </div>
          ),
        },
        fontSize: {
          type: "text",
        },
        textDecoration: {
          type: "text",
        },
      },
      defaultProps: {
        title: "link",
        margin: "10",
        padding: "10",
        textAlign: "center",
        fontSize: "",
        fontColor: "blue",
      },
      render: ({
        url,
        title,
        color,
        margin,
        padding,
        textAlign,
        fontSize,
        textDecoration,
        fontStyle,
        fontFamily,
      }) => {
        return (
          <a
            href={url}
            style={{
              margin: margin + "px",
              padding: padding + "px",
              textAlign: textAlign,
              fontSize: fontSize + "px",
              color: color,
              textDecoration: textDecoration,
              fontStyle: fontStyle,
              fontFamily: fontFamily,
            }}
          >
            {title}
          </a>
        );
      },
    },

    //video
    Video: {
      fields: {
        videoUrl: {
          type: "text",
        },
        alt: {
          type: "text", // Add an input field for alt text
        },
        width: {
          type: "text", // Add an input field for width
        },
        height: {
          type: "text", // Add an input field for height
        },
      },

      defaultProps: {
        videoUrl: "",
        alt: "",
        width: "200px",
        height: "200px",
      },
      render: ({ videoUrl, height, width }) => {
        return (
          <div>
            <ReactPlayer
              url={videoUrl}
              controls
              width={width}
              height={height}
            />
          </div>
        );
      },
    },
    //iframe
    Iframe: {
      fields: {
        title: {
          type: "text", // Add
        },
        Url: {
          type: "text",
        },
        width: {
          type: "text", // Add an input field for width
        },

        height: {
          type: "text", // Add an input field for height
        },
      },
      defaultProps: {
        Url: "",
        title: "",
        width: "200px",
        height: "200px",
      },
      render: ({ Url, height, width, title }) => {
        return (
          <div>
            <iframe
              src={Url}
              height={height}
              width={width}
              title={title}
            ></iframe>
          </div>
        );
      },
    },
  },
};

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
