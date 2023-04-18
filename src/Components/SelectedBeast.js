import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  render () {
    let selectedBeastObject = this.props.data.filter(item => item._id===this.props.selectedBeastIndex)

    return (
      <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {/* <Modal.Header>
          </Modal.Header> */}
          <Modal.Body>
            <Modal.Title id="contained-modal-title-vcenter">
              {selectedBeastObject[0].title}
            </Modal.Title>
            <p>{selectedBeastObject[0].description}</p>
            <img width='200px' src={selectedBeastObject[0].image_url} alt={selectedBeastObject[0].description}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>this.props.handlerModal(false,null)}>Close</Button>
          </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;