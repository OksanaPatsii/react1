import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import React from "react";
import Button from "../UI/Button";
import styles from './TodosActions.module.css'

function TodosActions({ resetTodos, deleteCompleted, completedTodosExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button
        title="Reset Todos"
        onClick={resetTodos}
      >
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompleted}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
