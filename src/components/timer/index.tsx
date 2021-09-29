import { FC } from 'react';

import {
  Circle,
  Time,
  Round,
  Controls, 
  ControlButton
} from 'components/timer/styles';

const Timer: FC = () => {
  return (
    <Circle>
      <Time>03:00</Time>
      <Round>Round 1/12</Round>
      <Controls>
        <ControlButton>
          Start
        </ControlButton>
        <ControlButton>
          Reset
        </ControlButton>
      </Controls>
    </Circle>
  );
};

export default Timer;
