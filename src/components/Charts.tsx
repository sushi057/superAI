import ReactECharts from "echarts-for-react";

function Charts() {
  const labelRight = {
    position: "right",
  } as const;

  const horizontalBarGraphOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: [
      {
        left: "2%",
        right: "2%",
        top: "-2%",
        bottom: "0%",
        height: "100%",
        width: "50%",
        containLabel: true,
      },
      {
        left: "2%",
        right: "2%",
        top: "-2%",
        bottom: "0%",
        height: "100%",
        width: "50%",
        containLabel: true,
      },
    ],
    xAxis: [
      {
        type: "value",
        gridIndex: 0,
      },
      {
        type: "value",
        position: "top",
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
        gridIndex: 1,
      },
    ],
    yAxis: [
      {
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
        gridIndex: 0,
      },
      {
        type: "category",
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        gridIndex: 1,
      },
    ],
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
      {
        name: "Difference",
        type: "bar",
        stack: "Difference",
        label: {
          show: true,
          formatter: "{c} pp",
        },
        data: [
          { value: 0.1 },
          { value: -2.87, label: labelRight },
          { value: 2.04 },
          { value: -7.9, label: labelRight },
          { value: 3.2 },
          { value: 0.34 },
          { value: 1.08 },
          { value: 11.0 },
          { value: 0.78 },
        ],
        xAxisIndex: 1,
        yAxisIndex: 1,
        barMaxWidth: 40,
      },
    ],
  };

  return (
    <div className="flex-1">
      <ReactECharts
        option={horizontalBarGraphOption}
        style={{ height: "100%" }}
      />
    </div>
  );
}

export default Charts;
