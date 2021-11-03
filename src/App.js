import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Cards from "./components/Pokemons.js";
import Home from "./components/Home";
import Card from "./components/Pokemon.js";
import {Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/card/:id" component={Card} />
          <Route exact path="*" render={() => {
              return <h1>Error 404 baby</h1>;
            }} />
        </Switch>
      </div>
    </>
  );
}

export default App;


/*
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cards, setCards] = useState([]);

  //1 no async
  // useEffect(() => {
  //   fetch("https://api.pokemontcg.io/v2/cards?pageSize=10")
  //     .then((response) => response.json())
  //     .then((body) => {
  //       setCards(body.data);
  //     });
  // }, []);


  //2 async in useEffect 'not recommended'
  // useEffect(async() => {
  //   const response =await fetch('https://api.pokemontcg.io/v2/cards');
  //   const body =await response.json();
  //   setCards(body.data);
  // }, [])

  //3 async outside useEffect 'recommended'
  // useEffect(() => {
  //   getData();
  // }, [])
  // const getData= async()=>{
  //   const response = await fetch('https://api.pokemontcg.io/v2/cards');
  //   const body = await response.json();
  //   setCards(body.data)
  // }

  //4 using axios library 'easiest'
  useEffect(()=>{
    axios.get('https://api.pokemontcg.io/v2/cards').then(result=>{
      setCards(result.data.data);
    })
  },[])
  
  return (
    <div className="App">
      {cards ? (
        <ul>
          {cards.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
*/