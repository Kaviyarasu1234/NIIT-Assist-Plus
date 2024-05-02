import React, { useEffect, useState } from 'react';
import './Add.scss';
import { useFunctions } from '../../../../library/Function/Function';
import { CourseServices } from '../../../../library/services/CourseServices';
import { UserServices } from '../../../../library/services/UserServices';

function Add() {
     const { course, setCourse, upload, url } = useFunctions();

     const [image, setImage] = useState(null);

     const[isDone, setIsDone] = useState(false);

     useEffect(() => {
          setCourse(prevCourse => ({
              ...prevCourse,
              image: url
          }));
          setCourse(prevCourse => ({
              ...prevCourse,
              instructorId: localStorage.getItem('uid')
          }));
      }, [url]);
    
     const handleInputChange = (e) => {
          const { name, value, files } = e.target;
          if (name === 'image') {
               const selectedFile = files[0];
               if (selectedFile) {
                   const reader = new FileReader();
                   reader.onload = () => {
                       setImage(reader.result);
                   };
                   reader.readAsDataURL(selectedFile);
                   upload(e);
               }
           }  else {
               setCourse({
                    ...course,
                    [name]: value
               });
          }
     };

     const handleSubmit = () => {
          UserServices.getAllPayments()
          .then((res) => {
               console.log(res.data);
          })
          CourseServices.createCourse(course)
          .then((res) => {
               console.log(res.data);
          });
          console.log(course);
     };

    return (
        <>
            <div className="add-form">
               <div className="image">
                    {url ? <img src={image} alt="Preview" /> : null}
                    <div className='select'>
                         {url ? null : <p>PLEASE SELECT YOUR IMAGE</p>}
                    </div>
                    <div className='hint'>
                         {url ? null : <p>The Image is not uploaded Yet</p>}
                    </div>
                    <input
                        type="file"
                        name="image"
                        onChange={handleInputChange}
                    />
               </div>
                <div className="texts">
                    <div className='text'>
                        <input
                            type="text"
                            name="name"
                            placeholder='Name of the Course'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='text'>
                        <input
                            type="text"
                            name="description"
                            placeholder='Description'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='text'>
                        <input
                            type="text"
                            name="genre"
                            placeholder='Genre'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='text'>
                        <input
                            type="text"
                            name="amount"
                            placeholder='Amount for the Course'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='text'>
                        <input
                            type="text"
                            name="duration"
                            placeholder='Duration Of The Course'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='text'>
                        <input
                            type="text"
                            name="genre"
                            placeholder='Instructor Of The Course Will Be Automatically Chosen'
                        />
                    </div>
                    <div className='submit'>
                        <button onClick={handleSubmit}>ADD</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Add;