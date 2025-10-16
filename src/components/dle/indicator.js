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
         <div className={`card card-${props.name}`} style={{width: show ? '50%' : '30%', marginTop: '5vh'}}>
            <h2 className="outline">Indicators</h2>
            <div className="grid" style={{marginBlock: "1em"}}>
                <div className={`row ${hasScroll ? "has-scroll" : ""}`} style={{display: show ? 'flex' : 'none'}}>
                    <p className="field-name outline">Correct</p>
                    <p className="field-name outline">Wrong</p>
                    <p className="field-name outline">Partial</p>
                    <p className="field-name outline">Before</p>
                    <p className="field-name outline">After</p>
                    <p className="field-name outline">Inferior</p>
                    <p className="field-name outline">Superior</p>
                </div>
                <div ref={rowRef} className={`row ${hasScroll ? "has-scroll" : ""}`} style={{display: show ? 'flex' : 'none'}}>
                    <div className="field match" style={{opacity: '1'}}></div>
                    <div className="field wrong" style={{opacity: '1'}}></div>
                    <div className="field partial" style={{opacity: '1'}}></div>
                    <div className="field after" style={{opacity: '1'}}></div>
                    <div className="field before" style={{opacity: '1'}}></div>
                    <div className="field superior" style={{opacity: '1'}}></div>
                    <div className="field inferior" style={{opacity: '1'}}></div>
                </div>
            </div>
            <button onClick={(e) => setShow(!show)}>{!show ? 'Show' : 'Hide'}</button>
        </div>
    )
}

export default Indicator;