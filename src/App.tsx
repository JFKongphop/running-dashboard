import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "red",
  },
  mobile: {
    label: "Mobile",
    color: "#bdbfbf",
  },
  
} satisfies ChartConfig

const a = [
  {
  "date": "2568-02-01",
  "distance": 20.081
  },
  {
  "date": "2568-02-02",
  "distance": 7.435
  },
  {
  "date": "2568-02-03",
  "distance": 5.497
  },
  {
  "date": "2568-02-04",
  "distance": 15.302000000000001
  },
  {
  "date": "2568-02-05",
  "distance": 0
  },
  {
  "date": "2568-02-06",
  "distance": 15.091999999999999
  },
  {
  "date": "2568-02-07",
  "distance": 10.477
  },
  {
  "date": "2568-02-08",
  "distance": 20.450999999999986
  },
  {
  "date": "2568-02-09",
  "distance": 18.507
  },
  {
  "date": "2568-02-10",
  "distance": 4.002
  },
  {
  "date": "2568-02-11",
  "distance": 13.578000000000001
  },
  {
  "date": "2568-02-12",
  "distance": 0
  },
  {
  "date": "2568-02-13",
  "distance": 13.044999999999998
  },
  {
  "date": "2568-02-14",
  "distance": 6.606
  },
  {
  "date": "2568-02-15",
  "distance": 21.044999999999995
  },
  {
  "date": "2568-02-16",
  "distance": 9.997
  },
  {
  "date": "2568-02-17",
  "distance": 7.018
  },
  {
  "date": "2568-02-18",
  "distance": 17.166999999999998
  },
  {
  "date": "2568-02-19",
  "distance": 0
  },
  {
  "date": "2568-02-20",
  "distance": 14.124
  },
  {
  "date": "2568-02-21",
  "distance": 6.714
  },
  {
  "date": "2568-02-22",
  "distance": 5.22
  },
  {
  "date": "2568-02-23",
  "distance": 12.011
  },
  {
  "date": "2568-02-24",
  "distance": 8.011
  },
  {
  "date": "2568-02-25",
  "distance": 15.943999999999999
  },
  {
  "date": "2568-02-26",
  "distance": 0
  },
  {
  "date": "2568-02-27",
  "distance": 27.037999999999997
  },
  {
  "date": "2568-02-28",
  "distance": 6.599
  }
  ]

  

export default function Component() {
  return (
<div
  className="h-screen w-screen bg-gradient-to-t from-gray-600 to-gray-900 p-10"
  // style={{
  //   background: "radial-gradient(ellipse at center, rgba(120,119,198,0.3), rgba(255,255,255,0))",
  // }}
>
<Card className=" w-full">
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={a}
            margin={{
              left: 12,
              right: 12,
            }}
            
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={

                <ChartTooltipContent
                  className="w-[150px] hover:bg-red-300"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 255, 0.2)",  // Change hover background color
                    borderRadius: "8px",
                    border: "none",
                  }}
                />
              }
            />
            <Bar dataKey={'distance'} fill={`var(--color-mobile`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>






    </div>
  )
}


    
