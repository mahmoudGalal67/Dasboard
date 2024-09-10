import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import './ChartComponent.css';

const ChartComponent = () => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    data: [{
      type: "line",
      indexLabelFontSize: 10,
      markerSize: 2,           
      lineThickness: 2, 
      dataPoints: [
        { y: 450 },
        { y: 414 },
        { y: 520, indexLabel: "\u2191 highest", markerColor: "red", markerType: "triangle" },
        { y: 460 },
        { y: 450 },
        { y: 500 },
        { y: 480 },
        { y: 480 },
        { y: 410, indexLabel: "\u2193 lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
        { y: 500 },
        { y: 480 },
        { y: 510 }
      ]
    }]
  }

  return (
    <div className="chart-section"> 
      <CanvasJSChart options={options} />
    </div>
  );
};

export default ChartComponent;
