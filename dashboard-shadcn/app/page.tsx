"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

import { DollarSign, CreditCard, Activity, Users } from "lucide-react";

const chartData = [
  { month: "January", bar: 186 },
  { month: "February", bar: 305 },
  { month: "March", bar: 237 },
  { month: "April", bar: 73 },
  { month: "May", bar: 209 },
  { month: "June", bar: 214 },
  { month: "July", bar: 186 },
  { month: "August", bar: 305 },
  { month: "September", bar: 237 },
  { month: "October", bar: 73 },
  { month: "November", bar: 209 },
  { month: "December", bar: 214 },
];

const chartConfig = {
  bar: {
    label: "Bar",
  },
} satisfies ChartConfig;

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl pt-3">Dashboard</h1>
        <Button>Download</Button>
      </div>
      <Tabs defaultValue="overview" className="w-[400px] py-3">
        <TabsList className="bg-slate-100">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 py-2">
        <Card>
          <CardHeader className="pb-2 text-sm">
            <div className="flex items-center justify-between">
              <CardTitle>Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-gray-500" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-2xl">$45,231.89</p>
            <CardDescription>+20.1% from last month</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2 text-sm">
            <div className="flex items-center justify-between">
              <CardTitle>Subscriptions</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-2xl">+2350</p>
            <CardDescription>+180.1% from last month</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2 text-sm">
            <div className="flex items-center justify-between">
              <CardTitle>Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-gray-500" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-2xl">+12,234</p>
            <CardDescription>+19% from last month</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2 text-sm">
            <div className="flex items-center justify-between">
              <CardTitle>Active Now</CardTitle>
              <Activity className="h-4 w-4 text-gray-500" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-2xl">+573</p>
            <CardDescription>+201 since last hour</CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-12 sm:grid-cols-1 gap-4 py-2">
        <div className="lg:col-span-7 col-span-12">
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <ChartContainer
              config={chartConfig}
              className="min-h-[320px] w-full px-4"
            >
              <BarChart accessibilityLayer data={chartData}>
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  dataKey="bar"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <Bar dataKey="bar" radius={4} />
              </BarChart>
            </ChartContainer>
          </Card>
        </div>
        <div className="lg:col-span-5 col-span-12">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10 flex justify-center items-center bg-slate-100 rounded-full">
                  <AvatarFallback className="rounded-full">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Olivia Martin</span>
                  <span className="truncate text-gray-500">
                    olivia.martin@email.com
                  </span>
                </div>
                <div>
                  <span className="font-semibold">+$1,999.00</span>
                </div>
              </div>
            </CardContent>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10 flex justify-center items-center bg-slate-100 rounded-full">
                  <AvatarFallback className="rounded-full">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Olivia Martin</span>
                  <span className="truncate text-gray-500">
                    olivia.martin@email.com
                  </span>
                </div>
                <div>
                  <span className="font-semibold">+$1,999.00</span>
                </div>
              </div>
            </CardContent>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10 flex justify-center items-center bg-slate-100 rounded-full">
                  <AvatarFallback className="rounded-full">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Olivia Martin</span>
                  <span className="truncate text-gray-500">
                    olivia.martin@email.com
                  </span>
                </div>
                <div>
                  <span className="font-semibold">+$1,999.00</span>
                </div>
              </div>
            </CardContent>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10 flex justify-center items-center bg-slate-100 rounded-full">
                  <AvatarFallback className="rounded-full">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Olivia Martin</span>
                  <span className="truncate text-gray-500">
                    olivia.martin@email.com
                  </span>
                </div>
                <div>
                  <span className="font-semibold">+$1,999.00</span>
                </div>
              </div>
            </CardContent>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar className="h-10 w-10 flex justify-center items-center bg-slate-100 rounded-full">
                  <AvatarFallback className="rounded-full">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Olivia Martin</span>
                  <span className="truncate text-gray-500">
                    olivia.martin@email.com
                  </span>
                </div>
                <div>
                  <span className="font-semibold">+$1,999.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
