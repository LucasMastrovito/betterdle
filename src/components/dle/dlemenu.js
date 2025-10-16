import React from "react";

function Dlemenu(props) {
    return (
        props.menu ?
            <div className="dlemenu">
                <h1 className="outline">{props.title}</h1>
                {props.buttons.map((btn, i) =>
                    React.cloneElement(btn, {
                        key: i,
                        current: props.current,
                        menu: props.menu
                    })
                )}
            </div>
            :
            <div className={`modemenu`} style={{ display: props.current === 0 ? "none" : "flex" }}>
                <h2 className="outline">{props.current > 0 ? props.buttons[props.current - 1].props.name : ''}</h2>
                <div style={{ display: "flex", gap: "1em" }}>
                    {props.buttons.map((btn, i) =>
                        React.cloneElement(btn, {
                            key: i,
                            current: props.current,
                            menu: props.menu
                        })
                    )}
                </div>
                <h3 className="outline">{props.current > 0 ? props.buttons[props.current - 1].props.desc : ''}</h3>
            </div>
    )
}

export default Dlemenu;