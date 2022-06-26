import Clock from "./Clock";

function ClockList({quentites}){
    return(
        <div>
          {quentites.map(() =>(
            <Clock key={Math.random()}/>
          ))}
        </div>
    )
}
export default ClockList;

