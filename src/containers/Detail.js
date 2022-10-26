import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";

import Navbar from "../components/Navbar";
import { Grid } from "@mui/material";
import WeatherCardDetail from "../components/WeatherCardDetail";

const Detail = () => {
  const { state } = useLocation();
  const { url, kab } = state;

  const [weathers, setWeathers] = useState([]);

  const BASE_URL = url + "/" + kab;

  useEffect(() => {
    const fetchCuaca = async () => {
      const fetchedCuaca = await axios.get(BASE_URL);
      setWeathers(fetchedCuaca.data.data);
    };

    fetchCuaca();
  }, []);

  return (
    <div>
      <Navbar />
      <Box sx={{ marginTop: 10, padding: 3 }}>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item lg={12} xs={12} md={6}>
            <WeatherCardDetail weathers={weathers} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Detail;
