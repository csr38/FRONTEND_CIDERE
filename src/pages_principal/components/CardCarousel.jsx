import React from "react";

import { Carousel } from "antd";
import Box from "@mui/material/Box";

const contentStyle = {
    height: '230px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
  };
const CardCarousel = () => {
  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
      <Carousel 
        autoplay
        dotPosition="top"
        >


        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>


      </Carousel>
    </Box>
  );
};

export default CardCarousel;
