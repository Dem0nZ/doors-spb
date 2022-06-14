import React from 'react';
import DG from '2gis-maps';
import { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const map = DG.map('map', {
      'center': [60.181844, 30.364242],
      'zoom': 15,
      'zoomControl': false,
      'fullscreenControl': false,
    });
    DG.marker([60.181844, 30.364242])
      .addTo(map)
      .bindLabel('Офис', {
        static: true,
      });

  }, []);
  return (<div id='map' className='w-1000 h-450 bg-red-300 sm:w-full sm:h-96'></div>);
};

export default Map;
