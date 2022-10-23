import {AjaxAPI} from "./AjaxAPI";


export class ResponseAPI extends AjaxAPI {
	// static getResponse(action:string, id:number, image:File, contact:any){
	static getResponse(contact:FormData){

		const body = {
			method: 'POST',
			headers: {
				"Content-Type": "multipart/form-data",
			},
			// body: {
			// 	action,
			// 	id,
			// 	contact,
			// 	image,
			// },
			body: contact,

		};

		// return this.instance.post(`/send.php`, body).then(response => response);
		// return this.instance.post(`/php`, body).then(response => response);

		// return fetch(`http://localhost:3001/php`, body).then(response => response.text());
		return fetch(`https://test-job.pixli.app/send.php`, body).then(response => response.json());
	}
}