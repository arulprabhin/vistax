export const DEFAULT_FILTERS = [
  {
    label: 'General',
    value: 'general',
    subItems: [
      { label: 'Certainty of an event', value: 'general-event-certainty' },
      { label: 'Probe Node', value: 'general-probe-node' },
      { label: 'Origin', value: 'general-origin' },
      { label: 'Severity of an event', value: 'general-event-severity' },
      { label: 'Modeled day of week', value: 'general-modeled-week-day' },
      { label: 'Event creation timestamp', value: 'general-event-created-on' },
      { label: 'Attribute', value: 'general-attribute' },
      { label: 'Trigger', value: 'general-triger' },
      { label: 'Category', value: 'general-category' },
      { label: 'Extra event attributes/details', value: 'general-extra-attributes-details' },
      { label: 'Type', value: 'general-type' },
    ],
  },
  {
    label: 'Scoring',
    value: 'scoring',
    subItems: [
      { label: 'Certainty of an event', value: 'scoring-event-certainty' },
      { label: 'Severity of an event', value: 'scoring-event-severity' },
    ],
  },
  { label: 'Time', value: 'time', subItems: [{ label: 'Modeled day of week' }] },
  {
    label: 'Session',
    value: 'session',
    subItems: [
      { label: 'Destination IP' },
      { label: 'Payload' },
      { label: 'Destination port' },
      { label: 'Source IP' },
      { label: 'Session ID' },
      { label: 'Source Port' },
      { label: 'Protocol' },
      { label: 'Duration' },
      { label: 'File Type' },
      { label: 'MD5 file hash' },
      { label: 'Service' },
      { label: 'Detected application' },
      { label: 'Packets processed' },
      { label: 'Port' },
      { label: 'MAC address' },
      { label: 'Destination hostname' },
      { label: 'Source hostname' },
    ],
  },
  {
    label: 'Host',
    value: 'host',
    subItems: [
      { label: 'Destination IP' },
      { label: 'Source IP' },
      { label: 'Request hostname' },
      { label: 'MAC address' },
      { label: 'DHCP assigned IP' },
      { label: 'Software type' },
      { label: 'Software name' },
      { label: 'Destination hostname' },
      { label: 'Source hostname' },
    ],
  },
  {
    label: 'User',
    value: 'user',
    subItems: [
      { label: 'Okta Client Device' },
      { label: 'Okta Client OS' },
      { label: 'Source User' },
      { label: 'Okta Client Browser' },
    ],
  },
  {
    label: 'DNS',
    value: 'dns',
    subItems: [
      { label: 'DNS local resp' },
      { label: 'DNS local org' },
      { label: 'DNS query class' },
      { label: 'DNS query type' },
      { label: 'DNS REJECTED flag' },
      { label: 'DNS answer' },
      { label: 'DNS query' },
      { label: 'DNS response code' },
    ],
  },
  {
    label: 'SSL',
    value: 'ssl',
    subItems: [
      { label: 'Certificate key type' },
      { label: 'Certificate not valid before' },
      { label: 'Certificate not valid after' },
      { label: 'Certificate Subject' },
      { label: 'Certificate signature algorithm' },
      { label: 'Certificate key length' },
      { label: 'Certificate Serial' },
      { label: 'Certificate Issuer' },
      { label: 'Certificate subject' },
      { label: 'Certificate issuer' },
      { label: 'Certificate version' },
      { label: 'Certificate valid status' },
    ],
  },
  {
    label: 'HTTP',
    value: 'http',
    subItems: [
      { label: 'Returned status code' },
      { label: 'Response data type (MIME)' },
      { label: 'Request hostname' },
      { label: 'User-agent' },
      { label: 'HTTP method' },
      { label: 'Request URI' },
      { label: 'Returned status message' },
    ],
  },
  {
    label: 'DHCP',
    value: 'dhcp',
    subItems: [{ label: 'MAC address' }, { label: 'DHCP lease time' }, { label: 'DHCP assigned IP' }],
  },
  {
    label: 'File',
    value: 'file',
    subItems: [{ label: 'Filetype' }, { label: 'MD5 file hash' }, { label: 'Response data type (MIME)' }],
  },
  {
    label: 'OSquery',
    value: 'osquery',
    subItems: [
      { label: 'Software name' },
      { label: 'Source User' },
      { label: 'Table name' },
      { label: 'Source hostname' },
      { label: 'Name' },
      { label: 'User Name' },
    ],
  },
  {
    label: 'Geo',
    value: 'geo',
    subItems: [
      { label: 'Destinations' },
      { label: 'Source' },
      { label: 'Source Cloud Instance' },
      { label: 'Source Interface Status' },
      { label: 'Source City Name' },
      { label: 'Source Continent Name' },
      { label: 'Source Country ISO' },
      { label: 'Source Region ISO' },
      { label: 'Source Region Name' },
      { label: 'Destination Cloud Name' },
      { label: 'Destination City Name' },
      { label: 'Destination Continent Name' },
      { label: 'Destination Region Name' },
    ],
  },
];
