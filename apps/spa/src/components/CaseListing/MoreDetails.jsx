import React, { useState } from 'react';
import {
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import CaseWhitelisting from '../CaseWhitelist';
import EmailAlertOptions from '../EmailAlert';
import CaseHistory from '../CaseHistory';
import VistaDialog from '@logrhythm/shared/VistaDialog';
import { camelCaseToSentence } from '@logrhythm/shared/common';
import BookmarkButton from './BookmarkButton';
import SourceDestination from '../SourceDestination';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIncidentOptions from '../CloseIncident';
import MarkInvestigationOptions from '../MarkInvestigation';

export default function MoreDetails({
  width = 150,
  float = 'right',
  variant = 'outlined',
  color = 'info',
  size = 'small',
  uuid,
  ioaUuid,
  onChange,
  adminState,
  entryType,
  caseType,
}) {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [moreMenuAnchorEl, setMoreMenuAnchorEl] = useState(null);

  return (
    <>
      <Tooltip title={'More Details...'} arrow>
        <IconButton onClick={() => setShowMoreDetails(true)} color={color} sx={{ float: float }}>
          <MoreHorizIcon />
        </IconButton>
      </Tooltip>
      <VistaDialog
        isOpen={showMoreDetails}
        handleClose={() => setShowMoreDetails(false)}
        title={'More Details...'}
        disableBackdropClick={false}
        isFullScreen={false}
        isFullWidth={true}
        maxWidth={'xl'}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="stretch" spacing={1}>
          <Typography variant={'h6'}>{`Type: ${camelCaseToSentence(entryType)}, Status: ${camelCaseToSentence(
            adminState
          )}`}</Typography>
          <Stack direction="row" justifyContent="flex-end" alignItems="stretch" spacing={1} id={'toolbar'}>
            <BookmarkButton
              type={caseType}
              uuid={uuid}
              onBookmarkRemoved={() => {
                if (onChange) {
                  onChange();
                  setShowMoreDetails(false);
                }
              }}
            />
            <IconButton onClick={(event) => setMoreMenuAnchorEl(event.currentTarget)} color={'info'}>
              <MoreVertIcon />
            </IconButton>
          </Stack>
        </Stack>
        <SourceDestination uuid={uuid} />
        <CaseHistory uuid={uuid} />
        <Menu
          anchorEl={moreMenuAnchorEl}
          open={Boolean(moreMenuAnchorEl)}
          onClose={(event) => setMoreMenuAnchorEl(null)}
        >
          <EmailAlertOptions />
          <CaseWhitelisting entryUuid={uuid} ioaEntryUuid={ioaUuid} />
          <CloseIncidentOptions />
          <MarkInvestigationOptions />
        </Menu>
      </VistaDialog>
    </>
  );
}
