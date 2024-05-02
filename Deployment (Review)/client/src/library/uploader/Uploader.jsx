function Uploader() {
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
			console.log('Uploaded file URL:', result.fileUrl);
		})
		.catch(error => {
			console.error('Error:', error);
			});
		};
	}

	return (
		<div className="App">
			<div className="App-header">
				<input type="file" accept="application/pdf" id="customFile" onChange={(e)=>{upload(e)}} />
			</div>
			<img src="https://lh3.googleusercontent.com/d/1-isRnOYvcFAApGBFIPaGLD8IZ5G1D6Oa" alt="GDRIVE IMAGE"/>
		</div>
	);
}

export default Uploader;