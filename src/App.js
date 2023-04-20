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
      uniqueHornsArray:[],
      filteredBeastsByHorns:[],
      filteredBeastsArray:[],
    }
  }

  // generate array of unique number of horns
  componentDidMount() {
    let hornsArray = data.map(item=> parseInt(item.horns));
    let uniqueHornsArray = [... new Set(hornsArray)]
    this.setState({
      beastsArray:data,
      uniqueHornsArray: uniqueHornsArray,
      filteredBeastsByHorns: uniqueHornsArray,
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
      let inputType = event.target.getAttribute('class-name');
      if (inputType==='searchField'){
        this.setState({filteredBeastsByTitle:event.target.value})
      }
      if (inputType==='dropDown') {
        let filteredArray = event.target.value.split(',').map(item => parseInt(item));
        this.setState({filteredBeastsByHorns:filteredArray})
        // console.log(filteredArray)
      }
      
  }

  //update filtered beasts array when filtered beasts by horn changes
  componentDidUpdate(prevProps, prevState){
   
    if (prevState.filteredBeastsByHorns !== this.state.filteredBeastsByHorns || prevState.filteredBeastsByTitle !== this.state.filteredBeastsByTitle){

      let filteredBeastsArray = this.state.beastsArray.filter(item => { return (this.state.filteredBeastsByHorns.includes(item.horns) && item.title.toLowerCase().includes(this.state.filteredBeastsByTitle.toLowerCase()))});

      this.setState({filteredBeastsArray:filteredBeastsArray});
    }
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
