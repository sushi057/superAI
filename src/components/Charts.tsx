import ReactECharts from "echarts-for-react";

function Charts() {
  const horizontalBarGraphOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "2%",
      right: "2%",
      top: "-2%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: [
        "Product",
        "Office of CEO",
        "Marketing",
        "Customer Support",
        "Finance",
        "HR",
        "IT",
        "Sales",
        "Operations",
      ],
    },
    series: [
      {
        name: "Blue",
        type: "bar",
        data: [16.6, 12.9, 21.25, 17.5, 15.0, 16.0, 18.0, 20.0, 19.0],
        itemStyle: {
          color: "#4e73df",
        },
        label: {
          show: true,
          position: "outside",
          formatter: "{c}%",
          color: "#4e73df",
        },
        barWidth: 12,
        barCategoryGap: "20%",
      },
      {
        name: "Red",
        type: "bar",
        data: [16.6, 7.5, 10.0, 8.0, 7.5, 8.0, 9.0, 10.0, 9.5],
        itemStyle: {
          color: "#e74a3b",
        },
        label: {
          show: true,
          position: "outside",
          formatter: "{c}%",
          color: "#e74a3b",
        },
        barWidth: 12,
        barGap: "20%",
        barCategoryGap: "20%",
      },
    ],
  };

  return (
    <div className="flex-1">
      <ReactECharts option={horizontalBarGraphOption} />
    </div>
  );
}

export default Charts;
