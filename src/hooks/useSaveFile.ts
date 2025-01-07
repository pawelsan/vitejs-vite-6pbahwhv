import { useState } from 'react';
import { faker } from '@faker-js/faker';

interface useSaveFileReturnType {
	saveFile: () => void;
	pending: boolean;
	success: boolean;
	message: string;
}

export function useSaveFile(): useSaveFileReturnType {
	const [savingState, setSavingState] = useState({
		pending: false,
		success: false,
		message: '',
	});

	const saveFile = () =>
		new Promise<string>((res, rej) => {
			const timeToResolve = faker.number.int({ min: 1000, max: 3000 });
			setSavingState((prevState) => ({ ...prevState, pending: true }));
			setTimeout(() => {
				Math.random() > 0.5
					? res(`Success: ${faker.system.commonFileName()} saved`)
					: rej(`Error: ${faker.system.commonFileName()} not saved`);
			}, timeToResolve);
		})
			.then((value) =>
				setSavingState({
					pending: false,
					success: true,
					message: value,
				})
			)
			.catch((err) =>
				setSavingState({
					pending: false,
					success: false,
					message: err,
				})
			);

	return {
		saveFile,
		...savingState,
	};
}
