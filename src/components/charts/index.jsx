import { useState } from 'react';
import { BarChart } from './bar/';
import { TreeChart } from './map/Tree';
import { TreeMapChart } from './map/TreeMap';

// Static data
import world_population from './data/world_population';
import world_migrants from './data/world_migrants';
import linux_distribution from './data/linux_distribution.json';
import { ChartPopover } from '../menu';

const chartsList = [
  { id: 0, name: 'Bar', description: 'Bar Chart (World Population)' },
  { id: 1, name: 'Tree', description: 'Tree (Linux distros family tree)' },
  {
    id: 2,
    name: 'TreeMap',
    description: 'TreeMap (Linux Discribution relations)',
  },
];

export const Charts = () => {
  const [open, setOpen] = useState(true);
  const [activeChart, setActiveChart] = useState(chartsList[0].name);

  return (
    <div>
      <div className='inline flex justify-center items-center'>
        <ChartPopover
          open={open}
          onOpen={setOpen}
          lists={chartsList}
          activeChart={activeChart}
          onActiveChart={setActiveChart}
        />
      </div>

      {/* Bar Chart */}
      {activeChart == chartsList[0].name && (
        <BarChart data={world_population} />
      )}

      {/* Tree Chart */}
      {activeChart == chartsList[1].name && (
        <TreeChart data={linux_distribution} />
      )}

      {/* TreeMap Chart */}
      {activeChart == chartsList[2].name && (
        <TreeMapChart data={linux_distribution} />
      )}
    </div>
  );
};
