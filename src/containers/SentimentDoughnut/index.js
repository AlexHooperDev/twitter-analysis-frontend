import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { SentimentDoughnutWrapper } from './styled';
import { Wrapper } from '../MostLikedTweet/styled';
import { Title } from '../../components/Title';
import { Subtitle } from '../../components/Subtitle';

export const SentimentDoughnut = ({ tweetArray }) => (
  <Wrapper>
    <Title copy='Tweet Sentiments' />
    <SentimentDoughnutWrapper>
      <Doughnut
        data={tweetArray}
        width={275}
        height={275}
        options={{
          maintainAspectRatio: false,
          cutoutPercentage: 55,
          legend: {
            position: 'bottom',
            labels: {
              fontColor: '#f7f7f7',
              fontSize: 14,
              padding: 15,
            },
          },
        }}
      />
    </SentimentDoughnutWrapper>
  </Wrapper>
);
