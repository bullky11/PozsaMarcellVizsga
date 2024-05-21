import React from "react";
let valasz =false;
export default function Sor({ adat }) {
    
  return (
    <tr>
      <td>{adat.angol}</td>
      <td>
       {<input id="valasz" typeof="text" placeholder={adat.magyar} />} 
       
      </td>
      {(adat.id===adat.magyar) ? <td> elfogadva</td> : <td> X</td> }
    </tr>
  );
}
