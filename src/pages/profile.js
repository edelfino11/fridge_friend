import React from 'react';
import { MDBCard} from 'mdb-react-ui-kit';
import Avatar from '@mui/material/Avatar';
import { Typography, Stack } from '@mui/material';
import BottomProfile from '../components/BottomProfile';
import "./profile.css"
import { StyledEngineProvider } from '@mui/material/styles';
import user from '../img/user.png'

class Profile extends React.Component  {
    
  render () {
    return <div>
    <div className="profile">
        <Avatar sx={{ width: 100, height: 100}} alt="" src={user} />
        <Typography variant="h5" component="h2">Your Name</Typography>
    </div>
        <StyledEngineProvider injectFirst>
            <BottomProfile />
        </StyledEngineProvider>
  </div>
  }
};
  
export default Profile;