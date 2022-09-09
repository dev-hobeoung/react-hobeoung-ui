import React, { HTMLAttributes, useState } from 'react';

import { RatelNotification, RatelNotificationProp } from './ratel-notification';

export interface RatelNotificationGlobalContainerProp extends HTMLAttributes<HTMLDivElement> {
  duration?: number;
}

export const RatelNotificationGlobalContainer: React.FC<RatelNotificationGlobalContainerProp> = (
  props: RatelNotificationGlobalContainerProp
) => {
  const { duration = 3 } = props;

  const [notificationList, setNotificationList] = useState<
    React.ReactElement<RatelNotificationProp>[]
  >([]);

  const addNoti = () => {
    setNotificationList([...notificationList, <RatelNotification duration={duration} />]);
  };

  return (
    <div className="absolute right-0">
      <div>{notificationList}</div>
    </div>
  );
};
