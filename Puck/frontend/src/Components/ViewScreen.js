import axios from "axios";
import React, { useEffect, useState } from "react";
import { Render } from "@measured/puck";
import { useLocation } from "react-router";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { DropZone } from "@measured/puck";
import "@measured/puck/puck.css";
import ReactPlayer from "react-player";

const Columns3 = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
    <DropZone zone="left-column" />
    <DropZone zone="right-column" />
  </div>
);

const headingBaseFields = {
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
  textDecoration: {
    type: "text",
  },
};

const config = {
  root: {
    fields: {
      title: { type: "text" },
      description: { type: "textarea" },
    },
  },
  categories: {
    Headers: {
      components: ["H1", "H2", "H3", "H4", "H5", "H6"],
      label: "Text",
      type: "text",
      defaultExpanded: false, // Collapse this category by default
    },
    Paragraph: {
      components: ["ParagraphBlock"],
      label: "Text",
      type: "text",
      defaultExpanded: false,
    },
  },
  components: {
    //<P>
    ParagraphBlock: {
      fields: {
        title: {
          type: "text",
        },
      },
      defaultProps: {
        title: "Paragraph Block",
      },
      render: ({ title, children }) => {
        return <p>{title}</p>;
      },
    },

    H1: {
      fields: {
        ...headingBaseFields,
      },
      defaultProps: {
        title: "H1",
        margin: "10",
        padding: "10",
        textAlign: "center",
        fontSize: "",
        color: "",
        textDecoration: "underline",
      },
      render: ({
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
          <div>
            <Typography
              variant="h1"
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

    H2: {
      fields: {
        ...headingBaseFields,
      },
      defaultProps: {
        title: "H2",
        margin: "10",
        padding: "10",
        textAlign: "center",
        fontSize: "",
        color: "",
        textDecoration: "underline",
      },
      render: ({
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
          <div>
            <h2
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
            </h2>
          </div>
        );
      },
    },

    H3: {
      fields: {
        ...headingBaseFields,
      },
      defaultProps: {
        title: "H3",
        margin: "10",
        padding: "10",
        textAlign: "center",
        fontSize: "",
        color: "",
        textDecoration: "underline",
      },
      render: ({
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
          <div>
            <h3
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
            </h3>
          </div>
        );
      },
    },

    H4: {
      fields: {
        ...headingBaseFields,
      },
      defaultProps: {
        title: "H4",
        margin: "10",
        padding: "10",
        textAlign: "center",
        fontSize: "",
        color: "",
        textDecoration: "underline",
      },
      render: ({
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
          <div>
            <h4
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
            </h4>
          </div>
        );
      },
    },

    H5: {
      fields: {
        ...headingBaseFields,
      },
      defaultProps: {
        title: "H5",
        margin: "10",
        padding: "10",
        textAlign: "center",
        fontSize: "",
        color: "",
        textDecoration: "underline",
      },
      render: ({
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
          <div>
            <h5
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
            </h5>
          </div>
        );
      },
    },

    H6: {
      fields: {
        ...headingBaseFields,
      },
      defaultProps: {
        title: "H6",
        margin: "10",
        padding: "10",
        textAlign: "center",
        fontSize: "",
        color: "",
        textDecoration: "underline",
      },
      render: ({
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
          <div>
            <h6
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
            </h6>
          </div>
        );
      },
    },

    //<grid>
    Layout: {
      render: () => {
        return (
          <div>
            <Columns3 />
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
  },
};


const ViewScreen = () => {
  const location = useLocation();
  const componentName = location.state?.data || {};

  const [data, setData] = useState({});
  const [renderDelayed, setRenderDelayed] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/getPuck/${componentName}`
      );
      const { db } = response.data;
      console.log(db);
      if (db) {
        const publishedData = db?.data;
        setData(publishedData);
      } else {
        console.error("No data found for the component name:", componentName);
      }
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [componentName]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRenderDelayed(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <div>
      {renderDelayed && <Render config={config} data={data} />}
    </div>
  );
};

export default ViewScreen;
