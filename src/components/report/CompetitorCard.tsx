import { Competitor } from '@/types/report';
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
import { AlertCircle } from 'lucide-react';

interface CompetitorCardProps {
  competitors: Competitor[];
}

export function CompetitorCard({ competitors }: CompetitorCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">行业竞争格局</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>公司名称</TableHead>
                <TableHead>股票代码</TableHead>
                <TableHead className="text-right">市值</TableHead>
                <TableHead className="text-right">营收</TableHead>
                <TableHead className="text-right">净利润</TableHead>
                <TableHead className="text-right">PE(TTM)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitors.map((company) => (
                <TableRow
                  key={company.code}
                  className={
                    company.isCurrentCompany
                      ? 'bg-primary/10 border-l-4 border-l-primary'
                      : ''
                  }
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {company.name}
                      {company.isCurrentCompany && (
                        <Badge variant="outline" className="text-xs border-primary text-primary">
                          当前
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{company.code}</TableCell>
                  <TableCell className="text-right">{company.marketCap}</TableCell>
                  <TableCell className="text-right">{company.revenue}</TableCell>
                  <TableCell className="text-right">{company.netProfit}</TableCell>
                  <TableCell className="text-right">
                    {company.peRatio > 0 ? company.peRatio.toFixed(1) : '-'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 p-3 bg-accent/50 rounded-lg flex items-start gap-2">
          <AlertCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">
            公司在MEMS代工领域具有全球领先地位，与国际巨头Silex(已被收购)同属第一梯队。相比国内同业，公司聚焦纯代工模式，毛利率和技术壁垒更高。
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
