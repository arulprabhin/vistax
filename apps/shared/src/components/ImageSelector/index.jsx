import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

const Input = styled('input')({
  display: 'none',
});

export default function ImageSelector({
  src = '',
  alt = '',
  width = 140,
  height = 120,
  Icon = PhotoCamera,
  label = 'Browse...',
  variant = 'text',
  color = 'primary',
  showButton = true,
  enabled = true,
  onChange = null,
}) {
  const [data, setData] = React.useState(src);
  const [text, setText] = React.useState(alt);

  const fileHandler = (event) => {
    const { files } = event.target;
    if (files.length) {
      const theFile = files[0];
      src = URL.createObjectURL(theFile);
      alt = files[0].name;
      setText(alt);
      let reader = new FileReader();
      reader.readAsDataURL(theFile);
      reader.onload = function () {
        src = reader.result;
        setData(src);
        if (onChange) onChange(src, alt, theFile.size, theFile.type, theFile.lastModified);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    } else {
      src = '';
      alt = '';
      if (onChange) onChange(src, alt);
    }
  };

  return (
    <Paper
      sx={{
        border: 1,
        borderRadius: 1,
        width: width,
        borderColor: 'grey.500',
        borderStyle: 'dotted',
      }}
    >
      <label
        htmlFor="contained-button-file"
        onClick={(e) => {
          if (!enabled) {
            e.preventDefault();
            e.stopPropagation();
          }
          return enabled;
        }}
      >
        <Avatar
          src={data}
          alt={text}
          sx={{ width: '100%', height: height, cursor: enabled ? 'pointer' : 'auto' }}
          variant="rounded"
        />
        <Input accept="image/*" id="contained-button-file" type="file" onChange={fileHandler} />
        {showButton && enabled ? (
          <Button variant={variant} component="span" startIcon={<Icon />} sx={{ mt: 0.2, width: '100%' }} color={color}>
            {label}
          </Button>
        ) : null}
      </label>
    </Paper>
  );
}
