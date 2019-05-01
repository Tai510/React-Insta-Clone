import React, {Component} from 'react';
import './App.css';
import {dummyData} from './dummy-data';
import Search from './components/Search';
import Post from './components/Post';






class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [] ,
      likes: this.likes   
    };
  }
 
  componentDidMount() {
    this.setState({data : dummyData}) 
  }

  addLike = () => {
    console.log("working")
    let likes = this.state.likes + 1;
    this.setState({ likes: likes});
    
};

  render ()  {
    return (
    <div className="App">
      <Search />
      <Post  addLike={this.addLike} data={this.state.data}/>
      
    </div>
   );
  
  }
}
export default App;
