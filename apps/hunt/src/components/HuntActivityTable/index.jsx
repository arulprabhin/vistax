import React, { useEffect, useState } from 'react';
import HuntDataTable from './HuntDataTable';
import { makeApiRequest } from '../../utils';

const HuntTable = () => {
  const [columns, setColumns] = useState([]);
  const [row, setRow] = useState([]);
  const [uuid, setUuid] = useState('');
  const [json, setJson] = useState([]);

  const getData = async () => {
    try {
      const response = await makeApiRequest({
        key: 'huntTableData',
        body: {},
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });
      setJson(response.data.body);
      setColumns(response.data.body.allFields);
      response.data.body.source.map((uid) => setUuid(uid.entry_uuid));
      let details = response.data.body.source;
      setRow(details);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return <HuntDataTable height={'550px'} width={'100%'} rows={row} cols={columns} jsons={json} />;
};

export default HuntTable;
