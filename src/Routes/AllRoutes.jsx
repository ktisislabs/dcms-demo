import React from 'react'
import {Routes,Route} from 'react-router-dom' ; 
import Home from '../Pages/Home'
import About from '../Pages/About';
import NewBooks from '../Pages/NewBooks';
import Bookinshelf from '../Pages/Bookinshelf';
import BookreqRet from '../Pages/BookreqRet';
import NewMember from '../Pages/NewMember';
import Suggestion from '../Pages/Suggestion';
import Login from '../Pages/Login';
import LoggedinHome from '../Pages/LoggedinHome'

function AllRoutes() {
  return (
    <>

<Routes>


<Route path='/' element={<Home/>}></Route>

<Route path='/About' element={<About/>}></Route>

<Route path='/NewRelease' element={<NewBooks/>}></Route>
<Route path='/BookInShelf' element={<Bookinshelf/>}></Route>
<Route path='/ReturnReq' element={<BookreqRet/>}></Route>
<Route path='/NewMember' element={<NewMember/>}></Route>
<Route path='/Suggestion' element={<Suggestion/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path='/LoggedinHome' element={<LoggedinHome/>}></Route>




</Routes>


    </>
  )
}

export default AllRoutes