import { FilterType } from "../data/todos";

const filterList = [
  { type: "all", label: "전체" },
  { type: "active", label: "진행중" },
  { type: "completed", label: "완료" },
] as const;

type Props = {
  filter: FilterType;
  changeFilter: (filter: FilterType) => void;
};

export const TodoFilter = ({ filter, changeFilter }: Props) => {
  return (
    <div className="filter-container">
      {filterList.map(({ type, label }) => (
        <button
          key={type}
          onClick={() => changeFilter(type)}
          className={filter === type ? "active" : ""}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
