import { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"

export function Weeks(){
    const[weeks, setweeks] = useState('number')
    return(
   <div>
{/* <main>
<Routes>
    <Route path='/monday' element= { < Monday /> } />
     <Route path='/tuesday' element= />
     <Route path='/wednesday' element=  />
     <Route path='/thursday' element=  />
     <Route path='/friday' element=  />
     <Route path='/saturday' element=  />
     <Route path='/sunday' element=  />

    </Routes>
</main> */}
  <form>
   <h2>Monday</h2>
    <h2>Tuesday</h2>
    <h2>Wednesday</h2>
    <h2>Thursday</h2>
    <h2>Friday</h2>
    <h2>Saturday</h2>
    <h2>Sunday</h2>

  </form>

   </div>

    )
}