import React from "react"
function Panel(props) {
return (
    <div className={'Panel Panel-' + props.color}>
        props.children
    </div>
);
}
