import React, { useEffect, useState } from 'react';
import {
  Alert,
  CircularProgress,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Snackbar,
  Tooltip,
} from '@mui/material';
import { makeApiRequest } from '../../utils';
import { BookmarkAdd, BookmarkAdded, BookmarkRemove, Error } from '@mui/icons-material';
import { VistaConfirm } from '@logrhythm/shared/VistaDialog';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';

export default function BookmarkButton({
  type,
  uuid,
  float = 'right',
  size = 'large',
  onBookmarkAdded,
  onBookmarkRemoved,
}) {
  const [status, setStatus] = useState('LOADING');
  const [hover, setHover] = useState(false);
  const [tooltip, setTooltip] = useState('Loading...');
  const [showConfirm, setShowConfirm] = useState({ show: false, msg: '' });
  const [addBookmarkMenu, setAddBookmarkMenu] = useState({ target: null, showPersonal: true, showShared: true });
  const [snackbar, setSnackbar] = React.useState({ show: false, msg: '', severity: 'error' });

  const getBookmarkStatus = () => {
    makeApiRequest({
      key: 'caseBookmark.isBookmarked',
      pathParam: uuid,
    })
      .then((response) => {
        if (response.status === 'err') throw response.body.msg;
        else return response.data.body;
      })
      .then((response) => {
        if (!response.bookmarked) {
          setStatus('NOT_BOOKMARKED');
          setTooltip('Add bookmark');
        } else if (response.selfAdded && response.public) {
          setStatus('BOOKMARKED_PUBLIC');
          setTooltip('Shared bookmark, Remove?');
        } else if (response.selfAdded) {
          setStatus('BOOKMARKED');
          setTooltip('Bookmarked, Remove?');
        } else if (response.public) {
          setStatus('PUBLIC');
          setTooltip('Shared bookmark added by another user');
        }
      })
      .catch((e) => setStatus('ERR'));
  };

  useEffect(() => {
    setStatus('LOADING');
    getBookmarkStatus();
  }, []);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ show: false, msg: '', severity: 'error' });
  };

  const proceedToAddBookmark = (isPublic) => {
    makeApiRequest({
      key: 'caseBookmark.add',
      body: { uuid: uuid, public: isPublic },
    })
      .then((response) => {
        if (response.status === 'err') throw response.body.msg;
        else return response.status;
      })
      .then((response) => {
        /*setStatus(isPublic ? 'BOOKMARKED_PUBLIC' : 'BOOKMARKED');
        setTooltip(isPublic ? 'Shared bookmark, Remove?' : 'Bookmarked, Remove?');*/
        setStatus('LOADING');
        getBookmarkStatus();
        setSnackbar({ show: true, msg: 'Bookmark was added successfully', severity: 'success' });
        if (onBookmarkAdded) onBookmarkAdded(isPublic);
      })
      .catch((e) => {
        setSnackbar({ show: true, msg: 'Adding bookmark has failed', severity: 'error' });
        console.log(e);
      });
  };

  const handleBookmarkClick = (e) => {
    if (status === 'NOT_BOOKMARKED') {
      setAddBookmarkMenu({ target: e.currentTarget, showPersonal: true, showShared: true });
    } else if (status === 'BOOKMARKED' || status === 'BOOKMARKED_PUBLIC') {
      setShowConfirm({
        show: true,
        msg:
          (status === 'BOOKMARKED_PUBLIC' ? 'This is a shared bookmark. ' : '') +
          'Are you sure you want to remove the case bookmark?',
      });
    } else if (status === 'PUBLIC') {
      setAddBookmarkMenu({ target: e.currentTarget, showPersonal: true, showShared: false });
      /*setSnackbar({
        show: true,
        msg: 'You can not remove the shared bookmark added by another user',
        severity: 'error',
      });*/
    }
  };

  const proceedToRemoveBookmark = () => {
    makeApiRequest({
      key: 'caseBookmark.remove',
      pathParam: uuid,
    })
      .then((response) => {
        if (response.status === 'err') throw response.body.msg;
        else return response.status;
      })
      .then((response) => {
        setStatus('NOT_BOOKMARKED');
        setTooltip('Add bookmark');
        setShowConfirm({ show: false, msg: '' });
        setSnackbar({ show: true, msg: 'Bookmark was removed', severity: 'warning' });
        if (onBookmarkRemoved) onBookmarkRemoved();
      })
      .catch((e) => {
        setSnackbar({ show: true, msg: 'Unable to remove bookmark', severity: 'error' });
        console.log(e);
      });
  };

  return (
    <>
      <Tooltip title={tooltip} arrow>
        <IconButton
          color={'info'}
          size={size}
          sx={{ float: float }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          edge={false}
          onClick={handleBookmarkClick}
        >
          {status === 'LOADING' && <CircularProgress color="inherit" size={16} />}
          {status === 'NOT_BOOKMARKED' && <BookmarkAdd color={'primary'} fontSize={'inherit'} />}
          {(status === 'BOOKMARKED' || status === 'BOOKMARKED_PUBLIC') && !hover && (
            <BookmarkAdded color={status === 'BOOKMARKED_PUBLIC' ? 'secondary' : 'success'} fontSize={'inherit'} />
          )}
          {(status === 'BOOKMARKED' || status === 'BOOKMARKED_PUBLIC') && hover && (
            <BookmarkRemove color={'error'} fontSize={'inherit'} />
          )}
          {status === 'PUBLIC' && <BookmarkAdded color={'secondary'} fontSize={'inherit'} />}
          {status === 'ERR' && <Error color={'error'} fontSize={'inherit'} />}
        </IconButton>
      </Tooltip>

      <Menu
        id="bookmark-menu"
        open={Boolean(addBookmarkMenu.target)}
        anchorEl={addBookmarkMenu.target}
        onClose={() => setAddBookmarkMenu({ target: null, showPersonal: true, showShared: true })}
        disableAutoFocusItem
      >
        {addBookmarkMenu.showPersonal && (
          <MenuItem
            onClick={() => {
              setAddBookmarkMenu({ target: null, showPersonal: true, showShared: true });
              proceedToAddBookmark(false);
            }}
            divider={addBookmarkMenu.showShared}
          >
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Personal Bookmark</ListItemText>
          </MenuItem>
        )}
        {addBookmarkMenu.showShared && (
          <MenuItem
            onClick={() => {
              setAddBookmarkMenu({ target: null, showPersonal: true, showShared: true });
              proceedToAddBookmark(true);
            }}
          >
            <ListItemIcon>
              <GroupIcon fontSize="small" />
              {/*<PublicIcon fontSize="small" />*/}
            </ListItemIcon>
            <ListItemText>Shared Bookmark</ListItemText>
          </MenuItem>
        )}
      </Menu>

      <VistaConfirm
        isOpen={showConfirm.show}
        acceptButtonText={'Yes'}
        maxWidth={'sm'}
        rejectButtonText={'No'}
        handleAccept={proceedToRemoveBookmark}
        handleReject={() => setShowConfirm({ show: false, msg: '' })}
        handleClose={() => setShowConfirm({ show: false, msg: '' })}
      >
        {showConfirm.msg}
      </VistaConfirm>
      <Snackbar
        open={snackbar.show}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.msg}
        </Alert>
      </Snackbar>
    </>
  );
}
