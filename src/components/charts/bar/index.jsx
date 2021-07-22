import { useEffect, useRef } from 'react';
import {select, scaleLinear, max, scaleBand} from 'd3';

const render = (data, custom) => {
  const xValue = (d) => +d.population.split(',').join('');
  const yValue = (d) => d.name;
  const svg = select(custom.chart_name);

  // Scale
  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, custom.width]);
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, custom.height])

  // Draw chart
  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('y', d => yScale(yValue(d)))
    .attr('width', d => xScale(xValue(d)))
    .attr('height', yScale.bandwidth());
}

export const BarChart = ({data}) => {
  const chartRef = useRef()
  // 1. Create a rectangle for each data
  // 2. Scales data for each rectangle using linear and band functions in d3.
  //  2.1. scale linear is useful for quantitative data.
  // 3. 
  
  useEffect(() => {
    render(data, {chart_name:chartRef.current, width: 400, height: 150});
  }, []);
  
  return (
    <div>
        <h1>BarChart</h1>
        {/* data guidance */}
        <ul>
          {data.map((d, idx)=> (
            <li key={idx}>
              <span className='p-2'>{d.name}</span>
              <span className='p-2'>{d.population}</span>
              <span className='p-2'>{d.year}</span>
              </li>
          ))}
        </ul>
        {/* chart */}
        <svg ref={chartRef} className="chart__svg"></svg>
      </div>
  )
}