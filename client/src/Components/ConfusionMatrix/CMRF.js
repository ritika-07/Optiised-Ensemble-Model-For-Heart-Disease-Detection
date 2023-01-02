import React from 'react';
import { Heatmap } from '@ant-design/plots';

function CMRF(props) {
    const data = [
        {
            observed: 'F',
            predicted: 'F',
            value: 22,
        },
        {
            observed: 'F',
            predicted: 'T',
            value: 5,
        },{
            observed: 'T',
            predicted: 'F',
            value: 4,
        },{
            observed: 'T',
            predicted: 'T',
            value: 30,
        },
        ]; 
    const config = {
      data,
      xAxis: {
        title: {
          text: "Observed"
        },
      },
      yAxis: {
        title: {
          text: "Predicted"
        },
      },
      xField: 'observed',
      yField: 'predicted',
      colorField: 'value',
      sizeField: 'value',
  
      color: ['#c9e4f8', '#427dc3', '#2c4c71', '#1c2b3e'],
      label: {
        style: {
          fill: '#fff',
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, .45)',
          fontSize: 20
        },
      },
  
    };
  
    return (
        <div>
            <Heatmap {...config} />
        </div>
    );
}

export default CMRF;
