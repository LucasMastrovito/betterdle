import { useState } from "react";

function Indicator() {
    const [show, setShow] = useState(false);
    return (
         <div className="card grid" style={{width: '50%', marginTop: '5vh'}}>
            <h2 className="outline">Indicators</h2>
            <div className="row" style={{display: show ? 'grid' : 'none'}}>
                <p className="field-name outline">Correct</p>
                <p className="field-name outline">Wrong</p>
                <p className="field-name outline">Partial</p>
                <p className="field-name outline">Before</p>
                <p className="field-name outline">After</p>
                <p className="field-name outline">Inferior</p>
                <p className="field-name outline">Superior</p>
            </div>
            <div className="row" style={{display: show ? 'grid' : 'none'}}>
                <div className="field match" style={{opacity: '1'}}></div>
                <div className="field wrong" style={{opacity: '1'}}></div>
                <div className="field partial" style={{opacity: '1'}}></div>
                <div className="field after" style={{opacity: '1'}}></div>
                <div className="field before" style={{opacity: '1'}}></div>
                <div className="field superior" style={{opacity: '1'}}></div>
                <div className="field inferior" style={{opacity: '1'}}></div>
            </div>
            <button onClick={(e) => setShow(!show)}>{!show ? 'Show' : 'Hide'}</button>
        </div>
    )
}

export default Indicator;