import styles from "./TodoListItem.module.css";

type Props = {
  text: string;
  onRemoveTodo: () => void;
};

const TodoListItem: React.FC<Props> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={styles.item}>
      {props.text}
    </li>
  );
};

export default TodoListItem;
