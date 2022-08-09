import React from 'react'

import './Earning.css'
import { Table, Popup } from 'semantic-ui-react'
import moment from 'moment';
moment().format();
const New = ({data}) => {
  // const openInNewTab = url => {
  //   // 👇️ setting target to _blank with window.open
  //   window.open(url, '_blank', 'noopener,noreferrer');
  // };
  return (
  <>
  <div className="New">
      <center><h1>E/R Schedule</h1></center>
<Table>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell>Ticker</Table.HeaderCell>
    <Table.HeaderCell>Date</Table.HeaderCell>
    <Table.HeaderCell>EST. ER</Table.HeaderCell>
    <Table.HeaderCell>Last ER</Table.HeaderCell>
    {/* <Table.HeaderCell>Bull/Bear</Table.HeaderCell> */}
  </Table.Row>
</Table.Header>
<Table.Body>
{data.map((newData) => (
    <Table.Row key={newData._id}>
      <Table.Cell><center>
      <Popup
        content={newData.note}
        trigger= {<a>{newData.ticker}</a>}
      />
        <br />
      Bull({newData.bull})/Bear({newData.bull})
      </center> 
      </Table.Cell>
      <Table.Cell>{ moment(newData.earningDate).format('MM/DD/YY')}</Table.Cell>
      <Table.Cell>{newData.estimatedMove}%</Table.Cell>
      <Table.Cell>{newData.lastMove}%</Table.Cell>
      {/* <Table.Cell>{newData.lastMove}</Table.Cell> */}
    </Table.Row>
  ))}
</Table.Body>
</Table>
      </div>
    </>
  )
}

export default New 