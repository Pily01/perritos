import React,{Component} from 'react'
import {Link} from "react-router-dom"
import DogBox from './DogBox';
import axios from "axios"
//import dogs from "../dogs.json"

class AllDogs extends Component {
  constructor(){
    super()
    this.state = {dogs: []}
  }

  getAllDogs = () =>{
    axios.get(`https://dry-ocean-98079.herokuapp.com/dogs/dogs`, {withCredentials:true})
    .then(responseFromApi => {
      this.setState({
        dogs: responseFromApi.data
      })
    })
  }

  componentDidMount(){
    this.getAllDogs()
  }

  drawDogBox = () => {
    
    const {dogs} = this.state
    return dogs.map((dog, index)=> <DogBox key={index} {...dog}/>)
  }

  searchDog = (e) => {
    const {dogs} = this.state
    const input = e.target.value;
    const regEx = RegExp(input, "i")
    const filtered = dogs.filter(dog => regEx.test(dog.breed))
    this.setState({dogs: filtered})
  }

  render(){
    const {drawDogBox, searchDog} = this

    return(
      <div className="all-dogs-container">
        <h1 className="title">Iron Dogs</h1>
        <input 
          className = "form-control"
          onChange={searchDog}
          type="text"
          placeholder="Search for dogs !"
          />
        <div className="dog-box-group">
          {drawDogBox()}
        </div>
       
      </div>
    )
  }
}

export default AllDogs