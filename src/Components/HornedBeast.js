import React from 'react';
import {TbHeartFilled, TbHeartPlus, TbHeartMinus} from 'react-icons/tb';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
  constructor(props){
    super(props)
    this.state={
      hearts:0,
      hoverState:false
    }
  }
  
  //change number of hearts per beast
  handlerHearts = (num) => {
    this.setState({hearts:this.state.hearts+num})
  }

  //track hover state over beast
  handlerHover = (bool) => {
    this.setState(prevState => ({...prevState,hoverState:bool}))
  }

  render() {
    // console.log(this.props)
    // console.log(this.state.hoverState)
    return (
      <Card className="cardContainer"
        onMouseEnter={()=>this.handlerHover(true)}
        onMouseLeave={()=>this.handlerHover(false)}
        >
        <Card.Img 
          className="cardImage" variant="top" 
          src={this.props.imageUrl} 
          onClick={this.props.handlerModal}
          />

        <div className="heartContainer">
          {/* plus heart icon will only appear when hearts equal zero*/}
          {this.state.hearts===0?
            <TbHeartPlus className="heartIcons" onClick={()=>this.handlerHearts(1)}/>:
            null}
            
          {/* solid heart icon will only appear when hearts greater than zero*/}
          {this.state.hearts>0?
            <div className='heartCountContainer'>
              <p className="heartIcons heartCount" >{this.state.hearts}</p>
              <TbHeartFilled className="heartIcons"  onClick={()=>this.handlerHearts(1)}/>
            </div>:
            null}

          {/* minus heart icon will only appear when hover state is true */}
          {this.state.hearts>=1 && this.state.hoverState?
            <TbHeartMinus className="heartIcons"  onClick={()=>this.handlerHearts(-1)}/>:
            null}
        </div>

        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}


export default HornedBeast;