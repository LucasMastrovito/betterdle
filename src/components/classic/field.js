import { useState } from "react";
import { isImg } from "../utils/utils";

function getMatchStatus(type, guessValue, answerValue, order) {
  if (type === "none") {
    return "";
  }
  if (type === "number") {
    return guessValue > answerValue ? "superior" : guessValue === answerValue ? "match" : "inferior";
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
  const text = typeof (props.name) === "string" ? props.name.replace(/;/g, ", ") : props.name !== null ? props.name : "Unknown";
  const [name, setName] = useState(false);

  const displayName = (e) => {
    if (typeof props.name === "string" && isImg(props.name)) {
      setName(!name);
    }
  }
  return (
    <div onMouseEnter={displayName} onMouseLeave={displayName} className={`outline scale field ${getMatchStatus(
      props.field.type,
      props.name,
      props.random[props.field.key],
      props.field.order
    )}`}
      style={{ animation: "fadeIn 0.5s forwards linear 1", animationDelay: `${0.5 * props.index}s` }}>
      {typeof props.name === "string" && isImg(props.name) ?
        <img alt={props.name} className="field-img" src={props.name} /> :
        <p>{text}</p>}
      <p style={{ zIndex: "10" }}>{name ? props.character : ''}</p>
    </div>
  )
}

export default Field;