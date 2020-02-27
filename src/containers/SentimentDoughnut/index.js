import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { SentimentDoughnutWrapper } from './styled';

export const SentimentDoughnut = ({ tweetArray }) => {
  return (
    <SentimentDoughnutWrapper>
      <Doughnut data={tweetArray} options={{ cutoutPercentage: 85, legend: { display: false } }} />
    </SentimentDoughnutWrapper>
  );
};