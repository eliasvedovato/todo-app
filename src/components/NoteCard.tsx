import { Note } from '../types'

type Props = {
	note: Note
	onArchive: (id: Note['id']) => void
	onDelete: (id: Note['id']) => void
	onEdit: (note: Note) => void
	view: string
}

export function NoteCard({ note, view, onArchive, onEdit, onDelete }: Props) {
	return (
		<div className='nes-container'>
			<h3
				style={{
					textAlign: 'center',
					borderBottom: '2px solid black',
					paddingBottom: 20,
				}}
			>
				{note.title}
			</h3>
			<p
				style={{
					wordBreak: 'break-word',
					borderBottom: '2px solid black',
					paddingBottom: 20,
				}}
			>
				Last edited: {note.lastEdited}
			</p>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '12px',
					justifyContent: 'center',
				}}
			>
				<button className='nes-btn' onClick={() => onArchive(note.id)}>
					{view === 'active' ? 'Archivar' : 'Desarchivar'}
				</button>
				<button className='nes-btn' onClick={() => onEdit(note)}>
					Editar
				</button>
				<button className='nes-btn' onClick={() => onDelete(note.id)}>
					Borrar
				</button>
			</div>
		</div>
	)
}
