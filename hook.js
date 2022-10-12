import React from 'react';
function Hook(){
  const items = [{sid:'101', name:'venkatesh',course:'CSE'},
  {sid:'102', name:'Tarun', course:'CSE'},
  {sid:'103', name:'Hari',course:'IT'},
  {sid:'104', name:'Vishnu',course:'ECE'},
  {sid:'105', name:'Rishi',course:'IT'},
  {sid:'106', name:'Manoj', course:'CSE'}]; 
  return ( 
    <div>
     <table border="4" cellpadding="10px">
       { items.map((item)=> (
          <tr key={item.id}> 
          <td>{item.sid}</td> 
	  <td> {item.name} </td>
	  <td> {item.course} </td>
          </tr>
        )) }
      </table>
    </div>
  );
}
export default Hook;

