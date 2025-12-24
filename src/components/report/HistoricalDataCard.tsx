import { HistoricalData } from '@/types/report';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
  Legend,
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface HistoricalDataCardProps {
  data: HistoricalData[];
}

const chartConfig = {
  revenue: {
    label: '营收(亿)',
    color: 'hsl(var(--chart-1))',
  },
  netProfit: {
    label: '净利润(亿)',
    color: 'hsl(var(--chart-3))',
  },
};

export function HistoricalDataCard({ data }: HistoricalDataCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">历史核心数据</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* 数据表格 */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>年度</TableHead>
                  <TableHead className="text-right">营收(亿)</TableHead>
                  <TableHead className="text-right">YoY</TableHead>
                  <TableHead className="text-right">净利润(亿)</TableHead>
                  <TableHead className="text-right">YoY</TableHead>
                  <TableHead className="text-right">毛利率</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.year}>
                    <TableCell className="font-medium">{item.year}</TableCell>
                    <TableCell className="text-right">{item.revenue.toFixed(2)}</TableCell>
                    <TableCell
                      className={`text-right ${
                        item.revenueYoY >= 0 ? 'text-chart-1' : 'text-destructive'
                      }`}
                    >
                      {item.revenueYoY >= 0 ? '+' : ''}
                      {item.revenueYoY.toFixed(1)}%
                    </TableCell>
                    <TableCell className="text-right">{item.netProfit.toFixed(2)}</TableCell>
                    <TableCell
                      className={`text-right ${
                        item.netProfitYoY >= 0 ? 'text-chart-1' : 'text-destructive'
                      }`}
                    >
                      {item.netProfitYoY >= 0 ? '+' : ''}
                      {item.netProfitYoY.toFixed(1)}%
                    </TableCell>
                    <TableCell className="text-right">{item.grossMargin.toFixed(1)}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* 组合图表 */}
          <div>
            <ChartContainer config={chartConfig} className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="year" className="text-xs" />
                  <YAxis yAxisId="left" className="text-xs" />
                  <YAxis yAxisId="right" orientation="right" className="text-xs" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="revenue"
                    name="营收(亿)"
                    fill="hsl(var(--chart-1))"
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="netProfit"
                    name="净利润(亿)"
                    stroke="hsl(var(--chart-3))"
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--chart-3))' }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
