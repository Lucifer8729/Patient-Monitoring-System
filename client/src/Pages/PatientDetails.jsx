import {
  Autocomplete,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DoctorNavbar from "../components/DoctorNavbar/DoctorNavbar";
import PatientDetailCard from "../components/PatientDetailsCard/PatientDetailsCard";

const AVPUoptions = [
  "Alert",
  "Responding to verbal comment",
  "Responds only to Pain",
  "Unresponsive",
];

const patientDetails = [
  {
    name: "ABC",
    uhid: "2231233",
    birthDate: new Date("2001-10-09"),
    temp: "98.2",
    pulse: "70 per minute",
    respRate: "15 per minute",
    spO2: "98",
    cbg: "82.3 mg/dL",
    bp: "124/78 mm/Hg",
    avpu: "Alert",
    doctor: "Dr. James Martin",
    recTime: "14:58 PM, 27-06-2022",
  },
  {
    name: "ABD",
    uhid: "2231234",
    birthDate: new Date("2000-12-30"),
    temp: "",
    pulse: "",
    respRate: "",
    spO2: "",
    cbg: "",
    bp: "",
    avpu: "",
    doctor: "Dr. James Martin",
    recTime: "02:18 AM, 27-06-2022",
  },
];

const PatientDetails = () => {
  const { uhid } = useParams();
  const [temp, setTemp] = useState("");
  const [pulse, setPulse] = useState("");
  const [respRate, setRespRate] = useState("");
  const [bp, setBp] = useState("");
  const [spO2, setSpO2] = useState("");
  const [cbg, setCbg] = useState("");

  const handleTempChange = (e) => {
    setTemp(e.target.value);
  };

  const handlePulseChange = (e) => {
    setPulse(e.target.value);
  };

  const handleRespRateChange = (e) => {
    setRespRate(e.target.value);
  };

  const handleBpChange = (e) => {
    setBp(e.target.value);
  };

  const handleSpO2Change = (e) => {
    setSpO2(e.target.value);
  };

  const handleCbgChange = (e) => {
    setCbg(e.target.value);
  };

  const handleClearClick = () => {
    setTemp("");
    setPulse("");
    setRespRate("");
    setBp("");
    setSpO2("");
    setCbg("");
  };

  const handleSaveClick = () => {
    const patientVitals = {
      temp: temp,
      pulse: pulse,
      respRate: respRate,
      bp: bp,
      spO2: spO2,
      cbg: cbg,
    };
    console.log(patientVitals);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <DoctorNavbar />
      <Box
        sx={{
          flexGrow: 1,
          // backgroundColor: "#e8eaf6",
          height: "100vh",
          width: "100%",
          pt: 7,
          pb: 0,
        }}
      >
        <Stack
          container="true"
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: "100%",
              overflowY: "auto",
              pt: 2,
              pl: 2,
              pr: 2,
              pb: 2,
              zIndex: 1,
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
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
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  Patient Name
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
                <TextField
                  variant="standard"
                  disabled
                  value="Mr. ABC"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: "bold" },
                  }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 2 }} />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
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
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  Age
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
                <TextField
                  variant="standard"
                  disabled
                  value="30 years"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: "bold" },
                  }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 2 }} />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
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
                  variant="body1"
                  gutterBottom
                  sx={{ opacity: "60%" }}
                >
                  UHID
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
                <TextField
                  variant="standard"
                  disabled
                  value={uhid}
                  InputProps={{
                    disableUnderline: true,
                    style: { fontWeight: "bold" },
                  }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ borderColor: "black", opacity: "30%", mb: 1 }} />

            <Typography variant="h6" sx={{ pb: 1 }}>
              Patient Vital Signs
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              sx={{ pt: 0 }}
            >
              <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Temperature"
                  value={temp}
                  onChange={handleTempChange}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Pulse"
                  value={pulse}
                  onChange={handlePulseChange}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Respiratory Rate"
                  value={respRate}
                  onChange={handleRespRateChange}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="BP"
                  value={bp}
                  onChange={handleBpChange}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="SpO2"
                  value={spO2}
                  onChange={handleSpO2Change}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="CBG"
                  value={cbg}
                  onChange={handleCbgChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  multiple
                  options={AVPUoptions}
                  getOptionLabel={(option) => option}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="AVPU"

                      // placeholder="select"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ pt: 2 }}
            >
              <Grid item xs={4} md={6}>
                <Button
                  variant="contained"
                  onClick={handleClearClick}
                  sx={{
                    width: "100%",
                    backgroundColor: "#3F51B5",
                    color: "#fff",
                  }}
                >
                  Clear
                </Button>
              </Grid>
              <Grid item xs={4} md={6}>
                <Button
                  variant="contained"
                  onClick={handleSaveClick}
                  sx={{
                    width: "100%",
                    backgroundColor: "#3F51B5",
                    color: "#fff",
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ pt: 2, borderColor: "black", opacity: "50%" }} />
            <Typography variant="body1" sx={{ pt: 1 }}>
              *Latest Vital Entries
            </Typography>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ pt: 2 }}
            >
              {patientDetails.map((details, i) => {
                let ageString = "32 years";

                return (
                  <Grid
                    item
                    key={i}
                    xs={12}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",

                      width: "100%",
                    }}
                  >
                    <PatientDetailCard
                      recTime={details.recTime}
                      name={details.name}
                      age={ageString}
                      uhid={details.uhid}
                      temp={details.temp}
                      pulse={details.pulse}
                      bp={details.bp}
                      respRate={details.respRate}
                      spO2={details.spO2}
                      cbg={details.cbg}
                      avpu={details.avpu}
                      doctor={details.doctor}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default PatientDetails;
