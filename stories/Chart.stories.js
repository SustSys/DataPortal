import React from 'react';
import Chart from '../src/components/Chart.js'

export default {
  title: 'Chart',
  component: Chart,
};


export const ShowChart = () => (
    <Chart
        storage={null}
        projectData={null}
        projectName={null} 
        graphIndex={null} 
        normalizerData={null}/>
);
