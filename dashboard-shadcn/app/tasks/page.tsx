import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { taskSchema } from "./data/schema";
import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Search, Sun } from "lucide-react";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/tasks/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <header className="flex h-16 items-center gap-3 px-4">
        <SidebarTrigger className="mr-2 shadow-sm border-[1px]" />
        <Separator orientation="vertical" className="h-6" />
        <Button
          variant="ghost"
          className="border h-8 bg-gray-50 border-slate-200 text-slate-500 font-normal px-1 text-left hover:text-black hover:bg-white"
        >
          <Search className="ml-1" />
          <p className="w-[11rem]">Search</p>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <div className="flex items-center ml-auto">
          <Button size="icon" variant="ghost" className="rounded-full">
            <Sun />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full">
            <Avatar>
              <AvatarFallback className="h-3 w-3">CN</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </header>
      <div className="h-full w-full flex-wrap justify-between items-center p-4 flex">
        <div className="flex w-full items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Tasks</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              Import <Download />
            </Button>
            <Button>
              Create <Plus />
            </Button>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
