import {React, useState} from 'react'
import { useParams } from 'react-router'

const Card = () => {
    const [cards] = useState([
        {
          id: 1,
          title: "The Best Design for a House",
          image: "https://www.w3schools.com/html/pic_trulli.jpg",
        },
        {
          id: 2,
          title: "The Most amazing laptop on Earth",
          image:
            "https://i.gadgets360cdn.com/large/apple_macbook_air_M1_2020review_cover_1607598067132.jpg",
        },
        {
          id: 3,
          title: "The mose beautiful flower ever human see",
          image:
            "https://www.gardeningknowhow.com/wp-content/uploads/2021/07/sulfur-cosmos-mexican-aster-flowers-400x300.jpg",
        },
      ])

      const {id} = useParams();

      const myItem = cards.find((item)=>{
          return Number(id)===item.id
      })
    return (
        <div>
            <h1>Card</h1>
            <div className="cards">
          <div className="card1">
            <img src={myItem.image} alt="shut up react" />
            <h2>{myItem.title}</h2>
          </div>
    </div>
        </div>
    )
}

export default Card
