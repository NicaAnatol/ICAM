import React from 'react';
import { Button } from '@mui/material'; // Dacă folosești Material-UI
import './robot.css'; 

interface RobotProps {
  showMap: boolean;
  toggleMap: () => void;
}

function Robot({ showMap, toggleMap }: RobotProps) {
  return (
    <div className="App">
      <Button variant="contained" onClick={toggleMap}>
        Toggle Map
      </Button>
      {showMap && (
        <div className="map-popup">
          <iframe
            title="MappedIn Map"
            src="https://app.mappedin.com/map/66dad2715ef57f000ca23855"
            width="400px" 
            height="300px"
            style={{ border: "none" }}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Robot;