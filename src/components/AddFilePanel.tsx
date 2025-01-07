interface AddFilePanelProps {
	setControlNo: React.Dispatch<React.SetStateAction<number>>;
}

function AddFilePanel({ setControlNo }: AddFilePanelProps) {
	return (
		<button
			className="h-12 w-12 border border-2 border-black rounded-full mx-auto hover:bg-gray-100/20 hover:border-gray-400 mt-8"
			onClick={() => setControlNo((prev) => (prev += 1))}
		>
			<span className="material-icons flex justify-center">note_add</span>
		</button>
	);
}

export default AddFilePanel;
