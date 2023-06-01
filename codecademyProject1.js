import { animals } from './animals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const title = '';
const background = (
	<img className='background' alt='ocean' src='/images/ocean.jpg' />
);
const animalArray = [];
const showBackground = true;

for (const animal in animals) {
	animalArray.push(
		<img
			key={animal}
			className='animal'
			alt={animal}
			src={animals[animal].image}
			aria-label={animal}
			role='button'
			onClick={displayFact}
		/>
	);
}

function displayFact(e) {
	const animalName = e.target.alt;
	const randomIndex = Math.floor(Math.random() * 3);
	document.getElementById('fact').innerHTML =
		animals[animalName].facts[randomIndex];
}

const animalFacts = (
	<div>
		<h1>{title || 'Click an animal for a fun fact!'}</h1>
		{showBackground === true && background}
		<div className='animals'>{animalArray};</div>
		<p id='fact'></p>
	</div>
);

root.render(animalFacts);
