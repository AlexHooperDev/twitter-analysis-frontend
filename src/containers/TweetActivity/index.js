import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { GraphWrapper } from './styled';
import { Wrapper } from '../MostLikedTweet/styled';
import { Title } from '../../components/Title';
import { YearSelector } from '../../components/YearSelector';

export const TweetActivity = ({ tweetActivity }) => {
  // TODO - refactor useEffect logic...
  const [currentYear, setCurrentYear] = useState(Object.keys(tweetActivity)[0]);
  const [indexedYears, setIndexedYears] = useState([]);
  const [currentYearIndex, setCurrentYearIndex] = useState(0);

  const findYear = (index) => {
    const foundYear = indexedYears.find((element) => {
      if (element.index === index) return true;
      return false;
    });
    return foundYear.year;
  };

  useEffect(() => {
    console.log(tweetActivity);
  }, []);

  useEffect(() => {
    // mount
    setIndexedYears(() =>
      Object.keys(tweetActivity).map((item, index) => ({ index, year: item }))
    );
    setCurrentYear(Object.keys(tweetActivity)[0]);
    setCurrentYearIndex(0);
  }, [tweetActivity]);

  useEffect(() => {
    if (indexedYears.length !== 0) {
      setCurrentYear(findYear(currentYearIndex));
    }
  }, [currentYearIndex]);

  const changeYear = (direction) => {
    setCurrentYearIndex(() => {
      if (
        (currentYearIndex + 1 >= indexedYears.length && direction === 'next') ||
        (currentYearIndex <= 0 && direction !== 'next')
      ) {
        return currentYearIndex;
      }
      if (direction === 'next') {
        return currentYearIndex + 1;
      }
      return currentYearIndex - 1;
    });
  };

  return (
    <Wrapper>
      <Title copy='Tweet Activity' />
      <GraphWrapper>
        <Line
          data={{
            labels: Object.keys(tweetActivity[currentYear] || {}),
            datasets: [
              {
                label: 'Number of Tweets',
                data: Object.values(tweetActivity[currentYear] || {}),
                backgroundColor: 'rgb(40, 155, 177, 0.4)',
                borderColor: 'rgb(40, 155, 177, 0.8)',
              },
            ],
          }}
          options={{
            legend: {
              labels: { fontColor: '#f7f7f7', fontSize: 14 },
            },
            scales: {
              yAxes: [
                {
                  gridLines: { color: '#475179' },
                  ticks: {
                    precision: 0,
                    fontColor: '#f7f7f7',
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: { color: '#475179' },
                  ticks: { fontColor: '#f7f7f7' },
                },
              ],
            },
          }}
        />
      </GraphWrapper>
      <YearSelector year={currentYear} changeYear={changeYear} />
    </Wrapper>
  );
};
