import React from 'react'
//import UserClass from '../data/user'
import { styles } from './styles'


const UserComponent = (props) => {
    
    return(
        <div style = {styles.divStyle} className ="container">
     
          <h3>{props.user.fullName()}</h3>
          <p>{props.user.city}</p>
          <p>{props.user.contact}</p>
    </div>
    )
}
export default UserComponent