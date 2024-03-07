/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { DoughnutChart, PieChart } from "../../../components/admin/Charts";
import { Skeleton } from "../../../components/loader";
import { usePieQuery } from "../../../redux/api/dashboardAPI";
import { RootState } from "../../../redux/store";

const PieCharts = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const { isLoading, data, isError } = usePieQuery(user?._id!);
  if (isError) return <Navigate to={"/admin/dashboard"} />;
  if (isLoading) {
    return <Skeleton length={20} />;
  }

  // if (isError || !data) {
  //   const err = error as CustomError;
  //   toast.error(err?.data?.message || "Error fetching data");
  //   return null;
  // }

  const charts = data?.charts;

  const order = charts?.orderFulfilment;

  const categories = charts?.productCategories;
  const stock = charts?.stockAvailability;
  const revenue = charts?.revenueDistribution;
  const ageGroup = charts?.usersAgeGroup;
  const adminCustomer = charts?.adminCustomer;
  if (isError) return <Navigate to={"/admin/dashboard"} />;
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>
        {isLoading ? (
          <Skeleton length={20} />
        ) : (
          <>
            {" "}
            <section>
              <div>
                <PieChart
                  labels={["Processing", "Shipped", "Delivered"]}
                  data={[order.processing, order.shipped, order.shipped]}
                  backgroundColor={[
                    `hsl(110,80%, 80%)`,
                    `hsl(110,80%, 50%)`,
                    `hsl(110,40%, 50%)`,
                  ]}
                  offset={[0, 0, 50]}
                />
              </div>
              <h2>Order Fulfillment Ratio</h2>
            </section>
            <section>
              <div>
                <DoughnutChart
                  labels={categories?.map((i) => Object.keys(i)[0])}
                  data={categories?.map((i) => Object.values(i)[0])}
                  backgroundColor={categories.map(
                    (i) =>
                      `hsl(${Object.values(i)[0] * 94 * Math.random()}, ${
                        Object.values(i)[0]
                      }%, 50%)`
                  )}
                  legends={false}
                  offset={[0, 0, 0, 80]}
                />
              </div>
              <h2>Product Categories Ratio</h2>
            </section>
            <section>
              <div>
                <DoughnutChart
                  labels={["In Stock", "Out Of Stock"]}
                  data={[stock?.inStock, stock?.outOfStock]}
                  backgroundColor={["hsl(269,80%,40%)", "rgb(53, 162, 255)"]}
                  legends={false}
                  offset={[0, 80]}
                  cutout={"70%"}
                />
              </div>
              <h2> Stock Availability</h2>
            </section>
            <section>
              <div>
                <DoughnutChart
                  labels={[
                    "Marketing Cost",
                    "Discount",
                    "Burnt",
                    "Production Cost",
                    "Net Margin",
                  ]}
                  data={[
                    revenue.marketingCost,
                    revenue.discount,
                    revenue.burnt,
                    revenue.productionCost,
                    revenue.netMargin,
                  ]}
                  backgroundColor={[
                    "hsl(110,80%,40%)",
                    "hsl(19,80%,40%)",
                    "hsl(69,80%,40%)",
                    "hsl(300,80%,40%)",
                    "rgb(53, 162, 255)",
                  ]}
                  legends={false}
                  offset={[20, 30, 20, 30, 80]}
                />
              </div>
              <h2>Revenue Distribution</h2>
            </section>
            <section>
              <div>
                <PieChart
                  labels={[
                    "Teenager(Below 20)",
                    "Adult (20-40)",
                    "Older (above 40)",
                  ]}
                  data={[ageGroup.teen, ageGroup.adult, ageGroup.old]}
                  backgroundColor={[
                    `hsl(10, ${80}%, 80%)`,
                    `hsl(10, ${80}%, 50%)`,
                    `hsl(10, ${40}%, 50%)`,
                  ]}
                  offset={[0, 0, 50]}
                />
              </div>
              <h2>Users Age Group</h2>
            </section>
            <section>
              <div>
                <DoughnutChart
                  labels={["Admin", "Customers"]}
                  data={[adminCustomer?.admin, adminCustomer?.customer]}
                  backgroundColor={[`hsl(335, 100%, 38%)`, "hsl(44, 98%, 50%)"]}
                  offset={[0, 50]}
                />
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default PieCharts;
