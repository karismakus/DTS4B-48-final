import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const WeatherCard = ({ areas, url }) => {
  const navigate = useNavigate();

  const onClickDetail = () => {
    navigate("/detail", { state: { url: url, kab: areas.description } });
  };

  if (areas.params) {
    var params = areas.params[6].times;
    return (
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {areas.description}
          </Typography>

          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Jam</StyledTableCell>
                  <StyledTableCell align="center">Cuaca</StyledTableCell>
                  <StyledTableCell align="left">Keterangan</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {params.slice(0, 5).map((param) => (
                  <StyledTableRow>
                    <StyledTableCell align="center" component="th" scope="row">
                      {param.h}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Box>
                        <img
                          src={
                            "https://www.bmkg.go.id/asset/img/weather_icon/ID/" +
                            param.name.toLowerCase() +
                            "-pm.png"
                          }
                          alt="Weather Icon"
                          width={25}
                        />
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="left">{param.name}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button onClick={onClickDetail} size="small">
            Detail
          </Button>
        </CardActions>
      </Card>
    );
  }
};

export default WeatherCard;
