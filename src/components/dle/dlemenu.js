import React from "react";

function Dlemenu(props) {
    return (
        props.menu ?
            <div className="dlemenu">
                 {props.buttons.map((btn, i) =>
                    React.cloneElement(btn, {
                        key: i,
                        menu: props.menu
                    })
                )}
            </div>
        :
            <div className="card modemenu" style={{display: props.current === 0 ? "none" : "flex"}}>
                <h2 className="outline" style={{marginTop: '0'}}>Modes</h2>
                <div style={{display: "flex", gap: "1em"}}>
                    {props.buttons.map((btn, i) =>
                    React.cloneElement(btn, {
                        key: i,
                        menu: props.menu
                    })
                )}
                </div>
            </div>
    )
}

export default Dlemenu;