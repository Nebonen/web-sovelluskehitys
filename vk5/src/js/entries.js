async function getDiaryEntries() {
	try {
		const response = await fetch('http://localhost:3000/api/entries');
		const entries = await response.json();

		const container = document.querySelector('.card-area2');
		container.innerHTML = '';
		container.style.display = 'flex';
		container.style.flexWrap = 'wrap';
		container.style.gap = '20px';
		container.style.justifyContent = 'center';

		entries.forEach((entry) => {
			const card = document.createElement('div');
			card.style.width = '400px';
			card.style.padding = '15px';
			card.style.borderRadius = '15px';
			card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
			card.style.backgroundColor = '#fff';
			card.style.display = 'flex';
			card.style.alignItems = 'center';
			card.style.gap = '15px';

			const image = document.createElement('img');
			image.src = '../img/developers.jpg';
			image.alt = 'Diary';
			image.style.width = '200px';
			image.style.height = '250px';
			image.style.borderRadius = '10px';

			const textContainer = document.createElement('div');
			textContainer.innerHTML = `
          <p><strong>Date:</strong> ${entry.entry_date}</p>
          <p><strong>Mood:</strong> ${entry.mood}</p>
          <p><strong>Weight:</strong> ${entry.weight} kg</p>
          <p><strong>Sleep:</strong> ${entry.sleep_hours} hours</p>
          <p><strong>Notes:</strong> ${entry.notes}</p>
        `;

			card.appendChild(image);
			card.appendChild(textContainer);
			container.appendChild(card);
		});
	} catch (error) {
		console.error('Virhe haettaessa päiväkirjamerkintöjä:', error);
	}
}

export { getDiaryEntries };
