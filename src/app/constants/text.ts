export type TPengantin = {
	ayah: string;
	ibu: string;
	alamat: string;
	gender: string;
	nama: string;
};
interface IFIRST_PAGE {
	deskripsi: string;
	pengantin: Array<TPengantin>;
	judul: string;
}
const FIRST_PAGE: IFIRST_PAGE = {
	deskripsi: `atas asung kerta wara nugraha ida sang hyang
    widhi wasa/tuhan yang maha esa kami akan
    menyelenggarakan upacara maduang semara
    (pawiwahan) putra putri kami`,
	pengantin: [
		{
			ayah: 'I Wayan Kari',
			ibu: 'Ni Wayan Wenten',
			alamat: 'Link - Br. Bangun Lemah Kangin',
			gender: 'Putra Kedua',
			nama: 'I Kadek Kariawan',
		},
		{
			ayah: 'I Made Rajeg',
			ibu: 'Ni Wayan Surasmin',
			alamat: 'Link - Br. Bangun Lemah Kangin',
			gender: 'Putri Kedua',
			nama: 'Ni Kadek Noviani',
		},
	],
	judul: 'Pawiwahan',
};
const SECOND_PAGE = {
	deskripsi: `Besar harapan kami Bapak/Ibu/Saudara/I dapat
    hadir serta memberikan doa restu kepada kedua
    mempelai, kami ucapkan terima kasih`,
};
export { FIRST_PAGE, SECOND_PAGE };
