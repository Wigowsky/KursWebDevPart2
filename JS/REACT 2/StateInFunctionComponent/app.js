const ADDITION = "addition";
const RESET = "reset";
const SUBSTRACTION = "substraction";

const Counter = props => {

  const [count, setCount] = React.useState(0);

  const [result, setResult] = React.useState(props.result)

  const handleMathClick = (type,number = 1) => {
    if(type==SUBSTRACTION) {
      setCount(count + 1);
      setResult(result - number);
    }
    else if(type==RESET) {
      setCount(count + 1);
      setResult(props.result);

    }
    else if(type==ADDITION) {
      setCount(count + 1);
      setResult(result + number);

    }
  }


  return (
    <>
      <MathButton
      name="-10"
      number={10}
      type={SUBSTRACTION}
      click={handleMathClick}
      />
      <MathButton
      name="-1"
      number={1}
      type={SUBSTRACTION}
      click={handleMathClick}
      />
      <MathButton
      name="Reset"
      type={RESET}
      click={handleMathClick}
      />
      <MathButton
      name="1"
      number={1}
      type={ADDITION}
      click={handleMathClick}
      />
      <MathButton
      name="10"
      number={10}
      type={ADDITION}
      click={handleMathClick}
      />
      <ResultPanel count={count} result={result} />
    </>
    
  );

}

const MathButton = ({click, name, number, type}) => {

  const handleOnClick = () => click(type, number)

  return (
    <button onClick={handleOnClick}>{name}</button>
  )
}

const ResultPanel = ({count, result}) => {
  const additionalInfo = count > 10 ? <span>Przeciążenie procesora!</span> : null

  return (
    <>
    <h1>Liczba kliknięć: {count} {additionalInfo}</h1>
    <h2>Wynik : {result}</h2>
    </>
  )
}

const startValue = 0;

ReactDOM.render(<Counter result={startValue} />, document.getElementById('root'))
