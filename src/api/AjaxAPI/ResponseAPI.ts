import {AjaxAPI} from "./AjaxAPI";


export class ResponseAPI extends AjaxAPI {
	static getResponse(action:string, id:number, image:File, contact:FormData){
		const body = {
			action: action,
			id: id,
			image: image,
			contact: contact, // ['name', 'surname', 'patronymic'],
		};

		return this.instance.post(`/send.php`, body).then(response => response);
	}
}