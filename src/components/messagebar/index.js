import React from "react"
import colors from "../../styles/colors"
import TextareaAutosize from "react-autosize-textarea"
import Icon from "../icon"
import Switch from "../switch"
import Button from "../button"

const MessageBar =  () => {

  return (
    <div style={{
      width: "100%", 
      minHeight: 90, 
      maxHeight: 300, 
      backgroundColor: colors.greyLighter, 
      position: "absolute", 
      bottom: 0, 
      padding: 20, 
      display: "flex",
      borderTop: `1px solid ${colors.greyLight}`,}}>
      <div style={{flex: "1", maxWidth: 45, marginRight: 20,}}>
        <Switch 
          options={[{name: "keyboard", value: "text",}, {name: "code", value: "code",},{name: "people", value: "pair",},]} 
          value="text" 
          changeValue={(e) => {console.log(e)}}
          vertical={true}
        />
      </div>
      <TextareaAutosize 
        maxRows={10} 
        rows={3} 
        style={{fontSize: 16, resize: "none", padding: 10, outline: "none", width: "100%", color: colors.grey, flex: "1", borderRadius: 4, borderTopRightRadius: 0, borderBottomRightRadius: 0, borderColor: colors.greyLight, borderRightColor: colors.grey,}} 
        placeholder="whats on your mind"
      >
      </TextareaAutosize>

      <div style={{flex: "1", maxWidth: 90,}}>
        <Button 
          bkgColor={colors.grey} 
          textColor={colors.light} 
          text="Send" 
          icon="send" 
          onClick={e => console.log(e)}
          style={{minHeight: "100%", borderTopLeftRadius: 0, borderBottomLeftRadius: 0,border: `1px solid ${colors.grey}`,}}
          stacked={false}
        />     
      </div>
    </div>
  )
}

export default MessageBar