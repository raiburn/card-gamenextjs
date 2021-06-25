import CreateCardSymbols from './createCardsSymbols';

const Card = ({symbol, number, flipped}) => {
    let isFlipped = flipped;

    const setFlip = () =>{
        isFlipped = !isFlipped;
    }
  
    return (
      <div
        className="card"
        symbol={symbol}
        number={number}
        className={["card", isFlipped ? "flipped" : ""].filter(Boolean).join(' ')}
        onClick={setFlip()}
      >
        <div className="container">
          <div className="front">
            <CreateCardSymbols
              symbol={symbol}
              number={number}
            />
          </div>
        </div>
      </div>
    );
}

export default Card;