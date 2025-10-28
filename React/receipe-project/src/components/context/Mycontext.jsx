import { createContext, useState } from "react";

export const Mystore = createContext();

 const MyStoreProvider = ({children})=>{
    const [receipe , setreceipe] = useState([])
    // console.log(receipe);

     const [chefData, setChefData] = useState(
    () => JSON.parse(localStorage.getItem("chef ka data")) || []
  );

return(
<Mystore.Provider  value={{receipe , setreceipe , chefData ,setChefData}}>
    {children}
</Mystore.Provider>)
}
export default MyStoreProvider;