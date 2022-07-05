import React from 'react';
import MongoTable from '../../components/MongoTable';
import { policyColumns, testRowData } from '../../components/MongoTable/incidentCaseAndPolicy.data';

const PolicyDataTable = () => {
  return <MongoTable rows={testRowData} columns={policyColumns} height={705} width={'98%'} pageSize={10} />;
};

export default PolicyDataTable;
