import { FormEvent, useState } from "react";
interface Props {
  onAdd: (type: string) => void;
}

const AddTodo = ({ onAdd }: Props) => {
  const [input, setinput] = useState("");
  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    onAdd(input.trim());
    setinput("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Write down your task...."
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
