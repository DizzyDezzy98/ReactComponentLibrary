import React from "react";
import Sidebar from '../components/Sidebar';

// export default function Components(){
//     return(
//         <div>
//             {/* <div className="content">Components Page</div> */}
//             <Sidebar />
//         </div>
//         )
// }   

const ComponentLayout = ({children}) =>{
    return(
        <div className="component-grid">
            <Sidebar />

            <div className="component-children-container">
            <div className="component-children">{children}</div>
            </div>
        </div>
    )
} 

export default ComponentLayout;