import { Component } from 'react';
import Headering from '../Header/Headering';
import Hero from '../Hero/Hero';
import Price from '../Main/Price';
import Modaling from '../UI/Modaling/Modaling';


class Builder extends Component {
  constructor(props) {
    super()
    this.state = {
     obj: [
        {
          id: 1,
          name: 'Sushi',
          ingridient: 'Finest fish and veggies',
          price: 22.99,
          count: 0
        },
        {
          id: 2,
          name: 'Schnitel',
          ingridient: 'A german speciality',
          price: '16.50',
          count: 0
        },
        {
          id: 3,
          name: 'Barbecue Burger',
          ingridient: 'American, raw, meaty',
          price: 12.99,
          count: 0
        },
        {
          id: 4,
          name: 'Green Bowl',
          ingridient: 'Healthy...and green...y',
          price: 18.99,
          count: 0
        },
      ],

      newArray: [],
      modal: false
    }
  }
  render() {

    let Opening = () => {this.setState({modal: true})}

    let Closing = () => {this.setState({modal: false})}
    
    let order = () => {alert('Сongratulations on your purchase')}


    let increment = () => {
      this.setState({ count: this.state.count += 1 });
    };

    let addItem = (e) => {
      e.preventDefault()
      let idx = e.target.id
      let valuing = e.target[0].value
      let newObj = []
      let arr = []
      this.state.obj.map(item => {
        newObj.push(item)
      })

      newObj.map(item => {
        if(+idx === item.id) {
          item.count += +valuing
          arr.push(item)
        }
      })

      this.setState({newArray: [...this.state.newArray, ...arr]})
      this.setState({obj: [...newObj]})
    }

    let Countings = 0
    this.state.obj.map(item => {Countings += +item.count})


    return(
      <>
        <Headering
          opening={Opening}
          countings={Countings}
        />
        <Hero />
        <Price
          addItem={addItem}
          obj={this.state.obj}
        />
        <Modaling
          opening={this.state.modal}
          closing={Closing}
          Items={this.state.newArray}
          order={order}
          increment={increment}
        />
      </>
    )
  }
}
export default Builder;
