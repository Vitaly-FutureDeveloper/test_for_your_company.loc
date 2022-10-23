import axios from "axios";

export class AjaxAPI {
	static instance = axios.create({
		withCredentials: true,
		baseURL: "https://test-job.pixli.app",
		headers: {
			"Content-Type": "multipart/form-data",
		}
	});
}