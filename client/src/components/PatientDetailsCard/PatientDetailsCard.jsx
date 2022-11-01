import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PatientDetailCard = ({
  recTime,
  temp,
  pulse,
  spO2,
  respRate,
  bp,
  cbg,
  avpu,
  doctor,
}) => {
  const navigate = useNavigate();

  return (
    <Card elevation={4} sx={{ width: "100%", borderRadius: "20px" }}>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid
            item
            xs={6}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="caption"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Recorded Time
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ opacity: "60%" }}>
              Temperature
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ opacity: "60%" }}>
              Pulse
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ opacity: "60%" }}>
              Respiratory rate
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ opacity: "60%" }}>
              SpO2
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ opacity: "60%" }}>
              BP
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ opacity: "60%" }}>
              CBG
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ opacity: "60%" }}>
              AVPU
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="caption"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {recTime}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {temp}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {pulse}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {respRate}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {spO2}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {bp}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {cbg}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {avpu}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PatientDetailCard;
