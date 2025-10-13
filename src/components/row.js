import { useEffect, useRef, useState } from "react";
import Field from "./field";

function Row(props) {
    const data = props.data;
    const rowRef = useRef(null);
    const [hasScroll, setHasScroll] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            const el = rowRef.current;
            if (!el) return;
            setHasScroll(el.scrollWidth > el.clientWidth);
        };
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    return (
        <div ref={rowRef} className={`row ${hasScroll ? "has-scroll" : ""}`}>
            { Object.entries(data).map(([key, value], index) => (
                <Field key={index} index={index} character={props.character} name={value} field={props.field[index]} random={props.random} />
            ))}
        </div>
    )
}

export default Row;