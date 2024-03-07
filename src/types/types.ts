export type User = {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  dob: string;
  _id: string;
};

export type Product = {
  name: string;
  price: number;
  stock: number;
  category: string;
  photo: string;
  _id: string;
};

export type ShippingInfo = {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
};
export type CartItem = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
};
export type OrderItem = Omit<CartItem, "stock"> & { _id: string };

export type Order = {
  orderItems: OrderItem[];
  shippingInfo: ShippingInfo;
  subTotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  status: string;
  user: {
    name: string;
    _id: string;
  };
  _id: string;
};
type CountAndChange = {
  revenue: number;
  product: number;
  user: number;
  order: number;
};
type LatestTransaction = {
  _id: string;
  amount: number;
  discount: number;
  quantity: number;
  status: string;
};
export type Stats = {
  categoryCount: Record<string, number>[];
  changePercent: CountAndChange;
  count: CountAndChange;
  chart: {
    order: number[];
    revenue: number[];
  };
  userRatio: {
    male: number;
    female: number;
  };
  latestTransaction: LatestTransaction;
};
type OrderFulfilment = {
  processing: number;
  shipped: number;
  delivered: number;
};

type RevenueDistribution = {
  netMargin: number;
  discount: number;
  productionCost: number;
  burnt: number;
  marketingCost: number;
};

type UsersAgeGroup = {
  teen: number;
  adult: number;
  old: number;
};

export type Pie = {
  orderFulfilment: OrderFulfilment;
  productCategories: Record<string, number>[];
  stockAvailability: {
    inStock: number;
    outOfStock: number;
  };
  revenueDistribution: RevenueDistribution;
  usersAgeGroup: UsersAgeGroup;
  adminCustomer: {
    admin: number;
    customer: number;
  };
};

export type Bar = {
  user: number[];
  products: number[];
  orders: number[];
};
export type Line = {
  user: number[];
  products: number[];
  discount: number[];
  revenue: number[];
};
// interface Stats {
//   changePercent?: {
//     revenue?: number;
//     user?: number;
//     order?: number;
//     product?: number;
//     // Add other properties as needed
//   };
//   count?: {
//     revenue?: number;
//     user?: number;
//     order?: number;
//     product?: number;
//     // Add other properties as needed
//   };
//   chart?: {
//     revenue?: number[];
//     order?: number[];
//     // Add other properties as needed
//   };
//   categoryCount?: Array<{ [key: string]: number }>;
//   userRatio?: {
//     female?: number;
//     male?: number;
//   };
//   latestTransaction?: DataType[];
//   // Add other properties as needed
// }

// // Assuming DataType is already defined as you mentioned earlier
// interface DataType {
//   _id: string;
//   quantity: number;
//   discount: number;
//   amount: number;
//   status: string;
// }
