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
      <div className="first-screen w-full h-screen flex flex-col gap-4 justify-center items-center p-8">
        {/* <div className="border border-red-500 w-"></div>
        <span className="font-link text-6xl border border-red-500">
               This is with Font Link. We are linking the fonts from the Google Fonts.
        </span> */}
        {/* <div className="border border-red-500 lg:w-1/2 sm:w-full p-2 sm:p-10"></div> */}

        <div className="flex flex-row">
          <img 
            src="/JFKongphop.jpg" 
            className="w-20 h-20 rounded-full" 
          />
        </div>
        <div 
          className="flex flex-col gap-4 w-1/2 text-center max-sm:w-full max-sm:text-start max-sm:text-3xl"
        >
          <p 
            className="text-5xl max-sm:text-3xl leading-14"
          >
            Enthusiastic about <br/> Blockchain Application, <br/>Full-Stack, and Distance Running
          </p>
          <p className="text-lg opacity-50">
            I’m pursuing studies in Financial Engineering but have a strong interest in Computer Science, particularly in Blockchain technology and Full-Stack development. I’m also passionate about track distance running.
          </p>
          

        </div>


      </div>
      <div className="second-screen">aaa</div>

    </div>


  )
}


    
