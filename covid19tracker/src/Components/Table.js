import React from 'react';

const Table = ({ data }) => {
  var tablerow = {}

  return (
    <table>
      <thead>
        <tr>
            <th>
            <button type="button">
              State
            </button>
            </th>
            <th>
              <button type="button">
                Confirmed
              </button>
            </th>
            <th>
              <button type="button">
                Active
              </button>
            </th>
            <th>
              <button type="button">
                Recovered
              </button>
            </th>
            <th>
              <button type="button">
                Deaths
              </button>
            </th>
        </tr>
      </thead>
      <tbody>
          { data.map( (item, index) => {
            return (
              <tr key={ index }>
                <td>{ item.state }</td>
                <td>{ item.cases }</td>
                <td>{ item.active }</td>
                <td>{ item.recovered }</td>
                <td>{ item.deaths }</td>
              </tr>
            )
            })
          }
      </tbody>
    </table>
  );
}

export default Table;hs
              </button>
            </th>
        </tr>
      </thead>
      <tbody>
          { data.map( (item, index) => {
            return (
              <tr key={ index }>
                <td>{ item.state }</td>
                <td>{ item.cases }</td>
                <td>{ item.active }</td>
                <td>{ item.recovered }</td>
                <td>{ item.deaths }</td>
              </tr>
            )
            })
          }
      </tbody>
    </table>
  );
}

export default Table;