import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { makeApiRequest } from '../../utils';
import SplitButtonMenu from '@logrhythm/shared/SplitButtonMenu';
import CategorySummary from './CategorySummary';
import SubCountDisplay from './SubCountDisplay';

export default function CaseListing({
  site,
  gte,
  lte,
  certainty,
  score,
  type,
  query,
  csvexport = false,
  pdfexport = false,
}) {
  const [loading, setLoading] = useState(true);
  const [aggregate, setAggregate] = useState('severity');
  const [summary, setSummary] = useState({ total: '-', critical: '-', high: '-', medium: '-', low: '-', details: [] });

  let summaryParams = {
    site: site,
    lte: lte,
    gte: gte,
    query: query,
    score: score,
    certainty: certainty,
  };

  const getCaseSummary = () => {
    setLoading(true);
    makeApiRequest({
      key: 'getCaseSummaryByQuery',
      pathParam: `${aggregate}/${site}/${gte}/${lte}/${certainty}/${score}`,
      body: { query: query },
    })
      .then((response) => {
        if (response.status === 'err') throw response.body.msg;
        else return response.data.body;
      })
      .then((data) => {
        setSummary({
          total: data.total,
          critical: data.critical,
          high: data.high,
          medium: data.medium,
          low: data.low,
          details: data.categories,
        });
        summaryParams.site = site;
        summaryParams.lte = lte;
        summaryParams.gte = gte;
        summaryParams.query = query;
        summaryParams.score = score;
        summaryParams.certainty = certainty;
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCaseSummary();
  }, [site, query, gte, lte, certainty, score, aggregate]);

  return (
    <Card raised={false} sx={{ maxWidth: '100%' }}>
      <CardHeader
        sx={{ color: 'text.primary' }}
        title={
          <Stack direction="row" justifyContent="flex-start" alignItems="stretch" spacing={3}>
            <SubCountDisplay loading={loading} label={'Total ' + type} count={summary.total} isfirst />
            <SubCountDisplay loading={loading} label="Critical" count={summary.critical} />
            <SubCountDisplay loading={loading} label="High" count={summary.high} />
            <SubCountDisplay loading={loading} label="Medium" count={summary.medium} />
            <SubCountDisplay loading={loading} label="Low" count={summary.low} />
          </Stack>
        }
        action={
          <>
            <SplitButtonMenu
              key={'limit'}
              label="Summarize By"
              options={['Severity', 'Certainty', 'Score']}
              variant="outlined"
              size="small"
              onChange={(option, index) => setAggregate(option.toLowerCase())}
              onButtonClick={() => false}
            />
            {csvexport && (
              <IconButton aria-label="CSV" color="primary" sx={{ ml: 2 }}>
                <SystemUpdateAltIcon />
              </IconButton>
            )}
            {pdfexport && (
              <IconButton aria-label="PDF" color="secondary" sx={{ ml: 2 }}>
                <PictureAsPdfIcon />
              </IconButton>
            )}
          </>
        }
      />
      <CardContent
        sx={{
          pl: 2.5,
          pr: 0,
          pt: 0,
          pb: '2px !important',
          borderTop: 1,
          borderTopColor: 'text.secondary',
          maxWidth: '100%',
        }}
      >
        {summary.details.map((c, i) => (
          <CategorySummary
            caseType={type}
            key={'summary_' + i}
            loading={loading}
            total={c.count}
            category={'Total'}
            critical={c.critical}
            high={c.high}
            medium={c.medium}
            low={c.low}
            label={c.category}
            {...summaryParams}
          />
        ))}
      </CardContent>
    </Card>
  );
}
