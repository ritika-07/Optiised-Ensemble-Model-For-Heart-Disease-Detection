import React from 'react';
import { Heatmap } from '@ant-design/plots';

function CMEnsemble(props) {
    const data = [
        {
            observed: 'F',
            predicted: 'F',
            value: 26,
        },
        {
            observed: 'F',
            predicted: 'T',
            value: 1,
        },{
            observed: 'T',
            predicted: 'F',
            value: 3,
        },{
            observed: 'T',
            predicted: 'T',
            value: 31,
        },
        ]; 
    const config = {
      data,
      title: {
        visible: true,
        text: "Testing title where are you",
      },
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
  
      color: ['#a1d7d0', '#2ea5a1', '#145757', '#112f30'],
      label: {
        style: {
          fill: '#fff',
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, .45)',
          fontSize:20
        },
      },
  
    };
  
    return (
        <div>
            <Heatmap {...config} />
        </div>
    );
}

export default CMEnsemble;
