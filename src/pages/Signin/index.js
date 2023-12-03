import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { setUserData } from "../../store/authReducer";
import { signin, getUser } from "../../lib/auth";

const SignIn = () => {
  const classes = useStyles();

  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState(null);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);

    const credentials = {
      email,
      password,
    };

    await signin(credentials)
      .then(async () => {
        await getUser()
          .then((data) => {
            dispatch(setUserData(data));
            history.push("/");
          })
          .catch((err) => {
            setErrors("Something went wrong");
          });
      })
      .catch((err) => {
        setLoading(false);

        if (err.response && err.response.status === 400) {
          setErrors("Credentials are not valid!");
        } else {
          setErrors("Something went wrong!");
        }
      });
  };

  return (
    !isAuthenticated && (
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h3" className={classes.title}>
          Portfolio Pro
        </Typography>
        <Box component="form" className={classes.form} onSubmit={handleSignin}>
          <Typography variant="h1" className={classes.formTitle}>
            Sign in
          </Typography>
          <Box component="div" className={classes.formInput}>
            <TextField
              variant="outlined"
              label="Email Address"
              value={email}
              error={!!error}
              helperText={error}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box component="div" className={classes.formInput}>
            <TextField
              type="password"
              variant="outlined"
              label="Password"
              value={password}
              error={!!error}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? "PLEASE WAIT" : "SIGN IN"}
          </Button>
        </Box>
      </Container>
    )
  );
};

export default SignIn;
