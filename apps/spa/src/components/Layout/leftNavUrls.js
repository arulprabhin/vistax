import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MonitorIcon from '@mui/icons-material/Monitor';
import SensorsIcon from '@mui/icons-material/Sensors';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

export const navUrls = [
  { href: '/dashboard', icon: DashboardOutlinedIcon, title: 'Dashboard' },
  { href: '/search', icon: SearchIcon, title: 'Search' },
  { href: '/top-cases', icon: FactCheckOutlinedIcon, title: 'Top Cases' },

  /*  { icon: LocalFireDepartmentIcon, href: '/incidents', title: 'Incidents' },*/
  /*{ icon: InboxIcon, href: '/network-compliance', title: 'Network Compliance' },*/
  /*  {
    icon: MonitorHeartIcon,
    title: 'Hunt',
    subItems: [
      { icon: InboxIcon, href: '/hunt-activity', title: 'Activity' },
      { icon: InboxIcon, href: '/hunt-geo-activity', title: 'Geo Activity' },
      { icon: InboxIcon, href: '/hunt-mitre', title: 'Mitre' },
    ],
  },*/
  {
    icon: PeopleAltIcon,
    title: 'Users',
    subItems: [
      { icon: InboxIcon, href: '/users-highlighted', title: 'Highlighted Users' },
      { icon: InboxIcon, href: '/users-all', title: 'All Users' },
      { icon: InboxIcon, href: '/users-activity', title: 'User Activity' },
    ],
  },
  {
    icon: MonitorIcon,
    title: 'Hosts',
    subItems: [
      { icon: InboxIcon, href: '/hosts-highlighted', title: 'Highlighted Hosts' },
      { icon: InboxIcon, href: '/hosts-all', title: 'All Hosts' },
      { icon: InboxIcon, href: '/hosts-activity', title: 'Host Activity' },
    ],
  },
  {
    icon: SensorsIcon,
    title: 'Networks',
    subItems: [
      { icon: InboxIcon, href: '/networks-highlighted', title: 'Highlighted Networks' },
      { icon: InboxIcon, href: '/networks-all', title: 'All Networks' },
    ],
  },
  {
    icon: StorageIcon,
    title: 'System',
    subItems: [
      { icon: InboxIcon, href: '/system-audit-trail', title: 'Audit Trail' },
      /*{ icon: InboxIcon, href: '/system-cases', title: 'Cases' },*/
      { icon: InboxIcon, href: '/system-case-events', title: 'Case Events' },
      { icon: InboxIcon, href: '/system-health-alerts', title: 'Health Alerts' },
      { icon: InboxIcon, href: '/system-probe-node-status', title: 'Probe Node Status' },
      { icon: InboxIcon, href: '/system-report', title: 'Report' },
      { icon: InboxIcon, href: '/system-scored-events', title: 'Scored Events' },
      { icon: InboxIcon, href: '/system-info', title: 'System Info' },
    ],
  },
  {
    icon: SettingsOutlinedIcon,
    title: 'Settings',
    subItems: [
      {
        icon: InboxIcon,
        title: 'Directory',
        subItems: [
          { icon: InboxIcon, href: '/settings-active-directory', title: 'Active Directory' },
          { icon: InboxIcon, href: '/settings-ldap', title: 'LDAP' },
        ],
      },
      {
        icon: InboxIcon,
        title: 'Endpoint',
        subItems: [
          { icon: InboxIcon, href: '/settings-endpoint-cybereason', title: 'Cybereason' },
          { icon: InboxIcon, href: '/settings-endpoint-shodan', title: 'Shodan' },
          { icon: InboxIcon, href: '/settings-endpoint-sophos', title: 'Sophos' },
        ],
      },
      { icon: InboxIcon, href: '/settings-endpoint-integrations', title: 'Endpoint Integrations' },
      { icon: InboxIcon, href: '/settings-firewall-integrations', title: 'Firewall Integrations' },
      {
        icon: InboxIcon,
        title: 'Incident Management (ITSM)',
        subItems: [{ icon: InboxIcon, href: '/settings-incident-mgmt-servicenow', title: 'ServiceNow' }],
      },
      {
        icon: InboxIcon,
        title: 'Operational',
        subItems: [
          { icon: InboxIcon, href: '/settings-operational-email-notifications', title: 'Email Notifications' },
          { icon: InboxIcon, href: '/settings-operational-operators', title: 'Operators' },
          { icon: InboxIcon, href: '/settings-operational-saml-sso', title: 'SAML / SSO' },
        ],
      },
      {
        icon: InboxIcon,
        title: 'Policy Management',
        subItems: [
          { icon: InboxIcon, href: '/settings-policy-mgmt-anomali', title: 'Anomali' },
          { icon: InboxIcon, href: '/settings-policy-mgmt-ids-config', title: 'IDS Interface Configuration' },
          { icon: InboxIcon, href: '/settings-policy-mgmt-ids-rules', title: 'IDS Rules' },
          { icon: InboxIcon, href: '/settings-policy-mgmt-intel-rules', title: 'Intel Rules' },
          { icon: InboxIcon, href: '/settings-policy-mgmt-mist-watcher', title: 'MistWatcher' },
          { icon: InboxIcon, href: '/settings-policy-mgmt-pcap', title: 'Pcap' },
          { icon: InboxIcon, href: '/settings-policy-mgmt-whitelist', title: 'Whitelist' },
        ],
      },
      {
        icon: InboxIcon,
        title: 'SIEM',
        subItems: [
          { icon: InboxIcon, href: '/settings-siem-okta', title: 'Okta' },
          /*          { icon: InboxIcon, href: '/settings-siem-splunk', title: 'Splunk' },
          { icon: InboxIcon, href: '/settings-siem-splunk-config', title: 'Splunk Configuration' },*/
          { icon: InboxIcon, href: '/settings-siem-syslog-config', title: 'Syslog' },
          { icon: InboxIcon, href: '/settings-siem-syslog-notifications', title: 'Syslog Notifications' },
        ],
      },
      {
        icon: InboxIcon,
        title: 'Vulnerability',
        subItems: [
          { icon: InboxIcon, href: '/settings-vulnerability-qualys-assets', title: 'Qualys Assets' },
          { icon: InboxIcon, href: '/settings-vulnerability-qualys-cve', title: 'Qualys CVE' },
          { icon: InboxIcon, href: '/settings-vulnerability-rapid7', title: 'Rapid7' },
          { icon: InboxIcon, href: '/settings-vulnerability-red-seal', title: 'RedSeal' },
        ],
      },
    ],
  },
];
