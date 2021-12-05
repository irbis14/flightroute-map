import React, { useEffect, useState } from 'react';
import * as turf from '@turf/turf';
import './App.css';
import styles from './Loader.module.css';
import Container from './Components/Container';
import FlightContainer from './Components/FlightContainer';
import FlightMap from './Components/FlightMap';
import Sidebar from './Components/Sidebar';
import TimelineSlider from './Components/TimelineSlider';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { fakeApi } from './utils/fakeApi';

const App = () => {
  const [routeData, setRouteData] = useState([]);
  const [mapCenter, setMapCenter] = useState([]);
  const [polylineData, setPolylineData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchRoutes = async () => {
      try {
        const data = await fakeApi.fetchRoute();
        const routes = data.route_points;
        setRouteData(routes);

        getMapCenter(routes);
        getPolylineData(routes);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRoutes();
  }, []);

  const getMapCenter = routes => {
    const coordinates = routes.map(route => {
      return [route.lat, route.lng];
    });
    const features = turf.points(coordinates);
    const result = turf.center(features);
    const center = result.geometry.coordinates;
    setMapCenter(center);
  };

  const getPolylineData = routes => {
    const coordinates = routes.reduce((updatedArr, { lat, lng }) => {
      updatedArr = [...updatedArr, [lat, lng]];
      return updatedArr;
    }, []);
    setPolylineData(coordinates);
  };
  console.log(routeData);

  return (
    <>
      {isLoading ? (
        <Loader className={styles.loader} type="RevolvingDot" color="#00BFFF" height={100} width={100} />
      ) : mapCenter.length && routeData.length && polylineData.length ? (
        <Container>
          <Sidebar />
          <FlightContainer>
            <FlightMap mapCenter={mapCenter} routeData={routeData} polylineData={polylineData} />
            <TimelineSlider routeData={routeData} />
          </FlightContainer>
        </Container>
      ) : null}
    </>
  );
};

export default App;
