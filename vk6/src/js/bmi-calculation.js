function calculateBMI() {
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
	const resultElement = document.getElementById('bmi-result');
	const analysisElement = document.getElementById('bmi-analysis');

	const underweightRow = document.getElementById('underweight-row');
	const normalRow = document.getElementById('normal-row');
	const overweightRow = document.getElementById('overweight-row');

	underweightRow.classList.remove('highlight');
	normalRow.classList.remove('highlight');
	overweightRow.classList.remove('highlight');
	resultElement.textContent = '0';
	analysisElement.textContent =
		'Analyysi: Tähän saat tietoa painoindeksistäsi';

	if (!weight || !height || weight <= 0 || height <= 0) {
		resultElement.innerHTML = 'Syötä kelvolliset arvot.';
		analysisElement.innerHTML = 'Analyysi: Virhe, Syötä kelvolliset arvot.';
		return;
	}

	const bmi = weight / Math.pow(height / 100, 2);
	resultElement.innerHTML = bmi.toFixed(2);

	let analysis = '';
	if (bmi < 18.5) {
		analysis =
			'Painoindeksi on alipainon alueella. Tämä voi merkitä alhaista lihasmassaa tai ravitsemuspuutetta. Keskustele tarvittaessa terveydenhuollon ammattilaisen kanssa.';
		underweightRow.classList.add('highlight');
	} else if (bmi >= 18.5 && bmi < 25) {
		analysis =
			'Painoindeksi on normaalilla alueella. Tämä viittaa yleisesti terveelliseen painoon pituuteesi nähden.';
		normalRow.classList.add('highlight');
	} else {
		analysis =
			'Painoindeksi on ylipainon alueella. Tämä voi lisätä riskiä terveysongelmiin. Harkitse terveellisiä elämäntapamuutoksia.';
		overweightRow.classList.add('highlight');
	}

	analysisElement.innerHTML = `Analyysi: ${analysis}.`;
}
