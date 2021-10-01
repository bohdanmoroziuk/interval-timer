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
  onStop: () => void;
}

const Timer: FC<TimerProps> = ({ time, onStart, onStop }) => {
  return (
    <Circle>
      <Time>{time}</Time>
      <Round>Round 1/12</Round>
      <Controls>
        <ControlButton onClick={onStart}>
          Start
        </ControlButton>
        <ControlButton onClick={onStop} variant="secondary">
          Stop
        </ControlButton>
      </Controls>
    </Circle>
  );
};

export default Timer;
