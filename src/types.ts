export type Note = {
	id: string
	title: string
	lastEdited: string | number
	archived: boolean
	content: string
	categories: string[]
}