import React from "react";
function Showcount({count,title}){
    console.log(`rendering ${title}....`);
    return( 
        <p>
            {title} is {count}
        </p>
        
    );
} 
export default React.memo(Showcount);