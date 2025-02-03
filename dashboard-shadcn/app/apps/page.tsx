import { Button } from "@/components/ui/button";
import { TbBrandDiscord } from "react-icons/tb";

import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Settings2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Sun, Search, ChevronDown } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <>
      <header className="flex h-16 w-full shrink-0 items-center gap-2 px-4">
        <SidebarTrigger className="mr-2 shadow-sm border-[1px]" />
        <Separator orientation="vertical" className="h-6" />
        <div className="flex ml-2 items-center gap-3">
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
        </div>
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
      <main className="p-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">App Integration</h1>
              <p className="text-muted-foreground">
                Here&apos;s a list of your apps for the integration!
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Input placeholder="Filter apps..." className="max-w-64" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    All Apps
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuCheckboxItem checked={true}>
                    All Apps
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Connected</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Not Connected
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  <Settings2 />
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuCheckboxItem checked={true}>
                  All Apps
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Connected</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Not Connected
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Separator className="my-3" />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-2">
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-8 text-sm">
              <div className="flex items-center justify-between">
                <div className="bg-slate-100 flex justify-center items-center size-10 rounded-lg">
                  <TbBrandDiscord className="size-6 " />
                </div>
                <Button variant="outline" className="p-3">
                  <p className="text-xs">Connect</p>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>Discord</CardTitle>
              <p className="mt-2 text-mg text-gray-500">
                Connect with Discord for seamless team communication.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
