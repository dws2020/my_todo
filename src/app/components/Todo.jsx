"use client";
import { useAdd } from "@/app/hooks/useAdd";

export default function Todo({ todo }) {
  return (
    <ul>
      {todo.map((task) => {
        return <li key={task.no}>{task.taskName}</li>;
      })}
    </ul>
  );
}
