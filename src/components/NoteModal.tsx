import type { Note } from "../types"

type Props = {
	note: Partial<Note>
	onClose: VoidFunction
	onChange: (field: string, value: string) => void
	onSave: VoidFunction
}

export default function NoteModal({ onSave, onChange, onClose, note }: Props) {
	return (
		<section
			style={{
				width: '100vw',
				height: '100vh',
				position: 'fixed',
				top: '0',
				left: '0',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
			className='nes-dialog'
			id='dialog-default'
		>
			<div
				style={{
					backgroundColor: 'rgba(0,0,0,0.2',
					width: '100%',
					height: '100%',
					position: 'absolute',
				}}
			/>
			<form
				method='dialog'
				style={{
					backgroundColor: 'white',
					zIndex: 1,
					padding: 12,
					border: '5px solid black',
				}}
			>
				<h3 className='title'>Create / Edit note</h3>
				<div className='nes-field'>
					<label htmlFor='title'>Title</label>
					<input
						onChange={event =>
							onChange('title', event.target.value)
						}
						value={note.title}
						type='text'
						id='title'
						className='nes-input'
					/>
				</div>
				<div className='nes-field'>
					<label htmlFor='content'>Content</label>
					<textarea
						onChange={event =>
							onChange('content', event.target.value)
						}
						value={note.content}
						id='content'
						className='nes-textarea'
					/>
				</div>
				<div
					style={{
						marginTop: 24,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<button className='nes-btn' onClick={onClose}>
						Close
					</button>
					<button onClick={onSave} className='nes-btn is-primary'>
						Save
					</button>
				</div>
			</form>
		</section>
	)
}