import { useSaveFile } from '../hooks/useSaveFile';

interface ControlPanelProps {
	no: number;
}

function SaveFilePanel({ no }: ControlPanelProps) {
	const { saveFile, pending, success, message } = useSaveFile();

	return (
		<div className="flex flex-col relative">
			<button
				className="btn-primary"
				onClick={() => saveFile()}
				disabled={pending}
			>
				{pending ? (
					<span className="material-icons flex justify-center animate-spin">
						refresh
					</span>
				) : (
					`Save File No ${no + 1}`
				)}
			</button>
			<span
				className={`absolute top-full left-0 ${
					success ? 'text-green-600' : 'text-red-600'
				}`}
			>
				{message}
			</span>
		</div>
	);
}

export default SaveFilePanel;
