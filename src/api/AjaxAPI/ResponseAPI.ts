import {AjaxAPI} from "./AjaxAPI";
import { ContactType } from "../../types/types";



export class ResponseAPI extends AjaxAPI {
	static getResponse(action:string, id:number, image:File, contact:ContactType){
		const body = {
			action: action, // 'POST',
			id: id, // 1,
			image: image, // '',
			contact: contact, // ['name', 'surname', 'patronymic'],
		};

		return this.instance.post(`/send.php`, body).then(response => response);;
	}
}