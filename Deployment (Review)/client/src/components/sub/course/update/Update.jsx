import React, { useEffect, useState } from 'react';
import { useFunctions } from '../../../../library/Function/Function';
import { CourseServices } from '../../../../library/services/CourseServices';
import { useParams } from 'react-router-dom';

function Update({ courseId }) {
    const { course, setCourse, upload, url } = useFunctions();
    const { id } = useParams();

    const [image, setImage] = useState(null);

    useEffect(() => {
        if (id) {
            CourseServices.getCourseById(id)
                .then((res) => {
                    console.log(res.data);
                    setCourse({
                        ...res.data,
                    });
                    setImage(res.data.image);
                })
                .catch((error) => {
                    console.error('Error fetching course details:', error);
                });
        }
    }, [courseId, url]);

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
        } else {
            setCourse(prevCourse => ({
                ...prevCourse,
                [name]: value
            }));
        }
    };

    const handleUpdate = () => {
        CourseServices.updateCourse(id, course)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error('Error updating course:', error);
            });
    };

    return (
        <>
            <div className="add-form">
                <div className="image">
                    {url ? <img src={`https://lh3.googleusercontent.com/d/${url}`} alt={course.name} /> : 
                            <img src={`https://lh3.googleusercontent.com/d/${course.image}`} alt={course.name} />
                }
                        {/* <div className='select'>
                            {url ? null : <p>PLEASE SELECT YOUR IMAGE</p>}
                        </div> */}
                        {/* <div className='hint'>
                            {url ? null : <p>The Image is not uploaded Yet</p>}
                        </div> */}
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
                            value={course.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='text'>
                        <input
                            type="text"
                            name="description"
                            placeholder='Description'
                            value={course.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='text'>
                        <input
                            type="text"
                            name="genre"
                            placeholder='Genre'
                            value={course.genre}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='text'>
                        <input
                            type="text"
                            name="amount"
                            placeholder='Amount for the Course'
                            value={course.amount}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='text'>
                        <input
                            type="text"
                            name="duration"
                            placeholder='Duration Of The Course'
                            value={course.duration}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='text'>
                        <input
                            type="text"
                            name="instructor"
                            placeholder='Instructor Of The Course'
                            value={course.instructor}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='submit'>
                        <button onClick={handleUpdate}>UPDATE</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Update;
