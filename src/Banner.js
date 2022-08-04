import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { createRef, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useImmer } from "use-immer";

const Banner = () => {
  const imageRef = useRef(null);
  const contentRef = createRef();
  const [bannerState, setBannerState] = useImmer({
    file: "",
    text: [
      { html: "<b>Hello <i>World</i></b>" },
      { html: "<b>Hello <i>World1</i></b>" },
      { html: "<b>Hello <i>World2</i></b>" },
    ],
  });
  const styles = {
    paperContainer: {
      backgroundImage: bannerState.file
        ? `url(${URL.createObjectURL(bannerState.file)})`
        : `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagT29u745wYr4MHiVIr5di4jdLdEZOr7UILu-PAQzVH2XGV8UKnrd7X-gUfZhQmJmt3c&usqp=CAU")`,

      height: "600px",
    },
  };

  const onChangeImage = (e) => {
    setBannerState((draft) => {
      draft.file = e.target.files[0];
    });
  };

  const onImageClick = () => {
    imageRef.current.click();
  };

  const onAddText = (e) => {
    e.stopPropagation();
    setBannerState((draft) => {
      draft.text = [...draft.text, { html: "helloo" }];
    });
  };

  const handleChange = (e, i) => {
    setBannerState((draft) => {
      draft.text[i].html = e.target.value;
    });
  };

  return (
    <Stack sx={{ height: "50vh" }}>
      <input
        type="file"
        onChange={(e) => onChangeImage(e)}
        style={{ display: "none" }}
        ref={imageRef}
      />
      <Box
        onClick={(e) => {
          e.stopPropagation();
          onImageClick();
        }}
        style={styles.paperContainer}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {bannerState.text.map(({ html }, index) => (
          <ContentEditable
            innerRef={contentRef}
            html={html} // innerHTML of the editable div
            disabled={false} // use true to disable editing
            onChange={(e) => handleChange(e, index)} // handle innerHTML change
            tagName="article" // Use a custom HTML tag (uses a div by default)
          />
        ))}
        <Box
          onClick={(e) => onAddText(e)}
          sx={{ backgroundColor: "red", cursor: "pointer" }}
        >
          Add text
        </Box>

        <Box>
          <Button variant="contained">Call us</Button>
          <Button variant="contained" sx={{ marginLeft: "5px" }}>
            Direction
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Banner;
