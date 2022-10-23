export type ColorType = {
	id: number,
	colorValue: string,
}

export type ContactType = {
	name:string,
	surname:string,
	patronymic:string,
};

export type FormType = {
	action:string,
	id:number,
	image?:File,
	name:string,
	surname:string,
	patronymic:string,
};