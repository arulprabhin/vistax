import React, { useEffect, useRef, useState } from 'react';
import ColorChangingSlider from '@logrhythm/shared/ColorChangingSlider';
import { useSelector } from 'react-redux';
import { buildMoment } from '@logrhythm/shared/common';
import { makeApiRequest } from '../../utils';

export default function CaseAggregateList({ caseType }) {
  const [loading, setLoading] = useState(false);
  const isCancelled = useRef(false);
  const { global } = useSelector((state) => state.user);
  const { searchRange, searchStart, searchEnd, searchMoment } = global;

  useEffect(() => {
    return () => (isCancelled.current = true);
  }, [global]);

  return <h1>Under Construction</h1>;
}
