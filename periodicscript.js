// Data elemen tabel periodik
const elementsData = {
    'H': {
        name: 'Hidrogen',
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
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_002_helium/element_002_helium_srp_th.png",
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
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_010_neon/element_010_neon_srp_th.png",
        atomicNumber: 10,
        atomicWeight: '20.180'
    },
    'Na': {
        name: 'Sodium',
        sifat: 'Logam Alkali',
        symbol: 'Na',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_011_sodium/element_011_sodium_srp_th.png",
        atomicNumber: 11,
        atomicWeight: '22.990'
    },
    'Mg': {
        name: 'Magnesium',
        sifat: 'Logam Alkali Tanah',
        symbol: 'Mg',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_012_magnesium/element_012_magnesium_srp_th.png",
        atomicNumber: 12,
        atomicWeight: '24.305'
    },
    'Al': {
        name: 'Aluminium',
        sifat: 'Logam Pasca Transisi',
        symbol: 'Al',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_013_aluminium/element_013_aluminium_srp_th.png",
        atomicNumber: 13,
        atomicWeight: '26.982'
    },
    'Si': {
        name: 'Silicon',
        sifat: 'Metaloid',
        symbol: 'Si',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_014_silicon/element_014_silicon_srp_th.png",
        atomicNumber: 14,
        atomicWeight: '28.085'
    },
    'P': {
        name: 'Phosphorus',
        sifat: 'Non-Logam',
        symbol: 'P',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_015_phosphorus/element_015_phosphorus_srp_th.png",
        atomicNumber: 15,
        atomicWeight: '30.974'
    },
    'S': {
        name: 'Sulfur',
        sifat: 'Non-Logam',
        symbol: 'S',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_016_sulfur/element_016_sulfur_srp_th.png",
        atomicNumber: 16,
        atomicWeight: '32.06'
    },
    'Cl': {
        name: 'Chlorine',
        sifat: 'Halogen',
        symbol: 'Cl',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_017_chlorine/element_017_chlorine_srp_th.png",
        atomicNumber: 17,
        atomicWeight: '35.45'
    },
    'Ar': {
        name: 'Argon',
        sifat: 'Gas Mulia',
        symbol: 'Ar',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_018_argon/element_018_argon_srp_th.png",
        atomicNumber: 18,
        atomicWeight: '39.948'
    },
};

// Fungsi untuk menampilkan informasi elemen
function showElementInfo(symbol) {
    const element = elementsData[symbol];

    if (element) {
        document.getElementById('default-message').style.display = 'none';
        document.getElementById('element-name').textContent = `${element.name}`;
        document.getElementById('element-sifat').textContent = `${element.sifat}`;
        document.getElementById('element-symbol').textContent = `Simbol: ${element.symbol}`;
        document.getElementById('element-image').src = element.img || '';
        document.getElementById('element-atomic-number').textContent = `Nomor Atom: ${element.atomicNumber}`;
        document.getElementById('element-atomic-weight').textContent = `Berat Atom: ${element.atomicWeight}`;

        document.querySelectorAll('.element').forEach(el => el.classList.remove('selected'));
        const selectedElement = document.querySelector(`.element[data-symbol="${symbol}"]`);
        if (selectedElement) {
            selectedElement.classList.add('selected');
        }
    }
}
