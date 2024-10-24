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
    'Li': {
        name: 'Lithium',
        sifat: 'Logam Alkali',
        symbol: 'Li',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_003_lithium/element_003_lithium_srp_th.png",
        atomicNumber: 3,
        atomicWeight: '6.94'
    },
    'Be': {
        name: 'Beryllium',
        sifat: 'Logam Alkali Tanah',
        symbol: 'Be',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_004_beryllium/element_004_beryllium_srp_th.png",
        atomicNumber: 4,
        atomicWeight: '9.0122'
    },
    'B': {
        name: 'Boron',
        sifat: 'Metaloid',
        symbol: 'B',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_005_boron/element_005_boron_srp_th.png",
        atomicNumber: 5,
        atomicWeight: '10.81'
    },
    'C': {
        name: 'Carbon',
        sifat: 'Non-Logam',
        symbol: 'C',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_006_carbon/element_006_carbon_srp_th.png",
        atomicNumber: 6,
        atomicWeight: '12.011'
    },
    'N': {
        name: 'Nitrogen',
        sifat: 'Non-Logam',
        symbol: 'N',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_007_nitrogen/element_007_nitrogen_srp_th.png",
        atomicNumber: 7,
        atomicWeight: '14.007'
    },
    'O': {
        name: 'Oxygen',
        sifat: 'Non-Logam',
        symbol: 'O',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_008_oxygen/element_008_oxygen_srp_th.png",
        atomicNumber: 8,
        atomicWeight: '15.999'
    },
    'F': {
        name: 'Fluorine',
        sifat: 'Halogen',
        symbol: 'F',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_009_fluorine/element_009_fluorine_srp_th.png",
        atomicNumber: 9,
        atomicWeight: '18.998'
    },
    'Ne': {
        name: 'Neon',
        sifat: 'Gas Mulia',
        symbol: 'Ne',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_010_neon/
    }
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
