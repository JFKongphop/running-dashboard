import { useEffect, useState } from "react"
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

import REQUEST from "@/lib/fetch";
import { AxiosResponse } from "axios"
import { DateDistance, DateDistanceResponse } from "./types/running-data"

export default function Component() {
  const [dateDistance, setDateDistance] = useState<DateDistance[]>([]);

  useEffect(() => {
    (async () => {
      const { data }: AxiosResponse<DateDistanceResponse> = await REQUEST.get('/month-day-distance?year_month=2568-02');

      setDateDistance(data.dateDistance);



      console.log(data.dateDistance);
    })()
  }, [])

  return (
    <div
      className="h-screen w-screen bg-gradient-to-t from-gray-600 to-gray-900 p-20"
    >
      <Card className=" w-full">
        <CardContent className="px-2 sm:p-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            {
              dateDistance && (
                <BarChart
                  accessibilityLayer
                  data={dateDistance}
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
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        }}
                        contentStyle={{
                          backgroundColor: "rgba(0, 0, 255, 0.2)",
                          borderRadius: "8px",
                          border: "none",
                        }}
                      />
                    }
                  />
                  <Bar dataKey={'distance'} fill={`var(--color-mobile`} />
                </BarChart>
              )
            }
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}


    
