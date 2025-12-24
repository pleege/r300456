import { StockReport } from '@/types/report';

export const saiweiReport: StockReport = {
  stockInfo: {
    name: '赛微电子',
    code: '300456',
    exchange: '创业板',
    currentPrice: 21.15,
    priceChange: -0.38,
    priceChangePercent: -1.77,
    marketCap: '153.2亿',
    industry: '半导体/MEMS',
    reportDate: '2024-12-24',
  },

  conclusion: {
    rating: '增持',
    targetPrice: 28.00,
    currentPrice: 21.15,
    upside: 32.4,
    coreLogic: [
      'MEMS代工龙头地位稳固，产能持续扩张',
      '汽车电子、医疗健康等下游需求强劲',
      'GaN业务有望成为第二增长曲线',
      '北京FAB3预计2025年量产，产能翻倍',
    ],
    risks: [
      '半导体行业周期性波动风险',
      '海外收入占比高，汇率波动影响',
      '新产能爬坡不及预期',
      '下游需求不及预期',
    ],
  },

  businessModel: {
    description:
      '公司是全球领先的MEMS晶圆代工企业，专注于为客户提供从设计到量产的全流程MEMS制造服务。核心业务包括MEMS传感器代工（加速度计、陀螺仪、麦克风等）、GaN功率器件及LED芯片业务。公司在瑞典、北京拥有多座8英寸晶圆厂，客户覆盖全球知名Fabless设计公司。',
    revenueStructure: [
      {
        segment: 'MEMS代工',
        revenue: 12.35,
        proportion: 68.5,
        grossMargin: 42.3,
        yoyGrowth: 15.2,
      },
      {
        segment: 'GaN业务',
        revenue: 3.21,
        proportion: 17.8,
        grossMargin: 35.6,
        yoyGrowth: 28.5,
      },
      {
        segment: 'LED芯片',
        revenue: 1.87,
        proportion: 10.4,
        grossMargin: 22.1,
        yoyGrowth: -5.3,
      },
      {
        segment: '其他',
        revenue: 0.60,
        proportion: 3.3,
        grossMargin: 45.0,
        yoyGrowth: 8.7,
      },
    ],
  },

  competitors: [
    {
      name: '赛微电子',
      code: '300456.SZ',
      marketCap: '153亿',
      revenue: '18.0亿',
      netProfit: '2.1亿',
      peRatio: 72.8,
      isCurrentCompany: true,
    },
    {
      name: '士兰微',
      code: '600460.SH',
      marketCap: '285亿',
      revenue: '89.2亿',
      netProfit: '3.8亿',
      peRatio: 75.0,
    },
    {
      name: '华润微',
      code: '688396.SH',
      marketCap: '612亿',
      revenue: '98.5亿',
      netProfit: '8.2亿',
      peRatio: 74.6,
    },
    {
      name: '歌尔股份',
      code: '002241.SZ',
      marketCap: '520亿',
      revenue: '592亿',
      netProfit: '12.5亿',
      peRatio: 41.6,
    },
    {
      name: 'Silex(瑞典)',
      code: '被收购',
      marketCap: '-',
      revenue: '€45M',
      netProfit: '€8M',
      peRatio: 0,
    },
  ],

  historicalData: [
    {
      year: 2019,
      revenue: 7.82,
      revenueYoY: 12.3,
      netProfit: 0.85,
      netProfitYoY: 5.2,
      grossMargin: 35.2,
      netMargin: 10.9,
    },
    {
      year: 2020,
      revenue: 9.21,
      revenueYoY: 17.8,
      netProfit: 1.12,
      netProfitYoY: 31.8,
      grossMargin: 36.8,
      netMargin: 12.2,
    },
    {
      year: 2021,
      revenue: 12.56,
      revenueYoY: 36.4,
      netProfit: 1.65,
      netProfitYoY: 47.3,
      grossMargin: 38.5,
      netMargin: 13.1,
    },
    {
      year: 2022,
      revenue: 15.32,
      revenueYoY: 22.0,
      netProfit: 1.89,
      netProfitYoY: 14.5,
      grossMargin: 39.2,
      netMargin: 12.3,
    },
    {
      year: 2023,
      revenue: 18.03,
      revenueYoY: 17.7,
      netProfit: 2.10,
      netProfitYoY: 11.1,
      grossMargin: 40.1,
      netMargin: 11.6,
    },
  ],

  forecast: [
    {
      year: 2024,
      revenue: 21.5,
      revenueYoY: 19.2,
      netProfit: 2.58,
      netProfitYoY: 22.9,
      eps: 0.36,
      pe: 58.8,
    },
    {
      year: 2025,
      revenue: 26.8,
      revenueYoY: 24.7,
      netProfit: 3.45,
      netProfitYoY: 33.7,
      eps: 0.48,
      pe: 44.1,
    },
    {
      year: 2026,
      revenue: 33.2,
      revenueYoY: 23.9,
      netProfit: 4.52,
      netProfitYoY: 31.0,
      eps: 0.62,
      pe: 34.1,
    },
  ],

  forecastLogic:
    '基于以下假设：1）MEMS代工业务保持15-20%增速，受益于汽车电子和消费电子复苏；2）GaN业务2025年起放量，贡献增量收入；3）北京FAB3产能逐步释放，规模效应提升毛利率；4）费用率稳中有降。',

  forecastWarning:
    '注意：以上预测基于当前市场环境和公司经营情况，实际业绩可能因宏观经济、行业竞争、技术变革等因素与预测存在差异。',

  valuation: {
    comparisons: [
      {
        metric: 'PE-TTM',
        currentValue: 72.8,
        historicalAvg: 65.0,
        industryAvg: 55.0,
        status: 'overvalued',
      },
      {
        metric: 'PE-2024E',
        currentValue: 58.8,
        historicalAvg: 55.0,
        industryAvg: 48.0,
        status: 'fair',
      },
      {
        metric: 'PE-2025E',
        currentValue: 44.1,
        historicalAvg: 50.0,
        industryAvg: 42.0,
        status: 'fair',
      },
      {
        metric: 'PB',
        currentValue: 3.2,
        historicalAvg: 3.5,
        industryAvg: 2.8,
        status: 'fair',
      },
    ],
    peTrend: [
      { date: '2023-01', pe: 85, avgPE: 65 },
      { date: '2023-04', pe: 78, avgPE: 65 },
      { date: '2023-07', pe: 62, avgPE: 65 },
      { date: '2023-10', pe: 58, avgPE: 65 },
      { date: '2024-01', pe: 68, avgPE: 65 },
      { date: '2024-04', pe: 75, avgPE: 65 },
      { date: '2024-07', pe: 70, avgPE: 65 },
      { date: '2024-10', pe: 72, avgPE: 65 },
      { date: '2024-12', pe: 72.8, avgPE: 65 },
    ],
    summary:
      '当前估值处于历史中枢偏上位置，但考虑到公司MEMS龙头地位、GaN业务放量预期以及北京FAB3产能释放，2025年业绩高增长确定性较强，给予2025年55倍PE，对应目标价28元，维持"增持"评级。',
  },

  dataSource: '公司公告、Wind、iFinD、行业调研',
  disclaimer:
    '本报告仅供参考，不构成投资建议。投资者据此操作，风险自担。过往业绩不代表未来表现，市场有风险，投资需谨慎。',
};
