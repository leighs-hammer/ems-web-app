import React from 'react';
import colors from '../../styles/colors';

export default (props) => {
	const {img} = props

	const style = {
		flex: "1",
		width: 40,
		height: 40,
		maxWidth: 40,
		marginRight: 20,
		borderRadius: "50%",
		backgroundImage: `url(${img})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	}
	return (<div style={style}></div>)
}