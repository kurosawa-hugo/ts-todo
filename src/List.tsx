import React, {FC} from "react"
import Item from "./Item"

type Props = {
  todos: {content: string, id: string}[],
  deleteTodo: (id: string) => void
}

const List: FC<Props> = ({todos, deleteTodo}) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <ul style={{width: "100%", paddingLeft: "34%", marginTop: "30px"}}>
            <Item content={todo.content}
                  deleteTodo={deleteTodo}
                  id={todo.id}/>
          </ul>
        )
      })}
    </>
  )
}

export default List