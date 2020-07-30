import React, {Component} from "react";
import axios from "axios";
import EditPlace from '../components/EditPlace';
import '../App.css'; 





class Profile extends Component {
  state= {
    places: [],
  }
  //console.log(props.data.email);

  getData() {
    axios.get("/api/places/userPlaces").then(response => {
      this.setState({
        places: response.data
      })
    }).catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

  render() {
  return (
      <div>
          <EditPlace user={this.props.user} setUser={this.props.setUser} getData={this.getData}/>
      </div>
  )
  }
}

export default Profile;