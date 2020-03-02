import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { SentimentDoughnutWrapper } from './styled';
import { Wrapper } from '../MostLikedTweet/styled';
import { Title } from '../../components/Title';

export const SentimentDoughnut = ({ tweetArray }) => {
  return (
    <Wrapper>
      <Title copy="Tweet sentiments" />
      <SentimentDoughnutWrapper>
        <Doughnut data={tweetArray} options={{ cutoutPercentage: 70, legend: { position: 'bottom', labels: { fontColor: '#f7f7f7', padding: 30, } } }} />
      </SentimentDoughnutWrapper>
    </Wrapper>
  );
};