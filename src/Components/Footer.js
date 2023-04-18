import React from 'react'

class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state={hoverState:false}
  }

  handlerHover = (bool) => {
    this.setState(prevState => ({...prevState,hoverState:bool}))
  }
  render() {
    return (
      <div className='footerContainer'
        onMouseEnter={()=>this.handlerHover(true)}
        onMouseLeave={()=>this.handlerHover(false)}>
        {this.state.hoverState?
          <p className='footerCreator'>Hover Secret: Watermelons, cucumbers, cantaloupes, squash, and pumpkins scientifically are berries.</p>:
          <p className='footerCreator'>All Powerful Creator: Jacob Bassett</p>}
      </div>
    )
  }
}

export default Footer;