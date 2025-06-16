"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

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

export const description = "Gráfico de barras com métricas pós-aprimoramento"

const chartData = [
  { metric: "Acurácia", value: 97.67 },
  { metric: "Precisão", value: 97.87 },
  { metric: "Recall", value: 97.67 },
  { metric: "F1-score", value: 97.71 },
]

const chartConfig = {
  value: {
    label: "Valor (%)",
    color: "#3b82f6",
  },
  label: {
    color: "var(--background)",
  },
} satisfies ChartConfig

export function ChartBarLabelCustom() {
  return (
    <Card className="h-full min-h-[300px]">
      <CardHeader>
        <CardTitle>Métricas Pós-Aprimoramento</CardTitle>
        <CardDescription>Resultados em % das métricas avaliadas</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 0, bottom: 40 }}
            barSize={36}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="metric"
              type="category"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis
              type="number"
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              tickMargin={8}
              axisLine={false}
              tickLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent/>}
            />
            <Bar dataKey="value" fill="#2061A4" radius={[4, 4, 0, 0]}>
              <LabelList
                dataKey="value"
                position="top"
                offset={10}
                className="fill-foreground font-semibold"
                formatter={(value) => `${value.toFixed(2)}%`}
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
