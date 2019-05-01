import React, {Component} from 'react';
import './App.css';
import {dummyData} from './dummy-data';
import Search from './components/Search';
import Post from './components/Post';






class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData ,
      // commentInput: '',
      // stored: [],
    };
  }

   componentDidMount(){
     this.setState({
       data: dummyData,
     });
   }
  
  

  render ()  {
    return (
    <div className="App">
      <Search />
      <Post data={this.state.data}/>
      
      
    </div>
   );
  
  }
}
export default App;
