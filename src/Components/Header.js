import React from 'react'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={hoverState:false}
  }

  handlerHover = (bool) => {
    this.setState(prevState => ({...prevState,hoverState:bool}))
  }


  render() {
    return (
      <div className='headerContainer'
        onMouseEnter={()=>this.handlerHover(true)}
        onMouseLeave={()=>this.handlerHover(false)}>

        {this.state.hoverState?
          <h1 style={{fontSize:'1em'}}>Hover Secret: The answer to life, the universe, and everything is 42.</h1>:
          <h1>Horned Beast Gallery</h1>}
      </div>
    )
  }
}

export default Header;