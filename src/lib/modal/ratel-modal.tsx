import React from 'react';
import styled from 'styled-components';

import { RatelModalBackground } from './ratel-modal-background';
import { RatelModalFrame } from './ratel-modal-frame';

const RatelModalStyledComponent = styled.div<{ show: boolean }>`
  position: fixed;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

export interface RatelModalProp {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export const RatelModal: React.FC<RatelModalProp> = (props: RatelModalProp) => {
  const { children, open, onClose } = props;
  return (
    <RatelModalStyledComponent show={open}>
      <RatelModalFrame>{children}</RatelModalFrame>
      <RatelModalBackground onMouseDown={onClose} />
    </RatelModalStyledComponent>
  );
};
