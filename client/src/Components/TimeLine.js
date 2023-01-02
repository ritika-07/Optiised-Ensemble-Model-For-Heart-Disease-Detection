import React from 'react';
import { Line } from '@ant-design/plots';

function TimeLine(props) {
  const data = [
    {
          model: 'LR',
          time: 11.15,
          type: 'training'
        },
        {
          model: 'NB',
          time: 3.71,
          type: 'training'
        },
        {
          model: 'RF',
          time: 48.81,
          type: 'training'
        },
        {
          model: 'XGB',
          time: 17.97,
          type: 'training'
        },
        {
          model: 'KNN',
          time: 6.29,
          type: 'training'
        },
        {
          model: 'DT',
          time: 3.71,
          type: 'training'
        },
        {
          model: 'SVM',
          time: 4.60,
          type: 'training'
        },
        {
          model: 'OE',
          time: 98.01,
          type: 'training'
        },
        {
          model: 'LR',
          time: 2.29,
          type: 'prediction'
        },
        {
          model: 'NB',
          time: 1.93,
          type: 'prediction'
        },
        {
          model: 'RF',
          time: 5.31,
          type: 'prediction'
        },
        {
          model: 'XGB',
          time: 2.07,
          type: 'prediction'
        },
        {
          model: 'KNN',
          time: 2.68,
          type: 'prediction'
        },
        {
          model: 'DT',
          time: 1.82,
          type: 'prediction'
        },
        {
          model: 'SVM',
          time: 1.73,
          type: 'prediction'
        },
        {
          model: 'OE',
          time: 9.83,
          type: 'prediction'
        },
      ];

  const config = {
    data,
    xField: 'model',
    yField: 'time',
    seriesField: 'type',
    
    label: {
          formatter: (v) => `${v.time} ms`,
          style: {
            opacity: 0.6,
            fontSize: 12
          },
        },
        point: {
          size: 5,
          shape: 'circle',
          style: {
            lineWidth: 2,
          },
        },
        tooltip: {
          showMarkers: false,
        },
        interactions: [
          {
            type: 'marker-active',
          },
        ],
        yAxis: {
          title: {
            text: "Time (ms)"
          },
        },
        
  };

    return (
        <div>
            <Line {...config} />
        </div>
    );
}

export default TimeLine;
