import React from "react"
import colors from "../styles/colors"
import NameChip from "../components/namechip/namechip"
import MessageBar from "../components/messagebar"
import TitleBar from "../components/titlebar"
import "./stage.css"

const styles = {
  wrapper: {
    display: "flex",
    color: colors.base,
  },
  sidebar: {
    flex: "1",
    width: "33%",
    maxWidth: 320,
    height: "100vh",
    backgroundColor: colors.base,
    color: "#fff",
  },
  main: {
    flex: "1",
    width: "66%",
    height: "100vh",
    position: "relative",
    paddingBottom: 90,
    // padding: 10,
    // paddingLeft: 20,
    // paddingRight: 20
  },
}

export default () => {
  return (
    <div id="stage" style={styles.wrapper}>
      <div id="sidebar" style={styles.sidebar}>

        <NameChip />
      </div>
      <div id="main" style={styles.main}>
        <TitleBar />
        <MessageBar/>
      </div>
    </div>
  )
}
