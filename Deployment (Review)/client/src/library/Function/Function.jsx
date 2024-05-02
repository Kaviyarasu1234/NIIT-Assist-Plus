import { createContext, useState, useContext} from "react";
import { MdDescription } from "react-icons/md";

const ShortfactContext = createContext();

export const Function = ({children}) => {
     const [url, setUrl] = useState("");
     const [course, setCourse] = useState({
				cid: '',
				image: '',
				name: '',
				description: '',
				duration: '',
				amount: '',
				genre: '',
				instructorId: ''
     });
     const [payment, setPayment] = useState({
			status: '',
			amount: '',
			mode: '',
			studentId: '',
			courseId: '',
     });

     function upload(e) {
		const scriptUrl = 'https://script.google.com/macros/s/AKfycbzqX6TeZW_br5vCk4JEmL1Kl2sWf93XnFYRSgKg05dYTd00LBwziKa3-0Jol9_nEGEh/exec';
		const file = e.target.files[0];

		if (!file) {
			alert('Please select a file.');
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function (event) {
		const base64String = event.target.result.split(',')[1];

		const formData = {
			action: 'upload',
			fileName: file.name,
			fileType: file.type,
			fileSize: file.size,
			fileData: base64String
		};

		console.log(formData)

		fetch(scriptUrl, {
			method: 'POST',
			body: JSON.stringify(formData)
			})
			.then(response => response.json())
			.then(result => {
			     console.log('Uploaded file URL:', result.fileUrl.url);
                    setUrl(result.fileUrl.id);
		     })
		.catch(error => {
			console.error('Error:', error);
			});
		};
	}


     return(
          <ShortfactContext.Provider value={{
               course, setCourse,
               upload,
               url, setUrl,
			   payment, setPayment,
          }}
          >{children}
          </ShortfactContext.Provider>
     );
};

export const useFunctions = () => useContext(ShortfactContext);