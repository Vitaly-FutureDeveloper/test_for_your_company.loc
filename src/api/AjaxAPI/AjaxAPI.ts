import axios from "axios";
// import * as axios from "axios";

// const BASE_URL = "https://test-job.pixli.app/";
//
// export const instance = axios.create({
// 	withCredentials: true,
// 	baseURL: BASE_URL,
// });

export class AjaxAPI {
	static instance = axios.create({
		withCredentials: true,
		baseURL: "https://test-job.pixli.app",
		// headers: {
		// 	'Content-Type': 'application/json'
		// }
	});
}