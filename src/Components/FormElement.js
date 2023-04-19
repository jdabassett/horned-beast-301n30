import React from 'react'
import Form from 'react-bootstrap/Form';

// console.log(data)

class FormElement extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render() {


    //generate array of unique horn components for dropdown menu
    const UniqueHornsDropdown = this.props.uniqueHornsArray.map((item,index) => {
      return <option
                key={index}
                value={`${item}`}
                >{item}</option>
    })

    return (
        <>
          <Form.Group 
            className="mb-3 formContainer">
            <Form.Label>How many horns do you want your beasts to have?</Form.Label>
            <Form.Select onChange={(e)=>this.props.handlerFilteredBeasts(e)}>
              <option
                key='All'
                value={this.props.uniqueHornsArray}
                >{`All the horns!`}</option>
              {UniqueHornsDropdown}
            </Form.Select>
          </Form.Group>
        </>
      
    )
  }
}

export default FormElement;