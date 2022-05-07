import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/banner'
import Shopping from './components/shopping'
import Login from './components/login'



class MainPage extends Component {
  state = {
     'name' : '', 
     'password' : ''
  }

  setUser = (username, password) => {
    console.log('set user called')
    this.setState({name : username})
    this.setState({password : password})
  }

  isLoggedIn() {
    if(this.state.name == '' || this.state.password == '') {
      return <Login setUser={this.setUser}/>
    }else {
      return  (
      <div>
        <Banner/>
        <Shopping username={this.state.name}/>
      </div>
    )
    }
  }


  render() {
    return (
      <div>{this.isLoggedIn()}</div>
    );
  }
}




// ========================================

ReactDOM.render(
  <MainPage />,
  document.getElementById('root')
);
