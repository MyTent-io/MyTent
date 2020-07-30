import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import { Button, Card, Container, Col, Row, Form } from 'react-bootstrap';

class EditCreatedPlace extends Component {
  state = {
      name: "",
      description: "",
      // imgPath: "",
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getData() {
    axios.get(`/api/places/details/${this.props.match.params.placeId}`)
      .then(response => {
        // console.log(this.props.match.params.placeId)
        console.log("crazy console", response.data);
        this.setState({
          name: response.data.name,
          description: response.data.description,
          // imgPath: response.data.imgPath

        })
      }).catch(err => console.log(err))
  }

  handleEdit = (event, place) => {
    console.log("ballern")
    event.preventDefault();
    // const id = this.props.match.params.id;
    setTimeout(function () {
      alert("You successfully edit the new place!");
    }, 500);
    axios.put(`/api/places/edit/${this.props.match.params.placeId}`, {
      name: this.state.name,
      description: this.state.description
    })
      .then(response => {
        console.log("here", response)
        this.setState({
          name: response.data.title,
          description: response.data.description,
          // imgPath: response.data.imgPath
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    console.log(this.state.place);
    // console.log(this.props.match.params.placeId);
    this.getData()
  }

  render() {
  return (
    <div className="cardDatailsContainer">
        <Form onSubmit={this.handleEdit}> 
          <Form.Control 
          label= "name" name="name" id="name" type="text" value={this.state.name} onChange={this.handleChange} 
          />
          <Form.Control 
          label= "description" name="description" id="description" type="text" value={this.state.description} onChange={this.handleChange} 
          />
          {/* <Form.Control 
          label= "imgPath" name="imgPath" id="imgPath" type="image" src={this.state.imgPath} onChange={this.handleChange} 
          /> */}
           <Button className="cardButton" variant="primary" type="submit"> {/*<Link to={"/allPlaces"}>Save</Link> */} save </Button>
        </Form>
        <Link to={`/allPlaces`}><p>Back</p></Link>
       
    </div>
  )
}
}

export default EditCreatedPlace;