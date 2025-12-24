import { BusinessModel, RevenueStructure } from '@/types/report';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface BusinessModelCardProps {
  businessModel: BusinessModel;
}

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
];

export function BusinessModelCard({ businessModel }: BusinessModelCardProps) {
  const chartData = businessModel.revenueStructure.map((item) => ({
    name: item.segment,
    value: item.proportion,
    revenue: item.revenue,
  }));

  const chartConfig = {
    value: { label: '占比' },
    ...businessModel.revenueStructure.reduce(
      (acc, item, index) => ({
        ...acc,
        [item.segment]: {
          label: item.segment,
          color: COLORS[index % COLORS.length],
        },
      }),
      {}
    ),
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">业务模式分析</CardTitle>
      </CardHeader>
      <CardContent>
        {/* 商业模式描述 */}
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {businessModel.description}
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* 收入结构表格 */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">收入结构明细</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>业务板块</TableHead>
                  <TableHead className="text-right">收入(亿)</TableHead>
                  <TableHead className="text-right">占比</TableHead>
                  <TableHead className="text-right">毛利率</TableHead>
                  <TableHead className="text-right">同比</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {businessModel.revenueStructure.map((item, index) => (
                  <TableRow key={item.segment}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        {item.segment}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{item.revenue.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{item.proportion.toFixed(1)}%</TableCell>
                    <TableCell className="text-right">{item.grossMargin.toFixed(1)}%</TableCell>
                    <TableCell
                      className={`text-right ${
                        item.yoyGrowth >= 0 ? 'text-chart-1' : 'text-destructive'
                      }`}
                    >
                      {item.yoyGrowth >= 0 ? '+' : ''}
                      {item.yoyGrowth.toFixed(1)}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* 饼图 */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">收入结构占比</h4>
            <ChartContainer config={chartConfig} className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
