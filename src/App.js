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
      modalState:false,
      selectedBeastIndex:4,
      selectedBeastObject:{}
    }
  }

  handlerModal = (bool,index) => {
    this.setState(prevState=> ({...prevState,
                                modalState:bool,
                                selectedBeastIndex:index,
                                selectedBeastObject:prevState.beastsArray.filter(item=> item._id===index)[0]}))
      // console.log(bool,index)
  }

  
  render() {
    // console.log(this.state.selectedBeastIndex)

    return (
    <div className='appContainer'>

          <Header/>
          {this.state.modalState?<SelectedBeast 
            selectedBeastObject={this.state.selectedBeastObject}
            show={this.state.modalState}
            handlerModal={this.handlerModal}/>:null}
          <Main 
            data={this.state.beastsArray}
            handlerModal={this.handlerModal}/>
          <Footer/>

    </div>
  );
  }
}

export default App;
