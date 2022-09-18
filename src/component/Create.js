import React from 'react'
import Img from './img/img.webp'
import './Create.css';
export default function Create() {
  return (
                    <div className='Sub'>
                    <div className='profile'>
                    <span className='Detail-1'>Id :</span><input type="text" className='Detail-2' placeholder='Enter Gender'/><br/>
                    <img src={Img}/>
                    </div>
                    <div className='Personal'>
                    <div><span className='Detail-1'>Name :</span><input type="text" className='Detail-2' placeholder='Enter Name'/></div>
                    <div><span className='Detail-1'>Email :</span><input type="text" className='Detail-2' placeholder='Enter Email'/></div>
                    <div><span className='Detail-1'>Gender :</span><input type="text" className='Detail-2' placeholder='Enter Gender'/></div>
                   <button>Save</button>
                    </div>
                  </div>
  )
}
