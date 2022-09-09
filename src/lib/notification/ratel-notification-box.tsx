import styled from 'styled-components';

export const RatelNotificationBox = styled.div<{ show: boolean }>`
  width: 200px;
  height: 100px;
  background-color: #ffffff;
  border: 1px solid #cfcfcf;
  margin: 5px;
  border-radius: 4px;
  transform: ${props => (props.show ? 'translateX(0px)' : 'translateX(500px)')};
  transition: transform 1s;
`;
