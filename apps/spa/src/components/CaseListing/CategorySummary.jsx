import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import AccordionDetails from '@mui/material/AccordionDetails';
import SubCountDisplay from './SubCountDisplay';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Skeleton } from '@mui/material';
import CaseTable from './DetailsTable';

export default function CategorySummary({
  caseType,
  loading = false,
  category = 'Undefined',
  label,
  total = 0,
  critical = 0,
  high = 0,
  medium = 0,
  low = 0,
  site = 'all',
  lte,
  gte,
  query,
  score = 0,
  certainty = 0,
}) {
  return (
    <Accordion disableGutters TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ color: 'text.primary' }}>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={3}>
          <SubCountDisplay loading={loading} label={category} count={total} isfirst issub />
          <SubCountDisplay loading={loading} label="Critical" count={critical} issub />
          <SubCountDisplay loading={loading} label="High" count={high} issub />
          <SubCountDisplay loading={loading} label="Medium" count={medium} issub />
          <SubCountDisplay loading={loading} label="Low" count={low} issub />
          {loading ? (
            <Skeleton width={150} variant="text" />
          ) : label ? (
            <Typography variant={'h6'} sx={{ ml: 3 }}>
              {label}
            </Typography>
          ) : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <CaseTable
          type={caseType}
          site={site}
          lte={lte}
          gte={gte}
          query={query}
          score={score}
          certainty={certainty}
          category={label}
        />
      </AccordionDetails>
    </Accordion>
  );
}
