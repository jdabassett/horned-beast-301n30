import React from 'react';
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  
  render() {return (
    <div className='appContainer'>

          <Header/>
          <Main/>
          <Footer/>

    </div>
  );
  }
}

export default App;
