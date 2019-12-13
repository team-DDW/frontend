import React from 'react';
import './App.css';
import Jobs from "./JobsComponents/JobsList"
import 'bootstrap/dist/css/bootstrap.min.css';
import AutoSugTest from './JobsComponents/AutoSugTest'
import Filterr from "./JobsComponents/FilterTest"
import ComTest from "./JobsComponents/ComTest"
function App() {



  return (
    <div className="App">
      <Jobs/>
      {/* <AutoSugTest/> */}
      {/* <Filterr/> */}
      {/* <ComTest/> */}
    </div>
  );
}

export default App;
