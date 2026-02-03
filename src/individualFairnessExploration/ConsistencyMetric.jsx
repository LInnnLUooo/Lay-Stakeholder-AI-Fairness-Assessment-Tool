
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
  },
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
      <Typography
        variant="body2"
        component="div"
        gutterBottom
        color="primary"
        sx={{ fontWeight: "bold", textAlign: "left" }}
      >
        Overall Consistency Result
      </Typography>

      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.p}`,
            arcLabelMinAngle: 60,
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30 },
            innerRadius: 0,
            outerRadius: 107,
            paddingAngle: 5,
            cornerRadius: 0,
            startAngle: -5,
            endAngle: 326.2,
            cx: 170,
          },
        ]}
        sx={{
          "--ChartsLegend-rootOffsetX": "-350px",
          "--ChartsLegend-rootOffsetY": "0px",
        }}
        {...size}
      />

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

      <Typography
        variant="body2"
        component="div"
        gutterBottom
        color="primary"
        sx={{ fontWeight: "bold", textAlign: "left" }}
      >
        Consistency Result for Each Individual
      </Typography>

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



























function ConsistencyScatterPlot(props) {
  const ref = useRef();
  let timeout;

  useEffect(() => {
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

        const clickedCircle = d3
          .select(event.currentTarget)
          .attr("fill", "blue");

        clickedCircle.raise();

        d.neighbours.forEach((neighbourID) => {
          const neighbour = circles.filter((data) => data.ID === neighbourID);
          neighbour.attr("r", 20);

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

        g.append("text")
          .attr("class", "id-label")
          .attr("x", 200)
          .attr("y", -20)
          .attr("text-anchor", "middle")
          .attr("font-size", "15px")
          .attr("font-weight", "bold")
          .attr("fill", "#2196F3")
          .text(`ID: ${d.ID}, Predicted Credit: ${d["Predicted Credit"]}`);

        g.append("text")
          .attr("class", "id-label")
          .attr("x", 360)
          .attr("y", 0)
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

    g.append("g")
      .attr("transform", "translate(0,30)")
      .call(d3.axisTop(xScale));
  }, [props.consistencyNbrs]);

  return <svg ref={ref} width="700" height="1700"></svg>;
}
