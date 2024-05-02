import { couresAxios } from "../axios/Axios";

class Shortfact{

    cid = ""; name = ""; description = ""; genre = ""; image = null; instructor = ""; duration = ""; amount = "";

    setShortfact(data){
        this.sid = data.sid;
        this.title = data.title;
        this.description = data.description;
        this.content = data.content;
        this.image = data.image;
        this.author = data.author;
    }

}
class CourseAxios {

    createCourse(course) {
        return  couresAxios.post("create", course, {
            headers: { "Content-Type": "application/json", },
        });
    }

    getAllCourses() {
        return couresAxios.get("get/all");
    }

    getCourseById(cid){
        return couresAxios.get(`get/${cid}`);
    }

    updateCourse(cid,shortfact){
        return couresAxios.put(`update/${cid}`,shortfact);
    }

    deleteCourse(cid){
        return couresAxios.delete(`delete/${cid}`);
    }
}

const CourseServices = new CourseAxios();
export {
    CourseServices,
};