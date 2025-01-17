import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';

export interface LoadingBackdropProps {
  text?: string;
}

export const LoadingBackdrop = ({ text }: LoadingBackdropProps) => {
  const [open] = React.useState(true);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}
      open={open}
    >
      <div style={{ textAlign: 'center' }}>
        <CircularProgress color="inherit" />
        {text && <Typography>{text}</Typography>}
      </div>
    </Backdrop>
  );
};
