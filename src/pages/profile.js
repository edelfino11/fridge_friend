import React from "react";
import { IconButton, Avatar, Typography } from '@mui/material'
import BottomProfile from "../components/BottomProfile";
import { StyledEngineProvider } from "@mui/material/styles";
import user from "../img/user.png";
import "./profile.css"

class Profile extends React.Component {

  render() {
    return (
      <div>
        <div className="profile">
          <IconButton onClick={() => alert("Lol we need to make it so it opens files to change avatar")}>
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt=""
              src={user}
              onClick={this.fileHandler}
            >
            </Avatar>
          </IconButton>
          <Typography variant="h5" component="h2">
            Your Name
          </Typography>
        </div>
        <StyledEngineProvider injectFirst>
          <BottomProfile />
        </StyledEngineProvider>
      </div>
    );
  }
}

export default Profile;
