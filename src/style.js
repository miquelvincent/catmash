import styled from '@emotion/styled';

const hexValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
];

const populate = a => {
  for (var i = 0; i < 6; i++) {
    var x = Math.round(Math.random() * 14);
    var y = hexValues[x];
    a += y;
  }
  return a;
};

const newColor1 = populate('#');
const newColor2 = populate('#');
const angle = Math.round(Math.random() * 360);

export const gradient =
  'linear-gradient(' + angle + 'deg, ' + newColor1 + ', ' + newColor2 + ')';

export const Layout = styled.div`
  margin-top: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 45px;
  }
  > div {
    width: 80vw;
  }
  > .background {
    z-index: -2;
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    background: ${props => props.gradient};
  }
`;

export const Nav = styled.nav`
  position: fixed;
  font-size: 20px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 60px;
  display: flex;
  align-items: center;
  a {
    color: white;
    padding: 20px;
    text-decoration: none;
    -webkit-animation: color-change 0.3s infinite;
    -moz-animation: color-change 0.3s infinite;
    -o-animation: color-change 0.3s infinite;
    -ms-animation: color-change 0.3s infinite;
    animation: color-change 0.3s infinite;
  
    @-webkit-keyframes color-change {
      0% {
        color: #2f2;
      }
      100% {
        color: #2ff;
      }
    }
    @-moz-keyframes color-change {
      0% {
        color: #2f2;
      }

      100% {
        color: #2ff;
      }
    }
    @-ms-keyframes color-change {
      0% {
        color: #2f2;
      }

      100% {
        color: #2ff;
      }
    }
    @-o-keyframes color-change {
      0% {
        color: #2f2;
      }

      100% {
        color: #2ff;
      }
    }
    @keyframes color-change {
      0% {
        color: #2f2;
      }

      100% {
        color: #2ff;
      }
    }
  }
  }
`;
