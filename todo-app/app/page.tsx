"use client";
import * as React from "react";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  //state

  const [filter, setFilter] = useState("all");

  const [list, setList] = useState([
    { title: "Eat", completed: false },
    { title: "Clean", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  //derived values

  const uncompletedItems = list.filter((item) => !item.completed);
  const completedItems = list.filter((item) => item.completed);

  //functions

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const submit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setList((l) => [...l, { title: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const checkboxChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setList((prevList) =>
        prevList.map((list, i) =>
          i === index
            ? {
                ...list,
                completed: event.target.checked,
              }
            : list
        )
      );
    };

  const onDelete = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const clearCompleted = () => {
    setList(uncompletedItems);
  };

  const listComponent = () => {
    const showList =
      filter === "active"
        ? uncompletedItems
        : filter === "completed"
        ? completedItems
        : list;

    return showList.map((todo, index) => (
      <div
        key={index}
        className="group items-center justify-between border-b-[1px] h-16 flex gap-3 p-5"
      >
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={checkboxChange(index)}
          ></input>
          <p className="text-sm">{todo.title}</p>
        </div>
        <button
          className="hidden group-hover:inline"
          onClick={() => onDelete(index)}
        >
          X
        </button>
      </div>
    ));
  };

  return (
    <main>
      <div className="components flex flex-col gap-3 items-center  h-screen">
        <div className="flex items-center">
          <h1 className="text-4xl align font-bold tracking-[0.8rem] py-10">
            TODO
          </h1>
        </div>
        <div className="h-16 flex gap-3 p-5 shadow-md rounded-lg">
          <input type="checkbox" disabled></input>
          <input
            className="text-sm"
            placeholder="Create a new Todo.."
            type="text"
            value={newTodo}
            onChange={change}
            onKeyDown={submit}
          />
        </div>
        <div className="flex flex-col min-w-9xl shadow-md rounded-lg">
          {listComponent ? listComponent() : null}
          <div className="flex gap-20 p-5 text-gray-400 min-h-md shadow-md rounded-lg">
            <p>
              {uncompletedItems.length}{" "}
              {uncompletedItems.length === 1 ? "item" : "items"} left
            </p>
            <div className="flex gap-2">
              <a
                className={clsx("hover:cursor-pointer font-bold", {
                  "text-sky-700": filter === "all",
                })}
                onClick={() => setFilter("all")}
              >
                All
              </a>
              <a
                className={clsx("hover:cursor-pointer font-bold", {
                  "text-sky-700": filter === "active",
                })}
                onClick={() => setFilter("active")}
              >
                Active
              </a>
              <a
                className={clsx("hover:cursor-pointer font-bold", {
                  "text-sky-700": filter === "completed",
                })}
                onClick={() => setFilter("completed")}
              >
                Completed
              </a>
            </div>
            <a
              className="hover:cursor-pointer hover:text-gray-600"
              onClick={clearCompleted}
            >
              Clear Completed
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
