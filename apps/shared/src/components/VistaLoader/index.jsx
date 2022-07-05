import React from 'react';
import { Grid, LinearProgress, CircularProgress } from '@mui/material';
import { Stack, Skeleton } from '@mui/material';

export default function VistaLoader({ variant, count, color, height, width, iconSize }) {
  let loader;
  if (variant === 'notableItem') {
    loader = (
      <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={2} sx={{ px: 2, py: 2 }}>
        {[...Array(count)].map((cnt, index) => (
          <Stack key={'root' + index} direction="row" justifyContent="center" alignItems="stretch" spacing={2}>
            <Skeleton key={'first' + index} variant="circular" width={32} height={32} />
            <Skeleton key={'second' + index} variant="text" animation="wave" height={32} width={'calc(100% - 75px)'} />
            <Skeleton key={'third' + index} variant="circular" width={40} height={32} />
          </Stack>
        ))}
      </Stack>
    );
  } else if (variant === 'violationItem') {
    loader = (
      <Stack spacing={1} sx={{ mt: 2 }}>
        <Skeleton key={'first'} variant="circular" width={160} height={160} />
        <Skeleton key={'second'} variant="text" />
      </Stack>
    );
  } else if (variant === 'dataProcessed') {
    loader = (
      <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={2} sx={{ mt: 5 }}>
        <Skeleton key={'first'} variant="circular" width={150} height={150} />
        <Skeleton key={'second'} variant="circular" width={150} height={150} />
      </Stack>
    );
  } else if (variant === 'horizontalBar') {
    loader = (
      <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={2} sx={{ px: 2, py: 2 }}>
        <Skeleton key={'root'} variant="text" width={200} sx={{ mx: 'auto' }} />
        {[...Array(count)].map((cnt, index) => (
          <Stack key={'root' + index} direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
            <Skeleton key={'first' + index} variant="text" width={100} />
            <Skeleton
              key={'second' + index}
              variant="rectangle"
              width={`calc(100% / ${Math.floor(Math.random() * 4) + 1} - 100px)`}
              height={28}
            />
          </Stack>
        ))}
        <Stack key={'sub-root'} direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Skeleton key={'first'} variant="text" width={50} />
          <Skeleton key={'second'} variant="text" width={50} />
          <Skeleton key={'third'} variant="text" width={50} />
          <Skeleton key={'fourth'} variant="text" width={50} />
        </Stack>
      </Stack>
    );
  } else if (variant === 'activityChart') {
    loader = (
      <Stack direction="row" justifyContent="flex-start" alignItems="flex-end" spacing={2}>
        <Stack key={'root'} direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={0.5}>
          {[...Array(Math.floor(count / 2))].map((cnt, index) => (
            <Skeleton key={'first' + index} variant="text" width={20} height={15} />
          ))}
        </Stack>
        <div key={'sub-root'}>
          <Stack key={'first-sub-root'} direction="row" justifyContent="left" alignItems="flex-end" spacing={1}>
            {[...Array(count)].map((cnt, index) => (
              <Skeleton
                key={'second' + index}
                variant="rectangle"
                width={6}
                height={120 - Math.floor(Math.random() * 110) + 1}
              />
            ))}
          </Stack>
          <Stack
            key={'second-sub-root'}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            {[...Array(Math.floor(count / 2))].map((cnt, index) => (
              <Skeleton key={'third' + index} variant="text" width={20} height={15} />
            ))}
          </Stack>
        </div>
      </Stack>
    );
  } else if (variant === 'incidentGraph') {
    loader = (
      <Stack direction="row" justifyContent="flex-start" alignItems="flex-end" spacing={2}>
        <Stack key={'root'} direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={0.5}>
          {[...Array(Math.floor(count / 8))].map((cnt, index) => (
            <Skeleton key={'first' + index} variant="text" width={20} height={15} />
          ))}
        </Stack>
        <div key={'sub-root'}>
          <Stack key={'first-sub-root'} direction="row" justifyContent="left" alignItems="flex-end" spacing={1}>
            {[...Array(count)].map((cnt, index) => (
              <Skeleton
                key={'second' + index}
                variant="rectangle"
                width={6}
                height={120 - Math.floor(Math.random() * 110) + 1}
              />
            ))}
          </Stack>
          <Stack
            key={'second-sub-root'}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            {[...Array(Math.floor(count / 2))].map((cnt, index) => (
              <Skeleton key={'third' + index} variant="text" width={20} height={15} />
            ))}
          </Stack>
        </div>
      </Stack>
    );
  } else if (variant === 'activityHuntChart') {
    loader = (
      <Stack direction="row" justifyContent="flex-start" alignItems="flex-end" spacing={2}>
        <Stack key={'root'} direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={0.5}>
          {[...Array(Math.floor(count / 8))].map((cnt, index) => (
            <Skeleton key={'first' + index} variant="text" width={20} height={15} />
          ))}
        </Stack>
        <div key={'sub-root'}>
          <Stack key={'first-sub-root'} direction="row" justifyContent="left" alignItems="flex-end" spacing={1}>
            {[...Array(count)].map((cnt, index) => (
              <Skeleton
                key={'second' + index}
                variant="rectangle"
                width={6}
                height={120 - Math.floor(Math.random() * 110) + 1}
              />
            ))}
          </Stack>
          <Stack
            key={'second-sub-root'}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            {[...Array(Math.floor(count / 2))].map((cnt, index) => (
              <Skeleton key={'third' + index} variant="text" width={20} height={15} />
            ))}
          </Stack>
        </div>
      </Stack>
    );
  } else {
    loader = (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        align="center"
        justify="center"
        sx={{ height: height ? height : width ? width : '100%', width: width ? width : height ? height : '100%' }}
      >
        <Grid item>
          {variant === 'linear' ? (
            color ? (
              <LinearProgress size={iconSize ? iconSize : 40} color={color} />
            ) : (
              <LinearProgress size={iconSize ? iconSize : 40} />
            )
          ) : color ? (
            <CircularProgress size={iconSize ? iconSize : 40} color={color} />
          ) : (
            <CircularProgress size={iconSize ? iconSize : 40} />
          )}
        </Grid>
      </Grid>
    );
  }
  return loader;
}
