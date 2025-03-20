// import React from "react";
// import axios from 'axios'

// const API_endpoint = `https://api.openweathermap.org/data/3.0/onecall?`;
// const API_key = `c5a483e59d242aedae7b2fb09ad0e4`;

// function App() {
//   const [latitube, setLatitude] = React.useState();
//   const [longitube, setLongitude] = React.useState();
//   React.useEffect (() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//         setLatitube(position.coords.latitude);
//         setLongitube(position.coords.longitude);
//     })

//     axios.get(`${API_endpoint}
//     lat=${latitube}
//     &lon=${longitube}
//     &exclude=horly,daily
//     &appid=${API_key}`)
//     .then()
    
//   }, [])
//   return (
//     <div className="App">

//     </div>
//   )
// }

// export default Location;
