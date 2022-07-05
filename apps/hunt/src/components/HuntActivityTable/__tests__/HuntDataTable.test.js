import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import HuntDataTable from '../HuntDataTable';

const mockRows = [
  {
    date: '2022-03-28',
    event_certainty: 40,
    indicator: '10.3.18.237',
    entry_source: 'test101-aws-0-0',
    sources: ['test101-aws-probe'],
    destination: {
      cloud_metadata: {
        availability_zone: 'us-west-2b',
        address: '10.3.18.237',
        vpc_id: 'vpc-0142e51b95bfb741d',
        description: 'Primary network interface',
        subnet_id: 'subnet-0c2bb15f51949d10b',
        cloud_instance: {
          cloud_instance_id: 'i-090b560fc4ef2c54d',
          public_dns_name: '',
          private_dns_name: 'ip-10-3-18-237.us-west-2.compute.internal',
          tags: { Name: 'test101-aws-0-0' },
        },
        id: 'eni-028a9ecc474ad63c0',
        interface_type: 'interface',
        private_dns_name: 'ip-10-3-18-237.us-west-2.compute.internal',
        source_dest_check: true,
        status: 'in-use',
      },
      port: 9200,
      ip: '10.3.18.237',
      host: 'ip-10-3-18-237.us-west-2.compute.internal',
      is_local: true,
    },
    entry_origin: 'Network Analysis Engine',
    event_severity: 50,
    weekday: 1,
    created_at: 1648475225841,
    indicator_type: 'Intel::ADDR',
    event_attribute: 'sources: test101-aws-probe',
    source: {
      cloud_metadata: {
        availability_zone: 'us-west-2b',
        address: '10.3.9.110',
        vpc_id: 'vpc-0142e51b95bfb741d',
        description: 'Primary network interface',
        public_dns_name: 'ec2-18-236-14-206.us-west-2.compute.amazonaws.com',
        source_dest_check: false,
        subnet_id: 'subnet-017be207aa5e4097a',
        public_address: '18.236.14.206',
        cloud_instance: {
          cloud_instance_id: 'i-0ca069e19b6a64e3f',
          role: 'Cloud Management',
          public_dns_name: 'ec2-18-236-14-206.us-west-2.compute.amazonaws.com',
          private_dns_name: 'ip-10-3-9-110.us-west-2.compute.internal',
          tags: { Role: 'Cloud Management', Production: 'true', Name: 'mt-ccn1' },
        },
        id: 'eni-0f5c392795dc555f2',
        interface_type: 'interface',
        private_dns_name: 'ip-10-3-9-110.us-west-2.compute.internal',
        status: 'in-use',
      },
      port: 65161,
      ip: '10.3.9.110',
      host: 'ip-10-3-9-110.us-west-2.compute.internal',
      is_local: true,
    },
    dest: '10.3.18.237',
    host_uuid: 'ip-10-3-9-110.us-west-2.compute.internal',
    event_trigger: 'Intel::ADDR',
    hour: 13,
    event_trigger_id: '10.3.18.237',
    where: 'HTTP::IN_HOST_HEADER',
    dest_port: 9200,
    timestamp: 1648475225445,
    src: '10.3.9.110',
    end_time: 1648475225445,
    session_id: 'Crt75U1wW7Vn74dKvf',
    mitre_ttp: [],
    event_category: 'Intel Match',
    src_port: 65161,
    start_time: 1648475225445,
    entry_uuid: '542a86fc-9a62-4610-a40d-d42119eae15b',
    event_extra_attributes: [],
    whitelisted: false,
    entry_type: 'IntelEvent',
  },
];

const mockJsons = {
  total: 1000,
  allFields: [
    'date',
    'entry_source',
    'resp_pkts',
    'destination',
    'entry_origin',
    'weekday',
    'created_at',
    'file_source',
    'source',
    'dest',
    'host_uuid',
    'duration',
    'local_resp',
    'community_id',
    'hour',
    'conn_state',
    'fuid',
    'seen_bytes',
    'dest_port',
    'direction',
    'timestamp',
    'resp_ip_bytes',
    'src',
    'local_orig',
    'orig_ip_bytes',
    'rx_hosts',
    'session_id',
    'orig_pkts',
    'history',
    'is_orig',
    'tx_hosts',
    'sha1',
    'src_port',
    'entry_uuid',
    'mime_type',
    'proto',
    'entry_type',
    'md5',
    'status_code',
    'resp_mime_types',
    'trans_depth',
    'host',
    'user_agent',
    'resp_fuids',
    'app',
    'method',
    'orig_bytes',
    'request_body_len',
    'uri',
    'tags',
    'resp_bytes',
    'status_msg',
    'response_body_len',
    'referrer',
    'event_certainty',
    'indicator',
    'sources',
    'event_severity',
    'indicator_type',
    'event_attribute',
    'event_trigger',
    'event_trigger_id',
    'where',
    'end_time',
    'mitre_ttp',
    'event_category',
    'start_time',
    'event_extra_attributes',
    'whitelisted',
  ],
  source: mockRows,
};

const renderComponent = () => {
  return render(<HuntDataTable rows={mockRows} jsons={mockJsons} />);
};

describe('HuntDataTable component', () => {
  it('render it successfully', () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });

  it('toggle button should be collapse button if toggled', async () => {
    const { getByTestId, findByTestId, queryByTestId } = renderComponent();

    fireEvent.click(getByTestId('toggle-btn'));

    let collapseButton = await findByTestId('collapse-btn');
    expect(collapseButton).toBeTruthy();

    // once click again, it will be plus
    fireEvent.click(getByTestId('toggle-btn'));

    const expandButton = await findByTestId('expand-btn');
    expect(expandButton).toBeTruthy();
    collapseButton = await queryByTestId('collapse-btn');
    expect(collapseButton).not.toBeTruthy();
  });

  it('should show the details pane if toggle button is clicked', async () => {
    const { getByTestId, queryByTestId } = renderComponent();

    // check details pane before toggling
    let detailsPane = await queryByTestId('details-pane');
    expect(detailsPane).not.toBeTruthy();

    fireEvent.click(getByTestId('toggle-btn'));

    detailsPane = await queryByTestId('details-pane');
    expect(detailsPane).toBeTruthy();
  });
});
