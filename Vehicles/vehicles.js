
	function TransportationApp(props){
        return (
            <div>
                <TransportationTitle title="Welcome to React Transportation" subtitle="The best place to buy vehicles online" form =              {<form method="post" action="traitement.php">
                 <p>
                    <h2>Choose Options :</h2>
                    <label for="newOnly">New Only</label><input type="checkbox" name="newOnly" id="newOnly" /> <br /> <br />
                    <label htmlFor="selectType">Select Type </label>
                    <select name="selectType" id="selectType">
                        <option value="All">All</option>
                        <option value="Cars">Cars</option>
                        <option value="Trucks">Trucks</option>
                        <option value="Convertibles">Convertibles</option>
                     </select>
                </p>
              </form>} />
            	
              <TransportationBody headLine={["Year", "Model", "Price", "Buy"]}  tableName={["Cars", "Trucks", "Convertibles"]} data={[[[2013,"A","$32000"],[2011,"B","$4400"],[2016,"B","$15500"]],[[2014,"D","$18000"],[2013,"E","$5200"]],[[2009,"F","$2000"],[2010,"G","$6000"],[2012,"H","$12500"],[2017,"M","$50000"]]]}/>
            </div>

        ) 
    }

function TransportationTitle(props){
        return (
            <div>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
                {props.form}
            </div>

        ) 
    }
function TransportationBody (props){
  return (
    <div>
      <Table title ={props.tableName[0]} head={props.headLine} data={props.data[0]} />
      <Table title ={props.tableName[1]} head={props.headLine} data={props.data[1]} />
      <Table title ={props.tableName[2]} head={props.headLine} data={props.data[2]} />
    </div>
  )
}

function Table(props){
  return(
    <div>
      {props.title}
      <table>
        {[props.head,...props.data].map((x,indx, t)=> (indx > 0)&& <div> <tr>{t[0].map(t=> <th>{t}</th>)}</tr> <tr> {x.map(t=> <td>{t}</td>)} <td><button type="button">Buy Now</button></td></tr> </div>)}
      </table>
    </div>
  )
}




 ReactDOM.render(
        <TransportationApp />,
        document.getElementById("root")
    )