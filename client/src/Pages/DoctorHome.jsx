import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import BadgeIcon from '@mui/icons-material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';
import { Link } from 'react-router-dom';
const DoctorHome = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      sx={{ p: 4 }}
      spacing={2}
    >
      <Grid item xs={12} md={3}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <Card
              elevation={4}
              sx={{ borderRadius: '6%', background: '#3F51B5', color: 'white' }}
            >
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  Welcome,
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Dr. James Martin
                </Typography>
                <Typography variant="body2" sx={{ pt: 1, opacity: '60%' }}>
                  Cardiologist
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sx={{ mt: 8 }}>
            <Card elevation={4} sx={{ borderRadius: '4%' }}>
              <CardActionArea>
                <CardContent sx={{ padding: '4px 4px' }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={2}
                      md={3}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <IconButton color="inherit">
                        <QrCode2Icon fontSize="large" />
                      </IconButton>
                    </Grid>
                    <Grid
                      item
                      xs={8}
                      md={3}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography variant="body1" gutterBottom sx={{ pl: 2 }}>
                        <Link
                          to="/doctor/qrs"
                          style={{ textDecoration: 'none' }}
                        >
                          QR Code Scanner
                        </Link>
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      md={3}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {' '}
                      <IconButton color="inherit">
                        <KeyboardArrowRightIcon sx={{ opacity: '60%' }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid> */}
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Card elevation={4} sx={{ borderRadius: '4%' }}>
              <CardActionArea>
                <CardContent sx={{ padding: '4px 4px' }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={2}
                      md={3}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <IconButton color="inherit">
                        <BadgeIcon fontSize="large" />
                      </IconButton>
                    </Grid>
                    <Grid
                      item
                      xs={8}
                      md={3}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography variant="body1" gutterBottom sx={{ pl: 2 }}>
                        Profile
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      md={3}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {' '}
                      <IconButton color="inherit">
                        <KeyboardArrowRightIcon sx={{ opacity: '60%' }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Card elevation={4} sx={{ borderRadius: '4%' }}>
              <CardActionArea>
                <CardContent sx={{ padding: '4px 4px' }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={2}
                      md={3}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <IconButton color="inherit">
                        <LogoutIcon fontSize="large" />
                      </IconButton>
                    </Grid>
                    <Grid
                      item
                      xs={8}
                      md={3}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography variant="body1" gutterBottom sx={{ pl: 2 }}>
                        Logout
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      md={3}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {' '}
                      <IconButton color="inherit">
                        <KeyboardArrowRightIcon sx={{ opacity: '60%' }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DoctorHome;
