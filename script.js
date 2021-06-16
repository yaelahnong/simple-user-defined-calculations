// wadah untuk variabel dan nilai nya
const initValue = {};

// ini rumusnya
let formula = prompt('Masukkan rumus perhitungan');
if (formula) {
	// mendapatkan variabel yang ada di formula
	let variables = formula.match(/pi|[a-z]/g);

	// menghilangkan duplikasi variabel
	variables = variables.filter(function (value, index, self) {
		return self.indexOf(value) === index;
	});

	variables.forEach((item) => {
		// input nilai tiap tiap variabel nya
		let value = prompt(`Masukkan nilai ${item}`);
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
		formula = formula.replace(item, initValue[item]);
	});
	alert(`Hasilnya adalah ${eval(formula)}`);
} else {
	alert('Kamu belum memasukkan rumus.');
}
