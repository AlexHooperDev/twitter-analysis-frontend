import styled from 'styled-components';

const themeHandler = (props) => {
  switch (props.sentiment) {
    case 'POSITIVE':
      return 'green';
    case 'NEUTRAL':
      return 'grey';
    case 'NEGATIVE':
      return 'red';
  }
};

export const UserTweetWrapper = styled.div`
  background: ${(props) => themeHandler(props)};
`;

export const TweetCopy = styled.p`

`;
