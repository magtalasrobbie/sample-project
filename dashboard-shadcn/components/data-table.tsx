"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "1",
    amount: 5880.15,
    status: "processing",
    email: "vvandenhoff0@tinypic.com",
  },
  {
    id: "2",
    amount: 3290.99,
    status: "success",
    email: "mringwood1@shop-pro.jp",
  },
  {
    id: "3",
    amount: 8293.24,
    status: "failed",
    email: "kguillain2@reuters.com",
  },
  { id: "4", amount: 269.62, status: "processing", email: "tbarzen3@npr.org" },
  {
    id: "5",
    amount: 2414.91,
    status: "processing",
    email: "morrin4@goodreads.com",
  },
  {
    id: "6",
    amount: 7907.93,
    status: "processing",
    email: "twarlow5@dailymail.co.uk",
  },
  {
    id: "7",
    amount: 1694.57,
    status: "failed",
    email: "lceillier6@hubpages.com",
  },
  {
    id: "8",
    amount: 2107.37,
    status: "success",
    email: "bgouly7@hatena.ne.jp",
  },
  {
    id: "9",
    amount: 4911.75,
    status: "failed",
    email: "kbaniard8@vinaora.com",
  },
  { id: "10", amount: 9015.2, status: "failed", email: "rpevie9@nba.com" },
  {
    id: "11",
    amount: 6507.12,
    status: "failed",
    email: "sbambricka@printfriendly.com",
  },
  {
    id: "12",
    amount: 7087.35,
    status: "success",
    email: "asolomonb@domainmarket.com",
  },
  {
    id: "13",
    amount: 1939.04,
    status: "success",
    email: "elawerencec@comsenz.com",
  },
  {
    id: "14",
    amount: 8976.78,
    status: "processing",
    email: "hmakeyd@mediafire.com",
  },
  {
    id: "15",
    amount: 188.35,
    status: "processing",
    email: "bduetschee@sbwire.com",
  },
  {
    id: "16",
    amount: 2107.51,
    status: "processing",
    email: "mterrellyf@plala.or.jp",
  },
  {
    id: "17",
    amount: 1652.73,
    status: "processing",
    email: "amaddeng@bizjournals.com",
  },
  { id: "18", amount: 2875.04, status: "failed", email: "bhymush@webs.com" },
  { id: "19", amount: 9843.15, status: "failed", email: "araffi@bandcamp.com" },
  {
    id: "20",
    amount: 8489.3,
    status: "success",
    email: "bdytej@howstuffworks.com",
  },
  {
    id: "21",
    amount: 954.06,
    status: "processing",
    email: "hpotburyk@exblog.jp",
  },
  {
    id: "22",
    amount: 1318.32,
    status: "success",
    email: "ypavlatal@patch.com",
  },
  {
    id: "23",
    amount: 9242.89,
    status: "success",
    email: "ldasentm@geocities.com",
  },
  { id: "24", amount: 2429.02, status: "success", email: "chealingn@cnbc.com" },
  {
    id: "25",
    amount: 8579.03,
    status: "success",
    email: "dascougho@dailymail.co.uk",
  },
  { id: "26", amount: 9914.47, status: "success", email: "htassakerp@nps.gov" },
  {
    id: "27",
    amount: 6574.46,
    status: "success",
    email: "gblesliq@chicagotribune.com",
  },
  {
    id: "28",
    amount: 7631.0,
    status: "success",
    email: "rcoolsonr@shinystat.com",
  },
  {
    id: "29",
    amount: 7024.28,
    status: "success",
    email: "lcrudgintons@storify.com",
  },
  { id: "30", amount: 2655.74, status: "success", email: "hjirekt@adobe.com" },
  {
    id: "31",
    amount: 9817.93,
    status: "processing",
    email: "gsullandu@dyndns.org",
  },
  {
    id: "32",
    amount: 9601.46,
    status: "failed",
    email: "lbisattv@comsenz.com",
  },
  { id: "33", amount: 518.94, status: "success", email: "bcolloughw@etsy.com" },
  { id: "34", amount: 9758.25, status: "failed", email: "gyvenx@weather.com" },
  {
    id: "35",
    amount: 5436.38,
    status: "processing",
    email: "bswalesy@mozilla.org",
  },
  { id: "36", amount: 7821.49, status: "failed", email: "bwilnez@diigo.com" },
  {
    id: "37",
    amount: 9661.34,
    status: "processing",
    email: "hwhittingham10@newyorker.com",
  },
  {
    id: "38",
    amount: 6458.27,
    status: "success",
    email: "sclappson11@diigo.com",
  },
  {
    id: "39",
    amount: 3677.02,
    status: "processing",
    email: "aswett12@bbc.co.uk",
  },
  {
    id: "40",
    amount: 9886.67,
    status: "success",
    email: "fquainton13@newyorker.com",
  },
  {
    id: "41",
    amount: 1421.33,
    status: "processing",
    email: "sgrunson14@lycos.com",
  },
  { id: "42", amount: 9002.91, status: "failed", email: "nrilton15@ftc.gov" },
  {
    id: "43",
    amount: 211.01,
    status: "failed",
    email: "mastridge16@github.io",
  },
  {
    id: "44",
    amount: 4484.51,
    status: "success",
    email: "achallens17@mozilla.org",
  },
  {
    id: "45",
    amount: 5687.97,
    status: "processing",
    email: "blenney18@weather.com",
  },
  {
    id: "46",
    amount: 7392.93,
    status: "failed",
    email: "tlarvent19@zimbio.com",
  },
  {
    id: "47",
    amount: 9935.91,
    status: "processing",
    email: "jmartinson1a@eepurl.com",
  },
  {
    id: "48",
    amount: 9743.46,
    status: "success",
    email: "xharrington1b@marketwatch.com",
  },
  {
    id: "49",
    amount: 347.28,
    status: "processing",
    email: "bguitt1c@wunderground.com",
  },
  {
    id: "50",
    amount: 143.84,
    status: "failed",
    email: "sglison1d@symantec.com",
  },
  {
    id: "51",
    amount: 7978.55,
    status: "success",
    email: "ajanney1e@opensource.org",
  },
  {
    id: "52",
    amount: 9732.13,
    status: "failed",
    email: "fblitzer1f@archive.org",
  },
  {
    id: "53",
    amount: 8108.1,
    status: "failed",
    email: "cantczak1g@posterous.com",
  },
  {
    id: "54",
    amount: 7296.67,
    status: "failed",
    email: "fsterndale1h@photobucket.com",
  },
  {
    id: "55",
    amount: 977.99,
    status: "success",
    email: "lbateson1i@chron.com",
  },
  {
    id: "56",
    amount: 7347.19,
    status: "success",
    email: "sbonafant1j@usatoday.com",
  },
  {
    id: "57",
    amount: 3108.16,
    status: "success",
    email: "abonick1k@seesaa.net",
  },
  {
    id: "58",
    amount: 815.6,
    status: "failed",
    email: "sfernely1l@yahoo.co.jp",
  },
  {
    id: "59",
    amount: 6270.41,
    status: "success",
    email: "tyurmanovev1m@vistaprint.com",
  },
  {
    id: "60",
    amount: 5420.32,
    status: "processing",
    email: "glodovichi1n@answers.com",
  },
  {
    id: "61",
    amount: 1808.61,
    status: "processing",
    email: "adibdale1o@goodreads.com",
  },
  {
    id: "62",
    amount: 4119.57,
    status: "success",
    email: "ehouseago1p@shutterfly.com",
  },
  { id: "63", amount: 7526.63, status: "failed", email: "melcomb1q@bing.com" },
  { id: "64", amount: 9217.65, status: "processing", email: "jcast1r@cdc.gov" },
  {
    id: "65",
    amount: 7827.4,
    status: "processing",
    email: "iwitter1s@wikimedia.org",
  },
  {
    id: "66",
    amount: 9900.52,
    status: "processing",
    email: "dbarus1t@mail.ru",
  },
  {
    id: "67",
    amount: 8291.87,
    status: "success",
    email: "schanders1u@dailymail.co.uk",
  },
  {
    id: "68",
    amount: 6661.82,
    status: "processing",
    email: "abuncher1v@e-recht24.de",
  },
  {
    id: "69",
    amount: 6466.25,
    status: "processing",
    email: "hconroy1w@e-recht24.de",
  },
  { id: "70", amount: 6066.75, status: "failed", email: "hstamper1x@cnet.com" },
  {
    id: "71",
    amount: 7385.47,
    status: "success",
    email: "tclitherow1y@yolasite.com",
  },
  { id: "72", amount: 9230.91, status: "failed", email: "ogoodered1z@360.cn" },
  {
    id: "73",
    amount: 1083.3,
    status: "processing",
    email: "kbockh20@hostgator.com",
  },
  {
    id: "74",
    amount: 3003.56,
    status: "processing",
    email: "rdepport21@ask.com",
  },
  { id: "75", amount: 3269.04, status: "failed", email: "vcookney22@wsj.com" },
  {
    id: "76",
    amount: 8050.8,
    status: "failed",
    email: "dbullivent23@chron.com",
  },
  {
    id: "77",
    amount: 1054.88,
    status: "success",
    email: "dambrogio24@elegantthemes.com",
  },
  { id: "78", amount: 6281.04, status: "failed", email: "flegon25@state.gov" },
  {
    id: "79",
    amount: 1020.24,
    status: "processing",
    email: "cskitch26@devhub.com",
  },
  {
    id: "80",
    amount: 2828.27,
    status: "failed",
    email: "lstreatfeild27@cyberchimps.com",
  },
  {
    id: "81",
    amount: 6072.8,
    status: "failed",
    email: "adeamaya28@goodreads.com",
  },
  {
    id: "82",
    amount: 116.65,
    status: "processing",
    email: "bplait29@ocn.ne.jp",
  },
  { id: "83", amount: 7791.07, status: "failed", email: "ovanyushin2a@goo.gl" },
  {
    id: "84",
    amount: 8076.82,
    status: "processing",
    email: "dtoffanelli2b@people.com.cn",
  },
  {
    id: "85",
    amount: 7844.49,
    status: "failed",
    email: "sallabush2c@seesaa.net",
  },
  {
    id: "86",
    amount: 8800.69,
    status: "failed",
    email: "mvanichkin2d@paypal.com",
  },
  {
    id: "87",
    amount: 2492.25,
    status: "processing",
    email: "tnaldrett2e@sakura.ne.jp",
  },
  {
    id: "88",
    amount: 2994.31,
    status: "failed",
    email: "mkalinsky2f@trellian.com",
  },
  { id: "89", amount: 7823.1, status: "failed", email: "bgerrietz2g@ox.ac.uk" },
  {
    id: "90",
    amount: 7315.13,
    status: "processing",
    email: "jsparham2h@ca.gov",
  },
  {
    id: "91",
    amount: 8227.31,
    status: "processing",
    email: "eniblock2i@redcross.org",
  },
  { id: "92", amount: 8692.31, status: "failed", email: "bgiffen2j@cisco.com" },
  {
    id: "93",
    amount: 1963.28,
    status: "success",
    email: "egauvain2k@geocities.jp",
  },
  {
    id: "94",
    amount: 7318.7,
    status: "success",
    email: "bbartholat2l@patch.com",
  },
  { id: "95", amount: 7290.38, status: "failed", email: "dbruck2m@fc2.com" },
  {
    id: "96",
    amount: 1097.18,
    status: "success",
    email: "ckohring2n@ycombinator.com",
  },
  {
    id: "97",
    amount: 3506.42,
    status: "processing",
    email: "dmerryman2o@sfgate.com",
  },
  { id: "98", amount: 2696.3, status: "success", email: "rferreo2p@ucsd.edu" },
  {
    id: "99",
    amount: 9331.93,
    status: "failed",
    email: "ngarmans2q@pcworld.com",
  },
  {
    id: "100",
    amount: 3360.48,
    status: "failed",
    email: "rsinkinson2r@paginegialle.it",
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
