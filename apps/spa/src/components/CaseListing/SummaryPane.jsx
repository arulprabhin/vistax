import React from 'react';
import { IconButton, Paper, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MoreDetails from './MoreDetails';
//import BookmarkButton from './BookmarkButton';

export default function SummaryPane({
  isShown = false,
  summary,
  details,
  recommendation,
  onCloseClick,
  width = '450px',
  uuid,
  ioaUuid,
  onChange,
  adminState,
  entryType,
  type,
}) {
  return (
    <Paper sx={{ width: width, display: isShown ? 'inline-block' : 'none' }}>
      <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={1}>
        <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="stretch" spacing={1}>
            <Typography variant={'h6'}>Summary</Typography>
            <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
              {/*<BookmarkButton
                uuid={uuid}
                onBookmarkRemoved={() => onChange && onChange()}
                float={'left'}
                size={'medium'}
              />*/}
              <IconButton aria-label="Close" onClick={() => onCloseClick && onCloseClick()} color={'error'}>
                <CloseIcon />
              </IconButton>
            </Paper>
          </Stack>
          <Typography variant={'body2'} sx={{ textAlign: 'justify', textJustify: 'inter-word', textIndent: '2rem' }}>
            {summary ?? 'n/a'}
          </Typography>
        </Paper>
        <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
          <Typography variant={'h6'}>Details</Typography>
          <Typography variant={'body2'} sx={{ textAlign: 'justify', textJustify: 'inter-word', textIndent: '2rem' }}>
            {details ?? 'n/a'}
          </Typography>
        </Paper>
        <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
          <Typography variant={'h6'}>Recommendation</Typography>
          <Typography variant={'body2'} sx={{ textAlign: 'justify', textJustify: 'inter-word', textIndent: '2rem' }}>
            {recommendation ?? 'n/a'}
          </Typography>
        </Paper>
      </Stack>
      <MoreDetails
        uuid={uuid}
        ioaUuid={ioaUuid}
        onChange={() => onChange && onChange()}
        adminState={adminState}
        entryType={entryType}
        caseType={type}
      />
    </Paper>
  );
}
