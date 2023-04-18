import React from 'react';
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
import data from './data.json'
import SelectedBeast from './Components/SelectedBeast.js'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      beastsArray:data,
      modalState:true,
      selectedBeastIndex:1
    }
  }

  handlerModal = (bool,index) => {
    this.setState(prevState=> ({...prevState,
                                modalState:bool,
                                selectedBeast:index}))

  }

  
  render() {
    // console.log(SelectedBeast)
    return (
    <div className='appContainer'>

          <Header/>
          <SelectedBeast 
            selectedBeastIndex={this.state.selectedBeastIndex}
            data={this.state.beastsArray}
            show={this.state.modalState}
            handlerModal={this.handlerModal}/>
          <Main 
            data={this.state.beastsArray}
            handlerModal={this.handlerModal}/>
          <Footer/>

    </div>
  );
  }
}

export default App;
