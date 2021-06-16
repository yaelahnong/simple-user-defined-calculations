// wadah untuk variabel dan nilai nya
const initValue = {};

// ini rumusnya
let formula = prompt('Masukkan rumus perhitungan');
if (formula) {
	// mendapatkan variabel yang ada di formula
	const variables = formula.match(/pi|[a-z]/g);

	// menghilangkan duplikasi variabel
	const fVariables = variables.filter(function (value, index, self) {
		return self.indexOf(value) === index;
	});

	for (let i = 0; i < variables.length; i++) {
		// input nilai tiap tiap variabel nya
		let value = prompt(`Masukkan nilai ${fVariables[i]}`);
		if (value.match(/\./g) !== null) {
			value = parseFloat(value);
		} else {
			value = parseInt(value);
		}
		// initValue diisi dengan key dari tiap tiap variabel
		// dan value dari tiap tiap nilainya
		initValue[fVariables[i]] = value;

		// variabel pada string formula diganti
		// dengan nilai sesuai variabelnya
		console.log(formula);
		formula = formula.replace(variables[i], initValue[fVariables[i]]);
		console.log(formula);
	}
	alert(`Hasilnya adalah ${eval(formula)}`);
} else {
	alert('Kamu belum memasukkan rumus.');
}
