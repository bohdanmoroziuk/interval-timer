import { FC } from 'react';

import {
  Circle,
  Time,
  Round,
  Controls, 
  ControlButton
} from 'components/timer/styles';

export interface TimerProps {
  time: string;
  onStart: () => void;
}

const Timer: FC<TimerProps> = ({ time, onStart }) => {
  return (
    <Circle>
      <Time>{time}</Time>
      <Round>Round 1/12</Round>
      <Controls>
        <ControlButton onClick={onStart}>
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
