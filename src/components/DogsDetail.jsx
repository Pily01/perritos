import React, { Component } from 'react'
//import dogs from "../dogs.json"
import axios from "axios"

 class DogsDetail extends Component {
  constructor(props){
    super(props);
    this.state = {}

  }

  componentDidMount() {
    this.getSingleDog()
    console.log("didMount")
  }

  getSingleDog = () => {
    const { params } = this.props.match;
    axios.get(`https://dry-ocean-98079.herokuapp.com/dogs/dogs/${params.id}`, {withCredentials:true})
    .then( responseFromApi =>{
        const dogs = responseFromApi.data;
        console.log("rené")
        this.setState(dogs);
    })
    .catch((err)=>{
        console.log(err)
    })
   }

  

  render() {
   
    return (
      <div>
        <h1 className="title">Dog Detail</h1>
        <img src={this.state.image} alt="dog-picture"/>
        <div className="info-container">
          <h3>Breed: {this.state.breed}</h3>
          <h3>Size: {this.state.size}</h3>
        </div>
        
      </div>
    )
  }
}

export default DogsDetail