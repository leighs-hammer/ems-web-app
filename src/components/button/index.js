import React from "react"
import Icon from "../icon"
import {merge,} from "ramda"



const Button = (props) => {
  const {click, icon, text, bkgColor, textColor, style, stacked,} = props
  
  const styles = {
    container : {
      display: "flex",
      width: "100%,",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 8,
      border: "1px solid",
      borderRadius: 4,
      backgroundColor: bkgColor ? bkgColor : null,
      color: textColor ? textColor : null,
      cursor: "pointer",
      flexDirection: stacked ? "column" : null,
    },
    icon: {
      flex: "1",
      padding: 4,
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      flexDirection: "column",
    },
    text: {
      flex: "1",
      padding: 4,
    },
  }

  return (
    <div onClick={click} style={style? merge(styles.container, style) : styles.container}>
      {icon ? (
        <Icon name={icon} style={styles.icon}/>
      ): null }
      {text ? (
        <span style={styles.text}>{text}</span>
      ): null}
    </div>
  )
}

export default Button
