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
        name: 'Litium',
        sifat: 'Logam Alkali',
        symbol: 'Li',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_003_lithium/element_003_lithium_srp_th.png",
        atomicNumber: 3,
        atomicWeight: '6.94'
    },
    'Be': {
        name: 'Berilium',
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
        name: 'Karbon',
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
        name: 'Oksigen',
        sifat: 'Non-Logam',
        symbol: 'O',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_008_oxygen/element_008_oxygen_srp_th.png",
        atomicNumber: 8,
        atomicWeight: '15.999'
    },
    'F': {
        name: 'Fluorin',
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
        name: 'Natrium',
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
        name: 'Silikon',
        sifat: 'Metaloid',
        symbol: 'Si',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_014_silicon/element_014_silicon_srp_th.png",
        atomicNumber: 14,
        atomicWeight: '28.085'
    },
    'P': {
        name: 'Fosfor',
        sifat: 'Non-Logam',
        symbol: 'P',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_015_phosphorus/element_015_phosphorus_srp_th.png",
        atomicNumber: 15,
        atomicWeight: '30.974'
    },
    'S': {
        name: 'Belerang',
        sifat: 'Non-Logam',
        symbol: 'S',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_016_sulfur/element_016_sulfur_srp_th.png",
        atomicNumber: 16,
        atomicWeight: '32.06'
    },
    'Cl': {
        name: 'Klorin',
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
    'K': {
        name: 'Kalium',
        sifat: 'Logam Alkali',
        symbol: 'K',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_019_potassium/element_019_potassium_srp_th.png",
        atomicNumber: 19,
        atomicWeight: '39.098'
    },
    'Ca': {
        name: 'Kalsium',
        sifat: 'Logam Alkali Tanah',
        symbol: 'Ca',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_020_calcium/element_020_calcium_srp_th.png",
        atomicNumber: 20,
        atomicWeight: '40.078'
    },
    'Sc': {
        name: 'Skandium',
        sifat: 'Logam Transisi',
        symbol: 'Sc',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_021_scandium/element_021_scandium_srp_th.png",
        atomicNumber: 21,
        atomicWeight: '44.956'
    },
    'Ti': {
        name: 'Titanium',
        sifat: 'Logam Transisi',
        symbol: 'Ti',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_022_titanium/element_022_titanium_srp_th.png",
        atomicNumber: 22,
        atomicWeight: '47.867'
    },
    'V': {
        name: 'Vanadium',
        sifat: 'Logam Transisi',
        symbol: 'V',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_023_vanadium/element_023_vanadium_srp_th.png",
        atomicNumber: 23,
        atomicWeight: '50.942'
    },
    'Cr': {
        name: 'Kromium',
        sifat: 'Logam Transisi',
        symbol: 'Cr',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_024_chromium/element_024_chromium_srp_th.png",
        atomicNumber: 24,
        atomicWeight: '51.996'
    },
    'Mn': {
        name: 'Mangan',
        sifat: 'Logam Transisi',
        symbol: 'Mn',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_025_manganese/element_025_manganese_srp_th.png",
        atomicNumber: 25,
        atomicWeight: '54.938'
    },
    'Fe': {
        name: 'Besi',
        sifat: 'Logam Transisi',
        symbol: 'Fe',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_026_iron/element_026_iron_srp_th.png",
        atomicNumber: 26,
        atomicWeight: '55.845'
    },
    'Co': {
        name: 'Kobalt',
        sifat: 'Logam Transisi',
        symbol: 'Co',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_027_cobalt/element_027_cobalt_srp_th.png",
        atomicNumber: 27,
        atomicWeight: '58.933'
    },
    'Ni': {
        name: 'Nikel',
        sifat: 'Logam Transisi',
        symbol: 'Ni',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_028_nickel/element_028_nickel_srp_th.png",
        atomicNumber: 28,
        atomicWeight: '58.693'
    },
    'Cu': {
        name: 'Tembaga',
        sifat: 'Logam Transisi',
        symbol: 'Cu',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_029_copper/element_029_copper_srp_th.png",
        atomicNumber: 29,
        atomicWeight: '63.546'
    },
    'Zn': {
        name: 'Seng',
        sifat: 'Logam Transisi',
        symbol: 'Zn',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_030_zinc/element_030_zinc_srp_th.png",
        atomicNumber: 30,
        atomicWeight: '65.38'
    },
    'Ga': {
        name: 'Galium',
        sifat: 'Logam Pasca Transisi',
        symbol: 'Ga',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_031_gallium/element_031_gallium_srp_th.png",
        atomicNumber: 31,
        atomicWeight: '69.723'
    },
    'Ge': {
        name: 'Germanium',
        sifat: 'Metaloid',
        symbol: 'Ge',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_032_germanium/element_032_germanium_srp_th.png",
        atomicNumber: 32,
        atomicWeight: '72.63'
    },
    'As': {
        name: 'Arsen',
        sifat: 'Metaloid',
        symbol: 'As',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_033_arsenic/element_033_arsenic_srp_th.png",
        atomicNumber: 33,
        atomicWeight: '74.922'
    },
    'Se': {
        name: 'Selenium',
        sifat: 'Non-Logam',
        symbol: 'Se',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_034_selenium/element_034_selenium_srp_th.png",
        atomicNumber: 34,
        atomicWeight: '78.96'
    },
    'Br': {
        name: 'Bromin',
        sifat: 'Halogen',
        symbol: 'Br',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_035_bromine/element_035_bromine_srp_th.png",
        atomicNumber: 35,
        atomicWeight: '79.904'
    },
    'Kr': {
        name: 'Kripton',
        sifat: 'Gas Mulia',
        symbol: 'Kr',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_036_krypton/element_036_krypton_srp_th.png",
        atomicNumber: 36,
        atomicWeight: '83.798'
    },
    'Rb': {
        name: 'Rubidium',
        sifat: 'Logam Alkali',
        symbol: 'Rb',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_037_rubidium/element_037_rubidium_srp_th.png",
        atomicNumber: 37,
        atomicWeight: '85.468'
    },
    'Sr': {
        name: 'Stronsium',
        sifat: 'Logam Alkali Tanah',
        symbol: 'Sr',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_038_strontium/element_038_strontium_srp_th.png",
        atomicNumber: 38,
        atomicWeight: '87.62'
    },
    'Y': {
        name: 'Itrium',
        sifat: 'Logam Transisi',
        symbol: 'Y',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_039_yttrium/element_039_yttrium_srp_th.png",
        atomicNumber: 39,
        atomicWeight: '88.906'
    },
    'Zr': {
        name: 'Zirkonium',
        sifat: 'Logam Transisi',
        symbol: 'Zr',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_040_zirconium/element_040_zirconium_srp_th.png",
        atomicNumber: 40,
        atomicWeight: '91.224'
    },
    'Nb': {
        name: 'Niobium',
        sifat: 'Logam Transisi',
        symbol: 'Nb',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_041_niobium/element_041_niobium_srp_th.png",
        atomicNumber: 41,
        atomicWeight: '92.906'
    },
    'Mo': {
        name: 'Molibdenum',
        sifat: 'Logam Transisi',
        symbol: 'Mo',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_042_molybdenum/element_042_molybdenum_srp_th.png",
        atomicNumber: 42,
        atomicWeight: '95.95'
    },
    'Tc': {
        name: 'Teknesium',
        sifat: 'Logam Transisi',
        symbol: 'Tc',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_043_technetium/element_043_technetium_srp_th.png",
        atomicNumber: 43,
        atomicWeight: '(98)'
    },
    'Ru': {
        name: 'Ruthenium',
        sifat: 'Logam Transisi',
        symbol: 'Ru',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_044_ruthenium/element_044_ruthenium_srp_th.png",
        atomicNumber: 44,
        atomicWeight: '101.07'
    },
    'Rh': {
        name: 'Rodium',
        sifat: 'Logam Transisi',
        symbol: 'Rh',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_045_rhodium/element_045_rhodium_srp_th.png",
        atomicNumber: 45,
        atomicWeight: '102.91'
    },
    'Pd': {
        name: 'Paladium',
        sifat: 'Logam Transisi',
        symbol: 'Pd',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_046_palladium/element_046_palladium_srp_th.png",
        atomicNumber: 46,
        atomicWeight: '106.42'
    },
    'Ag': {
        name: 'Perak',
        sifat: 'Logam Transisi',
        symbol: 'Ag',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_047_silver/element_047_silver_srp_th.png",
        atomicNumber: 47,
        atomicWeight: '107.87'
    },
    'Cd': {
        name: 'Kadmium',
        sifat: 'Logam Transisi',
        symbol: 'Cd',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_048_cadmium/element_048_cadmium_srp_th.png",
        atomicNumber: 48,
        atomicWeight: '112.41'
    },
    'In': {
        name: 'Indium',
        sifat: 'Logam Pasca Transisi',
        symbol: 'In',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_049_indium/element_049_indium_srp_th.png",
        atomicNumber: 49,
        atomicWeight: '114.82'
    },
    'Sn': {
        name: 'Timah',
        sifat: 'Logam Pasca Transisi',
        symbol: 'Sn',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_050_tin/element_050_tin_srp_th.png",
        atomicNumber: 50,
        atomicWeight: '118.71'
    },
    'Sb': {
        name: 'Antimon',
        sifat: 'Metaloid',
        symbol: 'Sb',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_051_antimony/element_051_antimony_srp_th.png",
        atomicNumber: 51,
        atomicWeight: '121.76'
    },
    'Te': {
        name: 'Telurium',
        sifat: 'Metaloid',
        symbol: 'Te',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_052_tellurium/element_052_tellurium_srp_th.png",
        atomicNumber: 52,
        atomicWeight: '127.60'
    },
    'I': {
        name: 'Iodin',
        sifat: 'Non-Logam',
        symbol: 'I',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_053_iodine/element_053_iodine_srp_th.png",
        atomicNumber: 53,
        atomicWeight: '126.90'
    },
    'Xe': {
        name: 'Xenon',
        sifat: 'Gas Mulia',
        symbol: 'Xe',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_054_xenon/element_054_xenon_srp_th.png",
        atomicNumber: 54,
        atomicWeight: '131.29'
    },
    'Cs': {
        name: 'Sesium',
        sifat: 'Logam Alkali',
        symbol: 'Cs',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_055_cesium/element_055_cesium_srp_th.png",
        atomicNumber: 55,
        atomicWeight: '132.91'
    },
    'Ba': {
        name: 'Barium',
        sifat: 'Logam Alkali Tanah',
        symbol: 'Ba',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_056_barium/element_056_barium_srp_th.png",
        atomicNumber: 56,
        atomicWeight: '137.33'
    },
    'La': {
        name: 'Lanthanum',
        sifat: 'Lantanida',
        symbol: 'La',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_057_lanthanum/element_057_lanthanum_srp_th.png",
        atomicNumber: 57,
        atomicWeight: '138.91'
    },
    'Ce': {
        name: 'Cerium',
        sifat: 'Lantanida',
        symbol: 'Ce',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_058_cerium/element_058_cerium_srp_th.png",
        atomicNumber: 58,
        atomicWeight: '140.12'
    },
    'Pr': {
        name: 'Praseodymium',
        sifat: 'Lantanida',
        symbol: 'Pr',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_059_praseodymium/element_059_praseodymium_srp_th.png",
        atomicNumber: 59,
        atomicWeight: '140.91'
    },
    'Nd': {
        name: 'Neodymium',
        sifat: 'Lantanida',
        symbol: 'Nd',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_060_neodymium/element_060_neodymium_srp_th.png",
        atomicNumber: 60,
        atomicWeight: '144.24'
    },
    'Pm': {
        name: 'Promethium',
        sifat: 'Lantanida',
        symbol: 'Pm',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_061_promethium/element_061_promethium_srp_th.png",
        atomicNumber: 61,
        atomicWeight: '145'
    },
    'Sm': {
        name: 'Samarium',
        sifat: 'Lantanida',
        symbol: 'Sm',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_062_samarium/element_062_samarium_srp_th.png",
        atomicNumber: 62,
        atomicWeight: '150.36'
    },
    'Eu': {
        name: 'Europium',
        sifat: 'Lantanida',
        symbol: 'Eu',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_063_europium/element_063_europium_srp_th.png",
        atomicNumber: 63,
        atomicWeight: '151.96'
    },
    'Gd': {
        name: 'Gadolinium',
        sifat: 'Lantanida',
        symbol: 'Gd',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_064_gadolinium/element_064_gadolinium_srp_th.png",
        atomicNumber: 64,
        atomicWeight: '157.25'
    },
    'Tb': {
        name: 'Terbium',
        sifat: 'Lantanida',
        symbol: 'Tb',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_065_terbium/element_065_terbium_srp_th.png",
        atomicNumber: 65,
        atomicWeight: '158.93'
    },
    'Dy': {
        name: 'Dysprosium',
        sifat: 'Lantanida',
        symbol: 'Dy',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_066_dysprosium/element_066_dysprosium_srp_th.png",
        atomicNumber: 66,
        atomicWeight: '162.50'
    },
    'Ho': {
        name: 'Holmium',
        sifat: 'Lantanida',
        symbol: 'Ho',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_067_holmium/element_067_holmium_srp_th.png",
        atomicNumber: 67,
        atomicWeight: '164.93'
    },
    'Er': {
        name: 'Erbium',
        sifat: 'Lantanida',
        symbol: 'Er',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_068_erbium/element_068_erbium_srp_th.png",
        atomicNumber: 68,
        atomicWeight: '167.26'
    },
    'Tm': {
        name: 'Thulium',
        sifat: 'Lantanida',
        symbol: 'Tm',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_069_thulium/element_069_thulium_srp_th.png",
        atomicNumber: 69,
        atomicWeight: '168.93'
    },
    'Yb': {
        name: 'Ytterbium',
        sifat: 'Lantanida',
        symbol: 'Yb',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_070_ytterbium/element_070_ytterbium_srp_th.png",
        atomicNumber: 70,
        atomicWeight: '173.04'
    },
    'Lu': {
        name: 'Lutetium',
        sifat: 'Lantanida',
        symbol: 'Lu',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_071_lutetium/element_071_lutetium_srp_th.png",
        atomicNumber: 71,
        atomicWeight: '174.97'
    },
    'Hf': {
        name: 'Hafnium',
        sifat: 'Logam Transisi',
        symbol: 'Hf',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_072_hafnium/element_072_hafnium_srp_th.png",
        atomicNumber: 72,
        atomicWeight: '178.49'
    },
    'Ta': {
        name: 'Tantalum',
        sifat: 'Logam Transisi',
        symbol: 'Ta',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_073_tantalum/element_073_tantalum_srp_th.png",
        atomicNumber: 73,
        atomicWeight: '180.95'
    },
    'W': {
        name: 'Tungsten',
        sifat: 'Logam Transisi',
        symbol: 'W',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_074_tungsten/element_074_tungsten_srp_th.png",
        atomicNumber: 74,
        atomicWeight: '183.84'
    },
    'Re': {
        name: 'Rhenium',
        sifat: 'Logam Transisi',
        symbol: 'Re',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_075_rhenium/element_075_rhenium_srp_th.png",
        atomicNumber: 75,
        atomicWeight: '186.21'
    },
    'Os': {
        name: 'Osmium',
        sifat: 'Logam Transisi',
        symbol: 'Os',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_076_osmium/element_076_osmium_srp_th.png",
        atomicNumber: 76,
        atomicWeight: '190.23'
    },
    'Ir': {
        name: 'Iridium',
        sifat: 'Logam Transisi',
        symbol: 'Ir',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_077_iridium/element_077_iridium_srp_th.png",
        atomicNumber: 77,
        atomicWeight: '192.22'
    },
    'Pt': {
        name: 'Platinum',
        sifat: 'Logam Transisi',
        symbol: 'Pt',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_078_platinum/element_078_platinum_srp_th.png",
        atomicNumber: 78,
        atomicWeight: '195.08'
    },
    'Au': {
        name: 'Gold',
        sifat: 'Logam Transisi',
        symbol: 'Au',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_079_gold/element_079_gold_srp_th.png",
        atomicNumber: 79,
        atomicWeight: '196.97'
    },
    'Hg': {
        name: 'Mercury',
        sifat: 'Logam Transisi',
        symbol: 'Hg',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_080_mercury/element_080_mercury_srp_th.png",
        atomicNumber: 80,
        atomicWeight: '200.59'
    },
    'Tl': {
        name: 'Thallium',
        sifat: 'Logam Pasca Transisi',
        symbol: 'Tl',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_081_thallium/element_081_thallium_srp_th.png",
        atomicNumber: 81,
        atomicWeight: '204.38'
    },
    'Pb': {
        name: 'Lead',
        sifat: 'Logam Pasca Transisi',
        symbol: 'Pb',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_082_lead/element_082_lead_srp_th.png",
        atomicNumber: 82,
        atomicWeight: '207.2'
    },
    'Bi': {
        name: 'Bismuth',
        sifat: 'Logam Pasca Transisi',
        symbol: 'Bi',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_083_bismuth/element_083_bismuth_srp_th.png",
        atomicNumber: 83,
        atomicWeight: '208.98'
    },
    'Po': {
        name: 'Polonium',
        sifat: 'Logam Pasca Transisi',
        symbol: 'Po',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_084_polonium/element_084_polonium_srp_th.png",
        atomicNumber: 84,
        atomicWeight: '209'
    },
    'At': {
        name: 'Astatine',
        sifat: 'Metaloid',
        symbol: 'At',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_085_astatine/element_085_astatine_srp_th.png",
        atomicNumber: 85,
        atomicWeight: '210'
    },
    'Rn': {
        name: 'Radon',
        sifat: 'Gas Mulia',
        symbol: 'Rn',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_086_radon/element_086_radon_srp_th.png",
        atomicNumber: 86,
        atomicWeight: '222'
    },
    'Fr': {
        name: 'Francium',
        sifat: 'Logam Alkali',
        symbol: 'Fr',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_087_francium/element_087_francium_srp_th.png",
        atomicNumber: 87,
        atomicWeight: '223'
    },
    'Ra': {
        name: 'Radium',
        sifat: 'Logam Alkali Tanah',
        symbol: 'Ra',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_088_radium/element_088_radium_srp_th.png",
        atomicNumber: 88,
        atomicWeight: '226'
    },
    'Ac': {
        name: 'Actinium',
        sifat: 'Aktinida',
        symbol: 'Ac',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_089_actinium/element_089_actinium_srp_th.png",
        atomicNumber: 89,
        atomicWeight: '227'
    },
    'Th': {
        name: 'Thorium',
        sifat: 'Aktinida',
        symbol: 'Th',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_090_thorium/element_090_thorium_srp_th.png",
        atomicNumber: 90,
        atomicWeight: '232.04'
    },
    'Pa': {
        name: 'Protactinium',
        sifat: 'Aktinida',
        symbol: 'Pa',
        img: "https://storage.googleapis.com-ar-edu/periodic-table/element_091_protactinium/element_091_protactinium_srp_th.png",
        atomicNumber: 91,
        atomicWeight: '231.04'
    },
    'U': {
        name: 'Uranium',
        sifat: 'Aktinida',
        symbol: 'U',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_092_uranium/element_092_uranium_srp_th.png",
        atomicNumber: 92,
        atomicWeight: '238.03'
    },
    'Np': {
        name: 'Neptunium',
        sifat: 'Aktinida',
        symbol: 'Np',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_093_neptunium/element_093_neptunium_srp_th.png",
        atomicNumber: 93,
        atomicWeight: '237'
    },
    'Pu': {
        name: 'Plutonium',
        sifat: 'Aktinida',
        symbol: 'Pu',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_094_plutonium/element_094_plutonium_srp_th.png",
        atomicNumber: 94,
        atomicWeight: '244'
    },
    'Am': {
        name: 'Americium',
        sifat: 'Aktinida',
        symbol: 'Am',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_095_americium/element_095_americium_srp_th.png",
        atomicNumber: 95,
        atomicWeight: '243'
    },
    'Cm': {
        name: 'Curium',
        sifat: 'Aktinida',
        symbol: 'Cm',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_096_curium/element_096_curium_srp_th.png",
        atomicNumber: 96,
        atomicWeight: '247'
    },
    'Bk': {
        name: 'Berkelium',
        sifat: 'Aktinida',
        symbol: 'Bk',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_097_berkelium/element_097_berkelium_srp_th.png",
        atomicNumber: 97,
        atomicWeight: '247'
    },
    'Cf': {
        name: 'Californium',
        sifat: 'Aktinida',
        symbol: 'Cf',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_098_californium/element_098_californium_srp_th.png",
        atomicNumber: 98,
        atomicWeight: '251'
    },
    'Es': {
        name: 'Einsteinium',
        sifat: 'Aktinida',
        symbol: 'Es',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_099_einsteinium/element_099_einsteinium_srp_th.png",
        atomicNumber: 99,
        atomicWeight: '252'
    },
    'Fm': {
        name: 'Fermium',
        sifat: 'Aktinida',
        symbol: 'Fm',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_100_fermium/element_100_fermium_srp_th.png",
        atomicNumber: 100,
        atomicWeight: '257'
    },
    'Md': {
        name: 'Mendelevium',
        sifat: 'Aktinida',
        symbol: 'Md',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_101_mendelevium/element_101_mendelevium_srp_th.png",
        atomicNumber: 101,
        atomicWeight: '258'
    },
    'No': {
        name: 'Nobelium',
        sifat: 'Aktinida',
        symbol: 'No',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_102_nobelium/element_102_nobelium_srp_th.png",
        atomicNumber: 102,
        atomicWeight: '259'
    },
    'Lr': {
        name: 'Lawrencium',
        sifat: 'Aktinida',
        symbol: 'Lr',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_103_lawrencium/element_103_lawrencium_srp_th.png",
        atomicNumber: 103,
        atomicWeight: '262'
    },
    'Rf': {
        name: 'Rutherfordium',
        sifat: 'Logam Transisi',
        symbol: 'Rf',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_104_rutherfordium/element_104_rutherfordium_srp_th.png",
        atomicNumber: 104,
        atomicWeight: '267'
    },
    'Db': {
        name: 'Dubnium',
        sifat: 'Logam Transisi',
        symbol: 'Db',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_105_dubnium/element_105_dubnium_srp_th.png",
        atomicNumber: 105,
        atomicWeight: '270'
    },
    'Sg': {
        name: 'Seaborgium',
        sifat: 'Logam Transisi',
        symbol: 'Sg',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_106_seaborgium/element_106_seaborgium_srp_th.png",
        atomicNumber: 106,
        atomicWeight: '271'
    },
    'Bh': {
        name: 'Bohrium',
        sifat: 'Logam Transisi',
        symbol: 'Bh',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_107_bohrium/element_107_bohrium_srp_th.png",
        atomicNumber: 107,
        atomicWeight: '270'
    },
    'Hs': {
        name: 'Hassium',
        sifat: 'Logam Transisi',
        symbol: 'Hs',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_108_hassium/element_108_hassium_srp_th.png",
        atomicNumber: 108,
        atomicWeight: '277'
    },
    'Mt': {
        name: 'Meitnerium',
        sifat: 'Logam Transisi',
        symbol: 'Mt',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_109_meitnerium/element_109_meitnerium_srp_th.png",
        atomicNumber: 109,
        atomicWeight: '278'
    },
    'Ds': {
        name: 'Darmstadtium',
        sifat: 'Logam Transisi',
        symbol: 'Ds',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_110_darmstadtium/element_110_darmstadtium_srp_th.png",
        atomicNumber: 110,
        atomicWeight: '281'
    },
    'Rg': {
        name: 'Roentgenium',
        sifat: 'Logam Transisi',
        symbol: 'Rg',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_111_roentgenium/element_111_roentgenium_srp_th.png",
        atomicNumber: 111,
        atomicWeight: '282'
    },
    'Cn': {
        name: 'Copernicium',
        sifat: 'Logam Transisi',
        symbol: 'Cn',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_112_copernicium/element_112_copernicium_srp_th.png",
        atomicNumber: 112,
        atomicWeight: '285'
    },
    'Nh': {
        name: 'Nihonium',
        sifat: 'Logam Transisi',
        symbol: 'Nh',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_113_nihonium/element_113_nihonium_srp_th.png",
        atomicNumber: 113,
        atomicWeight: '286'
    },
    'Fl': {
        name: 'Flerovium',
        sifat: 'Logam Transisi',
        symbol: 'Fl',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_114_flerovium/element_114_flerovium_srp_th.png",
        atomicNumber: 114,
        atomicWeight: '289'
    },
    'Mc': {
        name: 'Moscovium',
        sifat: 'Logam Transisi',
        symbol: 'Mc',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_115_moscovium/element_115_moscovium_srp_th.png",
        atomicNumber: 115,
        atomicWeight: '290'
    },
    'Lv': {
        name: 'Livermorium',
        sifat: 'Logam Transisi',
        symbol: 'Lv',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_116_livermorium/element_116_livermorium_srp_th.png",
        atomicNumber: 116,
        atomicWeight: '293'
    },
    'Ts': {
        name: 'Tennessine',
        sifat: 'Halogen',
        symbol: 'Ts',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_117_tennessine/element_117_tennessine_srp_th.png",
        atomicNumber: 117,
        atomicWeight: '294'
    },
    'Og': {
        name: 'Oganesson',
        sifat: 'Gas Mulia',
        symbol: 'Og',
        img: "https://storage.googleapis.com/search-ar-edu/periodic-table/element_118_oganesson/element_118_oganesson_srp_th.png",
        atomicNumber: 118,
        atomicWeight: '294'
    }
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
