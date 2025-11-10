import { useState } from "react";
import { areNumbersClose, formatValue, isImg } from "../utils/utils";

function getMatchStatus(field, guessValue, answerValue) {
  const type = field.type;
  const order = field.order;

  if (type === "none") {
    return "";
  }
  if (type === "number") {
    guessValue = formatValue(guessValue, field, true);
    answerValue = formatValue(answerValue, field, true);
    return guessValue > answerValue ? `superior ${areNumbersClose(guessValue, answerValue) ? 'partial' : 'wrong'}` : guessValue === answerValue ? "match" : `inferior ${areNumbersClose(guessValue, answerValue) ? 'partial' : 'wrong'}`;
  }

  const guess = typeof (guessValue) === "string" ? guessValue.split(";") : guessValue;
  const answer = typeof (answerValue) === "string" ? answerValue.split(";") : answerValue;

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
  const text = typeof (props.name) === "string" ? props.name.replace(/;/g, ", ") : props.name !== null ? formatValue(props.name, props.field) : "Unknown";
  const [name, setName] = useState(false);

  const displayName = (e) => {
    if (typeof props.name === "string" && isImg(props.name)) {
      setName(!name);
    }
  }
  return (
    <div onMouseEnter={displayName} onMouseLeave={displayName} className={`outline scale field ${getMatchStatus(
      props.field,
      props.name,
      props.random[props.field.key]
    )}`}
      style={{ animation: "fadeIn 0.5s forwards linear 1", animationDelay: `${0.5 * props.index}s` }}>
      {typeof props.name === "string" && (isImg(props.name) || props.field.type === "img") ?
        <img alt={props.name} className="field-img" src={props.name} /> :
        <p>{text}</p>}
      <p style={{ zIndex: "10" }}>{name ? props.character : ''}</p>
    </div>
  )
}

export default Field;