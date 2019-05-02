import React, {Component} from 'react';
import './App.css';
import {dummyData} from './dummy-data';
import Search from './components/Search';
import Post from './components/Post';
import Authenticate from './components/authenticate/authenticate';







class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [] ,
      likes: this.likes,
      filterData: []
    };
  }
 
  componentDidMount() {
    this.setState({data : dummyData}) 
  }

  username = (e) => {
    console.log("working")
     const findUser = this.state.data.filter(post => {
        if(post.username.includes(e.target.value)) {
          return post
        } else{

        }
    })
    this.setState({filterData: findUser})
  }
  

  render ()  {
    return (
    <div className="App">
      
      <Search search={this.username} />
      <Post data={this.state.filterData.length ? this.state.filterData : this.state.data} />
    </div>
   );
  
  }
}
export default Authenticate(App);
