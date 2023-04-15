import React from 'react'
import HornedBeast from './HornedBeast.js'
import data from '../data.json'

// console.log(data)

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state={
      beastArray:data
    }
  }


  render() {
    // console.log(this.state.beastArray)
    //iterate over data to make horned beast elements
    const HornedBeasts = this.state.beastArray.map(
      (item,index)=>{
        return <HornedBeast 
          key={item._id}
          title={item.title} 
          imageUrl={item.image_url}
          description={item.description}
          horns={item.horns}
          />})

    return (
      <>
        {HornedBeasts}
      </>
    )
  }
}

export default Main;