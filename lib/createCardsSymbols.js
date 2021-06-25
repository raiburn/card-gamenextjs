const CreateCardSymbols = (props) => {
    const isNumber = !isNaN(props.number);

    return (
      <div className="symbols" data={`${props.number}\n${props.symbol}`}>
        {props.number === "A" ? ( 
          <b>{props.symbol}</b>
        ) : ["J", "Q", "K"].includes(props.number) ? (
          <div></div>
        ) : isNumber ? (
          new Array(parseInt(props.number, 10))
            .fill(props.symbol)
            .map((cardSymbol, index) => <b key={index}>{cardSymbol}</b>)
        ) : null}
      </div>
    );
}

export default CreateCardSymbols;