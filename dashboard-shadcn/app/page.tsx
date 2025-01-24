"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <Button>Download</Button>
      </div>
      <Tabs defaultValue="overview" className="w-[400px] py-3">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 py-2">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <CardDescription>Card Description</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <CardDescription>Card Description</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <CardDescription>Card Description</CardDescription>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <CardDescription>Card Description</CardDescription>
          </CardFooter>
        </Card>
      </div>

      <div className="flex gap-4 py-2">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <ChartContainer
            config={chartConfig}
            className="h-[350px] w-full px-5"
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
        <Card className="max-w-[450px] w-full">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <CardDescription>Card Description</CardDescription>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
