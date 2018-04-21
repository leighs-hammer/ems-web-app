import React from 'react';

export default (props) => {
	return (<i style={props.style ? props.style : undefined} className="material-icons">{props.name}</i>)
}
