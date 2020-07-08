import React from 'react';


const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <h3 style={{ paddingTop:'5px',paddingBottom:'5px',paddingLeft:'5px'}}>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};


export default RepoItem;