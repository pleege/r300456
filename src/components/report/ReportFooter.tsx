import { Card, CardContent } from '@/components/ui/card';
import { FileText, AlertCircle } from 'lucide-react';

interface ReportFooterProps {
  dataSource: string;
  disclaimer: string;
}

export function ReportFooter({ dataSource, disclaimer }: ReportFooterProps) {
  return (
    <footer className="mt-8 border-t border-border pt-6">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">数据来源</p>
              <p className="text-sm text-muted-foreground">{dataSource}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">免责声明</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{disclaimer}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Investment Research Report Template • Generated with Lovable
          </p>
        </div>
      </div>
    </footer>
  );
}
