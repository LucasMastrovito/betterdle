import { useEffect, useRef, useState } from "react";

function Indicator(props) {
    const [show, setShow] = useState(false);
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
    }, [show]);

    return (
         <div className={`card card-${props.name}`} style={{marginTop: '5vh'}}>
            <h2 className="outline">Indicators</h2>
            <div className="grid" style={{marginBlock: "1em"}}>
                <div className={`row ${hasScroll ? "has-scroll" : ""}`} style={{display: show ? 'flex' : 'none'}}>
                    <p className="field-name outline" style={{width: "48px"}}>Correct</p>
                    <p className="field-name outline" style={{width: "48px"}}>Wrong</p>
                    <p className="field-name outline" style={{width: "48px"}}>Partial</p>
                    <p className="field-name outline" style={{width: "48px"}}>Before</p>
                    <p className="field-name outline" style={{width: "48px"}}>After</p>
                    <p className="field-name outline" style={{width: "48px"}}>Inferior</p>
                    <p className="field-name outline" style={{width: "48px"}}>Superior</p>
                </div>
                <div ref={rowRef} className={`row ${hasScroll ? "has-scroll" : ""}`} style={{display: show ? 'flex' : 'none'}}>
                    <div className="field match" style={{opacity: '1', width: "48px"}}></div>
                    <div className="field wrong" style={{opacity: '1', width: "48px"}}></div>
                    <div className="field partial" style={{opacity: '1', width: "48px"}}></div>
                    <div className="field after" style={{opacity: '1', width: "48px"}}></div>
                    <div className="field before" style={{opacity: '1', width: "48px"}}></div>
                    <div className="field superior" style={{opacity: '1', width: "48px"}}></div>
                    <div className="field inferior" style={{opacity: '1', width: "48px"}}></div>
                </div>
            </div>
            <button className={`btn-${props.name}`} onClick={(e) => setShow(!show)}>{!show ? 'Show' : 'Hide'}</button>
        </div>
    )
}

export default Indicator;