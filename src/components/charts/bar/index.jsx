import { useEffect, useRef } from 'react';
import { select, scaleLinear, max, scaleBand, axisLeft, axisBottom } from 'd3';

const render = (data, custom) => {
  const xValue = (d) => d.name;
  const yValue = (d) => +d.population.split(',').join('');
  const svg = select(custom.chart_name)
    .attr(
      'width',
      `${custom.width + custom.margins.left + custom.margins.right}`,
    )
    .attr(
      'height',
      `${custom.height + custom.margins.top + custom.margins.bottom}`,
    )
    .append('g')
    .attr(
      'transform',
      `translate(${custom.margins.top}, ${custom.margins.right})`,
    );

  // Scale
  const xScale = scaleBand()
    .domain(data.map(xValue))
    .range([0, custom.width - custom.margins.left - custom.margins.right])
    .padding(0.2);
  const yScale = scaleLinear()
    .domain([0, max(data, yValue) + custom.offset])
    .range([custom.height - custom.margins.top - custom.margins.bottom, 0])
    .nice();

  // 4. Define axis
  // Y Axis
  svg.append('g').call(axisLeft(yScale));

  // X Axis
  svg
    .append('g')
    .call(axisBottom(xScale))
    .attr(
      'transform',
      `translate(${0},${
        custom.height - custom.margins.left - custom.margins.right
      })`,
    );

  // Draw chart
  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d) => xScale(xValue(d)))
    .attr('y', (d) => yScale(yValue(d)))
    .attr(
      'height',
      (d) =>
        custom.height -
        custom.margins.top -
        custom.margins.bottom -
        yScale(yValue(d)),
    )
    .attr('width', xScale.bandwidth())
    .classed('chart__bars', true);
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
      offset: 5,
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
