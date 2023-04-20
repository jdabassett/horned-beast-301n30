import React from 'react'
import Form from 'react-bootstrap/Form';

// console.log(data)

class FormElement extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render() {
    let uniqueHorns = this.props.uniqueHornsArray.map(item=> {
      return <option key={item} value={item}>{item}</option>
    })

    return (
        <>
          <Form.Group 
            className="mb-3 formContainer"
            >
            
            <Form.Select 
              aria-label="Default select example"
              class-name="dropDown" 
              onChange={(e)=>this.props.handlerFilteredBeasts(e)}
              >
              <option 
                value={this.props.uniqueHornsArray}
                >search beasts by number of horns!</option>
              <option 
                value={this.props.uniqueHornsArray}
                >All</option>
              {uniqueHorns}
            </Form.Select>
            
            <Form.Control 
              className="searchField"
              type="text" 
              class-name="searchField" 
              placeholder="search beasts by title!" 
              onChange={(e)=>this.props.handlerFilteredBeasts(e)}
              />

          </Form.Group>
        </>
      
    )
  }
}


export default FormElement;