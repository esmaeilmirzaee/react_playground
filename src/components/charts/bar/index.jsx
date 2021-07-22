import { useEffect, useRef } from 'react';
import { select, scaleLinear, max, scaleBand, axisLeft, axisBottom } from 'd3';

const render = (data, custom) => {
  const xValue = (d) => +d.population.split(',').join('');
  const yValue = (d) => d.name;
  const svg = select(custom.chart_name)
    .attr('width', `${custom.width}`)
    .attr('height', `${custom.height}`)
    .append('g')
    .attr(
      'transform',
      `translate(${custom.margins.left}, ${custom.margins.top})`,
    );

  // Scale
  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, custom.width - custom.margins.left - custom.margins.right])
    .nice();
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, custom.height - custom.margins.top - custom.margins.bottom])
    .padding(0.2);

  // 4. Define axis
  // Y Axis
  // const yAxis = axisLeft(yScale);

  // Use Y Axis
  // The following line could be refactored as follows
  // yAxis(svg.append('g'));

  // Top two lines refactored as
  svg.append('g').call(axisLeft(yScale));

  // X Axis
  svg
    .append('g')
    .call(axisBottom(xScale))
    .attr(
      'transform',
      `translate(${0},${
        custom.height - custom.margins.top - custom.margins.bottom
      })`,
    );

  // Draw chart
  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('y', (d) => yScale(yValue(d)))
    .attr('width', (d) => xScale(xValue(d)))
    .attr('height', yScale.bandwidth());
};

export const BarChart = ({ data }) => {
  const chartRef = useRef();
  // 1. Create a rectangle for each data
  // 2. Scales data for each rectangle using linear and band functions in d3.
  //  2.1. scale linear is useful for quantitative data.
  // 3. Generate margins and specify inner margins (differ from the whole width and height) in range
  // 4. Define axis

  useEffect(() => {
    render(data, {
      chart_name: chartRef.current,
      width: 900,
      height: 450,
      margins: { top: 100, right: 100, bottom: 100, left: 100 },
    });
  }, []);

  return (
    <div>
      <h1>BarChart</h1>
      {/* data guidance */}
      <ul>
        {data.map((d, idx) => (
          <li key={idx}>
            <span className='p-2'>{d.name}</span>
            <span className='p-2'>{d.population}</span>
            <span className='p-2'>{d.year}</span>
          </li>
        ))}
      </ul>
      {/* chart */}
      <svg ref={chartRef} className='fill-current text-indigo-600'></svg>
    </div>
  );
};
