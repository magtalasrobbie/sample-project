"use client";
import * as React from "react";
import { useState } from "react";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";

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
        className="lg:text-base text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800 font-bold  group w-full border-b-[1px] dark:border-gray-600 rounded-t-lg"
      >
        <div className="flex gap-3 p-5 items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={checkboxChange(index)}
          ></input>
          <p className="flex-1 truncate">{todo.title}</p>
          <button
            className="w-5 hidden group-hover:block"
            onClick={() => onDelete(index)}
          >
            X
          </button>
        </div>
      </div>
    ));
  };

  return (
    <main className="text-xs h-screen min-h-max transition ease-in-out bg-gray-300 dark:bg-gray-950">
      <header className="w-full relative bg-slate-400 dark:bg-gray-900 top-0 left-0 h-[200px] px-5">
        <div className="py-10 flex flex-col gap-3 items-center z-10">
          <div className="flex max-w-[550px] w-full items-center justify-between pb-7">
            <h1 className="lg:pt-5 text-2xl lg:text-5xl text-white dark:text-gray-200 font-bold tracking-[0.8rem]">
              TODO
            </h1>
            <ThemeToggle />
          </div>
          <div className="max-w-[550px] w-full bg-white dark:bg-slate-800 h-16 flex gap-3 p-5 shadow-md rounded-md">
            <input type="checkbox" disabled></input>
            <input
              className="lg:text-base w-full dark:text-gray-300 bg-white dark:bg-slate-800"
              placeholder="Create a new Todo.."
              type="text"
              value={newTodo}
              onChange={change}
              onKeyDown={submit}
            />
          </div>
        </div>
      </header>

      <section className="relative -top-2 lg:top-7 px-5">
        <div className="lg:text-sm dark:text-gray-300 bg-white dark:bg-slate-800 max-w-[550px] w-full mx-auto shadow-md rounded-md mb-10">
          {listComponent ? listComponent() : null}
          <div className="flex justify-between gap-20 p-5 text-gray-400 min-h-md">
            <p>
              {uncompletedItems.length}{" "}
              {uncompletedItems.length === 1 ? "item" : "items"} left
            </p>
            <div className="flex gap-2">
              <a
                className={clsx("hover:cursor-pointer font-bold", {
                  "text-sky-600": filter === "all",
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
      </section>
    </main>
  );
}
