import styled from '@emotion/styled';

export const Container = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 5vw;
  }
  .catsList {
    display: grid;
    grid-template-columns: repeat(3, auto);
    @media (max-width: 920px) {
      grid-template-columns: repeat(2, auto);
    }
    @media (max-width: 780px) {
      grid-template-columns: repeat(1, auto);
    }
    grid-gap: 45px 20px;
    .text {
      font-size: 20px;
      margin-top: 5px;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 300px;
        vertical-align: middle;
        height: 300px;
        border-radius: 50%;
        @media (max-width: 1024px) {
          width: 225px;
          height: 225px;
        }
        @media (max-width: 920px) {
          width: 275px;
          height: 275px;;
        }
        @media (max-width: 780px) {
          width: 350px;
          height: 350px;
        }
      }
    }
  }
`;
