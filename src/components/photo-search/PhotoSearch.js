
import React, { Component } from 'react';
import TextField from 'material-ui/TextField' ;
import MenuItem from 'material-ui/MenuItem';

import SelectField from 'material-ui/SelectField' ;
import axios from 'axios'
import PhotoResults from '../photo-results/PhotoResults'

class Search extends Component { // eslint-disable-line react/prefer-stateless-function

state = {
  searchText : '' ,
  amount : 15,
  apiUrl : 'https://pixabay.com/api',
  apiKey : '9467769-954bd9e8550413dbb5413c73c',
  images : []

};


// arrow function to avoid .bind

onTextChange = (e) => {

let val = e.target.value

  this.setState({[e.target.name] : val}, () => {

    if(val === '') {
      this.setState({
        images : []
      })
    }else {
      axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)

      .then(res => this.setState({
        images : res.data.hits
      }))
      .catch(err => console.log(err));

    }

  })
}

onAmountChange =(e, index , value) => {

  this.setState({amount : value})

}

// TextField Component from Material UI
// floatingLabelText = 'Search For Photos' -> from Material UI
// fullWidth = {true} -> from Material UI

  render() {
    console.log(this.state.images)
    return (
      <div>

        <TextField
          name = 'searchText'
          value = {this.state.searchText}
          onChange = {this.onTextChange}
          floatingLabelText = 'Search For Photos'
          fullWidth = {true}
          />

        <SelectField
          name = 'amount'
          floatingLabelText={this.state.amount}
          value = {this.state.amount}
          onChange = {this.onAmountChange}
              >

                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={200}>200</MenuItem>

              </SelectField>
              <br/>

            {this.state.images.length > 0 ? (<PhotoResults
              images = {this.state.images}
              />) : null }



      </div>
    );
  }
}



export default Search;
