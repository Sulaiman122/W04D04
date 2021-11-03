import { React, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Cards = () => {
  const [pokemons,setPokemons] = useState([]);

  useEffect(() => {
    getMyApi();
  }, []);
​
  const getMyApi = async () => {
    const response = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    setPokemons(response.data.bpi);
  };


  const [searchValue, setsearchValue] = useState("")
  let searchValueTemp;
  let history = useHistory();

  const specificCard = (n) => {
    history.push(`/card/${n}`);
  };
  console.log('ppppp',pokemons);


  const results = !searchValue
    ? pokemons
    : pokemons.filter(item =>
        item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
      );

  const searchChanged = (e) => {
    setsearchValue(e.target.value);
    };

  return (
    <>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search for something.."
          value={searchValueTemp}
          onKeyUp={searchChanged}
          name="search"
        />
      </div>
      <div className="cards">
        {
        pokemons.map((item,i) => {
          return (
            <div
              className="card" key={i}
              onClick={() => {
                specificCard({i});
              }}
            >
              <img src={item.coatOfArms.png} alt="shut up react" />
              <h2>{item.code}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
