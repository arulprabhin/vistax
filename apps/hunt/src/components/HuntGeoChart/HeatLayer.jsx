import React from 'react';
import { HeatmapLayer, Marker } from '@react-google-maps/api';

function HeatMakerLayer() {
  const google = window.google;
  const Position = {
    lat: -3.745,
    lng: -38.523,
  };
  return (
    <>
      <HeatmapLayer
        data={[
          new google.maps.LatLng(37.782551, -122.445368),
          new google.maps.LatLng(37.782992, -122.442112),
          new google.maps.LatLng(37.7831, -122.441461),
          new google.maps.LatLng(37.78501, -122.439947),
          new google.maps.LatLng(37.786905, -122.44027),
          new google.maps.LatLng(37.78612, -122.423112),
          new google.maps.LatLng(37.78666, -122.421033),
          new google.maps.LatLng(37.79932, -122.429251),
          new google.maps.LatLng(37.800288, -122.42943),
          new google.maps.LatLng(37.751617, -122.443211),
          new google.maps.LatLng(37.751496, -122.443246),
          new google.maps.LatLng(37.791385, -122.401312),
          new google.maps.LatLng(37.791027, -122.400395),
          new google.maps.LatLng(37.799633, -122.422603),
          new google.maps.LatLng(37.778501, -122.414433),
          new google.maps.LatLng(37.765692, -122.41072),
          new google.maps.LatLng(37.765251, -122.416439),
          new google.maps.LatLng(37.764986, -122.422255),
          new google.maps.LatLng(37.764768, -122.426089),
          new google.maps.LatLng(37.769132, -122.407276),
          new google.maps.LatLng(37.762932, -122.405398),
        ]}
      />
      <Marker position={Position} />
    </>
  );
}

export default HeatMakerLayer;
