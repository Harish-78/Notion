import { DropZone } from "@measured/puck";
import ReactPlayer from "react-player";
import { Typography } from "@mui/material";
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
      components: ["Columns", "Row", "VerticalSpace"],
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
        alignItems: {
          type: "radio",
          options: [
            { label: "Top", value: "start" },
            { label: "Middle", value: "center" },
            { label: "Bottom", value: "end" },
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
        backgroundColor: {
          type: "custom",
          render: ({ name, onChange, value }) => (
            <div>
              <label>backgroundColor: </label>
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
        borderRadius: {
          type: "text",
        },
      },
      defaultProps: {
        title: "Paragraph",
        margin: "0",
        padding: "0",
        textAlign: "left",
        textIndent: "50px",
        fontSize: "",
        Size: "h1",
        color: "",
        alignItems: "center",
      },
      render: ({
        title,
        color,
        margin,
        padding,
        textAlign,
        textIndent,
        fontSize,
        textDecoration,
        backgroundColor,
        alignItems,
        fontStyle,
        fontFamily,
        borderRadius,
      }) => {
        return (
          <div
            style={{
              borderRadius: borderRadius + "px",
              display: "flex",
              alignItems: alignItems,
              backgroundColor: backgroundColor,
              width: "100%",
              height: "100%",
            }}
          >
            <p
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
            </p>
          </div>
        );
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
        borderRadius: {
          type: "text",
        },
        backgroundColor: {
          type: "custom",
          render: ({ name, onChange, value }) => (
            <div>
              <label>backgroundColor: </label>
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
        margin: "0",
        padding: "0",
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
        borderRadius,
        backgroundColor,
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
                border: "0px solid ",
                borderRadius: borderRadius + "px",
                backgroundColor: backgroundColor,
              }}
            >
              {title}
            </Typography>
          </div>
        );
      },
    },
    //
    //<grid>
    Columns: {
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
            <DropZone
              zone="left-column"
              style={{
                display: "flex ",
                margin: "10px",
                padding: "10px",
                flexDirection: "column",
                alignItems: "center",
              }}
            />
            <DropZone
              zone="right-column"
              style={{
                display: "flex ",
                margin: "10px",
                padding: "10px",
                flexDirection: "column",
                alignItems: "center",
              }}
            />
          </div>
        );
      },
    },

    Row: {
      render: () => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <DropZone
              zone="left-column"
              style={{
                margin: "10px",
                padding: "10px",
              }}
            />
            <DropZone
              zone="right-column"
              style={{
                
                margin: "10px",
                padding: "10px",
              }}
            />
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
          <div className="flex justify-center items-center">
            <img src={imageUrl} alt={alt} width={width} height={height} />
          </div>
        );
      },
    },
    //<link/>
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
        padding: {
            type: "text", // Add an input field for height
          },
      },

      defaultProps: {
        videoUrl: "",
        alt: "",
        width: "200px",
        height: "200px",
      },
      render: ({ videoUrl, height, width,padding }) => {
        return (
          <div className="flex justify-center items-center">
            <ReactPlayer
            style={{padding: padding + "px",}}
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

export default config;
