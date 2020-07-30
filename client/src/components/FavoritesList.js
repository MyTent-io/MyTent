import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import '../App.css';

class FavoritesList extends Component {

  handleDelete = id => {
    console.log("delete", id)
    axios
      .post(`/api/places/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        this.props.getData();
      })
      .catch((err) => {
        return err.response.data;
      });
    }

  render() {
    console.log(this.props.places)
    if(!this.props.places) return <div> empty </div>
    return (
      <>
      <div className="favoriteContent">
      <h1>Favorites</h1>
      </div>
      <div className="cardContainers">
        {this.props.places.map(place => {
          return ( 
            <div >
            <Card key={place._id} className="card">
            <Card.Img variant="top" src={place.imgPath} />
            <Card.Body>
            <Link to={`/place/${place._id}`}><p>{place.name}</p></Link>
            <Card.Text> <p>{place.description}</p> </Card.Text> 
            </Card.Body>
            </Card>
            </div>
          )
        })}
      </div>
      </>
    )
  }
}

export default FavoritesList;