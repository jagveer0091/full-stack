import React from 'react';
import '../App.css';

const Info = (props) => {
    const { infos, deleteInfo } = props; 

    const infoList = infos.map( info => {
      
      return (
        <div className='card'>
            <div className='card-content center font' key={info.id}>
              <div> Name: { info.name } </div>
              <div> Birthday: { info.birthday } </div>
              <div> About Me: { info.aboutMe } </div><br />
               <button onClick={()=>{deleteInfo(info.id)}}> Delete </button>
            </div>
        </div>
      )
    });

    return(
      <div className='infos'>
        { infoList }
      </div>
    )
  }

export default Info;
