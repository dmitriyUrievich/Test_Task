import React from 'react'
import Time from "./Time";
import {users} from "./Utils";

 const Table = () => {
  const tableRow = ['Параметры и требования', 'Наличие комплекса мероприятий, повышающей страндарты качества' +
  ' изготовления',
    'Срок изготовления лота, дней',
    'Гарантийные обязательства, мес',
    'Условия оплаты',
    'Стоимость изготовления лота, руб(без НДС)',
  ]
  return (
    <>
      <table className="table table-striped">
        <tbody>
        <tr>
          <th className='m-5 text-primary'>Ход{<Time/>}</th>
            {users.map((u, idx)=><td className='text-danger' key={Math.random()}><Time idx={idx}/></td>)}
          </tr>
        <tr>
          <th className='mx-3 text-primary'>{tableRow[0]}</th>
          {users.map((u, idx)=> <td key={Math.random()} className='mx-3 text-primary'>{u.name}</td>)}
        </tr>
        <tr>
          <th scope="row">{tableRow[1]}</th>
          {users.map((u, idx)=> <td key={Math.random()}>{u.nalichie}</td>)}
        </tr>
        <tr>
          <th scope="row">{tableRow[2]}</th>
          {users.map((u, idx)=> <td key={Math.random()}>{u.srok}</td>)}
        </tr>
        <tr>
          <th scope="row">{tableRow[3]}</th>
          {users.map((u, idx)=> <td key={Math.random()}>{u.gatanty}</td>)}
        </tr>
        <tr>
          <th scope="row">{tableRow[4]}</th>
          {users.map((u, idx)=> <td key={Math.random()}>{u.payment}%</td>)}
        </tr>
        <tr>
          <th scope="row">{tableRow[5]}</th>
          {users.map((u, idx)=> <td key={Math.random()}>{u.cost.map(c=><p key={Math.random()}>{c}</p>)}</td>)}
        </tr>
        </tbody>
      </table>
    </>
  )
}
export default Table
