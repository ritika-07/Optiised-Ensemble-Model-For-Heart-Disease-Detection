import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

function GroupedBar(props) {
    const data = [
        {
          metric: 'Precision',
          model: 'LR',
          value: 0.86,
        },
        {
          metric: 'Precision',
          model: 'NB',
          value: 0.86,
        },
        {
          metric: 'Precision',
          model: 'RF',
          value: 0.85,
        },
        {
          metric: 'Precision',
          model: 'XGB',
          value: 0.90,
        },
        {
          metric: 'Precision',
          model: 'KNN',
          value: 0.88,
        },
        {
          metric: 'Precision',
          model: 'DT',
          value: 0.82,
        },
        {
          metric: 'Precision',
          model: 'SVM',
          value: 0.89,
        },
        {
          metric: 'Precision',
          model: 'OE',
          value: 0.93,
        },
        {
          metric: 'Recall',
          model: 'LR',
          value: 0.84,
        },
        {
          metric: 'Recall',
          model: 'NB',
          value: 0.84,
        },
        {
          metric: 'Recall',
          model: 'RF',
          value: 0.85,
        },
        {
          metric: 'Recall',
          model: 'XGB',
          value: 0.90,
        },
        {
          metric: 'Recall',
          model: 'KNN',
          value: 0.89,
        },
        {
          metric: 'Recall',
          model: 'DT',
          value: 0.82,
        },
        {
          metric: 'Recall',
          model: 'SVM',
          value: 0.88,
        },
        {
          metric: 'Recall',
          model: 'OE',
          value: 0.94,
        },
        {
          metric: 'F1 Score',
          model: 'LR',
          value: 0.85,
        },
        {
          metric: 'F1 Score',
          model: 'NB',
          value: 0.85,
        },
        {
          metric: 'F1 Score',
          model: 'RF',
          value: 0.85,
        },
        {
          metric: 'F1 Score',
          model: 'XGB',
          value: 0.90,
        },
        {
          metric: 'F1 Score',
          model: 'KNN',
          value: 0.88,
        },
        {
          metric: 'F1 Score',
          model: 'DT',
          value: 0.82,
        },
        {
          metric: 'F1 Score',
          model: 'SVM',
          value: 0.88,
        },
        {
          metric: 'F1 Score',
          model: 'OE',
          value: 0.93,
        },
      ];

      const config = {
        data,
        isGroup: true,
        xField: 'model',
        yField: 'value',
        seriesField: 'metric',
      };

    return (
        <>
            <Column {...config} />
        </>
    );
}

export default GroupedBar;

