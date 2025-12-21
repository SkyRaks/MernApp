import { Container, Box, TextField, Button, Typography, Paper, Stack, Snackbar, Alert, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {

    return (
        <Container maxWidth="sm">
      <Stack spacing={4} mt={4}>
        <Typography variant="h4" textAlign="center" fontWeight="bold">
          Login to your account
        </Typography>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              fullWidth
            //   value={formData.email}
            //   onChange={(e) =>
            //     setFormData({ ...formData, email: e.target.value })
            //   }
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
            //   value={formData.password}
            //   onChange={(e) =>
            //     setFormData({ ...formData, password: e.target.value })
            //   }
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
            //   onClick={handleSignup}
            >
              Login
            </Button>
          </Stack>
          
          <Typography
                    variant='h6'
                    textAlign={"center"}
                    fontWeight={"bold"}
                    color='text.secondary'
                    marginTop={2}
                  >

            <MuiLink 
            component={Link}
            to="/signup"
            sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
            >
            register account
            </MuiLink>
            </Typography>

        </Paper>
      </Stack>

      {/* <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar> */}
    </Container>
    );
};

export default LoginPage;