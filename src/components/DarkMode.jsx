import React,{useState} from 'react'


export default function DarkMode() {
    //define state of website pahile k thiyo
    const [color, setColor] = useState({
        backgroundColor : "green"
    });

    const meDark = ()=>{
        if(color.backgroundColor == 'green')
        {
            //aheley yo hunxa
            setColor({
                backgroundColor: "black",
                padding: "40px"
            })
            setDark("Green")
        }
        else{
            setColor({
                backgroundColor: "green",
            })
            setDark("Dark")
        }
    }
    const [dark, setDark] = useState("Dark");
  return (
    <>
<div style={color}>
<table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<button type="button" className="btn btn-success mx-2" onClick={meDark} >{dark}</button>
</div>
    </>
  )
}



