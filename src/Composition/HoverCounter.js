export default function HoverCounter({incrementCount,count}){
    return(
       <div>
        <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
       </div>
    )
}