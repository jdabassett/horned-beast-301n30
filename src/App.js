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
      selectedBeastIndex:4,
      selectedBeastObject:{},
      uniqueHornsArray:[],
      filteredBeastsByHorns:'All',
      filteredBeastsArray:[],
    }
  }

  // generate array of unique number of horns
  componentDidMount() {
    let fullHornsArray = data.map(item => item.horns)
    let uniqueHornsArray = ["All",... new Set(fullHornsArray)]
    this.setState({beastsArray:data,uniqueHornsArray:uniqueHornsArray,filteredBeastsArray:data})
  }

  // select horned beast to display with modal
  handlerModal = (bool,index) => {
    if (index){
      this.setState(prevState=> ({...prevState,
        modalState:bool,
        selectedBeastIndex:index,
        selectedBeastObject:prevState.beastsArray.filter(item=> item._id===index)[0]})) 
    } else {
      this.setState(prevState=> ({...prevState,
        modalState:bool,
        selectedBeastIndex:null,
        selectedBeastObject:{}}))
    };
      // console.log(bool,index)
  }

  handlerFilteredBeasts = (event) => {
      console.log(event)
      this.setState({filteredBeastsByHorns:event})
  }

  //update filtered beasts array when filtered beasts by horn changes
  componentDidUpdate(prevProps, prevState){
    if (prevState.filteredBeastsByHorns !== this.state.filteredBeastsByHorns) {
      let filteredBeastsArray = (
        this.state.filteredBeastsByHorns === 'All'?
        this.state.beastsArray:
        this.state.beastsArray.filter(item => item.horns===this.state.filteredBeastsByHorns))
      this.setState({filteredBeastsArray:filteredBeastsArray})
      // console.log(filteredBeastsArray);
    };

  }

  
  render() {
    // console.log(this.state.selectedBeastIndex)
    // console.log(this.state.uniqueHornsArray)
    console.log(this.state.filteredBeastsByHorns)
    return (
    <div className='appContainer'>

          <Header/>
          <SelectedBeast 
            selectedBeastObject={this.state.selectedBeastObject}
            show={this.state.modalState}
            handlerModal={this.handlerModal}/>
          <Main 
            uniqueHornsArray={this.state.uniqueHornsArray}
            handlerFilteredBeasts={this.handlerFilteredBeasts}
            data={this.state.filteredBeastsArray}
            handlerModal={this.handlerModal}/>
          <Footer/>

    </div>
  );
  }
}

export default App;
