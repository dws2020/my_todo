import { useCallback, useState } from "react";
class Task {
  constructor(no, taskName) {
    this.no = no;
    this.taskName = taskName;
  }
}

export const useAdd = () => {
  const [increment, setIncrement] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [todo, setTodo] = useState([]);

  const handleInput = useCallback((e) => {
    setInputVal(e.target.value);
  }, []);

  // タスク追加ボタン押下時の処理
  const handleAdd = useCallback(() => {
    if (inputVal === "") return;
    setIncrement((prev) => prev + 1);
    const newTask = new Task(increment, inputVal);
    setTodo((prevTodo) => [...prevTodo, newTask]);
    setInputVal("");
  }, [todo, inputVal]);

  return { handleAdd, todo, inputVal, handleInput };
};
