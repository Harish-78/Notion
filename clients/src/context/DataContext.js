import axios from "axios";
import React, { createContext } from "react";
import { Card, Typography } from "@mui/material";
import { DropZone } from "@measured/puck";
import "@measured/puck/puck.css";
import ReactPlayer from "react-player";

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
      components: ["Columns", "VerticalSpace", "Card"],
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
      render: () => {
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
