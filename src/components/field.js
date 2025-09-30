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

    return (
        <div className={`outline field ${getMatchStatus(
                props.field.type,
                props.name,
                props.random[props.field.key],
                props.field.order
            )}`}>
            { typeof props.name === "string" && props.name.includes(".png") ?
            <img alt={props.name} src={props.name} style={{height: "5vw", width: "5vw"}} /> :
            <p>{ text }</p> }
        </div>
    )
}

export default Field;