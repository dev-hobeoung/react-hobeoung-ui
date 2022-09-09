import React, { useEffect, useState } from 'react';

import { RatelNotificationBox } from './ratel-notification-box';

export interface RatelNotificationProp extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  content?: React.ReactNode;
  duration?: number;
}

export const RatelNotification: React.FC<RatelNotificationProp> = (
  props: RatelNotificationProp
) => {
  const { title, content, duration = 3, ...divProps } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <RatelNotificationBox show={show} {...divProps}>
      <div className="p-2">title: {title}</div>
      <div className="p-2">content: {content}</div>
    </RatelNotificationBox>
  );
};
