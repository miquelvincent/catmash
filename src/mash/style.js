import styled from '@emotion/styled';

export const Container = styled.div`
  h1 {
    text-align: center;
  }
  .catmash {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    div {
      margin: 5vw;
      img {
        cursor: pointer;
        vertical-align: middle;
        width: 30vw;
        height: 30vw;
        border-radius: 50%;
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
        &:hover {
          -webkit-transform: scale(1.05);
          transform: scale(1.05);
        }
      }
    }
  }
`;
