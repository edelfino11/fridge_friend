import React from "react";

import { Grid } from "@mui/material";
import "./index.css";
import blueIcon from "../../img/blue_icon_user.png";
import refri from "../../img/refrigerator.png";
import recipeBook from "../../img/book.png";
import grocerylist from "../../img/grocery_list.png";
import { useNavigate } from "react-router-dom";

const Pitem = () => {
    const navigate = useNavigate();

    return (
      <div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx = {{pt:2, pb:2}}
        >
        <img className="photo" src={blueIcon} alt="blue icon" onClick={()=>navigate("/profile")}/>
          <body className="smallbody">
            Set up your profile! Include food allergies, and possible food
            restrictions.
          </body>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx = {{pt:2, pb:2}}
        >
          <img className="photo" src={refri} alt="blue icon" onClick={()=>navigate("/fridge")}/>
          <body className="smallbody">
          Add your groceries to your fridge friend, type in each item’s name.  
          </body>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx = {{pt:2, pb:2}}
        >
          <img className="photo" src={recipeBook} alt="blue icon" onClick={()=>navigate("/explore")}/>
          <body className="smallbody">
          Browse for recipes based off of your personal preferences.
          </body>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx = {{pt:2, pb:2}}
        >
          <img className="photo" src={grocerylist} alt="blue icon" onClick={()=>navigate("/grocery")}/>
          <body className="smallbody">
            Get a custom made grocery shopping list based off your current fridge items.
          </body>
        </Grid>
      </div>
    );
  
}

export default Pitem;