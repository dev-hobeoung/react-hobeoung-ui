import React, { HTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';

import { RatelCarouselCardProp } from './ratel-carousel-card';

export interface RatelCarouselProp extends HTMLAttributes<HTMLDivElement> {
  children?:
    | React.ReactElement<RatelCarouselCardProp>[]
    | React.ReactElement<RatelCarouselCardProp>;
  size?: number;
  initPointer?: number;
}

export const RatelCarouselStyleComponent = styled.div<{ size: number }>`
  position: relative;
  width: ${props => `${props.size * 6}rem`};
`;

export const RatelCarouselContainer = styled.div<{ size: number }>`
  width: ${props => `${props.size * 6}rem`};
  overflow: hidden;
`;

export const RatelCarouselTrail = styled.div<{ size: number; movePos: number }>`
  width: ${props => `${(props.size + 2) * 6}rem`};
  transform: ${props => `translateX(${-props.movePos}rem)`};
  transition: ${props => `transform ${props.movePos === 6 ? 0 : 1}s`};
`;

export const RatelCarousel: React.FC<RatelCarouselProp> = (props: RatelCarouselProp) => {
  const { children, size = 4, initPointer = 0 } = props;

  const [cardList, setCardList] = useState<React.ReactElement<RatelCarouselCardProp>[]>([]);
  const [pointer, setPointer] = useState<number>(initPointer);
  const [movePos, setMovePos] = useState<number>(6);

  useEffect(() => {
    if (children === undefined) {
      setCardList([]);
    } else if (!Array.isArray(children)) {
      setCardList([children]);
    } else {
      setCardList([...children]);
    }
  }, [children]);

  // # onClickPrevButton
  const onClickPrevButton = () => {
    setMovePos(0);
    setTimeout(() => {
      setMovePos(6);
      setPointer((pointer + cardList.length - 1) % cardList.length);
    }, 1200);
  };

  // # onClickNextButton
  const onClickNextButton = () => {
    setMovePos(12);
    setTimeout(() => {
      setMovePos(6);
      setPointer((pointer + 1) % cardList.length);
    }, 1200);
  };

  // # Show Card Selector
  const showCard = () => {
    const showCardList = [];
    for (let i = 0; i < size + 2; i += 1) {
      if (i > cardList.length) {
        break;
      }
      showCardList.push(cardList[(pointer + i) % cardList.length]);
    }
    return showCardList;
  };

  return (
    <RatelCarouselStyleComponent size={size}>
      <RatelCarouselContainer size={size}>
        <RatelCarouselTrail size={size} movePos={movePos}>
          {showCard()}
        </RatelCarouselTrail>
      </RatelCarouselContainer>
      <button
        className="absolute top-0 h-full"
        type="button"
        disabled={cardList.length <= size}
        onMouseDown={onClickPrevButton}
      >
        {'<'}
      </button>
      <button
        className="absolute top-0 right-0 h-full"
        type="button"
        disabled={cardList.length <= size}
        onMouseDown={onClickNextButton}
      >
        {'>'}
      </button>
    </RatelCarouselStyleComponent>
  );
};
