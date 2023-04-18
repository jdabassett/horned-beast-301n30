import React from 'react';
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
import ThemeProvider from 'react-bootstrap/ThemeProvider'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  
  render() {return (
    <>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
          <Header/>
          <Main/>
          <Footer/>
      </ThemeProvider>
    </>
  );
  }
}

export default App;
