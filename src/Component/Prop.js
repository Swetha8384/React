import React from "react";

function Product(props)
{
    const {name,price:update_price,Color}=props
  return(
    <div>
        <h1>Sale</h1>
     <h4>
      {/* { ` Product_details:${props.name} ${props.price}`} */}
       Product_details:{name} Cost:{update_price} Color:{Color}
     </h4>
   
    </div>
  )
}






// function Product({name,price,Color})
// {
//     return(
//         <div>
//             {/* <h3>{name}</h3>
//             <h3>{price}</h3>
//             <h3>{Color}</h3> */}
//            
//             <h3>{Color}</h3>
//         </div>
//     )
// }




export default Product;