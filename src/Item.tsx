import React, {FC, useState} from "react"
import "./style.css/item.css"
import {Button} from "@material-ui/core"

type Props = {
  content: string,
  deleteTodo: (id: string) => void,
  id: string
}

const Item: FC<Props> = ({content, deleteTodo, id}) => {
  const [IsDone, setIsDone] = useState(false)

  const handleChange = () => {
  setIsDone(!IsDone)
  }

  const handleDeleteClick = () => {
  deleteTodo(id)
  }

  return (
    <>
    <li style={{listStyle: "none",}}>
      <input type="checkBox" onChange={handleChange} style={{width: "20px", height: "20px"}}/>
      <span style={{textDecoration: IsDone ? "line-through" : "none", color: "white", fontSize: "3rem", padding: "0 0.5rem 0 2rem"}}>{content}</span>
      <Button onClick={handleDeleteClick} variant="contained" style={{color: "white", marginBottom: "12px"}}><span style={{color: "black"}}>削除</span></Button>
    </li>
    </>
  )
}

export default Item