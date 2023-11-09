import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

// Define the data type
interface DataPoint {
  date: Date;
  value: number;
}

interface LineGraphProps {
  data: DataPoint[];
  width?: number;
  height?: number;
}

const LineGraph: React.FC<LineGraphProps> = ({ data, width = 600, height = 400 }) => {
  const d3Container = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);
  
      // Clear any previous SVG content
      svg.selectAll("*").remove();
  
      const margin = { top: 20, right: 30, bottom: 30, left: 50 };
      const graphWidth = width - margin.left - margin.right;
      const graphHeight = height - margin.top - margin.bottom;
  
      // Define the scales without the .nice() function
      const xScale = d3.scaleTime()
        .domain(d3.extent(data, d => d.date) as [Date, Date])
        .range([0, graphWidth]);
  
      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value) as number])
        .range([graphHeight, 0]);
  
      // Define the line generator
      const lineGenerator = d3.line<DataPoint>()
        .x(d => xScale(d.date))
        .y(d => yScale(d.value))
        .curve(d3.curveMonotoneX);
  
      const graph = svg.append('g')
                       .attr('transform', `translate(${margin.left},${margin.top})`);
  
      // Append the path for the line
      graph.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#4CAF50')
        .attr('stroke-width', 4)
        .attr('d', lineGenerator);
  
      // Add the X axis with specified tick values if necessary
// Add the X axis with specified tick values if necessary
const xAxis = d3.axisBottom(xScale).tickSize(0)
  // Specify the ticks you want to show
  .tickValues(data.map(d => d.date))
  // Correctly type the tickFormat function
  .tickFormat((domainValue: Date | d3.NumberValue) => {
    // Ensure the value is a Date before formatting
    if (domainValue instanceof Date) {
      return d3.timeFormat("%b %d")(domainValue);
    }
    return "";
  });

graph.append('g')
  .attr('transform', `translate(0,${graphHeight})`)
  .call(xAxis);

// Remove the domain if necessary
graph.select(".domain").remove(); 

    }
  }, [data, height, width]);
  
  

  return (
    <svg
      className="d3-component"
      width={width}
      height={height}
      ref={d3Container}
    />
  );
};

export default LineGraph;
