import { useEffect, useState } from "react"


export default function useTypeWriter(text, cursor = "|", cursorInterval = 400, charInterval = 100, lineInterval= 400, delay = 0) {
  const [cursorIsOn, setCursorIsOn] = useState(true)
  const [currentText, setCurrentText] = useState("")

  useEffect(() => {
    if (cursorInterval !== 0) {
      window.setTimeout(setCursorIsOn, cursorInterval, !cursorIsOn)   
    }
  }, [cursorInterval, cursorIsOn, setCursorIsOn])

  useEffect(() => {
    let time = delay

    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) === "\n") {
        time += lineInterval
      }
      else {
        time += charInterval
      }
      window.setTimeout(setCurrentText, time, text.slice(0, i + 1))
    }
  }, [charInterval, setCurrentText, delay, lineInterval, text])

  return currentText + (cursorIsOn ? cursor : " ")
}