function object() {
	let consoleGame = {
		type    : "PS5",
		warna   : "putih",
		harga   : 8500000,
		jumlah  : 1,
      garansi : "1 Tahun"
	}
	console.log(consoleGame);

	consoleGame.warna = "Hitam";
   consoleGame.jumlah = 3;

	console.log(consoleGame);
}

object()