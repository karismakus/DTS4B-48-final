import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";

import Filter from "../components/Filter";
import WeatherCard from "../components/WeatherCard";
import { Grid } from "@mui/material";

const Weather = () => {
  const [weathers, setWeathers] = useState([]);
  const [areas, setAreas] = useState([]);
  const [prov, setProv] = useState("");

  const BASE_URL = "https://cuaca-gempa-rest-api.vercel.app/weather/" + prov;

  useEffect(() => {
    const fetchCuaca = async () => {
      const fetchedCuaca = await axios.get(BASE_URL);
      setWeathers(fetchedCuaca.data.data);
      setAreas(fetchedCuaca.data.data.areas);
    };

    fetchCuaca();
  }, [prov]);

  const changeProv = (selectedProv) => {
    setProv(selectedProv);
  };

  return (
    <div>
      <Box sx={{ marginTop: 10, padding: 3 }}>
        <Filter changeProv={changeProv} />
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {areas.map((area) => (
            <Grid item lg={3} xs={12} md={6}>
              <WeatherCard areas={area} url={BASE_URL} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Weather;
