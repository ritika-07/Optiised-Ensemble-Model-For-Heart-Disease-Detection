import React from 'react';
import { Bar} from '@ant-design/plots';

function AccuracyBar(props) {

    const data = [
      {
          model: 'Logistic Regression',
          value: 85.25,
      },
      {
          model: 'Naive Bayes',
          value: 85.25,
      },
      {
          model: 'Random Forest',
          value: 85.25,
      },
      {
          model: 'Extreme Gradient Boost',
          value: 90.16,
      },
      {
          model: 'K Nearest Neighbor',
          value: 88.52,
      },
      {
          model: 'Decision Tree',
          value: 81.97,
      },
      {
          model: 'Support Vector Machine',
          value: 88.52,
      },
      {
          model: 'Optimised Ensemble Model',
          value: 93.44,
      },
      ];    
      const config = {
        data,
        xField: 'value',
        yField: 'model',
        seriesField: 'model',
        color: ({ model }) => {
          return model === 'Optimised Ensemble Model' ? '#68d6ab' : '#6395f9';
        },
        legend: 'top-left',
        xAxis: {
          title: {
            text: "Percentage"
          },
        },
        
        meta: {
          model: {
            alias: 'model',
          },
          value: {
            alias: 'value',
          },
        },
        label: {
          position: 'right',
          formatter: (v) => `${v.value}%`,
          style: {
            opacity: 0.6,
            fontSize: 12
          },
        }
      };
    
    return (
        <>
          <Bar {...config} />
        </>
    );
}

export default AccuracyBar;