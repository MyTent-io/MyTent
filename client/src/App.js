import ToolNavbar from "./components/ToolNavbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// import { Route, Redirect } from 'react-router-dom';
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import EditPlace from "./components/EditPlace";
import MapHomepage from "./components/MapHomepage";
import "./components/MapBox.css";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import PlaceDetails from "./components/PlaceDetails";
// import Projects from './components/Projects';
//import Navbar from './components/Navbar';
//import ProjectDetails from './components/ProjectDetails';
//import TaskDetails from './components/TaskDetails';
// import { Route, Redirect } from 'react-router-dom';
import Slider from "./components/Slider";
import Favorites from "./pages/Favorites";
import AllPlaces from './pages/AllPlaces'; 
import EditCreatedPlace from "./components/EditCreatedPlace";

class App extends React.Component {
  state = {
    user: this.props.user,
    editMap: false,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  handleMapChange = (longitude, latitude) => {
    console.log(longitude, latitude, "handlemapchange");
    this.setState({
      longitude: longitude,
      latitude: latitude,
    });
  };

  render() {
    console.log(this.state.user);

    return (
      <div className="homeApp">
        <nav>
          <ToolNavbar user={this.state.user} setUser={this.setUser} />
        </nav>

        <Route
          exact
          path="/favorites"
          render={props => {
            if (this.state.user) return <Favorites
            {...props}
            setUser={this.setUser}
            user={this.state.user}
          />
            else return <Redirect to='/' />
          }}
        />
        

        <Route
          exact
          path="/myprofile"
          render={(props) => { 
              if (this.state.user) return <Profile {...props} setUser={this.setUser} user={this.state.user} />
              else return <Redirect to='/' />
            }}
          />


        <Route
          exact
          path="/allPlaces"
          component={AllPlaces}
        />

        <Route
          exact
          path="/place/:placeId"
          render={(props) => <PlaceDetails {...props} user={this.state.user} />}
        />

        {/* new Route */}
        <Route
          exact
          path="/editPlace/:placeId"
          render={(props) => (
            <div>
              <EditCreatedPlace {...props}/>
            </div>
          )}
        />

       

        {/* end new rout  */}

        <Route
          exact
          path="/signup"
          render={(props) => { 
            if (this.state.user) return <Redirect to='/' />
            else return <Signup setUser={this.setUser} {...props}/>}
          }/>

        <Route
          exact
          path="/login"
          render={(props) => {
            if (this.state.user) return <Redirect to='/' />
            else return <Signup setUser={this.setUser} {...props}/>}}
        />

        <Route
          exact
          path="/"
          render={(props) => (
            <div className="homePage">
              <div className="infoText"><h1>Hey, welcome to MyTent!</h1><p>Here You can find places all over the world to pitch your tent and enjoy the wilderness</p></div>
              <Slider className="slider" />
              <br></br>
              <MapHomepage
                className="mapBoxHome"
                handleMapChange={this.handleMapChange}
                user={this.state.user}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
