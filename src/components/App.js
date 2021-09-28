import React from 'react'
import UserClass from '../data/user'
import UserComponent from './UserComponent'
import UsersArray from '../data/UsersArray'
import UsersComponent from './UsersComponent'


const App = () => {
  return (
    <div >
          <UsersComponent users = {UsersArray}/>

    </div>
  )
}
export default App
