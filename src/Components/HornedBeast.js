import React from 'react';
import {TbHeartFilled, TbHeartPlus, TbHeartMinus} from 'react-icons/tb';


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
    this.setState(prevState => ({...prevState,hearts:prevState.hearts+=num}))
  }

  //track hover state over beast
  handlerHover = (bool) => {
    this.setState(prevState => ({...prevState,hoverState:bool}))
  }

  render() {
    // console.log(this.props)
    // console.log(this.state.hoverState)
    return (
      <div 
        onMouseEnter={()=>this.handlerHover(true)}
        onMouseLeave={()=>this.handlerHover(false)}
        >
        <h2>{this.props.title}</h2>
        <img 
          width='300px' 
          src={this.props.imageUrl} 
          alt={this.props.description} 
          title={this.props.title} 
          onClick={()=>this.handlerHearts(1)}
          />
        
        {/* plus heart icon will only appear when hearts equal zero*/}
        {this.state.hearts===0?
          <TbHeartPlus onClick={()=>this.handlerHearts(1)}/>:
          null}
        {/* solid heart icon will only appear when hearts greater than zero*/}
        {this.state.hearts>=1?
          [<p>{this.state.hearts}</p>,<TbHeartFilled onClick={()=>this.handlerHearts(1)}/>]:
          null}
        {/* minus heart icon will only appear when hover state is true */}
        {this.state.hearts>=1 && this.state.hoverState?
          <TbHeartMinus onClick={()=>this.handlerHearts(-1)}/>:
          null}


        


        <p>{this.props.description}</p>
      </div>
    )
  }
}


export default HornedBeast;