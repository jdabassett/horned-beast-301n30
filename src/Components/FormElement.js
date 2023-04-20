import React from 'react'
import Form from 'react-bootstrap/Form';

// console.log(data)

class FormElement extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render() {

    return (
        <>
          <Form.Group 
            className="mb-3 formContainer"
            >
            
            <Form.Control 
              type="text" 
              placeholder="search beasts by title" 
              onChange={(e)=>this.props.handlerFilteredBeasts(e)}
              />

          </Form.Group>
        </>
      
    )
  }
}

export default FormElement;