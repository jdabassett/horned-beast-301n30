import React from 'react'
import Form from 'react-bootstrap/Form';

// console.log(data)

class FormElement extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render() {
    let uniqueHorns = this.props.filteredBeastsByHorns.map(item=> {
      return <option key={item} value={item}>{item}</option>
    })

    return (
        <>
          <Form.Group 
            className="mb-3 formContainer"
            >
            
            <Form.Select aria-label="Default select example">
              <option>search by number of horns!</option>
              <option value={this.props.filteredBeastsByHorns}>All</option>
              {uniqueHorns}
            </Form.Select>
            
            <Form.Control 
              type="text" 
              placeholder="search beasts by title!" 
              onChange={(e)=>this.props.handlerFilteredBeasts(e)}
              />

          </Form.Group>
        </>
      
    )
  }
}


export default FormElement;