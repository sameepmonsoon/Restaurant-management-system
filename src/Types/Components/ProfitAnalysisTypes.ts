export type ProfitAnalysisTypes = {
  cardTitle: String | null;
  icon1?: React.ReactNode | null;
  icon2?: React.ReactNode | null;
  icon3?: React.ReactNode | null;
  icon4?: React.ReactNode | null;
  title1?: String | null;
  title2?: String | null;
  title3?: String | null;
  title4?: String | null;
  amount1?: string | React.ReactNode;
  amount2?: string | React.ReactNode;
  amount3?: string | React.ReactNode;
  amount4?: string | React.ReactNode;
};

export type ProfitAnalysisListTypes = {
  PurchaseOverview: {
    TotalPurchase: number;
    CancelOrder: number;
    Cost: number;
    PreOrder: number;
  };

  SalesOverview: {
    TotalSales: number;
    TotalDue: number;
    Cost: number;
    Amount: number;
    Status: String;
  };
  TotalStock: number;
  LowStock: number;
  ProdyctType: number;
};
