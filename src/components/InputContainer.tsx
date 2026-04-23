import { ReactElement } from "react";

type Props = {
  text: string;
  onChange: (v: string) => void;
  handleSubmit: () => void;
  rightSlot?: ReactElement;
};

export const InputContainer = ({
  text,
  onChange,
  handleSubmit,
  rightSlot,
}: Props) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        autoFocus
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        placeholder="할 일을 입력하세요"
        className="todo-input"
      />
      {rightSlot}
    </div>
  );
};
