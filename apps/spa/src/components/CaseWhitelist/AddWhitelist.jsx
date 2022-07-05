import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Switch,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import VistaDialog from '@logrhythm/shared/VistaDialog';
import DoubleLabeledSwitch from '@logrhythm/shared/DoubleLabeledSwitch';
import InputAdornment from '@mui/material/InputAdornment';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import SaveIcon from '@mui/icons-material/Save';
import { makeApiRequest } from '../../utils';
import Tooltip from '@mui/material/Tooltip';
import { useController, useForm } from 'react-hook-form';
import { CheckedWhiteList } from './utils';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

function RegExWithValidation(props) {
  const { field, fieldState } = useController(props);
  delete field.value;

  return (
    <div>
      <DoubleLabeledSwitch {...field} value={false} labels={{ right: 'RegEx' }} />
    </div>
  );
}

export default function AddWhitelist({ result, entryUuid, incidentUuid }) {
  const [srcList, setSrcList] = React.useState(result?.src);
  const [srcHostList, setSrcHostList] = React.useState(result?.srcHost);
  const [srcUserList, setSrcUserList] = React.useState(result?.srcUser);
  const [destList, setDestList] = React.useState(result?.dest);
  const [destHostList, setDestHostList] = React.useState(result?.destHost);
  const [categoryList, setCategoryList] = React.useState(result?.category);
  const [attributeList, setAttributeList] = React.useState(result?.attribute);
  const [triggerList, setTriggerList] = React.useState(result?.trigger);
  const [uriList, setUriList] = React.useState(result?.uri);
  const [appList, setAppList] = React.useState(result?.app);
  const [userAgentList, setUserAgentList] = React.useState(result?.userAgent);
  const [entrySrcList, setEntrySrcList] = React.useState(result?.entrySrc);
  const [entryOriginList, setEntryOriginList] = React.useState(result?.entryOrigin);
  const [entityTypeList, setEntityTypeList] = React.useState(result?.entityType);
  const [eventActorIPList, setEventActorIPList] = React.useState(result?.eventActorIP);
  const [eventTargetsIPList, setEventTargetsIPList] = React.useState(result?.eventTargetsIP);
  const [eventTargetsActionList, setEventTargetsActionList] = React.useState(result?.eventTargetsAction);
  const [indicatorList, setIndicatorList] = React.useState(result?.indicator);
  const [indicatorTypeList, setIndicatorTypeList] = React.useState(result?.indicatorType);
  const [protocolList, setProtocolList] = React.useState(result?.protocol);
  const [threatLevelList, setThreatLevelList] = React.useState(result?.threatLevel);
  const [incidentCaseEventsList, setIncidentCaseEventsList] = React.useState(result?.incidentCaseEvents);
  const [excludeInternalList, setExcludeInternalList] = React.useState(false);
  const [expiresOn, setExpiresOn] = React.useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [checkedRegEx, setCheckedRegEx] = useState(CheckedWhiteList);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCheckedRegEx(CheckedWhiteList);
    setExpiresOn(null);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleIncidentCaseEvents = (event) => {
    setIncidentCaseEventsList(event.target.checked);
  };
  const handleExcludeInternal = (event) => {
    setExcludeInternalList(event.target.checked);
  };

  const { register, handleSubmit, control } = useForm({
    mode: 'onChange',
    defaultValues: CheckedWhiteList,
  });
  const onSubmit = (resultData) => {
    let subBody = [];

    if (resultData?.src) {
      subBody.push({ match: { src: resultData?.src } });
    }
    if (resultData?.srcHost) {
      if (resultData.checkedSrcHost) {
        subBody.push({ regexp: { 'source.host': { value: resultData?.srcHost } } });
      } else {
        subBody.push({ match: { 'source.host': resultData?.srcHost } });
      }
    }
    if (resultData?.srcUser) {
      if (resultData.checkedSrcUser) subBody.push({ regexp: { user_uuid: { value: resultData?.srcUser } } });
      else subBody.push({ match: { user_uuid: resultData?.srcUser } });
    }
    if (resultData?.dest) {
      subBody.push({ term: { dest: resultData?.dest } });
    }
    if (resultData?.destHost) {
      if (resultData.checkedDestHost) subBody.push({ regexp: { 'destination.host': { value: resultData?.destHost } } });
      else subBody.push({ match: { 'destination.host': resultData?.destHost } });
    }
    if (resultData?.category) {
      if (resultData.checkedCategory) subBody.push({ regexp: { event_category: { value: resultData?.category } } });
      else {
        subBody.push({ match: { event_category: resultData?.category } });
      }
    }
    if (resultData?.attribute) {
      if (resultData.checkedAttribute) subBody.push({ regexp: { event_attribute: { value: resultData?.attribute } } });
      else subBody.push({ match: { event_attribute: resultData?.attribute } });
    }
    if (resultData?.trigger) {
      if (resultData.checkedTrigger) subBody.push({ regexp: { event_trigger: { value: resultData?.trigger } } });
      else subBody.push({ match: { event_trigger: resultData?.trigger } });
    }
    if (resultData?.uri) {
      if (resultData.checkedUri) subBody.push({ regexp: { uri: { value: resultData?.uri } } });
      else {
        subBody.push({ match: { uri: resultData?.uri } });
      }
    }
    if (resultData?.app) {
      if (resultData.checkedApp) subBody.push({ regexp: { app: { value: resultData?.app } } });
      else subBody.push({ match: { app: resultData?.app } });
    }
    if (resultData?.userAgent) {
      if (resultData.checkedUserAgent) subBody.push({ regexp: { user_agent: { value: resultData?.userAgent } } });
      else subBody.push({ match: { user_agent: resultData?.userAgent } });
    }
    if (resultData?.entrySrc) {
      if (resultData.checkedEntrySrc) subBody.push({ regexp: { entry_source: { value: resultData?.entrySrc } } });
      else subBody.push({ match: { entry_source: resultData?.entrySrc } });
    }
    if (resultData?.entrySrc) {
      if (resultData.checkedEntryOrigin) subBody.push({ regexp: { entry_origin: { value: resultData?.entryOrigin } } });
      else subBody.push({ match: { entry_origin: resultData?.entryOrigin } });
    }
    if (resultData?.entrySrc) {
      if (resultData.checkedEntityType) subBody.push({ regexp: { entity_type: { value: resultData?.entityType } } });
      else subBody.push({ match: { entity_type: resultData?.entityType } });
    }
    if (resultData?.eventActorIP) {
      if (resultData.checkedEventActorIP)
        subBody.push({ regexp: { 'main_event.event_actor.ip_addr': { value: resultData?.eventActorIP } } });
      else subBody.push({ match: { 'main_event.event_actor.ip_addr': resultData?.eventActorIP } });
    }
    if (resultData?.eventTargetsIP) {
      if (resultData.checkedEventTargetsIP)
        subBody.push({ regexp: { 'main_event.event_targets.ip_addr': { value: resultData?.eventTargetsIP } } });
      else subBody.push({ match: { 'main_event.event_targets.ip_addr': resultData?.eventTargetsIP } });
    }
    if (resultData?.eventTargetsAction) {
      if (resultData.checkedEventTargetsAction)
        subBody.push({ regexp: { 'main_event.event_targets.action': { value: resultData?.eventTargetsAction } } });
      else subBody.push({ match: { 'main_event.event_targets.action': resultData?.eventTargetsAction } });
    }
    if (resultData?.indicator) {
      if (resultData.checkedIndicator) subBody.push({ regexp: { indicator: { value: resultData?.indicator } } });
      else subBody.push({ match: { indicator: resultData?.indicator } });
    }
    if (resultData?.indicatorType) {
      if (resultData.checkedIndicatorType)
        subBody.push({ regexp: { indicator_type: { value: resultData?.indicatorType } } });
      else subBody.push({ match: { indicator_type: resultData?.indicatorType } });
    }
    if (resultData?.protocol) {
      if (resultData.checkedProtocol) subBody.push({ regexp: { proto: { value: resultData?.protocol } } });
      else subBody.push({ match: { proto: resultData?.protocol } });
    }
    if (resultData?.threatLevel) {
      if (resultData.checkedThreatLevel)
        subBody.push({ regexp: { 'main_event.ext_info.threat_level': { value: resultData?.threatLevel } } });
      else subBody.push({ match: { 'main_event.ext_info.threat_level': resultData?.threatLevel } });
    }
    if (resultData.incidentCaseEvents) {
      if (resultData.checkedIncidentCaseEvents)
        subBody.push({ regexp: { 'main_event.IncidentCaseEvents': { value: resultData?.incidentCaseEvents } } });
      else subBody.push({ match: { 'main_event.IncidentCaseEvents': resultData?.incidentCaseEvents } });
    }
    if (resultData.excludeInternal) {
      subBody.push({ match: { 'network_info.int_dest.network_type': 'internal' } });
    }

    let queryBody = {
      query: subBody,
      iuid: incidentUuid,
      uid: entryUuid,
      timestamp: Date.now(),
      reason: resultData.reason,
      expiry_date: expiresOn ? expiresOn.getTime() : expiresOn,
    };

    makeApiRequest({
      key: 'addCaseWhiteliste',
      body: queryBody,
    })
      .then((response) => {
        if (response.status === 'success') {
          handleCloseDialog();
        } else {
          handleCloseDialog();
        }
      })
      .catch((err) => console.log(err))
      .finally();
  };

  return (
    <>
      <Tooltip title={'Add new Whitelist'} arrow>
        <MenuItem key={2} onClick={handleOpenDialog}>
          <ListItemIcon>
            <PlaylistAddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Whitelist</ListItemText>
        </MenuItem>
      </Tooltip>
      <VistaDialog
        handleClose={handleCloseDialog}
        isOpen={openDialog}
        title="Add Whitelist"
        disableBackdropClick={true}
        rejectButtonText={'Cancel'}
        maxWidth="xl"
        Actions={
          <Button variant="outlined" color={'success'} startIcon={<SaveIcon />} onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        }
      >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <TextField
              label="Source"
              fullWidth
              size="small"
              variant="standard"
              type="text"
              value={srcList}
              {...register('src')}
              onChange={(event) => setSrcList(event.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Source Host"
              variant="standard"
              type="text"
              value={srcHostList}
              {...register('srcHost')}
              onChange={(event) => setSrcHostList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      name="checkedSrcHost"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedSrcHost: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Source User"
              variant="standard"
              type="text"
              value={srcUserList}
              {...register('srcUser')}
              onChange={(event) => setSrcUserList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkSrcUser}
                      name="checkedSrcUser"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedSrcUser: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Destination"
              variant="standard"
              type="text"
              value={destList}
              {...register('dest')}
              onChange={(event) => setDestList(event.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Destination Host"
              variant="standard"
              type="text"
              value={destHostList}
              {...register('destHost')}
              onChange={(event) => setDestHostList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkDestHost}
                      name="checkedDestHost"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedDestHost: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Category"
              variant="standard"
              type="text"
              value={categoryList}
              {...register('category')}
              onChange={(event) => setCategoryList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkCategory}
                      name="checkedCategory"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedCategory: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Attribute"
              variant="standard"
              type="text"
              value={attributeList}
              {...register('attribute')}
              onChange={(event) => setAttributeList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkAttribute}
                      name="checkedAttribute"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedAttribute: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Trigger"
              variant="standard"
              type="text"
              value={triggerList}
              {...register('trigger')}
              onChange={(event) => setTriggerList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkTrigger}
                      name="checkedTrigger"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedTrigger: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="URL"
              variant="standard"
              type="text"
              value={uriList}
              {...register('uri')}
              onChange={(event) => setUriList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkUri}
                      name="checkedUri"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedUri: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Application"
              variant="standard"
              type="text"
              value={appList}
              {...register('app')}
              onChange={(event) => setAppList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkApp}
                      name="checkedApp"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedApp: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="User Agent"
              variant="standard"
              type="text"
              value={userAgentList}
              {...register('userAgent')}
              onChange={(event) => setUserAgentList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkUserAgent}
                      name="checkedUserAgent"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedUserAgent: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Entry Source"
              variant="standard"
              type="text"
              value={entrySrcList}
              {...register('entrySrc')}
              onChange={(event) => setEntrySrcList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkEntrySrc}
                      name="checkedEntrySrc"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedEntrySrc: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Entry Origin"
              variant="standard"
              type="text"
              value={entryOriginList}
              {...register('entryOrigin')}
              onChange={(event) => setEntryOriginList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkEntryOrigin}
                      name="checkedEntryOrigin"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedEntryOrigin: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Entity Type"
              variant="standard"
              type="text"
              value={entityTypeList}
              {...register('entityType')}
              onChange={(event) => setEntityTypeList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkEntityType}
                      name="checkedEntityType"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedEntityType: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Event Actor IP"
              variant="standard"
              type="text"
              value={eventActorIPList}
              {...register('eventActorIP')}
              onChange={(event) => setEventActorIPList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkEventActorIP}
                      name="checkedEventActorIP"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedEventActorIP: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Event Targets IP"
              variant="standard"
              type="text"
              value={eventTargetsIPList}
              {...register('eventTargetsIP')}
              onChange={(event) => setEventTargetsIPList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkEventTargetsIP}
                      name="checkedEventTargetsIP"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedEventTargetsIP: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Event Targets Action"
              variant="standard"
              type="text"
              value={eventTargetsActionList}
              {...register('eventTargetsAction')}
              onChange={(event) => setEventTargetsActionList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkEventTargetsAction}
                      name="checkedEventTargetsAction"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedEventTargetsAction: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Indicator"
              variant="standard"
              type="text"
              value={indicatorList}
              {...register('indicator')}
              onChange={(event) => setIndicatorList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkIndicator}
                      name="checkedIndicator"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedIndicator: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Indicator Type"
              variant="standard"
              type="text"
              value={indicatorTypeList}
              {...register('indicatorType')}
              onChange={(event) => setIndicatorTypeList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkIndicatorType}
                      name="checkedIndicatorType"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedIndicatorType: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Protocol"
              variant="standard"
              type="text"
              value={protocolList}
              {...register('protocol')}
              onChange={(event) => setProtocolList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkProtocol}
                      name="checkedProtocol"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedProtocol: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Threat Level"
              variant="standard"
              type="text"
              value={threatLevelList}
              {...register('threatLevel')}
              onChange={(event) => setThreatLevelList(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RegExWithValidation
                      control={control}
                      value={checkedRegEx.checkThreatLevel}
                      name="checkedThreatLevel"
                      onChange={(event) =>
                        setCheckedRegEx({
                          checkedThreatLevel: event.target.checked,
                        })
                      }
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Expires On"
                showDaysOutsideCurrentMonth={true}
                showTodayButton={true}
                clearable={true}
                inputFormat={'yyyy-MM-dd'}
                value={expiresOn}
                onChange={(newValue) => {
                  setExpiresOn(newValue);
                }}
                renderInput={(params) => <TextField variant="standard" fullWidth {...params} readOnly />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={4}>
            <FormGroup row={true}>
              <FormControl {...register('incidentCaseEvents')}>
                <FormControlLabel
                  label="Incident Case Events"
                  control={
                    <Switch
                      value={incidentCaseEventsList}
                      onChange={handleIncidentCaseEvents}
                      checked={incidentCaseEventsList}
                    />
                  }
                />
              </FormControl>
              <FormControl sx={{ marginTop: '8px' }}>
                <RegExWithValidation
                  control={control}
                  value={checkedRegEx.checkIncidentCaseEvent}
                  name="checkedIncidentCaseEvent"
                  onChange={(event) =>
                    setCheckedRegEx({
                      checkedIncidentCaseEvent: event.target.checked,
                    })
                  }
                />
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <FormGroup row={true}>
              <FormControl {...register('excludeInternal')}>
                <FormControlLabel
                  label="Exclude Internal"
                  control={
                    <Switch
                      value={excludeInternalList}
                      onChange={handleExcludeInternal}
                      checked={excludeInternalList}
                    />
                  }
                />
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Reason"
              multiline
              rows={1}
              variant="standard"
              type="text"
              {...register('reason')}
            />
          </Grid>
        </Grid>
      </VistaDialog>
    </>
  );
}
