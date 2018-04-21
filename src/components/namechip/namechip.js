import React from 'react';
import Avatar from "./avatar"
import mockAva from "../../assets/logo.svg"

const styles = {
	wrapper : {
		display: "flex", 
		padding: 10, 
		borderBottom: "2px solid rgba(0,0,0,0.2)"
	},
	nameWrapper: {
		flex: "1",
	},
	name: {
		lineHeight: 1,
		margin: 0,
		fontSize: 18,
	},
	status: {
		lineHeight: 1.5,
		fontSize: 14,
		opacity: 0.5,
		margin: 0
	}
}


export default () => {
	return (
		<div style={styles.wrapper}>
			<Avatar img={mockAva}/>
			<div style={styles.nameWrapper}>
				<h2 style={styles.name}>Colabartive Code</h2>
				<p style={styles.status}>a place to share and destroy code</p>
			</div>
		</div>
	)
};
