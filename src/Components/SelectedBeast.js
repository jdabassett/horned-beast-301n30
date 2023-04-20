import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render () {
    return (
      <Modal
          show={this.props.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.selectedBeastObject.title}
            </Modal.Title>

            <p>{this.props.selectedBeastObject.description}</p>

            <p>{`Horns: ${this.props.selectedBeastObject.horns}`}</p>

            <img width='200px' src={this.props.selectedBeastObject.image_url} alt={this.props.selectedBeastObject.description}/>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={()=> this.props.handlerModal(false,null)}>Close</Button>
          </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;