import React from "react";
function Data(props){
    console.log("Data component",Object.keys(props.data[0]))
    return(
        <>

<table className="table">
  <thead>
    <tr>

    {Object.keys(props.data[0]).map((key)=>(
        <th scope="col">{key}</th>
    ))}
    </tr>
  </thead>
  <tbody>
    {props.data.map((data)=>(
    <tr>
      {
      Object.keys(data).map((key)=>(
        typeof data[key] === 'object' ?
      <td>
        <td>
        <select>
        {Object.entries(data[key]).map(([x,y])=>(
            <option>{x} === {typeof y === 'object' ? "Hello"
            : y}</option>
        ))}
        </select>
        </td>
      </td>
      :
      <td>{data[key]}</td>
      ))}
    </tr>
    ))}
  </tbody>
</table>
        </>
    )
}

export default Data;
