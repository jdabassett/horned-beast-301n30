import React from 'react'
import HornedBeast from './HornedBeast.js'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// console.log(data)

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }


  render() {
    // console.log(this.state.beastArray)
    //iterate over data to make horned beast elements
    const HornedBeasts = this.props.data.map(
      (item,index)=>{
        return <Col key={`Col ${item._id}`}sm={9} md={5} lg={4} xl={3} xxl={2}  >
          <HornedBeast 
          key={item._id}
          title={item.title} 
          imageUrl={item.image_url}
          description={item.description}
          horns={item.horns}
          handlerModal={()=>this.props.handlerModal(true,item._id)}
          />
          </Col>
          })

    return (
      <div className='cardsContainer'>
        <Container className='rowContainer'>
          <Row sm={1} md={2} lg={3} xl={4} xxl={6}>
            {HornedBeasts}
          </Row>
        </Container>
      </div>
    )
  }
}

export default Main;