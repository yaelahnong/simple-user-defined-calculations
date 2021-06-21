// wadah untuk variabel dan nilai nya
const initValue = {};

// ini rumusnya
let formula = prompt('Masukkan rumus perhitungan');
if (formula) {
	// mendapatkan variabel yang ada di formula
	// const variables = formula.match(/[a-z]+/gi);
	const variables = formula.match(/([a-zA-Z]+([0-9]+)?)/gi);
	console.log(variables);

	// menghilangkan duplikasi variabel
	const fVariables = variables.filter(function (value, index, self) {
		return self.indexOf(value) === index;
	});

	fVariables.forEach((item) => {
		// input nilai tiap tiap variabel nya
		let value = prompt(`Masukkan nilai ${item.toLowerCase()}`);
		if (value.match(/\./g) !== null) {
			value = parseFloat(value);
		} else {
			value = parseInt(value);
		}
		// initValue diisi dengan key dari tiap tiap variabel
		// dan value dari tiap tiap nilainya
		initValue[item] = value;

		// variabel pada string formula diganti
		// dengan nilai sesuai variabelnya
		formula = formula.replaceAll(item, initValue[item]);
	});
	alert(`Hasil dari perhitungan ${formula} adalah ${eval(formula)}`);
} else {
	alert('Kamu belum memasukkan rumus.');
}
