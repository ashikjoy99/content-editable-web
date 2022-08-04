import { Stack, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import { useImmer } from "use-immer";
import DeleteIcon from "@mui/icons-material/Delete";

const Body = () => {
  const imageRef = useRef(null);
  const [bodyState, setBodyState] = useImmer({
    images: [
      {
        url: "https://img.fortawesome.com/1ce05b4b/start-illustration.svg",
        file: "",
      },
      {
        url: "https://img.fortawesome.com/1ce05b4b/start-illustration.svg",
        file: "",
      },
    ],
  });

  const onChangeImage = (e) => {
    setBodyState((draft) => {
      draft.images = [...draft.images, { url: "", file: e.target.files[0] }];
    });
  };

  const onImageClick = () => {
    imageRef.current.click();
  };

  const deleteImage = (i) => {
    setBodyState((draft) => {
      draft.images = draft.images.filter((_, index) => index !== i);
    });
  };
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        height: "20vh",
        justifyContent: "center",
      }}
    >
      <Typography>Proudly Supporting</Typography>
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        {bodyState.images.map((image, i) => (
          <Box>
            <Box sx={{ cursor: "pointer" }}>
              <DeleteIcon onClick={() => deleteImage(i)} />
            </Box>
            <Box
              component="img"
              sx={{ marginLeft: "10px" }}
              src={image.file ? URL.createObjectURL(image.file) : image.url}
              alt="img"
              height={70}
              width={100}
            ></Box>
          </Box>
        ))}
        <Tooltip title="Add Image">
          <Box
            sx={{
              border: "dotted #dce0e4 2px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            <input
              type="file"
              onChange={(e) => onChangeImage(e)}
              style={{ display: "none" }}
              ref={imageRef}
            />
            <Box
              component={"img"}
              sx={{ maxHeight: "80px" }}
              src={
                "https://www.turnkeytec.com/wp-content/uploads/2020/07/placeholder-image.jpg"
              }
              onClick={onImageClick}
            ></Box>
          </Box>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default Body;
