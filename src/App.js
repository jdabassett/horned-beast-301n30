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
      beastsArray:[],
      modalState:false,
      selectedBeastObject:{},
      filteredBeastsByTitle:'',
      filteredBeastsArray:[],
    }
  }

  // generate array of unique number of horns
  componentDidMount() {
    this.setState({
      beastsArray:data,
      filteredBeastsArray:data})
  }

  // select horned beast to display with modal
  handlerModal = (bool,index) => {
    if (index){
      this.setState(prevState=> ({...prevState,
        modalState:bool,
        selectedBeastObject:prevState.beastsArray.filter(item=> item._id===index)[0]})) 
    } else {
      this.setState(prevState=> ({...prevState,
        modalState:bool,
        selectedBeastObject:{}}))
    };
  }

  //update array of horns to filter displayed horns
  handlerFilteredBeasts = (event) => {
      this.setState({filteredBeastsByTitle:event.target.value})
  }

  //update filtered beasts array when filtered beasts by horn changes
  componentDidUpdate(prevProps, prevState){
    if (prevState.filteredBeastsByTitle !== this.state.filteredBeastsByTitle) {
      let filteredBeastsArray =  this.state.beastsArray.filter(item => item.title.toLowerCase().includes(this.state.filteredBeastsByTitle.toLowerCase()) )
      this.setState({filteredBeastsArray:filteredBeastsArray})
    };

  }

  
  render() {
    return (
    <div className='appContainer'>
          <Header/>
          <SelectedBeast 
            selectedBeastObject={this.state.selectedBeastObject}
            show={this.state.modalState}
            handlerModal={this.handlerModal}/>
          <Main 
            handlerFilteredBeasts={this.handlerFilteredBeasts}
            data={this.state.filteredBeastsArray}
            handlerModal={this.handlerModal}/>
          <Footer/>

    </div>
  );
  }
}

export default App;
