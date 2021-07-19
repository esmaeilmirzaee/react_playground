import { Tooltip } from './Tooltip';

export function Charts() {
  let charts = [
    { date: '1/1/2021', value: 12 },
    { date: '1/2/2021', value: 9 },
    { date: '1/3/2021', value: 18 },
    { date: '1/4/2021', value: 2 },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {charts.map((c, idx) => (
            <tr>
              <td className='px-1 text-indigo-10'>{c.date}</td>
              <Tooltip key={idx} placement='right' offset={15} text={c.value}>
                <td className='px-1 text-indigo-10'>{c.value}</td>
              </Tooltip>
            </tr>
          ))}
        </tbody>
      </table>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
        perferendis itaque error aliquid veniam molestias dolor nemo cumque
        deserunt, consequuntur magnam voluptatem nisi eum dicta? Provident optio
        fuga incidunt ex excepturi molestias natus nihil! Harum, magni
        consequuntur adipisci reprehenderit aut sapiente repudiandae molestias,
        ut cupiditate accusamus maxime cum at a mollitia sint ea ducimus.
        Obcaecati, totam corrupti, exercitationem, rerum quasi dicta placeat
        veniam dolores error iste quisquam dolorum itaque sequi. Delectus dolor
        id autem vero atque quis sequi maiores sed.
      </span>
    </>
  );
}
