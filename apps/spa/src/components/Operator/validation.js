import * as Yup from 'yup';
import { useController } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import React from 'react';
import ColorChangingSlider from '@logrhythm/shared/ColorChangingSlider';
import SplitButtonMenu from '@logrhythm/shared/SplitButtonMenu';

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters')
    .max(20, 'Username must not exceed 20 characters')
    .matches(/^[a-zA-Z0-9._]+$/, 'Username must only contain alphabets, numbers, dots, and underscore'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  fullName: Yup.string()
    .required('Full Name is required')
    .min(5, 'Full name must be at least 5 characters')
    .max(20, 'Full name must not exceed 20 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must not exceed 20 characters')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z])(.{8,20})$/,
      'Password must be contain uppercase, lowercase, special character, number'
    ),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  role: Yup.string().required('Please Choose One').notOneOf(['undefined', '', '- Select -'], 'Please Select A Role'),
  emailNotification: Yup.bool(),
  scoreThreshold: Yup.number().when('emailNotification', {
    is: true,
    then: Yup.number().min(1, 'Score must be greater than 1'),
  }),
});

export function SliderWithValidation(props) {
  const { field, fieldState } = useController(props);
  delete field.value;
  return (
    <div>
      <ColorChangingSlider value={props.value} {...field} label="Score Threshold" />
      <FormHelperText error={props.error || fieldState.invalid}>
        {props.msg ?? fieldState?.error?.message}
      </FormHelperText>
    </div>
  );
}

export function SplitButtonMenuWithValidation(props) {
  const { field, fieldState } = useController(props);
  const btnColor = props.error || fieldState.invalid ? 'error' : 'info';
  return (
    <div>
      <SplitButtonMenu {...field} label={props.label} options={props.options} color={btnColor} fullWidth />
      <FormHelperText error={props.error || fieldState.invalid}>
        {props.msg ?? fieldState?.error?.message}
      </FormHelperText>
    </div>
  );
}
