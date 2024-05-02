import { useState } from 'react';
import './Manage.scss';
import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate, useParams } from 'react-router-dom';
import Add from '../../sub/course/add/Add';
import Update from '../../sub/course/update/Update';
import View from '../../sub/course/view/View';

function Manage() {
     const { action, id } = useParams();
     const nav = useNavigate()
     return (
          <>
               <div className='manage-course'>
                    <div className='course'>
                         <div className='manage-course-back' onClick={()=>{nav(-1)}}>
                              <AiOutlineRollback/>
                         </div>
                         {(action=='add') ?
                              <>
                                   <Add/>
                              </>
                              :
                         (action=='view' && localStorage.getItem('role')=='STUDENT') ?
                              <>
                                   <View/>
                              </>
                              :
                         (action=='view' && localStorage.getItem('role')=='ADMIN') ?
                              <>
                                   <Update/>
                              </>
                              :<>
                                   <p style={{"color":"white"}}>Please <span onClick={()=>{nav("/authorize")}}>Login</span> to your Account</p>
                              </>
                         }
                    </div>
               </div>
          </>
     );
}

export default Manage;
