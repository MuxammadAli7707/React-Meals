import { Component } from 'react';
import Headering from '../Header/Headering';
import Hero from '../Hero/Hero';
import Price from '../Main/Price';
import Modaling from '../UI/Modaling/Modaling';


let arr = []
let allPrice = 0
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

    let addItem = (e) => {
      e.preventDefault()
      let idx = e.target.id
      let valuing = e.target[0].value
      let newObj = []
      this.state.obj.map(item => {
        newObj.push(item)
      })
    
      let existFood = arr.find(food => food.id === +idx)
      if(!existFood) {
        let foodFromNewArr = newObj.find(food => food.id === +idx)
        foodFromNewArr.count += +valuing
        arr.push(foodFromNewArr)
      } else {
        existFood.count += +valuing
      }
    
      this.setState({newObj: [...arr]})
      this.setState({obj: [...newObj]})
    }
    let Countings = 0
    this.state.obj.map(item => {Countings += +item.count})

    let totalPrice = 0
    this.state.newArray.map(pri => {
      let price = 0
      let coun = 0

      price += +pri.price
      coun += +pri.count
      allPrice = coun * price

      totalPrice += allPrice

    })

    let minusBtn = (e) => {
      let idd = e.nativeEvent.path[1].id
      arr.map(item => {
        if(item.id === +idd) {
          item.count -= 1
          if(item.count === 0) {
           arr = arr.filter( el => el.id !== +idd);
          }
        }
      })
      this.setState({newArray: [...arr]})
    }

    let plusBtn = (e) => {
      let idd = e.nativeEvent.path[1].id
      arr.map(item => {
        if(item.id === +idd) {
          item.count += 1
        }
      })
      this.setState({newArray: [...arr]})
    }


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
          minus={minusBtn}
          plus={plusBtn}
          total={totalPrice}
        />
      </>
    )
  }
}
export default Builder;
