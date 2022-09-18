import React from 'react'
import './Sub.css';
import Img from'./img/img.webp';
export default function Sub(props) {
  return (
    <div className='Sub'>
      <div className='profile'>
      <span className='Detail-1'>Id : </span><span>{props.id}</span><br/>
      <img src={Img}/>
      </div>
      <div className='Personal'>
      <div><span className='Detail-1'>Name :</span><span className='Detail'>{props.name}</span></div>
      <div><span className='Detail-1'>Email :</span><span className='Detail'>{props.email}</span></div>
      <div><span className='Detail-1'>Gender :</span><span className='Detail'>{props.gender}</span></div>
      </div>
    </div>
  );
}
