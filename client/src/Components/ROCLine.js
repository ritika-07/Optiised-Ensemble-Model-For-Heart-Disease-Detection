import React from 'react';
import { Line } from '@ant-design/plots';

function ROCLine(props) {
  const data =[
    {'model': 'NB', 'FPRate':'0.0', 'TPRate': 0.0}, 
    {'model': 'LR', 'FPRate': '0.0', 'TPRate': 0.0}, 
    {'model': 'RF', 'FPRate': '0.0', 'TPRate': 0.0}, 
    {'model': 'XGB', 'FPRate': '0.0', 'TPRate': 0.0}, 
    {'model': 'KNN', 'FPRate': '0.0', 'TPRate': 0.0}, 
    {'model': 'DT', 'FPRate': '0.0', 'TPRate': 0.0}, 
    {'model': 'SVM', 'FPRate': '0.0', 'TPRate': 0.0}, 
    {'model': 'OE', 'FPRate': '0.0', 'TPRate': 0.0}, 

    {'model': 'OE', 'FPRate': '0.04', 'TPRate': 0.91},
    {'model': 'XGB', 'FPRate': '0.12', 'TPRate': 0.91},
    {'model': 'KNN', 'FPRate': '0.12', 'TPRate': 0.88}, 
    {'model': 'DT', 'FPRate': '0.15', 'TPRate': 0.79}, 
    {'model': 'SVM', 'FPRate': '0.15', 'TPRate': 0.91}, 
    {'model': 'RF', 'FPRate': '0.19', 'TPRate': 0.88},
    {'model': 'LR', 'FPRate': '0.23', 'TPRate': 0.91}, 
    {'model': 'NB', 'FPRate': '0.23', 'TPRate': 0.91},
     
    {'model': 'LR', 'FPRate': '1.0', 'TPRate': 1.0}, 
    {'model': 'NB', 'FPRate': '1.0', 'TPRate': 1.0}, 
    {'model': 'RF', 'FPRate': '1.0', 'TPRate': 1.0}, 
    {'model': 'XGB', 'FPRate': '1.0', 'TPRate': 1.0}, 
    {'model': 'KNN', 'FPRate': '1.0', 'TPRate': 1.0}, 
    {'model': 'DT', 'FPRate': '1.0', 'TPRate': 1.0}, 
    {'model': 'SVM', 'FPRate': '1.0', 'TPRate': 1.0}, 
    {'model': 'OE', 'FPRate': '1.0', 'TPRate': 1.0}];
      
    const config = {
      data,
      xField: 'FPRate',
      yField: 'TPRate',
      seriesField: 'model',
       yAxis: {
        title: {
          text: "True Positive Rate (Sensitivity)",
        },
      },
      xAxis: {
        title: {
          text: "False Positive Rate (Specificity)",
        },
      },
      legend: {
        position: 'top',
      },
      
      point: {
        style: ({ model }) => {
          return {
            r: model=== 'OE' ? 6 : 3, 
          };
        },
      },
    };

    return (
        <>
        <Line {...config} />
        </>
    );
}

export default ROCLine;

