import { Deck, Hand } from '../lib/deck';
import Card from '../lib/cards';
var { graphql, buildSchema } = require('graphql');


var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return 'Hello world!';
  },
};
 
// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});


let deck = new Deck();
let hand = new Hand(deck, 2);
let table = new Hand(deck, 5);

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Table</h1>
      <div className="deck">
              {table.cards.map((card, index) => {
                const number = card.slice(0, -1);
                const symbol = card.slice(-1);
                const flippedCards = parseInt(2, 10) > index
                return <Card {...{symbol, number, key : index, flipped : flippedCards}} />
              })}
            </div>
      
      <h1> Hand</h1>
      <div className="deck">
              {hand.cards.map((card, index) => {
                const number = card.slice(0, -1);
                const symbol = card.slice(-1);
                const flippedCards = parseInt(0, 10) > index
                return <Card {...{symbol, number, key : index, flipped : flippedCards}} />
              })}
            </div>
        </header>
    </div>
  )
}
