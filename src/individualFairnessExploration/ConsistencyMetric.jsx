
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

import { PieChart } from "@mui/x-charts/PieChart";
import consistencyNbrs from "../data/consistencyRealNeighbours.json";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

const data = [
  {
    value: 0.9,
    label: "Consistency with Neighbours",
    p: "90%",
    color: "#81C784",
  }, // 可以随意扩展data的属性, color直接对应成颜色
  //{ value: 0, label: 'Predictions Changed', p: "0%", color: '#e57373' },
];

const size = {
  width: 800,
  height: 250,
};

export default function ConsistencyMetric() {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="800px"
      flexDirection="column"
      padding="3px"
    >
      {/* 1 title */}
      <Typography
        variant="body2"
        component="div"
        gutterBottom
        color="primary"
        sx={{ fontWeight: "bold", textAlign: "left" }}
      >
        Overall Consistency Result
      </Typography>

      {/* 2  chart*/}
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.p}`, //`${item.label} (${item.value})`
            arcLabelMinAngle: 60,
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30 },
            innerRadius: 0,
            outerRadius: 107,
            paddingAngle: 5,
            cornerRadius: 0,
            startAngle: -5,
            endAngle: 326.2, // (5+326.2) = 360 * 92%
            cx: 170, // piechart 在x轴方向的位置
          },
        ]}
        sx={{
          "--ChartsLegend-rootOffsetX": "-350px", //legend的位置
          "--ChartsLegend-rootOffsetY": "0px", //legend的位置
        }}
        {...size}
      />

      {/* 3  text explanation*/}
      <Paper
        elevation={3}
        sx={{
          width: "85%",
          backgroundColor: "#f5f5f5",
          padding: "10px",
          margin: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            margin: "12px",
            color: "black",
            width: "95%",
            fontWeight: "bold",
          }}
        >
          For the 200 individuals in our credit prediction context, the overall
          consistency result is <span style={{ color: "#1976D2" }}> 90%</span>.
        </Typography>
      </Paper>

      {/* 3 title */}
      <Typography
        variant="body2"
        component="div"
        gutterBottom
        color="primary"
        sx={{ fontWeight: "bold", textAlign: "left" }}
      >
        Consistency Result for Each Individual
      </Typography>

      {/* 4 consistency chart */}
      <Box padding="20px">
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ margin: "2px", color: "black", width: "95%" }}
        >
          Each circle represents an individual, with green indicating a
          prediction of Good credit and red indicating a prediction of Bad
          credit. The corresponding data represents the consistency value for
          that individual. <br /> <br />
          Clicking on each circle allows you to view the five nearest neighbors
          for that individual and their respective predictions & consistency
          values.
        </Typography>
        <ConsistencyScatterPlot consistencyNbrs={consistencyNbrs} />
      </Box>
    </Box>
  );
}

// //hover version
// function ConsistencyScatterPlot(props) {
//   const ref = useRef();

//   useEffect(() => {
//       // 获取数据
//       const consistencyNbrs = props.consistencyNbrs;

//       const svg = d3.select(ref.current);
//       const width = 600 - 60;  // 减去左右的padding
//       const height = 1600 - 60; // 减去上下的padding
//       const xScale = d3.scaleLinear().domain([1, 0]).range([0, width]);
//       const spacing = 10; // 两点之间的距离

//       const xCounts = {};

//       const yPosition = (xValue) => {
//           if (!(xValue in xCounts)) {
//               xCounts[xValue] = 0;
//           } else {
//               xCounts[xValue] += 1;
//           }
//           return height - (xCounts[xValue] * spacing);
//       };

//       const g = svg.append("g").attr("transform", "translate(30,30)");

//       const circles = g.selectAll("circle")
//                         .data(Object.values(consistencyNbrs))
//                         .join("circle")
//                         .attr("cx", d => xScale(d.consistency_score))
//                         .attr("cy", d => yPosition(d.consistency_score))
//                         .attr("r", 3)
//                         .attr("fill", d => d["Predicted Credit"] === "Good" ? "green" : "red");

//       circles.on("mouseover", (event, d) => {
//               // Enlarge neighbours' radius and add ID label at the center
//               d.neighbours.forEach(neighbourID => {
//                   const neighbour = circles.filter(data => data.ID === neighbourID);
//                   neighbour.attr("r", 20);
//                   g.append("text")
//                    .attr("class", "id-label")
//                    .attr("x", +neighbour.attr("cx"))
//                    .attr("y", +neighbour.attr("cy"))
//                    .attr("text-anchor", "middle")
//                    .attr("dominant-baseline", "central")
//                    .attr("font-size", "12px")
//                    .attr("font-weight", "bold")
//                    .text(neighbourID);
//               });

//               // Display the hovered data point's ID to its right
//               g.append("text")
//                .attr("class", "id-label")
//                .attr("x", +event.currentTarget.getAttribute("cx") + 13)  // 10px to the right and the radius of the circle
//                .attr("y", +event.currentTarget.getAttribute("cy"))
//                .attr("text-anchor", "start")
//                .attr("dominant-baseline", "central")
//                .attr("font-size", "12px")
//                .attr("font-weight", "bold")
//                .text(d.ID);
//           })
//           .on("mouseout", (event, d) => {
//               // Reset neighbours' radius and remove ID label
//               d.neighbours.forEach(neighbourID => {
//                   const neighbour = circles.filter(data => data.ID === neighbourID);
//                   neighbour.attr("r", 3);
//               });
//               g.selectAll(".id-label").remove();
//           });

//       g.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(xScale));

//   }, [props.consistencyNbrs]);

//   return (
//       <svg ref={ref} width="700" height="1700"></svg>
//   );
// }

// //加ID， 高亮的代码,加15秒延迟的代码
// function ConsistencyScatterPlot(props) {
//   const ref = useRef();
//   let timeout;

//   useEffect(() => {
//       // 获取数据
//       const consistencyNbrs = props.consistencyNbrs;

//       const svg = d3.select(ref.current);
//       const width = 600 - 60;
//       const height = 1600 - 60;
//       const xScale = d3.scaleLinear().domain([1, 0]).range([0, width]);
//       const spacing = 10;

//       const xCounts = {};

//       const yPosition = (xValue) => {
//           if (!(xValue in xCounts)) {
//               xCounts[xValue] = 0;
//           } else {
//               xCounts[xValue] += 1;
//           }
//           return height - (xCounts[xValue] * spacing);
//       };

//       const g = svg.append("g").attr("transform", "translate(30,30)");

//       const circles = g.selectAll("circle")
//                         .data(Object.values(consistencyNbrs))
//                         .join("circle")
//                         .attr("cx", d => xScale(d.consistency_score))
//                         .attr("cy", d => yPosition(d.consistency_score))
//                         .attr("r", 3)
//                         .attr("fill", d => d["Predicted Credit"] === "Good" ? "green" : "red");

//       circles.on("mouseover", (event, d) => {
//               if (timeout) {
//                   clearTimeout(timeout);
//                   g.selectAll(".id-label").remove();
//               }
//               // Reset all circles and labels
//               circles.attr("r", 3);
//               g.selectAll(".id-label").remove();

//               d.neighbours.forEach(neighbourID => {
//                 const neighbour = circles.filter(data => data.ID === neighbourID);
//                 neighbour.attr("r", 20);
//                 g.append("text")
//                  .attr("class", "id-label")
//                  .attr("x", +neighbour.attr("cx"))
//                  .attr("y", +neighbour.attr("cy"))
//                  .attr("text-anchor", "middle")
//                  .attr("dominant-baseline", "central")
//                  .attr("font-size", "12px")
//                  .attr("font-weight", "bold")
//                  .text(neighbourID);
//             });

//             // Display the hovered data point's ID to its right
//             g.append("text")
//              .attr("class", "id-label")
//              .attr("x", +event.currentTarget.getAttribute("cx") + 13)  // 10px to the right and the radius of the circle
//              .attr("y", +event.currentTarget.getAttribute("cy"))
//              .attr("text-anchor", "start")
//              .attr("dominant-baseline", "central")
//              .attr("font-size", "12px")
//              .attr("font-weight", "bold")
//              .text(d.ID);
//         })
//           .on("mouseout", (event, d) => {
//               timeout = setTimeout(() => {
//                   // Reset neighbours' radius and remove ID label
//                   d.neighbours.forEach(neighbourID => {
//                       const neighbour = circles.filter(data => data.ID === neighbourID);
//                       neighbour.attr("r", 3);
//                   });
//                   g.selectAll(".id-label").remove();
//               }, 15000);  // 15 seconds
//           });

//       g.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(xScale));

//   }, [props.consistencyNbrs]);

//   return (
//       <svg ref={ref} width="700" height="1700"></svg>
//   );
// }

//加ID， 高亮的代码,加15秒延迟的代码

//click version
function ConsistencyScatterPlot(props) {
  const ref = useRef();
  let timeout;

  useEffect(() => {
    // 获取数据
    const consistencyNbrs = props.consistencyNbrs;

    const svg = d3.select(ref.current).style("padding-top", "20px");
    const width = 600 - 60;
    const height = 1600 - 60;
    const xScale = d3.scaleLinear().domain([1, 0]).range([0, width]);
    const spacing = 10;

    const xCounts = {};

    const yPosition = (xValue) => {
      if (!(xValue in xCounts)) {
        xCounts[xValue] = 0;
      } else {
        xCounts[xValue] += 1;
      }
      return 30 + xCounts[xValue] * spacing;
    };

    const g = svg.append("g").attr("transform", "translate(30,30)");

    const circles = g
      .selectAll("circle")
      .data(Object.values(consistencyNbrs))
      .join("circle")
      .attr("cx", (d) => xScale(d.consistency_score))
      .attr("cy", (d) => yPosition(d.consistency_score))
      .attr("r", 3)
      .attr("fill", (d) =>
        d["Predicted Credit"] === "Good" ? "green" : "red",
      );

    let clicked = null;

    const resetCircles = () => {
      circles
        .attr("r", 3)
        .attr("fill", (d) =>
          d["Predicted Credit"] === "Good" ? "green" : "red",
        );
      g.selectAll(".id-label").remove();
    };

    circles.on("click", (event, d) => {
      if (clicked === d.ID) {
        clicked = null;
        resetCircles();
      } else {
        clicked = d.ID;
        resetCircles();

        // Change the color of the clicked circle to blue
        const clickedCircle = d3
          .select(event.currentTarget)
          .attr("fill", "blue");

        // Move clicked circle to the end of the SVG
        clickedCircle.raise();

        d.neighbours.forEach((neighbourID) => {
          const neighbour = circles.filter((data) => data.ID === neighbourID);
          neighbour.attr("r", 20);

          // Move neighbour circles to the end of the SVG
          neighbour.raise();

          g.append("text")
            .attr("class", "id-label")
            .attr("x", +neighbour.attr("cx"))
            .attr("y", +neighbour.attr("cy"))
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "central")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")
            .text(neighbourID);
        });

        g.append("text")
          .attr("class", "id-label")
          .attr("x", +event.currentTarget.getAttribute("cx") + 13)
          .attr("y", +event.currentTarget.getAttribute("cy"))
          .attr("text-anchor", "start")
          .attr("dominant-baseline", "central")
          .attr("font-size", "12px")
          .attr("font-weight", "bold")
          .attr("fill", "blue")
          .text(d.ID);

        // 添加文本显示所点击的 circle 的 ID 和 Predicted Credit
        g.append("text")
          .attr("class", "id-label")
          .attr("x", 200)
          .attr("y", -20) // 调整垂直位置
          .attr("text-anchor", "middle")
          .attr("font-size", "15px")
          .attr("font-weight", "bold")
          .attr("fill", "#2196F3")
          .text(`ID: ${d.ID}, Predicted Credit: ${d["Predicted Credit"]}`);

        // 添加文本显示所点击的 circle 的 neighbors 和其 neighbors 的 Predicted Credit
        g.append("text")
          .attr("class", "id-label")
          .attr("x", 360)
          .attr("y", 0) // 调整垂直位置
          .attr("text-anchor", "middle")
          .attr("font-size", "15px")
          .attr("font-weight", "bold")
          .attr("fill", "#2196F3")
          .text(
            `Neighbors: ${d.neighbours.join(
              ", ",
            )}, Predicted Credit: ${d.neighbours
              .map((neighborID) => {
                const neighbor = consistencyNbrs[neighborID];
                return neighbor ? neighbor["Predicted Credit"] : "";
              })
              .join(", ")}`,
          );
      }
    });

    // g.append("g").call(d3.axisTop(xScale));
    g.append("g")
      .attr("transform", "translate(0,30)") // This line moves the x-axis to y = 30px
      .call(d3.axisTop(xScale));
  }, [props.consistencyNbrs]);

  return <svg ref={ref} width="700" height="1700"></svg>;
}
