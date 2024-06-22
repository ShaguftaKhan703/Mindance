/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image2 from "../assets/images/Mental Health.png";
import Image3 from "../assets/images/image3.png";
import "../assets/css/FirstPageLanding.css";

const buttonStyle = {
  boxShadow: "0 4px 8px 0 rgb(56, 110, 129), 0 6px 20px 0 rgb(56, 110, 129)",
  backgroundColor: "#D7BFFE",
  color: "#8931CC",
};

const buttonStyle1 = {
  boxShadow: "0 4px 8px 0 rgb(56, 110, 129), 0 6px 20px 0 rgb(56, 110, 129)",
  backgroundColor: "#5F30DF",
  color: "#E5FF9B",
};

const FirstPageLanding = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth');
  }

  return (
    <div className="maincontainer">
      <div className="flex-parent-element ">
        {/* First Child  */}
        <div className="flex-child-element firstpage container4 ">
          <div className="quote1">Guidance <br /> For Your <br /> Mind</div>

          <div className="quote2">
            Congratulations on your brave first step! <br /> You are almost there.
          </div>

          <Stack className="button1" spacing={6} direction="row">
            <Button style={buttonStyle} variant="outlined" onClick={handleClick}>
              <span>Login</span>
            </Button>
            <Button style={buttonStyle1} variant="contained" onClick={handleClick}>
              Get Started
            </Button>
          </Stack>
        </div>

        {/* Second Child */}
        <div className="flex-child-element">
          <div className="container3">
            <div className="container">
              <div className="lefttop dot"></div>
              <div className="leftbottom dot"></div>
              <img className="image2" src={Image2} />
              <p style={{ color: "#B6FC95" }}>You are loved</p>
              <div className="righttop dot"></div>
              <div className="rightbottom dot"></div>
            </div>
            <div className="container2">
              <div className="lefttop dot"></div>
              <div className="leftbottom dot"></div>
              <img className="image3" src={Image3} />
              <p style={{ color: "#7A50EF" }}>
                You don't have to struggle in silence
              </p>
              <div className="righttop dot"></div>
              <div className="rightbottom dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPageLanding;
