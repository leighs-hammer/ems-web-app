import React from "react"
import "./switch.css"
import Icon from "../icon"
import colors from "../../styles/colors"

const Switch = (props) => {

  const {options, value, changeValue, vertical, } = props
  if (!options || !value ) return null

  const getStyle = (value, optValue) => {
    const styles = {
      active: {
        backgroundColor: colors.base,
        color: colors.light,
        borderColor: colors.base,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      },
      inactive: {
        backgroundColor: colors.greyLight,
        color: colors.base,
        borderColor: colors.greyLight,
        borderBottomColor: colors.blueGrey,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      },
    }
    if (value === optValue) {
      return styles.active
    } else {
      return styles.inactive
    }
  }

  return (
    <div id="switch" className={vertical ? "vertical-switch" : null}>
      <ul>
        {options.map((opt, index) => {
          return(
            <li 
              key={index} 
              style={getStyle(value, opt.value)} 
              onClick={() => changeValue(opt.value)}
            >
              <Icon name={opt.name} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Switch