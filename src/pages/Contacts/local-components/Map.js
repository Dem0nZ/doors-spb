import React from 'react';
import DG from '2gis-maps';
import { useEffect } from 'react';

const Map = ({lat, lon}) => {
  useEffect(() => {
    if (lat && lon) {
      const map = DG.map('map', {
        'center': [lat, lon],
        'zoom': 15,
        'zoomControl': false,
        'fullscreenControl': false,
      });
      DG.marker([lat, lon])
        .addTo(map)
        .bindLabel('Офис', {
          static: true,
        });
    }
  }, [lat, lon]);
  return (<div id='map' className='w-[700px] h-[450px] bg-red-300 sm:w-full sm:h-96'></div>);
};

export default Map;
