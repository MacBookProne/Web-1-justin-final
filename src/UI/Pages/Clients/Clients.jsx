import React from 'react';
import styled from 'styled-components';
import Map, {Marker} from 'react-map-gl';
import ClientList from './ClientList.jsx';
import 'mapbox-gl/dist/mapbox-gl.css';

const Clients = () => {
    return (
        <ClientStyled className='Clients inset'>
           <h1>Our Clients</h1>
        <ClientList />
        <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: "100%", height: 600}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >

<Marker longitude={-104.9903} latitude={39.7392} anchor="bottom" ></Marker>
<Marker longitude={-113.994052} latitude={46.872115} anchor="bottom" ></Marker>
<Marker longitude={-111.042931} latitude={45.676998} anchor="bottom" ></Marker>
<Marker longitude={-80.651070} latitude={28.573469} anchor="bottom" ></Marker>
<Marker longitude={-122.676483} latitude={45.523064} anchor="bottom" ></Marker>
<Marker longitude={-122.236115} latitude={37.487846} anchor="bottom" ></Marker>
</Map>
        </ClientStyled>
    );
}

export default Clients;

const ClientStyled = styled.div`

`;