import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";
import { DataTableDemo } from "@/components/data-table";

export default function Page() {
  return (
    <main className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">Tasks</h1>
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

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 py-2"></div>
      <DataTableDemo />
    </main>
  );
}
