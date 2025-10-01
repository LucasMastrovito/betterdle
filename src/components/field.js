function getMatchStatus(type, guessValue, answerValue, order) {
  if (type === "number") {
    return guessValue > answerValue ? "superior" : guessValue === answerValue ? "match" : "inferior";
  }

  const guess = guessValue.split(";");
  const answer = answerValue.split(";");

  if (type === "equal") {
    if (guessValue === answerValue) {
        return "match";
    } else if (guess.some(val => answer.includes(val))) {
        return "partial";
    } else {
        return "wrong";
    }
  }

  if (type === "order") {
    return order.indexOf(guessValue) > order.indexOf(answerValue) ? "after" : order.indexOf(guessValue) === order.indexOf(answerValue) ? "match" : "before";
  }

  return "wrong";
}

function Field(props) {
    const text = typeof(props.name) === "string" ? props.name.replace(/;/g, " ") : props.name ;

    console.log(props.random)
    return (
        <div className={`outline scale field ${getMatchStatus(
                props.field.type,
                props.name,
                props.random[props.field.key],
                props.field.order
            )}`}
            style={{animation: "fadeIn 0.5s forwards linear 1", animationDelay: `${0.5*props.index}s`}}>
            { typeof props.name === "string" && props.name.includes(".png") ?
            <img alt={props.name} className="field-img" src={props.name} /> :
            <p>{ text }</p> }
        </div>
    )
}

export default Field;