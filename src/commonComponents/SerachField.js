import React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Icon, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SerachField = (props) => {
  return (
    <form noValidate autoComplete="off">
      <FormControl sx={{ width: "20rem" }}>
        <OutlinedInput
          style={{ borderRadius: "40px", height: "35px", color: "#0b6640" }}
          placeholder={props.placeholder}
          onChange={props.onChange}
          endAdornment={
            <InputAdornment position="end">
              <Icon>
                <SearchOutlinedIcon />
              </Icon>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

export default SerachField;
