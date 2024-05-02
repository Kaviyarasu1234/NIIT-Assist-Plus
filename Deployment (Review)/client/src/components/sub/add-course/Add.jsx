import { useState } from 'react';
import './Add.scss';

function Add() {
    const [courseDetails, setCourseDetails] = useState({
        code: "",
        name: "",
        instructor: "",
        department: "",
        credits: "",
        schedule: "",
        imageUrl: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseDetails({ ...courseDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        console.log("Course details:", courseDetails);
        // Reset form fields after submission
        setCourseDetails({
            code: "",
            name: "",
            instructor: "",
            department: "",
            credits: "",
            schedule: "",
            imageUrl: "",
        });
    };

    return (
        <div className="add-course-form">
            <form onSubmit={handleSubmit}>
                <h2>Add Course</h2>
                <div className="form-group">
                    <label>Code:</label>
                    <input
                        type="text"
                        name="code"
                        value={courseDetails.code}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={courseDetails.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Instructor:</label>
                    <input
                        type="text"
                        name="instructor"
                        value={courseDetails.instructor}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Department:</label>
                    <input
                        type="text"
                        name="department"
                        value={courseDetails.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Credits:</label>
                    <input
                        type="number"
                        name="credits"
                        value={courseDetails.credits}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Schedule:</label>
                    <input
                        type="text"
                        name="schedule"
                        value={courseDetails.schedule}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={courseDetails.imageUrl}
                        onChange={handleChange}
                        required
                    />
                    
                </div>
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
}

export default Add;
