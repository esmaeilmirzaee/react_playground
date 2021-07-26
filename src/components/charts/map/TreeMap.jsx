import { useRef, useEffect } from 'react';
import { select, hierarchy, treemap } from 'd3';

const render = (data, custom) => {
  console.log(data);
  const svg = select('.treeMap')
    .append('svg')
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
      `translate(${custom.margins.left}, ${custom.margins.top})`,
    );

  const root = hierarchy(data).count((d) => d.value);
  console.log(root);

  treemap()
    .size([custom.width, custom.height])
    .paddingTop(8)
    .paddingRight(1)
    .paddingInner(6)(root);

  // Add rectangle
  svg
    .selectAll('rect')
    .data(root.leaves())
    .join('rect')
    .attr('x', (d) => d.x0)
    .attr('y', (d) => d.y0)
    .attr('width', (d) => d.x1 - d.x0)
    .attr('height', (d) => d.y1 - d.y0)
    .attr('stroke', 'black')
    .attr('fill', '#234567')
    .attr('opacity', 1);

  // Information
  svg
    .selectAll('text')
    .data(root.leaves())
    .enter()
    .append('text')
    .attr('x', (d) => d.x0 + 5)
    .attr('y', (d) => d.y0 + 35)
    .text((d) => d.data.name)
    .attr('fill', 'white');
};

export const TreeMapChart = ({ data }) => {
  const treeMapChart = useRef();

  useEffect(() => {
    render(data, {
      width: 680,
      height: 500,
      margins: {
        top: 10,
        right: 20,
        bottom: 20,
        left: 10,
      },
    });
  }, [data]);

  return (
    <>
      <div ref={treeMapChart} className='treeMap'></div>
    </>
  );
};
