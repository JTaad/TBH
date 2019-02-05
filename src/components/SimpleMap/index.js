import React from 'react';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'
import logo_nav_header from '../../assets/img/logos/logo_navbar_4k_tbh.png'

class SimpleMap extends React.Component {

  componentDidMount() {
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 50);
}

  render() {
    return (
      <Map 
        zoom={17}  
        height={500}
        metaWheelZoom={true}
        defaultCenter={[44.660066, -1.154234]} 
      >
      <Marker anchor={[44.660066, -1.154234]}  onClick={({ event, anchor, payload }) => {}} />
    </Map>
    )
  }
}

export default SimpleMap;