import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/githubContext'

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading , users} = githubContext;
        if(loading){
            return <Spinner />
        }else{
            return (
                <div className="container" style={{ marginTop:'20px'}}>
                    <div className="row">
                    {users.map( user => (
                        
                        <UserItem key={user.id} user={user} />
                       
                    ))}
                    </div>                  
             </div>
            )
        }
    }



export default Users;