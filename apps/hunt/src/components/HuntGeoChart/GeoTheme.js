export const mapTheme = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#09233e' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#5d7390' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
];

export const mapThemeMistnet = [
  {
    featureType: 'all',
    elementType: 'labels.text',
    stylers: [
      {
        lightness: '-100',
      },
      {
        gamma: '0.39',
      },
      {
        visibility: 'on',
      },
      {
        hue: '#ff0000',
      },
      {
        saturation: '0',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        lightness: '0',
      },
      {
        visibility: 'on',
      },
      {
        hue: '#00fffb',
      },
      {
        saturation: '-83',
      },
      {
        weight: '0.01',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'labels',
    stylers: [
      {
        color: '#FFFFFF',
      },
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        gamma: '2.23',
      },
      {
        lightness: '-5',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [
      {
        lightness: '-36',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text',
    stylers: [
      {
        lightness: '-30',
      },
      {
        saturation: '-23',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        lightness: '-2',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels.text',
    stylers: [
      {
        lightness: '-56',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        color: '#303030',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
      {
        visibility: 'on',
      },
      {
        lightness: '-63',
      },
      {
        gamma: '0.06',
      },
    ],
  },
  {
    featureType: 'landscape.natural.terrain',
    elementType: 'all',
    stylers: [
      {
        lightness: '3',
      },
      {
        hue: '#1c00ff',
      },
      {
        gamma: '3.34',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        color: '#FFFFFF',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        color: '#808080',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#FFFFFF',
      },
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#303030',
        // "color": "#FF00F"
      },
      {
        visibility: 'on',
      },
      {
        lightness: '72',
      },
    ],
  },
];
