import {BarChart} from './bar/'
import world_population from './data/world_population'

export const Charts = () => {
  console.log(world_population);
  return (
    <div>
      {/* Bar Chart */}
      <BarChart data={world_population} />
    </div>
  )
}