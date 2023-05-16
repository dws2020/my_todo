"use client";
import { tv } from "tailwind-variants";

const button = tv({
  base: "text-slate-500 rounded-sm border border-slate-500 px-3 mx-3",
});
const input = tv({
  base: "text-slate-500 rounded-sm border border-slate-500",
});

export default function Input(props) {
  return (
    <>
      <input className={input()} type="text" value={props.inputVal} onChange={props.handleInput} />
      <button className={button()} onClick={props.handleAdd}>
        ADD
      </button>
    </>
  );
}
