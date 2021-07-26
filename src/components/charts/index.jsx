import { BarChart } from './bar/';
import { TreeChart } from './map/Tree';
import world_population from './data/world_population';
import world_migrants from './data/world_migrants';
import linux_distribution from './data/linux_distribution.json';

export const Charts = () => {
  return (
    <div>
      {/* Bar Chart */}
      <BarChart data={world_population} />

      {/* Tree Chart */}8
      <TreeChart data={linux_distribution} />
    </div>
  );
};
