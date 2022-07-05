import React from 'react';
import MongoTable from '../../components/MongoTable';
import { caseColumns, testRowData } from '../../components/MongoTable/incidentCaseAndPolicy.data';

const CaseDataTable = () => {
  return <MongoTable rows={testRowData} columns={caseColumns} height={705} width={'98%'} pageSize={10} />;
};

export default CaseDataTable;
