// Data elemen tabel periodik
const elementsData = {
    'H': {
        name: 'Hydrogen',
        sifat: 'Non-Logam',
        symbol: 'H',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen_srp_th.png",
        atomicNumber: 1,
        atomicWeight: '1.008'
    },
    'He': {
        name: 'Helium',
        sifat: 'Gas Mulia',
        symbol: 'He',
        img:"https://storage.googleapis.com/search-ar-edu/periodic-table/element_002_helium/element_002_helium_srp_th.png",
        atomicNumber: 2,
        atomicWeight: '4.0026'
    },
    // Tambahkan lebih banyak elemen di sini
};

// Fungsi untuk menampilkan informasi elemen
function showElementInfo(symbol) {
    const element = elementsData[symbol];

    if (element) {
        document.getElementById('element-name').textContent = `${element.name}`;
        document.getElementById('element-sifat').textContent = `${element.sifat}`;
        document.getElementById('element-symbol').textContent = `Simbol: ${element.symbol}`;
        document.getElementById('element-image').src = element.img || '';
        document.getElementById('element-atomic-number').textContent = `Nomor Atom: ${element.atomicNumber}`;
        document.getElementById('element-atomic-weight').textContent = `Berat Atom: ${element.atomicWeight}`;
    }
}
