import React, {FC, useState} from "react"
import './style.css/form.css'
import {Button} from "@material-ui/core"

type Props = {
  addTodo?:(text: string) => void
}

const Form: FC<Props> = ({addTodo}) => {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(text.trim().length === 0) {
      alert('入力してください')
    } else {
      addTodo?.(text)
      setText("")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)}/>
      <Button type="submit" variant="contained" style={{color: "white",}} ><span className="button-text">追加</span></Button>
    </form>
  )
}

export default Form