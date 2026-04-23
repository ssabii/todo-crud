import { useState } from "react";
import { Todo } from "../data/todos";
import { InputContainer } from "./InputContainer";

type Props = {
  setTodos: (value: React.SetStateAction<Todo[]>) => void;
  todoId: string;
};

export const TodoUpdate = ({ todoId, setTodos }: Props) => {
  const [text, setText] = useState("");

  const changeTodoText = () => {
    setTodos((prev) =>
      prev.map((t) => (t.id === todoId ? { ...t, text, isUpdated: false } : t)),
    );
  };

  return (
    <InputContainer
      text={text}
      onChange={setText}
      handleSubmit={changeTodoText}
      rightSlot={
        <button onClick={changeTodoText} className="add-button">
          수정
        </button>
      }
    />
  );
};
