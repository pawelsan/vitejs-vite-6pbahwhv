import { useState } from 'react';
import { maxControlNo } from './constants';
import { AddFilePanel, SaveFilePanel } from './components';

// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

/*
# Task Description

You will create a very simple app that allows the user to save a hypothetical file to the server by clicking a button. 
When the button is clicked, a save request should be sent to the server. 
Please note - occasionally, there may be errors on the server side that need to be handled appropriately.

## Levels

This task is divided into three difficulty levels. 
Please choose the one you are most comfortable solving:

1. Single Request Only
Ensure that only one request can be sent at a time. No parallel requests should be allowed.

2. Limit to Three Parallel Requests
Allow up to three requests to be sent in parallel. No more than three requests should run simultaneously.

3. Three Parallel Requests with Feedback
Allow up to three requests to be sent in parallel (maximum of three). 
Additionally, inform the user about the status of each action—whether the file was saved successfully or not.

## Additional Notes

- Keep the UI minimalistic but meaningful!
- The design should be simple and intuitive while clearly conveying the necessary information.
- If possible use proper TypeScript types.
- If you have a preferred library that fits the requirements, you’re welcome to use it!

GLHF 🚀

*/

function App() {
	const [controNo, setControlNo] = useState(1);

	return (
		<div className="h-screen w-screen">
			<div className="flex flex-col mx-auto w-64 gap-4">
				<h1 className="inline-block text-center">Async Challange</h1>
				<div className="flex flex-col gap-12">
					{[...new Array(controNo).keys()].map((no) => (
						<SaveFilePanel key={no} no={no} />
					))}
				</div>
				{controNo < maxControlNo && (
					<AddFilePanel setControlNo={setControlNo} />
				)}
			</div>
		</div>
	);
}

export default App;
