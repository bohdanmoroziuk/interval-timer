import { ChangeEvent, FC, useState } from 'react';

import {
  Form,
  FormGroup,
  InputLabel,
  TimeField,
  NumberField
} from 'components/settings-form/styles';

export interface SettingsFormState {
  rounds: number;
  roundTime: string;
  restTime: string;
  prepare: string;
}

export const initialState = {
  rounds: 10,
  roundTime: "05:00",
  restTime: "01:00",
  prepare: "00:20", 
};

const SettingsForm: FC = () => {
  const [state, setState] = useState<SettingsFormState>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };
  
  return (
    <Form>
      <FormGroup>
        <InputLabel>Rounds:</InputLabel>
        <NumberField
          name="rounds"
          value={state.rounds}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <InputLabel>Round Time:</InputLabel>
        <TimeField
          name="roundTime"
          value={state.roundTime}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <InputLabel>Rest Time:</InputLabel>
        <TimeField
          name="restTime"
          value={state.restTime}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <InputLabel>Prepare:</InputLabel>
        <TimeField
          name="prepare"
          value={state.prepare}
          onChange={handleChange}
        />
      </FormGroup>
    </Form>
  );
};

export default SettingsForm;
