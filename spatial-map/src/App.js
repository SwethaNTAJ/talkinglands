import React from 'react';
import MapWithPoints from './components/MapWithPoints';
import MapWithPolygons from './components/MapWithPolygons';
import MapWithInteraction from './components/MapWithInteraction';
// import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="App">
      <h1>Spatial Data Map Viewer</h1>
      <MapWithPoints />
      <MapWithPolygons />
      <MapWithInteraction />
      {/* <MapComponent /> */}
    </div>
  );
}

export default App;
