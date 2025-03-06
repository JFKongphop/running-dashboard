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
    // <div 
    //   className="w-full min-h-screen border p-5 border-white"
    //   // className="min-h-screen w-screen p-10 bg-gradient-to-t from-gray-600 to-gray-900 flex flex-col gap-10 overflow-x-hidden"
    // >
    //   {/* <Test /> */}
    //   <div className="w-4 h-[1000px] bg-red-300">a</div>
      
    // </div>
    <div className="min-h-screen">
      <div className="first-screen h-screen flex justify-center items-center">
        <span className="font-link">
               This is with Font Link. We are linking the fonts from the Google Fonts.
        </span>
      </div>
      <div className="second-screen">aaa</div>

    </div>


  )
}


    
