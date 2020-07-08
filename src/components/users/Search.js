import React, { useState,useContext } from 'react'
import GithubContext from '../../context/githubContext'
import AlertContext from '../../context/alert/alertContext'


const  Search = () => {
 const [text,setText] = useState('');

 const githubContext = useContext(GithubContext);
 const alertContext = useContext(AlertContext);
 const {setAlert} = alertContext;

 const handleChange = (e) => {
        setText(e.target.value)
    }

 const handleSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
            setAlert('Please enter something','light');
        }else{
            githubContext.searchUsers(text);
            setText('');
        }
        
    }
        return (
          <div className="container" style={{ marginTop:'20px'}}>
             <form onSubmit={handleSubmit}>
                <div className="input-group">
                <input type="text" name="text" value={text} onChange={handleChange} className="form-control" placeholder="Search" />
                <div className="input-group-btn">
                <button className="btn btn-default btn-dark" type="submit">
                    <i className="fa fa-search"></i>
                    </button>
                </div>
                    
             
                </div>
           </form>
           { githubContext.users.length > 0 &&  <button className="btn btn-outline-dark btn-block" style={{marginTop:'10px'}} onClick={githubContext.clearUsers}>Clear</button> }
        </div>  
        )
    }

export default Search