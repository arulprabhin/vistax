import React, { useEffect, useState } from 'react';
import HeatLayer from './HeatLayer';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { mapTheme } from './GeoTheme.js';

const options = {
  styles: mapTheme,
  scrollwheel: false,
  disableDefaultUI: true,
  disableDoubleClickZoom: true,
  zoomControl: true,
  fullscreenControl: true,
};

function HuntGeoChart() {
  const [center, setCenter] = useState({ lat: 44.076613, lng: -98.362239833 });
  const [map, setMap] = React.useState(null);
  const mapContainerStyle = {
    height: '45vh',
    width: '100%',
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDLlzTn5vVJFAwP8d7Lh_p1K2M-Uys1kMY',
    libraries: ['visualization'],
    language: 'en',
  });

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const renderMap = () => {
    return (
      <>
        <GoogleMap
          id="googleHeatMap"
          center={center}
          zoom={2}
          mapContainerStyle={mapContainerStyle}
          mapTypeId="terrain"
          options={options}
          onUnmount={onUnmount}
        >
          <HeatLayer />
        </GoogleMap>
      </>
    );
  };

  useEffect(() => {
    renderMap();
  }, []);

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : null;
}

export default HuntGeoChart;
