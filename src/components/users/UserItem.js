import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';

const UserItem = (props) => {   
        const { login,avatar_url} = props.user;
        return (
            <div className="col-md-4" style={{ marginBottom:'25px'}}>
    		    <div className="card profile-card-3">
    		        <div className="background-block">
    		            <img src="https://blogs.sas.com/content/sastraining/files/2015/03/black_background.png" alt="profile-sample1" className="background"/>
    		        </div>
    		        <div className="profile-thumb-block">
    		            <img src={avatar_url} alt=" " className="profile"/>
    		        </div>
    		        <div className="card-content">
                    <h2>{login}</h2>
                    <div className="icon-block"></div>
                    <Link to={`/user/${login}`} className="btn btn-dark">More</Link>
                    </div>
                </div>

           </div>
        )
    
}

export default UserItem