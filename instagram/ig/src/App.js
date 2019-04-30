import React, {Component} from 'react';
import './App.css';
import dummyData from './dummy-data';
import Search from './components/Search';



class App extends Component {
  constructor() {
    super();
    this.state = {
      post: dummyData
    };
  }


  render() {
  return (
    <div className="App">
      <Search />
    </div>
   );
  }
}

export default App;
