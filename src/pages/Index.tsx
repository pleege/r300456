import { StockReportPage } from '@/components/report/StockReportPage';
import { saiweiReport } from '@/data/saiwei-report';

const Index = () => {
  return <StockReportPage report={saiweiReport} />;
};

export default Index;
