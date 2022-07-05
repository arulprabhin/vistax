import * as Yup from 'yup';
import { useController } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import React from 'react';
import ColorChangingSlider from '@logrhythm/shared/ColorChangingSlider';

export const validationSchema = Yup.object().shape({
  email: Yup.string().required('Please enter the email address').email('Email format is invalid'),
  scoreThreshold: Yup.number().min(1, 'score must greater than 1.'),
});
export default function SliderWithValidation(props) {
  const { field, fieldState } = useController(props);
  delete field.value;
  return (
    <div>
      <ColorChangingSlider {...field} label={'score'} />
      <FormHelperText error={props.error || fieldState.invalid}>
        {props.msg ?? fieldState?.error?.message}
      </FormHelperText>
    </div>
  );
}