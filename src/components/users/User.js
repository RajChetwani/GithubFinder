import React, { useEffect,Fragment,useContext } from 'react'
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos';
import GithubContext from '../../context/githubContext';

const User = ({match}) => {
    const githubContext = useContext(GithubContext);

    const { user,loading,getUser,getUserRepos,repos} = githubContext;

    useEffect(()=>{
      getUser(match.params.login);
      getUserRepos(match.params.login);
      //eslint-disable-next-line
    },[]);
        
    const { name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
          } = user;
        
          if (loading) return <Spinner />;
        
          return (
            <div className="container">
              <Link to='/' className='btn btn-light btn-outline-dark' style={{marginRight:'15px'}}>
                Back To Search
              </Link>
                Hireable:{' '}
              {hireable ? (
                <i className='fa fa-check text-success' />
              ) : (
                <i className='fa fa-times-cross text-danger' />
              )}
              <div className='card' style={{height:'350px',marginTop:'10px'}}>
               <div className="row container">
                <div className='col-md-6' style={{textAlign:'center',marginTop:'20px'}}>
                  <img
                    src={avatar_url}
                    className='round-img'
                    alt=''
                    style={{ width: '150px',borderRadius:'50%',marginBottom:'10px' }}
                  />
                  <h1>{name}</h1>
                  <p>Location: {location}</p>
                </div>
                <div className="col-md-6">
                 <div style={{textAlign:'center',marginTop:'10px'}}>
                  {bio && (
                    <Fragment>
                      <h3>Bio</h3>
                      <p>{bio}</p>
                    </Fragment>
                  )}
                  <a href={html_url} className='btn btn-dark my-1'>
                    Visit Github Profile
                  </a>
                  </div>
                  <div style={{marginTop:'20px',marginLeft:'125px'}}>
                  <ul>
                    <li>
                      {login && (
                        <Fragment>
                          <strong>Username: </strong> {login}
                        </Fragment>
                      )}
                    </li>
        
                    <li>
                      {company && (
                        <Fragment>
                          <strong>Company: </strong> {company}
                        </Fragment>
                      )}
                    </li>
        
                    <li>
                      {blog && (
                        <Fragment>
                          <strong>Website: </strong> {blog}
                        </Fragment>
                      )}
                    </li>
                  </ul>
                  </div>
                </div>
                </div>
              </div>
              <div className='text-center' style={{ borderStyle:'solid', borderColor:'#e6e6e6',borderWidth:'thin',paddingBottom:'20px',paddingTop:'20px', marginBottom:'20px'}}>
                <span style={{marginRight:'10px'}} className='badge badge-primary'>Followers: {followers}</span>
                <span style={{marginRight:'10px'}} className='badge badge-success'>Following: {following}</span>
                <span style={{marginRight:'10px'}} className='badge badge-light'>Public Repos: {public_repos}</span>
                <span className='badge badge-dark'>Public Gists: {public_gists}</span>
              </div>
              <Repos repos={repos} />
            </div>
          );
        };

export default User