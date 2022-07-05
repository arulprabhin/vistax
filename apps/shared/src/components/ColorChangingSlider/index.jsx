import React, { useRef } from 'react';
import { Slider, Typography, Container } from '@mui/material';
import { MARKS_10, MARKS_100, getBgColor } from './util';

export default function ColorChangingSlider({
                                              value = 0,
                                              label,
                                              sliderType,
                                              stepBy,
                                              onChange,
                                              onBlur,
                                              sx,
                                              name,
                                              ref,
                                              disabled = false,
                                            }) {
  const [currentValue, setCurrentValue] = React.useState(value);
  const sliderRef = ref ?? useRef();

  const handleSliderChange = (event, newValue) => {
    sliderRef.current.querySelector('.MuiSlider-track').style.color = getBgColor(sliderType, newValue);
    setCurrentValue(newValue);
  };

  const valueChanged = (event, value) => {
    if (onChange) onChange(value, event);
  };

  return (
    <Container>
      {label && (
        <Typography variant="button" component="div">
          {label}: {currentValue}
        </Typography>
      )}
      <Slider
        sx={sx}
        valueLabelDisplay="auto"
        ref={sliderRef}
        //valueLabelFormat={(value) => (label ? label + ": " + value : value)}
        defaultValue={value ? value : 0}
        marks={sliderType === 'M100' ? MARKS_100 : MARKS_10}
        min={sliderType === 'M100' ? 0 : 0}
        max={sliderType === 'M100' ? 100 : 10}
        step={stepBy ? stepBy : 1}
        onChangeCommitted={valueChanged}
        onChange={handleSliderChange}
        onBlur={onBlur}
        name={name}
        disabled={disabled}
      />
    </Container>
  );
}
