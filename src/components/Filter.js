import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import jsonProv from "../data/provinsi.json";
import { Button } from "@mui/material";

const Filter = ({ changeProv }) => {
  const [prov, setProv] = useState("test");

  const handleChange = (event) => {
    setProv(event.target.value);
  };

  return (
    <span>
      <FormControl sx={{ minWidth: 300 }} size="small">
        <InputLabel id="demo-simple-select-label">Provinsi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={prov}
          label="Provinsi"
          onChange={handleChange}
        >
          {jsonProv.provinsi.map((province) => (
            <MenuItem value={province.alias}>{province.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        onClick={() => changeProv(prov)}
        variant="outlined"
        sx={{ marginLeft: 1 }}
      >
        Filter
      </Button>
    </span>
  );
};

export default Filter;
