import React from 'react'
import UserComponent from './UserComponent'
import UsersArray from '../data/UsersArray'

const UsersComponent =() =>{
    return(
        <>
        <ul>
        <h2>List of Users</h2>
        {UsersArray.map(user => <UserComponent user ={user}/>)}
        </ul>
        </>
    )
}
export default UsersComponent