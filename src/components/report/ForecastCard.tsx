import { ForecastData } from '@/types/report';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Lightbulb } from 'lucide-react';

interface ForecastCardProps {
  data: ForecastData[];
  logic: string;
  warning: string;
}

export function ForecastCard({ data, logic, warning }: ForecastCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg">盈利预测</CardTitle>
          <Badge variant="outline" className="text-xs">
            预测数据
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {/* 预测表格 */}
        <div className="overflow-x-auto mb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>年度</TableHead>
                <TableHead className="text-right">营收(亿)</TableHead>
                <TableHead className="text-right">YoY</TableHead>
                <TableHead className="text-right">净利润(亿)</TableHead>
                <TableHead className="text-right">YoY</TableHead>
                <TableHead className="text-right">EPS(元)</TableHead>
                <TableHead className="text-right">PE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.year}>
                  <TableCell className="font-medium">
                    {item.year}E
                  </TableCell>
                  <TableCell className="text-right">{item.revenue.toFixed(1)}</TableCell>
                  <TableCell className="text-right text-chart-1">
                    +{item.revenueYoY.toFixed(1)}%
                  </TableCell>
                  <TableCell className="text-right">{item.netProfit.toFixed(2)}</TableCell>
                  <TableCell className="text-right text-chart-1">
                    +{item.netProfitYoY.toFixed(1)}%
                  </TableCell>
                  <TableCell className="text-right">{item.eps.toFixed(2)}</TableCell>
                  <TableCell className="text-right font-medium">{item.pe.toFixed(1)}x</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* 预测逻辑 */}
        <div className="p-4 bg-accent/50 rounded-lg mb-4">
          <div className="flex items-start gap-2">
            <Lightbulb className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">预测核心假设</p>
              <p className="text-sm text-muted-foreground">{logic}</p>
            </div>
          </div>
        </div>

        {/* 风险警告 */}
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
            <p className="text-sm text-destructive/90">{warning}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
