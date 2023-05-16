"use client";
import { useAdd } from "@/app/hooks/useAdd";
import Input from "@/app/components/Input";
import Todo from "@/app/components/Todo";

export default function Home() {
  const add = useAdd();
  return (
    <>
      <Input {...add} />
      <Todo {...add} />
    </>
  );
}
