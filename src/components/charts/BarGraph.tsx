import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface BarChartProps {
    data: { dateRange: string; value: number }[];
}

const createChart = (
    svg: d3.Selection<SVGSVGElement | null, unknown, null, undefined>,
    data: { dateRange: string; value: number }[]
): void => {
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const width = +svg.attr('width')! - margin.left - margin.right;
    const height = +svg.attr('height')! - margin.top - margin.bottom;

    // Clear any previous content
    svg.selectAll("*").remove();

    // Create scales
    const x = d3.scaleBand()
        .rangeRound([0, width])
        .padding(0.5)
        .domain(data.map(d => d.dateRange));

    const y = d3.scaleLinear()
        .rangeRound([height, 0])
        .domain([0, d3.max(data, d => d.value) as number]);

    // Append the bar group container
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Append the bars
    g.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.dateRange)!)
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.value))
        .attr('fill', '#4CAF50')
        .attr('rx',10)
        .attr('margin', 5);

    // Add the X Axis
    const xAxis = g.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

    xAxis.select('.domain').remove(); // This removes the axis line (path element)
    xAxis.selectAll('.tick line').remove();

};

const BarGraph: React.FC<BarChartProps> = ({ data }) => {
    const d3Container = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (data && d3Container.current) {
            const svg = d3.select(d3Container.current) as d3.Selection<SVGSVGElement | null, unknown, null, undefined>;
            createChart(svg, data);
        }
    }, [data]);

    return (
        <svg
            className="d3-component"
            width={600}
            height={200}
            ref={d3Container}
        />
    );
};

export default BarGraph;
