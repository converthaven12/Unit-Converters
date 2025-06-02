const Definations: any = {
  Acres: [
    {
      unit: "Square Chain",
      description:
        "1 acre is equal to 10 square chains. A square chain is defined as 66 feet × 66 feet (4356 sq ft), and since an acre is 43,560 sq ft, it equals 10 square chains.",
      conversion: 10,
      example: "5 acres = 50 square chains",
    },
    {
      unit: "Square Feet",
      description:
        "1 acre is equal to 43,560 square feet. This is the most commonly used imperial unit for small land areas.",
      conversion: 43560,
      example: "2 acres = 87,120 square feet",
    },
    {
      unit: "Hectare",
      description:
        "1 acre is equal to approximately 0.404686 hectares. A hectare is 10,000 square meters.",
      conversion: 0.404686,
      example: "10 acres ≈ 4.04686 hectares",
    },
    {
      unit: "Square Meter",
      description:
        "1 acre is equal to 4,046.86 square meters. This is a metric unit commonly used worldwide.",
      conversion: 4046.86,
      example: "0.5 acre ≈ 2,023.43 square meters",
    },
    {
      unit: "Square Mile",
      description:
        "1 acre is approximately 0.0015625 square miles. A square mile equals 640 acres.",
      conversion: 0.0015625,
      example: "1,000 acres ≈ 1.5625 square miles",
    },
    {
      unit: "Square Kilometer",
      description:
        "1 acre is equal to approximately 0.00404686 square kilometers.",
      conversion: 0.00404686,
      example: "500 acres ≈ 2.02343 square kilometers",
    },
    {
      unit: "Square Centimeter",
      description: "1 acre equals about 40,468,600 square centimeters.",
      conversion: 40468600,
      example: "0.1 acre = 4,046,860 square centimeters",
    },
    {
      unit: "Square Millimeter",
      description: "1 acre equals about 4.04686 × 10⁹ square millimeters.",
      conversion: 4046860000,
      example: "0.01 acre = 40,468,600 square millimeters",
    },
    {
      unit: "Square Yard",
      description: "1 acre is equal to 4,840 square yards.",
      conversion: 4840,
      example: "3 acres = 14,520 square yards",
    },
    {
      unit: "Square Inch",
      description: "1 acre equals 6,272,640 square inches.",
      conversion: 6272640,
      example: "0.25 acre = 1,568,160 square inches",
    },
    {
      unit: "Square Rod",
      description:
        "1 acre equals 160 square rods (also called square poles or square perches).",
      conversion: 160,
      example: "2.5 acres = 400 square rods",
    },
    {
      unit: "Rood",
      description: "1 acre equals 4 roods. A rood is 1/4 of an acre.",
      conversion: 4,
      example: "8 acres = 32 roods",
    },
    {
      unit: "Arpent",
      description:
        "1 acre equals about 0.343164 arpents. An arpent is a French unit of area used in Louisiana.",
      conversion: 0.343164,
      example: "20 acres ≈ 6.86328 arpents",
    },
    {
      unit: "Barn",
      description:
        "1 acre equals about 4.04686 × 10³⁴ barns. A barn is a unit of area used in nuclear physics.",
      conversion: 4.04686e34,
      example: "0.0001 acre ≈ 4.04686 × 10³⁰ barns",
    },
    {
      unit: "Circular Inch",
      description: "1 acre equals about 1,973.53 circular inches.",
      conversion: 1973.53,
      example: "5 acres ≈ 9,867.65 circular inches",
    },
    {
      unit: "Township",
      description:
        "1 acre equals about 0.0000108506 townships. A township is 36 square miles.",
      conversion: 0.0000108506,
      example: "10,000 acres ≈ 0.108506 townships",
    },
    {
      unit: "Homestead",
      description: "1 acre equals 0.0025 homesteads. A homestead is 160 acres.",
      conversion: 0.0025,
      example: "400 acres = 1 homestead",
    },
    {
      unit: "Sabin",
      description: "1 acre equals 43,560 sabins (square feet).",
      conversion: 43560,
      example: "0.5 acre = 21,780 sabins",
    },
    {
      unit: "Cuerda",
      description:
        "1 acre equals about 0.629371 cuerdas, a unit used in Puerto Rico.",
      conversion: 0.629371,
      example: "15 acres ≈ 9.44057 cuerdas",
    },
    {
      unit: "Varas Castellanas Cuad",
      description:
        "1 acre equals about 3,537.94 varas castellanas cuad, a traditional Spanish unit.",
      conversion: 3537.94,
      example: "2 acres ≈ 7,075.88 varas castellanas cuad",
    },
    {
      unit: "Varas Conuqueras Cuad",
      description:
        "1 acre equals about 393.105 varas conuqueras cuad, another traditional Spanish unit.",
      conversion: 393.105,
      example: "3 acres ≈ 1,179.32 varas conuqueras cuad",
    },
    {
      unit: "Football Field (including end zones)",
      description:
        "An American football field measures about 1.32 acres including end zones.",
      conversion: 0.757576,
      example: "10 acres ≈ 7.58 football fields",
    },
    {
      unit: "Tennis Courts (doubles)",
      description:
        "About 16 doubles tennis courts can fit in 1 acre (each court ≈ 0.0625 acres).",
      conversion: 16,
      example: "5 acres ≈ 80 tennis courts",
    },
    {
      unit: "Baseball Field (average)",
      description: "A typical baseball field occupies about 2-3 acres of land.",
      conversion: 0.4,
      example: "20 acres ≈ 8 baseball fields",
    },
  ],
  Bar: [
    {
      unit: "Pound per square inch (psi)",
      description:
        "The most common pressure unit in imperial systems, used in automotive, industrial, and many engineering applications.",
      conversion: 0.0689476,
      example: "1 bar = 14.5038 psi, 2 bar = 29.0075 psi",
    },
    {
      unit: "Pascal (Pa)",
      description:
        "The SI unit of pressure, defined as one newton per square meter.",
      conversion: 1e-5,
      example: "1 bar = 100,000 Pa, 0.5 bar = 50,000 Pa",
    },
    {
      unit: "Kilopascal (kPa)",
      description:
        "Commonly used in engineering and scientific applications, equal to 1,000 pascals.",
      conversion: 0.01,
      example: "1 bar = 100 kPa, 3 bar = 300 kPa",
    },
    {
      unit: "Kilopound per square inch (ksi)",
      description:
        "Used in materials science and engineering for high-pressure applications.",
      conversion: 0.0000689476,
      example: "1 bar ≈ 0.0145 ksi, 10 bar ≈ 0.145 ksi",
    },
    {
      unit: "Standard Atmosphere (atm)",
      description:
        "Standard reference pressure defined as 101,325 Pa, approximately equal to Earth's atmospheric pressure at sea level.",
      conversion: 0.986923,
      example: "1 bar ≈ 0.987 atm, 2 bar ≈ 1.974 atm",
    },
    {
      unit: "Bar",
      description:
        "Metric unit of pressure, equal to 100,000 pascals, commonly used in meteorology.",
      conversion: 1,
      example: "1 bar = 1 bar (base unit)",
    },
    {
      unit: "Millibar (mbar)",
      description:
        "Commonly used in meteorology, equal to one-thousandth of a bar.",
      conversion: 1,
      example: "1 bar = 1,000 mbar, 0.3 bar = 300 mbar",
    },
    {
      unit: "Megapascal (MPa)",
      description:
        "Used in high-pressure applications like hydraulic systems and material strength testing.",
      conversion: 1e-7,
      example: "1 bar = 0.1 MPa, 5 bar = 0.5 MPa",
    },
    {
      unit: "Newton per square meter (N/m²)",
      description: "Equivalent to the pascal, the SI derived unit of pressure.",
      conversion: 1e-5,
      example: "1 bar = 100,000 N/m², 2 bar = 200,000 N/m²",
    },
    {
      unit: "Kilogram-force per square centimeter",
      description:
        "Metric engineering unit of pressure, also called technical atmosphere.",
      conversion: 0.000101972,
      example: "1 bar ≈ 1.01972 kgf/cm², 10 bar ≈ 10.1972 kgf/cm²",
    },
    {
      unit: "Torr",
      description:
        "Unit based on the original Torricelli barometer measurement, equal to 1/760 of standard atmospheric pressure.",
      conversion: 0.00133322,
      example: "1 bar ≈ 750.062 Torr, 2 bar ≈ 1,500.12 Torr",
    },
    {
      unit: "Millimeter of mercury (mmHg)",
      description:
        "Common medical unit for blood pressure and other physiological measurements.",
      conversion: 0.0133322,
      example: "1 bar ≈ 750.062 mmHg, 0.5 bar ≈ 375.031 mmHg",
    },
    {
      unit: "Inch of mercury (inHg)",
      description:
        "Commonly used in aviation and meteorology for atmospheric pressure measurements.",
      conversion: 0.000518613,
      example: "1 bar ≈ 29.53 inHg, 2 bar ≈ 59.06 inHg",
    },
    {
      unit: "Inch of water (inH₂O)",
      description:
        "Used for low pressure differentials in ventilation systems and natural gas distribution.",
      conversion: 0.00401474,
      example: "1 bar ≈ 401.463 inH₂O, 0.1 bar ≈ 40.1463 inH₂O",
    },
    {
      unit: "Technical atmosphere (at)",
      description: "Defined as one kilogram-force per square centimeter.",
      conversion: 0.000980665,
      example: "1 bar ≈ 1.01972 at, 5 bar ≈ 5.09858 at",
    },
    {
      unit: "Pound-force per square foot (psf)",
      description:
        "Imperial unit used in architectural and civil engineering applications.",
      conversion: 0.000478803,
      example: "1 bar ≈ 2,088.54 psf, 2 bar ≈ 4,177.09 psf",
    },
    {
      unit: "Dyne per square centimeter (dyn/cm²)",
      description: "CGS unit of pressure, commonly used in acoustics.",
      conversion: 1000,
      example: "1 bar = 1,000,000 dyn/cm², 0.2 bar = 200,000 dyn/cm²",
    },
    {
      unit: "Centimeter of water (cmH₂O)",
      description:
        "Medical and physiological pressure unit, especially for respiratory pressures.",
      conversion: 0.0101974,
      example: "1 bar ≈ 1,019.72 cmH₂O, 0.5 bar ≈ 509.858 cmH₂O",
    },
    {
      unit: "Kip per square inch (ksi)",
      description:
        "Used in structural engineering and materials science (1 kip = 1,000 pounds).",
      conversion: 6.89476e-6,
      example: "1 bar ≈ 0.0145038 ksi, 100 bar ≈ 1.45038 ksi",
    },
    {
      unit: "Micropascal (μPa)",
      description:
        "Used for extremely precise pressure measurements in scientific research.",
      conversion: 1e8,
      example: "1 bar = 100,000,000,000 μPa, 0.01 bar = 1,000,000,000 μPa",
    },
    {
      unit: "Gigapascal (GPa)",
      description:
        "Used in materials science for measuring modulus of elasticity and tensile strength.",
      conversion: 1e-10,
      example: "1 bar = 0.0001 GPa, 10,000 bar = 1 GPa",
    },
    {
      unit: "Hectopascal (hPa)",
      description:
        "Equivalent to millibar, commonly used in meteorology worldwide.",
      conversion: 0.001,
      example: "1 bar = 1,000 hPa, 0.5 bar = 500 hPa",
    },
    {
      unit: "Decapascal (daPa)",
      description:
        "Equal to 10 pascals, sometimes used in European meteorological reports.",
      conversion: 0.01,
      example: "1 bar = 10,000 daPa, 2 bar = 20,000 daPa",
    },
    {
      unit: "Microbar (μbar)",
      description:
        "Equal to one dyne per square centimeter, used in some scientific contexts.",
      conversion: 1000,
      example: "1 bar = 1,000,000 μbar, 0.001 bar = 1,000 μbar",
    },
    {
      unit: "Poundal per square foot",
      description: "Obsolete unit from the foot-pound-second system of units.",
      conversion: 0.00231694,
      example: "1 bar ≈ 67,196.9 poundal/ft², 0.1 bar ≈ 6,719.69 poundal/ft²",
    },
    {
      unit: "Ton-force (short) per square inch",
      description:
        "Used in some heavy industrial applications (US short ton = 2,000 lb).",
      conversion: 7.25189e-7,
      example:
        "1 bar ≈ 0.00725189 ton-force/in², 100 bar ≈ 0.725189 ton-force/in²",
    },
    {
      unit: "Barye (Ba)",
      description:
        "CGS unit of pressure equal to 1 dyne per square centimeter.",
      conversion: 1000,
      example: "1 bar = 1,000,000 Ba, 0.5 bar = 500,000 Ba",
    },
    {
      unit: "Meter of water column (mH₂O)",
      description: "Used in hydraulics and plumbing for pressure measurements.",
      conversion: 0.000101974,
      example: "1 bar ≈ 10.1974 mH₂O, 2 bar ≈ 20.3948 mH₂O",
    },
    {
      unit: "Foot of water (ftH₂O)",
      description:
        "Used in some engineering applications, especially in the US.",
      conversion: 0.000334562,
      example: "1 bar ≈ 33.4553 ftH₂O, 0.5 bar ≈ 16.7276 ftH₂O",
    },
    {
      unit: "Millitorr (mTorr)",
      description: "Used in vacuum physics and engineering.",
      conversion: 1.33322,
      example: "1 bar ≈ 750,062 mTorr, 0.001 bar ≈ 750.062 mTorr",
    },
  ],
  Binary: [
    {
      unit: "Binary (Base-2)",
      description:
        "The binary numeral system represents numeric values using two symbols: 0 and 1. It's the fundamental language of computers.",
      example: "1010 (binary) = 10 (decimal)",
    },
    {
      unit: "Decimal (Base-10)",
      description:
        "The standard numbering system using digits 0-9. This is the system humans use in everyday life.",
      example: "42 (decimal) = 42 (decimal)",
    },
    {
      unit: "Octal (Base-8)",
      description:
        "Uses digits 0-7. Historically important in computing systems and digital displays.",
      example: "52 (octal) = 42 (decimal)",
    },
    {
      unit: "Hexadecimal (Base-16)",
      description:
        "Uses digits 0-9 and letters A-F. Widely used in computing and programming for compact representation.",
      example: "2A (hex) = 42 (decimal)",
    },
    {
      unit: "Base-3 (Ternary)",
      description:
        "Uses digits 0-2. Used in some specialized computing applications and mathematics.",
      example: "1120 (base-3) = 42 (decimal)",
    },
    {
      unit: "Base-4 (Quaternary)",
      description:
        "Uses digits 0-3. Occasionally used in mathematics and computing theory.",
      example: "222 (base-4) = 42 (decimal)",
    },
    {
      unit: "Base-5 (Quinary)",
      description:
        "Uses digits 0-4. Historically used by some cultures and in mathematical puzzles.",
      example: "132 (base-5) = 42 (decimal)",
    },
    {
      unit: "Base-6 (Senary)",
      description:
        "Uses digits 0-5. Used in some measurement systems and mathematical studies.",
      example: "110 (base-6) = 42 (decimal)",
    },
    {
      unit: "Base-7 (Septenary)",
      description:
        "Uses digits 0-6. Rarely used but appears in some mathematical contexts.",
      example: "60 (base-7) = 42 (decimal)",
    },
    {
      unit: "Base-9 (Nonary)",
      description:
        "Uses digits 0-8. Occasionally used in mathematical research and puzzles.",
      example: "46 (base-9) = 42 (decimal)",
    },
    {
      unit: "Base-11 (Undecimal)",
      description:
        "Uses digits 0-A. Appears in some specialized mathematical applications.",
      example: "39 (base-11) = 42 (decimal)",
    },
    {
      unit: "Base-12 (Duodecimal)",
      description:
        "Uses digits 0-B. Historically important in measurement systems (inches in a foot, months in a year).",
      example: "36 (base-12) = 42 (decimal)",
    },
    {
      unit: "Base-13 (Tridecimal)",
      description:
        "Uses digits 0-C. Rare but appears in some mathematical studies.",
      example: "33 (base-13) = 42 (decimal)",
    },
    {
      unit: "Base-14 (Tetradecimal)",
      description:
        "Uses digits 0-D. Occasionally used in mathematical research.",
      example: "30 (base-14) = 42 (decimal)",
    },
    {
      unit: "Base-15 (Pentadecimal)",
      description:
        "Uses digits 0-E. Appears in some specialized mathematical contexts.",
      example: "2C (base-15) = 42 (decimal)",
    },
    {
      unit: "Base-17 (Heptadecimal)",
      description:
        "Uses digits 0-G. Used in some advanced mathematical research.",
      example: "28 (base-17) = 42 (decimal)",
    },
    {
      unit: "Base-20 (Vigesimal)",
      description:
        "Uses digits 0-J. Historically used by the Maya and other cultures.",
      example: "22 (base-20) = 42 (decimal)",
    },
    {
      unit: "Base-24 (Tetravigesimal)",
      description:
        "Uses digits 0-N. Used in some timekeeping and measurement systems.",
      example: "1I (base-24) = 42 (decimal)",
    },
    {
      unit: "Base-32 (Duotrigesimal)",
      description:
        "Uses digits 0-V. Sometimes used in computing as a compact representation.",
      example: "1A (base-32) = 42 (decimal)",
    },
    {
      unit: "Base-36 (Hexatridecimal)",
      description:
        "Uses digits 0-Z. The highest base that can be represented with Arabic numerals (0-9) and Latin letters (A-Z).",
      example: "16 (base-36) = 42 (decimal)",
    },
    {
      unit: "Base-64",
      description:
        "Uses A-Z, a-z, 0-9, and +/ symbols. Primarily used in data encoding (like Base64 encoding for binary data).",
      example: "q (base-64) = 42 (decimal)",
    },
  ],
  BTU: [
    {
      unit: "Ton of Refrigeration",
      description:
        "A unit of power used in refrigeration and air conditioning, equal to the cooling power of one ton of ice melting in 24 hours.",
      conversion: 0.0000833333,
      example: "1 BTU/h ≈ 0.0000833 tons, 12,000 BTU/h = 1 ton",
    },
    {
      unit: "Watt (W)",
      description:
        "The SI unit of power, equal to one joule per second. Used across all scientific and engineering disciplines.",
      conversion: 0.293071,
      example: "1 BTU/h ≈ 0.293 W, 5,000 BTU/h ≈ 1,465.36 W",
    },
    {
      unit: "Kilowatt (kW)",
      description:
        "Commonly used for electrical power ratings and engine power outputs (1,000 watts).",
      conversion: 0.000293071,
      example: "1 BTU/h ≈ 0.000293 kW, 10,000 BTU/h ≈ 2.9307 kW",
    },
    {
      unit: "Megawatt (MW)",
      description:
        "Used for large-scale power generation and industrial applications (1,000,000 watts).",
      conversion: 2.93071e-7,
      example: "1 BTU/h ≈ 2.93e-7 MW, 1,000,000 BTU/h ≈ 0.293 MW",
    },
    {
      unit: "Horsepower (hp)",
      description:
        "Traditional unit of mechanical power, originally developed to compare steam engine power to draft horses.",
      conversion: 0.000393015,
      example: "1 BTU/h ≈ 0.000393 hp, 20,000 BTU/h ≈ 7.860 hp",
    },
    {
      unit: "British Thermal Unit per hour (BTU/h)",
      description:
        "Common unit for heating and cooling systems in the US, equal to the energy needed to raise 1 pound of water by 1°F per hour.",
      conversion: 1,
      example: "1 BTU/h = 1 BTU/h (base unit)",
    },
    {
      unit: "Foot-pound force per second (ft·lbf/s)",
      description:
        "Imperial unit of power, representing the power needed to raise 1 pound by 1 foot every second.",
      conversion: 0.216158,
      example: "1 BTU/h ≈ 0.216 ft·lbf/s, 5 BTU/h ≈ 1.081 ft·lbf/s",
    },
    {
      unit: "Kilocalorie per hour (kcal/h)",
      description:
        "Common unit in heating applications, especially in Europe (1 kcal/h = 1.163 watts).",
      conversion: 0.251996,
      example: "1 BTU/h ≈ 0.252 kcal/h, 10 BTU/h ≈ 2.52 kcal/h",
    },
    {
      unit: "Volt-ampere (VA)",
      description:
        "Used in electrical engineering to measure apparent power in AC circuits.",
      conversion: 0.293071,
      example: "1 BTU/h ≈ 0.293 VA, 100 BTU/h ≈ 29.307 VA",
    },
    {
      unit: "Joule per second (J/s)",
      description: "Equivalent to the watt, the SI derived unit of power.",
      conversion: 0.293071,
      example: "1 BTU/h ≈ 0.293 J/s, 50 BTU/h ≈ 14.654 J/s",
    },
    {
      unit: "Erg per second (erg/s)",
      description: "CGS unit of power (1 erg/s = 10^-7 watts).",
      conversion: 2930710,
      example: "1 BTU/h ≈ 2.93e6 erg/s, 0.1 BTU/h ≈ 293,071 erg/s",
    },
    {
      unit: "Metric horsepower (PS)",
      description:
        "European measurement of engine power, slightly different than mechanical horsepower.",
      conversion: 0.000398466,
      example: "1 BTU/h ≈ 0.000398 PS, 15,000 BTU/h ≈ 5.977 PS",
    },
    {
      unit: "MBH (Thousand BTU per hour)",
      description:
        "Common HVAC industry unit for heating and cooling capacity.",
      conversion: 0.001,
      example: "1 BTU/h = 0.001 MBH, 24,000 BTU/h = 24 MBH",
    },
    {
      unit: "Calorie per second (cal/s)",
      description:
        "Used in some thermodynamic calculations and nutritional studies.",
      conversion: 0.0699988,
      example: "1 BTU/h ≈ 0.07 cal/s, 500 BTU/h ≈ 35 cal/s",
    },
    {
      unit: "Kilojoule per hour (kJ/h)",
      description:
        "Used in some engineering applications for energy transfer rates.",
      conversion: 1.05506,
      example: "1 BTU/h ≈ 1.055 kJ/h, 10 BTU/h ≈ 10.55 kJ/h",
    },
    {
      unit: "Gigawatt (GW)",
      description:
        "Used for national power grids and large power plants (1,000,000,000 watts).",
      conversion: 2.93071e-10,
      example: "1 BTU/h ≈ 2.93e-10 GW, 1e9 BTU/h ≈ 0.293 GW",
    },
    {
      unit: "Milliwatt (mW)",
      description: "Used for measuring small power levels in electronics.",
      conversion: 293.071,
      example: "1 BTU/h ≈ 293.071 mW, 0.5 BTU/h ≈ 146.536 mW",
    },
    {
      unit: "Microwatt (μW)",
      description: "Used for very low power measurements in microelectronics.",
      conversion: 293071,
      example: "1 BTU/h ≈ 293,071 μW, 0.01 BTU/h ≈ 2,930.71 μW",
    },
    {
      unit: "Nanowatt (nW)",
      description:
        "Used in specialized scientific instruments and ultra-low-power electronics.",
      conversion: 2.93071e8,
      example: "1 BTU/h ≈ 2.93e8 nW, 0.001 BTU/h ≈ 293,071 nW",
    },
    {
      unit: "Pferdestärke (PS)",
      description:
        "German name for metric horsepower, used in European automotive industry.",
      conversion: 0.000398466,
      example: "1 BTU/h ≈ 0.000398 PS, 10,000 BTU/h ≈ 3.985 PS",
    },
    {
      unit: "Boiler horsepower",
      description:
        "Historical unit used to rate steam boilers (≈ 9,809.5 watts).",
      conversion: 2.98733e-5,
      example: "1 BTU/h ≈ 2.99e-5 boiler hp, 33,475 BTU/h ≈ 1 boiler hp",
    },
    {
      unit: "Electric horsepower",
      description: "Used for electric motors (exactly 746 watts).",
      conversion: 0.000392857,
      example: "1 BTU/h ≈ 0.000393 electric hp, 2,550 BTU/h ≈ 1 electric hp",
    },
    {
      unit: "Water horsepower",
      description: "Used in hydraulic engineering calculations.",
      conversion: 0.000392782,
      example: "1 BTU/h ≈ 0.000393 water hp, 2,550 BTU/h ≈ 1 water hp",
    },
    {
      unit: "Thermal BTU per hour (BTUth/h)",
      description:
        "Based on the thermochemical calorie, slightly different from IT BTU.",
      conversion: 1.00067,
      example: "1 BTU/h ≈ 1.00067 BTUth/h, 100 BTU/h ≈ 100.067 BTUth/h",
    },
    {
      unit: "Thermal kilocalorie per hour (kcalth/h)",
      description: "Based on the thermochemical calorie.",
      conversion: 0.252164,
      example: "1 BTU/h ≈ 0.252 kcalth/h, 50 BTU/h ≈ 12.608 kcalth/h",
    },
    {
      unit: "Foot-pound force per minute (ft·lbf/min)",
      description:
        "Alternative imperial unit for rotational power measurements.",
      conversion: 12.9695,
      example: "1 BTU/h ≈ 12.97 ft·lbf/min, 10 BTU/h ≈ 129.695 ft·lbf/min",
    },
    {
      unit: "Foot-pound force per hour (ft·lbf/h)",
      description:
        "Used for very small power measurements in mechanical systems.",
      conversion: 778.169,
      example: "1 BTU/h ≈ 778.169 ft·lbf/h, 0.1 BTU/h ≈ 77.817 ft·lbf/h",
    },
    {
      unit: "Terawatt (TW)",
      description:
        "Used for global energy production measurements (1,000,000,000,000 watts).",
      conversion: 2.93071e-13,
      example: "1 BTU/h ≈ 2.93e-13 TW, 1e12 BTU/h ≈ 0.293 TW",
    },
    {
      unit: "Petawatt (PW)",
      description:
        "Used for extreme power measurements like laser pulses (10^15 watts).",
      conversion: 2.93071e-16,
      example: "1 BTU/h ≈ 2.93e-16 PW, 1e15 BTU/h ≈ 0.293 PW",
    },
    {
      unit: "Exawatt (EW)",
      description:
        "Used for theoretical or astronomical power scales (10^18 watts).",
      conversion: 2.93071e-19,
      example: "1 BTU/h ≈ 2.93e-19 EW, 1e18 BTU/h ≈ 0.293 EW",
    },
  ],
  Cm: [
    {
      unit: "Kilometer (km)",
      description:
        "The kilometer is the standard metric unit for measuring longer distances, equal to 1,000 meters.",
      conversion: 1000,
      example: "1 cm = 0.00001 km, 100,000 cm = 1 km",
    },
    {
      unit: "Meter (m)",
      description:
        "The fundamental SI unit of length, defined as the distance light travels in a vacuum in 1/299,792,458 seconds.",
      conversion: 1,
      example: "1 cm = 0.01 m, 100 cm = 1 m",
    },
    {
      unit: "Centimeter (cm)",
      description:
        "Commonly used for everyday measurements, equal to 0.01 meters.",
      conversion: 0.01,
      example: "1 cm = 1 cm (base unit), 2.54 cm = 1 inch",
    },
    {
      unit: "Millimeter (mm)",
      description:
        "Used for precise measurements in engineering and manufacturing, equal to 0.001 meters.",
      conversion: 0.001,
      example: "1 cm = 10 mm, 15 cm = 150 mm",
    },
    {
      unit: "Mile (mi)",
      description:
        "Standard imperial unit for long distances, commonly used in the United States and UK.",
      conversion: 1609.344,
      example: "1 cm ≈ 0.0000062137 mi, 160,934 cm ≈ 1 mi",
    },
    {
      unit: "Yard (yd)",
      description:
        "Imperial unit equal to 3 feet, commonly used in sports and construction.",
      conversion: 0.9144,
      example: "1 cm ≈ 0.0109361 yd, 91.44 cm = 1 yd",
    },
    {
      unit: "Foot (ft)",
      description:
        "Imperial unit based on the human foot, widely used in the United States.",
      conversion: 0.3048,
      example: "1 cm ≈ 0.0328084 ft, 30.48 cm = 1 ft",
    },
    {
      unit: "Inch (in)",
      description:
        "Small imperial unit commonly used for measurements in manufacturing and construction.",
      conversion: 0.0254,
      example: "1 cm ≈ 0.393701 in, 2.54 cm = 1 in",
    },
    {
      unit: "Light Year (ly)",
      description:
        "Astronomical distance that light travels in one year, used for interstellar distances.",
      conversion: 9.4607e15,
      example: "1 cm ≈ 1.057e-18 ly, 9.4607e17 cm ≈ 1 ly",
    },
    {
      unit: "Nautical Mile (nmi)",
      description:
        "Used in maritime and aviation navigation, equal to one minute of latitude.",
      conversion: 1852,
      example: "1 cm ≈ 5.3996e-6 nmi, 185,200 cm ≈ 1 nmi",
    },
    {
      unit: "Astronomical Unit (AU)",
      description:
        "Average distance from Earth to the Sun, used for solar system measurements.",
      conversion: 1.496e11,
      example: "1 cm ≈ 6.6846e-14 AU, 1.496e13 cm ≈ 1 AU",
    },
    {
      unit: "Parsec (pc)",
      description:
        "Astronomical unit equal to about 3.26 light years, used in astrophysics.",
      conversion: 3.0857e16,
      example: "1 cm ≈ 3.2408e-19 pc, 3.0857e18 cm ≈ 1 pc",
    },
    {
      unit: "Micrometer (μm)",
      description:
        "Used for microscopic measurements in biology and engineering.",
      conversion: 1e-6,
      example: "1 cm = 10,000 μm, 0.1 cm = 1,000 μm",
    },
    {
      unit: "Nanometer (nm)",
      description: "Used in nanotechnology and light wavelength measurements.",
      conversion: 1e-9,
      example: "1 cm = 10,000,000 nm, 0.01 cm = 100,000 nm",
    },
    {
      unit: "Angstrom (Å)",
      description: "Used in chemistry and physics to measure atomic distances.",
      conversion: 1e-10,
      example: "1 cm = 100,000,000 Å, 0.0000001 cm = 1 Å",
    },
    {
      unit: "Fathom (ftm)",
      description: "Maritime unit for measuring water depth, equal to 6 feet.",
      conversion: 1.8288,
      example: "1 cm ≈ 0.00546807 ftm, 182.88 cm ≈ 1 ftm",
    },
    {
      unit: "Furlong",
      description:
        "Traditional unit equal to 1/8 mile, still used in horse racing.",
      conversion: 201.168,
      example: "1 cm ≈ 0.000497097 furlong, 20,116.8 cm ≈ 1 furlong",
    },
    {
      unit: "Chain (ch)",
      description: "Surveying unit equal to 66 feet, used in land measurement.",
      conversion: 20.1168,
      example: "1 cm ≈ 0.000497097 chain, 2,011.68 cm ≈ 1 chain",
    },
    {
      unit: "Rod",
      description: "Traditional unit equal to 16.5 feet, used in surveying.",
      conversion: 5.0292,
      example: "1 cm ≈ 0.00198839 rod, 502.92 cm ≈ 1 rod",
    },
    {
      unit: "Hand",
      description: "Unit for measuring horse height, equal to 4 inches.",
      conversion: 0.1016,
      example: "1 cm ≈ 0.0984252 hand, 10.16 cm ≈ 1 hand",
    },
    {
      unit: "Planck Length",
      description:
        "The smallest theoretically measurable length in quantum physics.",
      conversion: 1.616255e-35,
      example:
        "1 cm ≈ 6.187e+34 Planck lengths, 1 Planck length ≈ 1.616e-35 cm",
    },
    {
      unit: "Earth's Equatorial Radius",
      description:
        "Average radius of Earth at the equator, used in geophysics.",
      conversion: 6.378137e6,
      example: "1 cm ≈ 1.5678e-7 Earth radii, 6.378e8 cm ≈ 1 Earth radius",
    },
    {
      unit: "Sun's Radius",
      description: "Approximate radius of our Sun, used in astronomy.",
      conversion: 6.9634e8,
      example: "1 cm ≈ 1.436e-9 Sun radii, 6.9634e10 cm ≈ 1 Sun radius",
    },
    {
      unit: "League",
      description:
        "Traditional unit of distance, varying by region but typically about 3 miles.",
      conversion: 4828.032,
      example: "1 cm ≈ 2.0712e-5 league, 482,803.2 cm ≈ 1 league",
    },
    {
      unit: "Arpent",
      description: "Historical French unit of length used in North America.",
      conversion: 58.47,
      example: "1 cm ≈ 0.0171026 arpent, 5,847 cm ≈ 1 arpent",
    },
    {
      unit: "Cubit",
      description:
        "Ancient unit based on the length of the forearm, about 18 inches.",
      conversion: 0.4572,
      example: "1 cm ≈ 0.0218723 cubit, 45.72 cm ≈ 1 cubit",
    },
    {
      unit: "Fermi",
      description: "Alternative name for femtometer, used in nuclear physics.",
      conversion: 1e-15,
      example: "1 cm = 1e+13 fermi, 0.0000000000001 cm = 1 fermi",
    },
    {
      unit: "X-unit",
      description: "Unit for measuring X-ray wavelengths.",
      conversion: 1.0021e-13,
      example: "1 cm ≈ 9.979e+11 X-units, 1.0021e-11 cm ≈ 1 X-unit",
    },
    {
      unit: "Twip",
      description:
        "Typography unit equal to 1/1440 inch, used in computer graphics.",
      conversion: 0.0000176389,
      example: "1 cm ≈ 566.929 twips, 0.01764 cm ≈ 1 twip",
    },
    {
      unit: "Vara",
      description: "Traditional Spanish and Portuguese unit of length.",
      conversion: 0.8359,
      example: "1 cm ≈ 0.119631 vara, 83.59 cm ≈ 1 vara",
    },
    {
      unit: "Russian Archin",
      description: "Traditional Russian unit equal to about 28 inches.",
      conversion: 0.7112,
      example: "1 cm ≈ 0.140608 archin, 71.12 cm ≈ 1 archin",
    },
  ],
  Cal: [
    {
      unit: "Joule (J)",
      description: "The SI unit of energy, work, or amount of heat.",
      conversion: 4.184,
      example: "1 Cal = 4.184 J, 0.239 Cal = 1 J",
    },
    {
      unit: "Kilojoule (kJ)",
      description: "Common food energy unit equal to 1,000 joules.",
      conversion: 0.004184,
      example: "1 Cal = 0.004184 kJ, 239 Cal = 1 kJ",
    },
    {
      unit: "Kilowatt-hour (kWh)",
      description:
        "Electrical energy unit used for larger scale energy measurements.",
      conversion: 0.00000116222,
      example: "1 Cal ≈ 1.16222e-6 kWh, 860,421 Cal ≈ 1 kWh",
    },
    {
      unit: "Watt-hour (Wh)",
      description: "Common unit for electrical energy consumption.",
      conversion: 0.00116222,
      example: "1 Cal ≈ 0.00116222 Wh, 860.421 Cal ≈ 1 Wh",
    },
    {
      unit: "Calorie (nutritional)",
      description: "The food calorie, equal to 1,000 small calories.",
      conversion: 1,
      example: "1 Cal = 1 Cal (base unit), 2,000 Cal = 2,000 Cal",
    },
    {
      unit: "British Thermal Unit (BTU)",
      description: "Traditional unit of heat energy used in power systems.",
      conversion: 0.00396567,
      example: "1 Cal ≈ 0.00396567 BTU, 252.164 Cal ≈ 1 BTU",
    },
    {
      unit: "Foot-pound (ft-lb)",
      description:
        "Energy unit in the imperial system, representing force over distance.",
      conversion: 3.08596,
      example: "1 Cal ≈ 3.08596 ft-lb, 0.324048 Cal ≈ 1 ft-lb",
    },
    {
      unit: "Electronvolt (eV)",
      description: "Tiny energy unit used in atomic and particle physics.",
      conversion: 2.6132e19,
      example: "1 Cal ≈ 2.6132e19 eV, 3.8293e-20 Cal ≈ 1 eV",
    },
    {
      unit: "Erg",
      description: "CGS unit of energy, equal to 10^-7 joules.",
      conversion: 41840000,
      example: "1 Cal = 41,840,000 erg, 2.3901e-8 Cal ≈ 1 erg",
    },
    {
      unit: "Therm",
      description: "Large energy unit used in natural gas measurements.",
      conversion: 3.96567e-8,
      example: "1 Cal ≈ 3.96567e-8 therm, 25,216,400 Cal ≈ 1 therm",
    },
    {
      unit: "Horsepower-hour (hp-h)",
      description: "Energy unit relating to mechanical work by engines.",
      conversion: 0.00000155961,
      example: "1 Cal ≈ 1.55961e-6 hp-h, 641,616 Cal ≈ 1 hp-h",
    },
    {
      unit: "Ton of TNT",
      description: "Energy unit based on explosive power.",
      conversion: 1e-9,
      example: "1 Cal = 1e-9 ton TNT, 1,000,000,000 Cal = 1 ton TNT",
    },
    {
      unit: "Kilocalorie (kcal)",
      description: "Equivalent to the nutritional Calorie (same unit).",
      conversion: 1,
      example: "1 Cal = 1 kcal, 500 Cal = 500 kcal",
    },
    {
      unit: "Newton-meter (N·m)",
      description: "Equivalent to 1 joule, representing force over distance.",
      conversion: 4.184,
      example: "1 Cal = 4.184 N·m, 0.239 Cal = 1 N·m",
    },
    {
      unit: "Watt-second (W·s)",
      description: "Equivalent to 1 joule, representing power over time.",
      conversion: 4.184,
      example: "1 Cal = 4.184 W·s, 0.239 Cal = 1 W·s",
    },
    {
      unit: "Hartree energy",
      description: "Atomic physics unit representing electron orbital energy.",
      conversion: 9.5969e17,
      example: "1 Cal ≈ 9.5969e17 Hartree, 1.042e-18 Cal ≈ 1 Hartree",
    },
    {
      unit: "Rydberg constant",
      description: "Energy unit used in atomic physics calculations.",
      conversion: 1.9194e18,
      example: "1 Cal ≈ 1.9194e18 Rydberg, 5.21e-19 Cal ≈ 1 Rydberg",
    },
    {
      unit: "Quad",
      description: "Very large energy unit used in national energy statistics.",
      conversion: 3.96567e-15,
      example: "1 Cal ≈ 3.96567e-15 quad, 2.5216e14 Cal ≈ 1 quad",
    },
    {
      unit: "Thermie",
      description: "Metric unit used in heating applications.",
      conversion: 0.001,
      example: "1 Cal = 0.001 thermie, 1,000 Cal = 1 thermie",
    },
    {
      unit: "Liter-atmosphere",
      description: "Energy unit from chemistry representing gas work.",
      conversion: 0.041292,
      example: "1 Cal ≈ 0.041292 L·atm, 24.217 Cal ≈ 1 L·atm",
    },
    {
      unit: "Barrel of oil equivalent",
      description: "Energy content of one barrel of crude oil.",
      conversion: 6.584e-8,
      example: "1 Cal ≈ 6.584e-8 BOE, 15,187,000 Cal ≈ 1 BOE",
    },
    {
      unit: "Ton of coal equivalent",
      description: "Energy content of one ton of coal.",
      conversion: 1.4286e-7,
      example: "1 Cal ≈ 1.4286e-7 TCE, 7,000,000 Cal ≈ 1 TCE",
    },
    {
      unit: "Cubic meter of natural gas",
      description: "Approximate energy content of natural gas.",
      conversion: 0.000003726,
      example: "1 Cal ≈ 3.726e-6 m³ gas, 268,400 Cal ≈ 1 m³ gas",
    },
    {
      unit: "Planck energy",
      description: "Natural unit of energy in quantum physics.",
      conversion: 2.3896e-18,
      example:
        "1 Cal ≈ 2.3896e-18 Planck energy, 4.184e17 Cal ≈ 1 Planck energy",
    },
    {
      unit: "Foe",
      description: "Astrophysics unit (ten to the fifty-one ergs).",
      conversion: 4.184e-44,
      example: "1 Cal ≈ 4.184e-44 foe, 2.39e43 Cal ≈ 1 foe",
    },
  ],
  Gallon: [
    {
      unit: "Cubic Meter (m³)",
      description:
        "The SI unit of volume, representing a cube with 1-meter sides.",
      conversion: 0.00378541,
      example: "1 gallon ≈ 0.00378541 m³, 264.172 gallons = 1 m³",
    },
    {
      unit: "Liter (L)",
      description: "Common metric unit equal to 1 cubic decimeter.",
      conversion: 3.78541,
      example: "1 gallon = 3.78541 L, 0.264172 gallon = 1 L",
    },
    {
      unit: "Milliliter (mL)",
      description:
        "Common metric unit for small volumes, equal to 1 cubic centimeter.",
      conversion: 3785.41,
      example: "1 gallon = 3,785.41 mL, 0.000264172 gallon = 1 mL",
    },
    {
      unit: "Cubic Foot (ft³)",
      description: "Imperial unit of volume for larger measurements.",
      conversion: 0.133681,
      example: "1 gallon ≈ 0.133681 ft³, 7.48052 gallons = 1 ft³",
    },
    {
      unit: "Cubic Inch (in³)",
      description: "Imperial unit for smaller volume measurements.",
      conversion: 231,
      example: "1 gallon = 231 in³, 0.004329 gallon = 1 in³",
    },
    {
      unit: "Quart (US liquid)",
      description: "US customary unit equal to 1/4 gallon.",
      conversion: 4,
      example: "1 gallon = 4 quarts, 0.25 gallon = 1 quart",
    },
    {
      unit: "Pint (US liquid)",
      description: "US customary unit equal to 1/8 gallon.",
      conversion: 8,
      example: "1 gallon = 8 pints, 0.125 gallon = 1 pint",
    },
    {
      unit: "Cup (US)",
      description: "Common cooking measurement equal to 1/16 gallon.",
      conversion: 16,
      example: "1 gallon = 16 cups, 0.0625 gallon = 1 cup",
    },
    {
      unit: "Fluid Ounce (US fl oz)",
      description: "Small US liquid volume unit equal to 1/128 gallon.",
      conversion: 128,
      example: "1 gallon = 128 fl oz, 0.0078125 gallon = 1 fl oz",
    },
    {
      unit: "Tablespoon (US tbsp)",
      description: "Common cooking measurement equal to 1/256 gallon.",
      conversion: 256,
      example: "1 gallon = 256 tbsp, 0.00390625 gallon = 1 tbsp",
    },
    {
      unit: "Teaspoon (US tsp)",
      description: "Small cooking measurement equal to 1/768 gallon.",
      conversion: 768,
      example: "1 gallon = 768 tsp, 0.00130208 gallon = 1 tsp",
    },
    {
      unit: "Barrel (oil)",
      description: "Standard volume for crude oil and petroleum products.",
      conversion: 0.0238095,
      example: "1 gallon ≈ 0.0238095 barrel, 42 gallons = 1 barrel",
    },
    {
      unit: "Gallon (UK imperial)",
      description: "British imperial gallon, about 20% larger than US gallon.",
      conversion: 0.832674,
      example:
        "1 US gallon ≈ 0.832674 UK gallon, 1.20095 US gallons = 1 UK gallon",
    },
    {
      unit: "Acre-foot",
      description: "Large volume unit used in water reservoir measurements.",
      conversion: 0.00000310432,
      example: "1 gallon ≈ 3.10432e-6 acre-foot, 322,185 gallons = 1 acre-foot",
    },
    {
      unit: "Cubic Mile (mi³)",
      description: "Enormous volume unit used for geological measurements.",
      conversion: 9.0817e-13,
      example: "1 gallon ≈ 9.0817e-13 mi³, 1.08958e12 gallons = 1 mi³",
    },
    {
      unit: "Cubic Yard (yd³)",
      description: "Common construction and landscaping volume unit.",
      conversion: 0.00495113,
      example: "1 gallon ≈ 0.00495113 yd³, 201.974 gallons = 1 yd³",
    },
    {
      unit: "Hogshead",
      description: "Traditional unit for alcoholic beverages and tobacco.",
      conversion: 0.015873,
      example: "1 gallon ≈ 0.015873 hogshead, 63 gallons = 1 hogshead",
    },
    {
      unit: "Board Foot",
      description: "Lumber volume measurement equal to 1 ft × 1 ft × 1 in.",
      conversion: 1.60417,
      example: "1 gallon ≈ 1.60417 board feet, 0.623377 gallon = 1 board foot",
    },
    {
      unit: "Dram (fluid)",
      description: "Small apothecary unit for liquid measurements.",
      conversion: 1024,
      example: "1 gallon = 1,024 drams, 0.000976563 gallon = 1 dram",
    },
    {
      unit: "Gill (US)",
      description: "Traditional unit equal to 1/32 gallon.",
      conversion: 32,
      example: "1 gallon = 32 gills, 0.03125 gallon = 1 gill",
    },
    {
      unit: "Cord",
      description: "Unit for measuring firewood volume.",
      conversion: 0.0104438,
      example: "1 gallon ≈ 0.0104438 cord, 95.7506 gallons = 1 cord",
    },
    {
      unit: "Tun",
      description: "Large cask unit used in brewing and winemaking.",
      conversion: 0.00396825,
      example: "1 gallon ≈ 0.00396825 tun, 252 gallons = 1 tun",
    },
    {
      unit: "Bath (Biblical)",
      description: "Ancient Hebrew liquid measure.",
      conversion: 0.172032,
      example: "1 gallon ≈ 0.172032 bath, 5.81179 gallons = 1 bath",
    },
    {
      unit: "Homer (Biblical)",
      description: "Ancient Hebrew dry and liquid measure.",
      conversion: 0.0172032,
      example: "1 gallon ≈ 0.0172032 homer, 58.1179 gallons = 1 homer",
    },
    {
      unit: "Earth's Volume",
      description: "Theoretical volume of planet Earth (approximate).",
      conversion: 3.496e-21,
      example:
        "1 gallon ≈ 3.496e-21 Earth volumes, 2.86e20 gallons ≈ 1 Earth volume",
    },
    {
      unit: "Olympic Swimming Pool",
      description: "Approximate volume of an Olympic-sized pool (2,500 m³).",
      conversion: 0.00000151416,
      example: "1 gallon ≈ 1.51416e-6 pools, 660,430 gallons ≈ 1 pool",
    },
    {
      unit: "Soda Can (12 fl oz)",
      description: "Common reference volume for beverages.",
      conversion: 10.6667,
      example: "1 gallon ≈ 10.6667 cans, 0.09375 gallon = 1 can",
    },
    {
      unit: "Wine Bottle (750 mL)",
      description: "Standard volume for wine bottles.",
      conversion: 5.0472,
      example: "1 gallon ≈ 5.0472 bottles, 0.198129 gallon = 1 bottle",
    },
    {
      unit: "Shot (1.5 fl oz)",
      description: "Standard volume for alcoholic shots.",
      conversion: 85.3333,
      example: "1 gallon ≈ 85.3333 shots, 0.0117188 gallon = 1 shot",
    },
  ],
  CubicInches: [
    {
      unit: "Cubic Meter (m³)",
      description:
        "The SI unit of volume, representing a cube with 1-meter sides.",
      conversion: 0.000016387064,
      example: "1 cubic inch ≈ 0.000016387 m³, 61,023.7 cubic inches = 1 m³",
    },
    {
      unit: "Liter (L)",
      description: "Common metric unit equal to 1 cubic decimeter.",
      conversion: 0.016387064,
      example: "1 cubic inch ≈ 0.016387 L, 61.0237 cubic inches = 1 L",
    },
    {
      unit: "Milliliter (mL)",
      description:
        "Common metric unit for small volumes, equal to 1 cubic centimeter.",
      conversion: 16.387064,
      example: "1 cubic inch = 16.387 mL, 0.0610237 cubic inches = 1 mL",
    },
    {
      unit: "Gallon (US liquid)",
      description: "Standard US liquid volume unit.",
      conversion: 0.00432900433,
      example: "1 cubic inch ≈ 0.004329 gallons, 231 cubic inches = 1 gallon",
    },
    {
      unit: "Quart (US liquid)",
      description: "US customary unit equal to 1/4 gallon.",
      conversion: 0.0173160173,
      example: "1 cubic inch ≈ 0.017316 quarts, 57.75 cubic inches = 1 quart",
    },
    {
      unit: "Pint (US liquid)",
      description: "US customary unit equal to 1/8 gallon.",
      conversion: 0.0346320346,
      example: "1 cubic inch ≈ 0.034632 pints, 28.875 cubic inches = 1 pint",
    },
    {
      unit: "Fluid Ounce (US fl oz)",
      description: "Small US liquid volume unit equal to 1/128 gallon.",
      conversion: 0.554112554,
      example: "1 cubic inch ≈ 0.554113 fl oz, 1.80469 cubic inches = 1 fl oz",
    },
    {
      unit: "Cubic Foot (ft³)",
      description: "Imperial unit of volume for larger measurements.",
      conversion: 0.000578703704,
      example: "1 cubic inch ≈ 0.000578704 ft³, 1,728 cubic inches = 1 ft³",
    },
    {
      unit: "Cubic Yard (yd³)",
      description: "Common construction and landscaping volume unit.",
      conversion: 0.0000214334705,
      example: "1 cubic inch ≈ 0.0000214335 yd³, 46,656 cubic inches = 1 yd³",
    },
    {
      unit: "Teaspoon (US tsp)",
      description: "Small cooking measurement equal to 1/6 fl oz.",
      conversion: 3.32467532,
      example: "1 cubic inch ≈ 3.32468 tsp, 0.300781 cubic inches = 1 tsp",
    },
    {
      unit: "Tablespoon (US tbsp)",
      description: "Common cooking measurement equal to 3 tsp.",
      conversion: 1.10822511,
      example: "1 cubic inch ≈ 1.10823 tbsp, 0.902344 cubic inches = 1 tbsp",
    },
    {
      unit: "Cup (US)",
      description: "Common cooking measurement equal to 16 tbsp.",
      conversion: 0.0692640693,
      example: "1 cubic inch ≈ 0.069264 cups, 14.4375 cubic inches = 1 cup",
    },
    {
      unit: "Barrel (oil)",
      description: "Standard volume for crude oil and petroleum products.",
      conversion: 0.000103071532,
      example:
        "1 cubic inch ≈ 0.000103072 barrel, 9,702 cubic inches = 1 barrel",
    },
    {
      unit: "Board Foot",
      description: "Lumber volume measurement equal to 1 ft × 1 ft × 1 in.",
      conversion: 0.00694444444,
      example:
        "1 cubic inch ≈ 0.00694444 board foot, 144 cubic inches = 1 board foot",
    },
    {
      unit: "Acre-foot",
      description: "Large volume unit used in water reservoir measurements.",
      conversion: 1.34410265e-8,
      example:
        "1 cubic inch ≈ 1.3441e-8 acre-foot, 74,389,155 cubic inches ≈ 1 acre-foot",
    },
    {
      unit: "Cubic Mile (mi³)",
      description: "Enormous volume unit used for geological measurements.",
      conversion: 3.93146573e-15,
      example:
        "1 cubic inch ≈ 3.93147e-15 mi³, 2.54358e14 cubic inches = 1 mi³",
    },
    {
      unit: "Gallon (UK imperial)",
      description: "British imperial gallon, about 20% larger than US gallon.",
      conversion: 0.00360465015,
      example:
        "1 cubic inch ≈ 0.00360465 UK gallon, 277.419 cubic inches = 1 UK gallon",
    },
    {
      unit: "Fluid Ounce (UK fl oz)",
      description: "Imperial fluid ounce, slightly smaller than US fl oz.",
      conversion: 0.576744024,
      example:
        "1 cubic inch ≈ 0.576744 UK fl oz, 1.73387 cubic inches = 1 UK fl oz",
    },
    {
      unit: "Hogshead",
      description: "Traditional unit for alcoholic beverages and tobacco.",
      conversion: 0.0000826719577,
      example:
        "1 cubic inch ≈ 0.00008267196 hogshead, 12,096 cubic inches = 1 hogshead",
    },
    {
      unit: "Cord",
      description: "Unit for measuring firewood volume.",
      conversion: 0.00000452112269,
      example: "1 cubic inch ≈ 4.52112e-6 cord, 221,184 cubic inches = 1 cord",
    },
    {
      unit: "Engine Displacement (cc)",
      description: "Cubic centimeters, used for engine cylinder volumes.",
      conversion: 16.387064,
      example:
        "1 cubic inch = 16.387 cc, 350 cubic inches ≈ 5,735 cc (5.7L engine)",
    },
    {
      unit: "Shot Glass (1.5 fl oz)",
      description: "Standard volume for alcoholic shots.",
      conversion: 0.369408369,
      example: "1 cubic inch ≈ 0.369408 shots, 2.70703 cubic inches = 1 shot",
    },
    {
      unit: "Soda Can (12 fl oz)",
      description: "Common reference volume for beverages.",
      conversion: 0.0461760462,
      example: "1 cubic inch ≈ 0.046176 cans, 21.6563 cubic inches = 1 can",
    },
    {
      unit: "Baseball (regulation size)",
      description: "Approximate volume of a baseball (≈13.39 cubic inches).",
      conversion: 0.0746932,
      example:
        "1 cubic inch ≈ 0.074693 baseballs, 13.39 cubic inches ≈ 1 baseball",
    },
    {
      unit: "Golf Ball (regulation size)",
      description: "Approximate volume of a golf ball (≈2.482 cubic inches).",
      conversion: 0.402894,
      example:
        "1 cubic inch ≈ 0.402894 golf balls, 2.482 cubic inches ≈ 1 golf ball",
    },
    {
      unit: "Bath (Biblical)",
      description: "Ancient Hebrew liquid measure.",
      conversion: 0.000743243243,
      example:
        "1 cubic inch ≈ 0.000743243 bath, 1,345.43 cubic inches = 1 bath",
    },
    {
      unit: "Earth's Volume",
      description: "Theoretical volume of planet Earth (approximate).",
      conversion: 1.514e-23,
      example:
        "1 cubic inch ≈ 1.514e-23 Earth volumes, 6.604e22 cubic inches ≈ 1 Earth volume",
    },
  ],

  CubicYards: [
    {
      unit: "Cubic Meter (m³)",
      description:
        "The SI unit of volume, representing a cube with 1-meter sides.",
      conversion: 0.764554858,
      example: "1 cubic yard ≈ 0.764555 m³, 1.30795 cubic yards = 1 m³",
    },
    {
      unit: "Liter (L)",
      description: "Common metric unit equal to 1 cubic decimeter.",
      conversion: 764.554858,
      example: "1 cubic yard = 764.555 L, 0.00130795 cubic yards = 1 L",
    },
    {
      unit: "Milliliter (mL)",
      description:
        "Common metric unit for small volumes, equal to 1 cubic centimeter.",
      conversion: 764554.858,
      example: "1 cubic yard = 764,555 mL, 0.00000130795 cubic yards = 1 mL",
    },
    {
      unit: "Gallon (US liquid)",
      description: "Standard US liquid volume unit.",
      conversion: 201.974026,
      example:
        "1 cubic yard ≈ 201.974 gallons, 0.00495113 cubic yards = 1 gallon",
    },
    {
      unit: "Quart (US liquid)",
      description: "US customary unit equal to 1/4 gallon.",
      conversion: 807.896104,
      example:
        "1 cubic yard ≈ 807.896 quarts, 0.00123778 cubic yards = 1 quart",
    },
    {
      unit: "Pint (US liquid)",
      description: "US customary unit equal to 1/8 gallon.",
      conversion: 1615.79221,
      example:
        "1 cubic yard ≈ 1,615.79 pints, 0.000618891 cubic yards = 1 pint",
    },
    {
      unit: "Fluid Ounce (US fl oz)",
      description: "Small US liquid volume unit equal to 1/128 gallon.",
      conversion: 25852.6753,
      example:
        "1 cubic yard ≈ 25,852.7 fl oz, 0.0000387007 cubic yards = 1 fl oz",
    },
    {
      unit: "Cubic Foot (ft³)",
      description: "Imperial unit of volume for larger measurements.",
      conversion: 27,
      example: "1 cubic yard = 27 ft³, 0.037037 cubic yards = 1 ft³",
    },
    {
      unit: "Cubic Inch (in³)",
      description: "Small imperial volume unit.",
      conversion: 46656,
      example: "1 cubic yard = 46,656 in³, 0.0000214335 cubic yards = 1 in³",
    },
    {
      unit: "Teaspoon (US tsp)",
      description: "Small cooking measurement equal to 1/6 fl oz.",
      conversion: 155116.052,
      example: "1 cubic yard ≈ 155,116 tsp, 0.00000644679 cubic yards = 1 tsp",
    },
    {
      unit: "Tablespoon (US tbsp)",
      description: "Common cooking measurement equal to 3 tsp.",
      conversion: 51705.3506,
      example:
        "1 cubic yard ≈ 51,705.4 tbsp, 0.0000193404 cubic yards = 1 tbsp",
    },
    {
      unit: "Cup (US)",
      description: "Common cooking measurement equal to 16 tbsp.",
      conversion: 3231.58442,
      example: "1 cubic yard ≈ 3,231.58 cups, 0.000309446 cubic yards = 1 cup",
    },
    {
      unit: "Barrel (oil)",
      description: "Standard volume for crude oil and petroleum products.",
      conversion: 4.80890538,
      example:
        "1 cubic yard ≈ 4.80891 barrels, 0.207948 cubic yards = 1 barrel",
    },
    {
      unit: "Board Foot",
      description: "Lumber volume measurement equal to 1 ft × 1 ft × 1 in.",
      conversion: 324,
      example:
        "1 cubic yard = 324 board feet, 0.00308642 cubic yards = 1 board foot",
    },
    {
      unit: "Acre-foot",
      description: "Large volume unit used in water reservoir measurements.",
      conversion: 0.0006198347,
      example:
        "1 cubic yard ≈ 0.000619835 acre-foot, 1,613.33 cubic yards = 1 acre-foot",
    },
    {
      unit: "Cubic Mile (mi³)",
      description: "Enormous volume unit used for geological measurements.",
      conversion: 1.83426465e-10,
      example: "1 cubic yard ≈ 1.83426e-10 mi³, 5.45178e9 cubic yards = 1 mi³",
    },
    {
      unit: "Gallon (UK imperial)",
      description: "British imperial gallon, about 20% larger than US gallon.",
      conversion: 168.178557,
      example:
        "1 cubic yard ≈ 168.179 UK gallons, 0.00594651 cubic yards = 1 UK gallon",
    },
    {
      unit: "Fluid Ounce (UK fl oz)",
      description: "Imperial fluid ounce, slightly smaller than US fl oz.",
      conversion: 26908.5692,
      example:
        "1 cubic yard ≈ 26,908.6 UK fl oz, 0.000037157 cubic yards = 1 UK fl oz",
    },
    {
      unit: "Hogshead",
      description: "Traditional unit for alcoholic beverages and tobacco.",
      conversion: 3.20593692,
      example:
        "1 cubic yard ≈ 3.20594 hogsheads, 0.311855 cubic yards = 1 hogshead",
    },
    {
      unit: "Cord",
      description: "Unit for measuring firewood volume.",
      conversion: 0.211888,
      example: "1 cubic yard ≈ 0.211888 cords, 4.73921 cubic yards = 1 cord",
    },
    {
      unit: "Engine Displacement (cc)",
      description: "Cubic centimeters, used for engine cylinder volumes.",
      conversion: 764554.858,
      example: "1 cubic yard = 764,555 cc, 0.00000130795 cubic yards = 1 cc",
    },
    {
      unit: "Shot Glass (1.5 fl oz)",
      description: "Standard volume for alcoholic shots.",
      conversion: 17235.1169,
      example:
        "1 cubic yard ≈ 17,235.1 shots, 0.0000580412 cubic yards = 1 shot",
    },
    {
      unit: "Soda Can (12 fl oz)",
      description: "Common reference volume for beverages.",
      conversion: 2154.38961,
      example: "1 cubic yard ≈ 2,154.39 cans, 0.00046433 cubic yards = 1 can",
    },
    {
      unit: "Baseball (regulation size)",
      description: "Approximate volume of a baseball (≈13.39 cubic inches).",
      conversion: 3484.68,
      example:
        "1 cubic yard ≈ 3,484.68 baseballs, 0.000286973 cubic yards = 1 baseball",
    },
    {
      unit: "Golf Ball (regulation size)",
      description: "Approximate volume of a golf ball (≈2.482 cubic inches).",
      conversion: 18793.9,
      example:
        "1 cubic yard ≈ 18,793.9 golf balls, 0.0000531974 cubic yards = 1 golf ball",
    },
    {
      unit: "Bath (Biblical)",
      description: "Ancient Hebrew liquid measure.",
      conversion: 34.6835898,
      example: "1 cubic yard ≈ 34.6836 bath, 0.0288276 cubic yards = 1 bath",
    },
    {
      unit: "Earth's Volume",
      description: "Theoretical volume of planet Earth (approximate).",
      conversion: 7.058e-20,
      example:
        "1 cubic yard ≈ 7.058e-20 Earth volumes, 1.41584e19 cubic yards ≈ 1 Earth volume",
    },
  ],
  Cups: [
    {
      unit: "Cubic Meter (m³)",
      description:
        "The SI unit of volume, representing a cube with 1-meter sides.",
      conversion: 0.000236588,
      example: "1 cup ≈ 0.000236588 m³, 4,226.75 cups = 1 m³",
    },
    {
      unit: "Liter (L)",
      description: "Common metric unit equal to 1 cubic decimeter.",
      conversion: 0.236588,
      example: "1 cup ≈ 0.236588 L, 4.22675 cups = 1 L",
    },
    {
      unit: "Milliliter (mL)",
      description:
        "Common metric unit for small volumes, equal to 1 cubic centimeter.",
      conversion: 236.588,
      example: "1 cup = 236.588 mL, 0.00422675 cups = 1 mL",
    },
    {
      unit: "Gallon (US liquid)",
      description: "Standard US liquid volume unit.",
      conversion: 0.0625,
      example: "1 cup = 0.0625 gallons, 16 cups = 1 gallon",
    },
    {
      unit: "Quart (US liquid)",
      description: "US customary unit equal to 1/4 gallon.",
      conversion: 0.25,
      example: "1 cup = 0.25 quarts, 4 cups = 1 quart",
    },
    {
      unit: "Pint (US liquid)",
      description: "US customary unit equal to 1/8 gallon.",
      conversion: 0.5,
      example: "1 cup = 0.5 pints, 2 cups = 1 pint",
    },
    {
      unit: "Fluid Ounce (US fl oz)",
      description: "Small US liquid volume unit equal to 1/128 gallon.",
      conversion: 8,
      example: "1 cup = 8 fl oz, 0.125 cups = 1 fl oz",
    },
    {
      unit: "Tablespoon (US tbsp)",
      description: "Common cooking measurement equal to 1/16 cup.",
      conversion: 16,
      example: "1 cup = 16 tbsp, 0.0625 cups = 1 tbsp",
    },
    {
      unit: "Teaspoon (US tsp)",
      description: "Small cooking measurement equal to 1/48 cup.",
      conversion: 48,
      example: "1 cup = 48 tsp, 0.0208333 cups = 1 tsp",
    },
    {
      unit: "Cubic Foot (ft³)",
      description: "Imperial unit of volume for larger measurements.",
      conversion: 0.00835503,
      example: "1 cup ≈ 0.00835503 ft³, 119.688 cups = 1 ft³",
    },
    {
      unit: "Cubic Inch (in³)",
      description: "Small imperial volume unit.",
      conversion: 14.4375,
      example: "1 cup = 14.4375 in³, 0.0692641 cups = 1 in³",
    },
    {
      unit: "Cubic Yard (yd³)",
      description: "Common construction and landscaping volume unit.",
      conversion: 0.000309446,
      example: "1 cup ≈ 0.000309446 yd³, 3,231.58 cups = 1 yd³",
    },
    {
      unit: "Barrel (oil)",
      description: "Standard volume for crude oil and petroleum products.",
      conversion: 0.0014881,
      example: "1 cup ≈ 0.0014881 barrel, 672 cups = 1 barrel",
    },
    {
      unit: "Gallon (UK imperial)",
      description: "British imperial gallon, about 20% larger than US gallon.",
      conversion: 0.0520421,
      example: "1 cup ≈ 0.0520421 UK gallons, 19.2152 cups = 1 UK gallon",
    },
    {
      unit: "Fluid Ounce (UK fl oz)",
      description: "Imperial fluid ounce, slightly smaller than US fl oz.",
      conversion: 8.32674,
      example: "1 cup ≈ 8.32674 UK fl oz, 0.120095 cups = 1 UK fl oz",
    },
    {
      unit: "Hogshead",
      description: "Traditional unit for alcoholic beverages and tobacco.",
      conversion: 0.000992063,
      example: "1 cup ≈ 0.000992063 hogshead, 1,008 cups = 1 hogshead",
    },
    {
      unit: "Cord",
      description: "Unit for measuring firewood volume.",
      conversion: 0.000065281,
      example: "1 cup ≈ 0.000065281 cord, 1,532.01 cups = 1 cord",
    },
    {
      unit: "Engine Displacement (cc)",
      description: "Cubic centimeters, used for engine cylinder volumes.",
      conversion: 236.588,
      example: "1 cup = 236.588 cc, 0.00422675 cups = 1 cc",
    },
    {
      unit: "Shot Glass (1.5 fl oz)",
      description: "Standard volume for alcoholic shots.",
      conversion: 5.33333,
      example: "1 cup ≈ 5.33333 shots, 0.1875 cups = 1 shot",
    },
    {
      unit: "Soda Can (12 fl oz)",
      description: "Common reference volume for beverages.",
      conversion: 0.666667,
      example: "1 cup ≈ 0.666667 cans, 1.5 cups = 1 can",
    },
    {
      unit: "Baseball (regulation size)",
      description: "Approximate volume of a baseball (≈13.39 cubic inches).",
      conversion: 0.103072,
      example: "1 cup ≈ 0.103072 baseballs, 9.702 cups ≈ 1 baseball",
    },
    {
      unit: "Golf Ball (regulation size)",
      description: "Approximate volume of a golf ball (≈2.482 cubic inches).",
      conversion: 0.555556,
      example: "1 cup ≈ 0.555556 golf balls, 1.8 cups ≈ 1 golf ball",
    },
    {
      unit: "Bath (Biblical)",
      description: "Ancient Hebrew liquid measure.",
      conversion: 0.0107539,
      example: "1 cup ≈ 0.0107539 bath, 92.9886 cups = 1 bath",
    },
    {
      unit: "Earth's Volume",
      description: "Theoretical volume of planet Earth (approximate).",
      conversion: 2.185e-22,
      example:
        "1 cup ≈ 2.185e-22 Earth volumes, 4.576e21 cups ≈ 1 Earth volume",
    },
  ],
  Days: [
    {
      unit: "Second (s)",
      description:
        "The base unit of time in the International System of Units (SI).",
      conversion: 86400,
      example: "1 day = 86,400 seconds, 0.0000115741 days = 1 second",
    },
    {
      unit: "Millisecond (ms)",
      description: "One thousandth of a second.",
      conversion: 8.64e7,
      example:
        "1 day = 86,400,000 milliseconds, 1.15741e-8 days = 1 millisecond",
    },
    {
      unit: "Minute (min)",
      description: "60 seconds.",
      conversion: 1440,
      example: "1 day = 1,440 minutes, 0.000694444 days = 1 minute",
    },
    {
      unit: "Hour (hr)",
      description: "60 minutes or 3,600 seconds.",
      conversion: 24,
      example: "1 day = 24 hours, 0.0416667 days = 1 hour",
    },
    {
      unit: "Week",
      description: "7 days.",
      conversion: 0.142857,
      example: "1 day ≈ 0.142857 weeks, 7 days = 1 week",
    },
    {
      unit: "Month (average)",
      description: "Approximate average length of a month.",
      conversion: 0.0328549,
      example: "1 day ≈ 0.0328549 months, 30.4368 days ≈ 1 month",
    },
    {
      unit: "Year (calendar)",
      description: "365 days (common year).",
      conversion: 0.00273791,
      example: "1 day ≈ 0.00273791 years, 365 days = 1 common year",
    },
    {
      unit: "Decade",
      description: "10 years.",
      conversion: 0.000273791,
      example:
        "1 day ≈ 0.000273791 decades, 3,652.42 days ≈ 1 decade (including 2-3 leap years)",
    },
    {
      unit: "Century",
      description: "100 years.",
      conversion: 0.0000273791,
      example: "1 day ≈ 0.0000273791 centuries, 36,524.2 days ≈ 1 century",
    },
    {
      unit: "Millennium",
      description: "1,000 years.",
      conversion: 0.00000273791,
      example: "1 day ≈ 0.00000273791 millennia, 365,242 days ≈ 1 millennium",
    },
    {
      unit: "Microsecond (μs)",
      description: "One millionth of a second.",
      conversion: 8.64e10,
      example:
        "1 day = 86,400,000,000 microseconds, 1.15741e-11 days = 1 microsecond",
    },
    {
      unit: "Nanosecond (ns)",
      description: "One billionth of a second.",
      conversion: 8.64e13,
      example:
        "1 day = 86,400,000,000,000 nanoseconds, 1.15741e-14 days = 1 nanosecond",
    },
    {
      unit: "Picosecond (ps)",
      description: "One trillionth of a second.",
      conversion: 8.64e16,
      example: "1 day = 8.64e16 picoseconds, 1.15741e-17 days = 1 picosecond",
    },
    {
      unit: "Month (synodic)",
      description: "Lunar month (moon phase cycle).",
      conversion: 0.0338632,
      example:
        "1 day ≈ 0.0338632 synodic months, 29.5306 days = 1 synodic month",
    },
    {
      unit: "Year (leap)",
      description: "366 days (leap year).",
      conversion: 0.00273224,
      example: "1 day ≈ 0.00273224 leap years, 366 days = 1 leap year",
    },
    {
      unit: "Year (tropical)",
      description: "Time for Earth to complete one orbit around the Sun.",
      conversion: 0.00273792,
      example:
        "1 day ≈ 0.00273792 tropical years, 365.242 days ≈ 1 tropical year",
    },
    {
      unit: "Day (sidereal)",
      description: "Earth's rotation relative to fixed stars.",
      conversion: 0.99726968,
      example:
        "1 solar day ≈ 0.99727 sidereal days, 1.00274 solar days = 1 sidereal day",
    },
    {
      unit: "Fortnight",
      description: "14 days (2 weeks).",
      conversion: 0.0714286,
      example: "1 day ≈ 0.0714286 fortnights, 14 days = 1 fortnight",
    },
    {
      unit: "Quinquennial",
      description: "5-year period.",
      conversion: 0.000547945,
      example:
        "1 day ≈ 0.000547945 quinquennials, 1,826.21 days ≈ 1 quinquennial",
    },
    {
      unit: "Planck Time",
      description: "The smallest measurable unit of time in quantum physics.",
      conversion: 1.6028e48,
      example: "1 day ≈ 1.6028e48 Planck times, 6.239e-49 days = 1 Planck time",
    },
    {
      unit: "Work Week (40 hr)",
      description: "Standard full-time work week.",
      conversion: 0.166667,
      example: "1 day = 0.166667 work weeks, 6 days = 1 work week",
    },
    {
      unit: "Olympiad (4 years)",
      description: "Period between Olympic Games.",
      conversion: 0.000684932,
      example: "1 day ≈ 0.000684932 olympiads, 1,460.97 days ≈ 1 olympiad",
    },
    {
      unit: "Lunar Year (12 synodic months)",
      description: "12 complete moon cycles.",
      conversion: 0.00273785,
      example: "1 day ≈ 0.00273785 lunar years, 354.367 days ≈ 1 lunar year",
    },
    {
      unit: "Human Heartbeats (avg 70 bpm)",
      description: "Approximate count based on average resting heart rate.",
      conversion: 100800,
      example: "1 day ≈ 100,800 heartbeats, 9.92063e-6 days = 1 heartbeat",
    },
    {
      unit: "Movie Length (avg 2 hr)",
      description: "Based on average feature film duration.",
      conversion: 12,
      example: "1 day = 12 average movies, 0.0833333 days = 1 average movie",
    },
  ],
  Decimal: [
    {
      unit: "Binary (Base-2)",
      description: "Base-2 numeral system using only 0 and 1",
      conversion: "",
      example: "5 (Decimal) = 101 (Binary)",
    },
    {
      unit: "Octal (Base-8)",
      description: "Base-8 numeral system using digits 0-7",
      conversion: "",
      example: "10 (Decimal) = 12 (Octal)",
    },
    {
      unit: "Hexadecimal (Base-16)",
      description: "Base-16 system using digits 0-9 and letters A-F",
      conversion: "",
      example: "255 (Decimal) = FF (Hexadecimal)",
    },
    {
      unit: "Base-3",
      description: "Ternary numeral system using digits 0-2",
      conversion: "",
      example: "7 (Decimal) = 21 (Base-3)",
    },
    {
      unit: "Base-4",
      description: "Quaternary numeral system using digits 0-3",
      conversion: "",
      example: "10 (Decimal) = 22 (Base-4)",
    },
    {
      unit: "Base-5",
      description: "Quinary numeral system using digits 0-4",
      conversion: "",
      example: "13 (Decimal) = 23 (Base-5)",
    },
    {
      unit: "Base-6",
      description: "Senary numeral system using digits 0-5",
      conversion: "",
      example: "20 (Decimal) = 32 (Base-6)",
    },
    {
      unit: "Base-7",
      description: "Septenary numeral system using digits 0-6",
      conversion: "",
      example: "25 (Decimal) = 34 (Base-7)",
    },
    {
      unit: "Base-9",
      description: "Nonary numeral system using digits 0-8",
      conversion: "",
      example: "30 (Decimal) = 33 (Base-9)",
    },
    {
      unit: "Base-11",
      description: "Undecimal numeral system using digits 0-A",
      conversion: "",
      example: "40 (Decimal) = 37 (Base-11)",
    },
    {
      unit: "Base-12",
      description: "Duodecimal system using digits 0-9 and A-B",
      conversion: "",
      example: "50 (Decimal) = 42 (Base-12)",
    },
    {
      unit: "Base-13",
      description: "Tridecimal numeral system",
      conversion: "",
      example: "60 (Decimal) = 48 (Base-13)",
    },
    {
      unit: "Base-14",
      description: "Tetradecimal numeral system",
      conversion: "",
      example: "70 (Decimal) = 50 (Base-14)",
    },
    {
      unit: "Base-15",
      description: "Pentadecimal numeral system",
      conversion: "",
      example: "80 (Decimal) = 55 (Base-15)",
    },
    {
      unit: "Base-17",
      description: "Numeral system using digits 0-9 and A-G",
      conversion: "",
      example: "90 (Decimal) = 55 (Base-17)",
    },
    {
      unit: "Base-20",
      description: "Vigesimal system (used in Mayan numerals)",
      conversion: "",
      example: "100 (Decimal) = 50 (Base-20)",
    },
    {
      unit: "Base-36",
      description: "Alphanumeric system using 0-9 and A-Z",
      conversion: "",
      example: "1000 (Decimal) = RS (Base-36)",
    },
    {
      unit: "Roman Numerals",
      description: "Ancient Roman numeral system",
      conversion: "",
      example: "2023 (Decimal) = MMXXIII (Roman)",
    },
    {
      unit: "Balanced Ternary",
      description: "Ternary system using -1, 0, +1 (represented as T, 0, 1)",
      conversion: "",
      example: "10 (Decimal) = 101 (Balanced Ternary)",
    },
  ],
  Degrees: [
    {
      unit: "Radian (rad)",
      description: "SI unit of angular measurement (1 rad ≈ 57.2958°)",
      conversion: 0.0174533,
      example: "1° ≈ 0.0174533 rad, 57.2958° = 1 rad",
    },
    {
      unit: "Gradian (grad)",
      description: "Also called 'gon', divides circle into 400 units",
      conversion: 1.11111,
      example: "1° = 1.11111 grad, 0.9° = 1 grad",
    },
    {
      unit: "Minute of Arc (')",
      description: "1/60th of a degree",
      conversion: 60,
      example: "1° = 60', 0.0166667° = 1'",
    },
    {
      unit: 'Second of Arc (")',
      description: "1/60th of an arcminute (1/3600th of a degree)",
      conversion: 3600,
      example: '1° = 3600", 0.000277778° = 1"',
    },
    {
      unit: "Revolution (rev)",
      description: "Complete 360° rotation",
      conversion: 0.00277778,
      example: "1° = 0.00277778 rev, 360° = 1 rev",
    },
    {
      unit: "Turn",
      description: "Synonym for revolution (full rotation)",
      conversion: 0.00277778,
      example: "1° = 0.00277778 turns, 360° = 1 turn",
    },
    {
      unit: "Quadrant",
      description: "Right angle (90° segment)",
      conversion: 0.0111111,
      example: "1° = 0.0111111 quadrants, 90° = 1 quadrant",
    },
    {
      unit: "Sextant",
      description: "60° segment (1/6th of a circle)",
      conversion: 0.0166667,
      example: "1° = 0.0166667 sextants, 60° = 1 sextant",
    },
    {
      unit: "Sign",
      description: "30° segment (1/12th of a circle)",
      conversion: 0.0333333,
      example: "1° = 0.0333333 signs, 30° = 1 sign",
    },
    {
      unit: "Mil (NATO)",
      description: "Military angular measurement (6400 mils per circle)",
      conversion: 17.7778,
      example: "1° ≈ 17.7778 mils, 0.05625° = 1 mil",
    },
    {
      unit: "Point",
      description: "Navigation division (11.25° per point)",
      conversion: 0.0888889,
      example: "1° ≈ 0.0888889 points, 11.25° = 1 point",
    },
    {
      unit: "Hour Angle",
      description: "Astronomical measurement (15° per hour)",
      conversion: 0.0666667,
      example: "1° ≈ 0.0666667 hours, 15° = 1 hour angle",
    },
    {
      unit: "Binary Degree (binary)",
      description: "256 units per circle (1.40625° per unit)",
      conversion: 0.711111,
      example: "1° ≈ 0.711111 binary degrees, 1.40625° = 1 binary degree",
    },
    {
      unit: "Compass Point",
      description: "Traditional 32-point compass division",
      conversion: 0.0888889,
      example: "1° ≈ 0.0888889 compass points, 11.25° = 1 compass point",
    },
    {
      unit: "Diameter Part",
      description: "Historic unit ≈ 0.95493° (used in some technical fields)",
      conversion: 1.0472,
      example: "1° ≈ 1.0472 diameter parts, 0.95493° = 1 diameter part",
    },
  ],
  Fahrenheit: [
    {
      unit: "Celsius (°C)",
      description:
        "Most widely used temperature scale worldwide (metric system).",
      conversion: 0,
      example: "32°F = 0°C, 212°F = 100°C",
    },
    {
      unit: "Kelvin (K)",
      description: "SI base unit of temperature (absolute scale).",
      conversion: 0,
      example: "32°F = 273.15K, 212°F = 373.15K",
    },
    {
      unit: "Rankine (°R)",
      description: "Absolute temperature scale using Fahrenheit degrees.",
      conversion: 0,
      example: "0°F = 459.67°R, 32°F = 491.67°R",
    },
    {
      unit: "Réaumur (°Ré)",
      description: "Historical temperature scale used in parts of Europe.",
      conversion: 0,
      example: "32°F = 0°Ré, 212°F = 80°Ré",
    },
    {
      unit: "Delisle (°De)",
      description:
        "Historical scale where decreasing values represent hotter temperatures.",
      conversion: 0,
      example: "32°F = 150°De, 212°F = 0°De",
    },
    {
      unit: "Newton (°N)",
      description: "Obsolete temperature scale proposed by Isaac Newton.",
      conversion: 0,
      example: "32°F = 0°N, 212°F ≈ 33°N",
    },
    {
      unit: "Rømer (°Rø)",
      description:
        "Early temperature scale using brine freezing and water boiling points.",
      conversion: 0,
      example: "32°F = 7.5°Rø, 212°F = 60°Rø",
    },
    {
      unit: "Triple Point of Water",
      description:
        "The temperature and pressure where water coexists as solid, liquid, and gas.",
      conversion: 0,
      example: "32.018°F ≈ 1.0000 (triple point)",
    },
  ],
  FeetPerSecond: [
    {
      unit: "Meter/second (m/s)",
      description:
        "SI unit of speed, representing distance traveled in meters per second.",
      conversion: 0,
      example: "1 ft/s = 0.3048 m/s, 10 ft/s ≈ 3.048 m/s",
    },
    {
      unit: "Kilometer/hour (km/h)",
      description:
        "Common metric unit for speed, used in transportation worldwide.",
      conversion: 0,
      example: "1 ft/s ≈ 1.097 km/h, 50 ft/s ≈ 54.864 km/h",
    },
    {
      unit: "Mile/hour (mph)",
      description:
        "Imperial/US unit for speed, widely used in the United States.",
      conversion: 0,
      example: "1 ft/s ≈ 0.682 mph, 88 ft/s = 60 mph",
    },
    {
      unit: "Knot (kn)",
      description:
        "Nautical unit of speed, used in aviation and maritime contexts.",
      conversion: 0,
      example: "1 ft/s ≈ 0.592 knots, 100 ft/s ≈ 59.25 knots",
    },
    {
      unit: "Mach (at 20°C)",
      description:
        "Speed relative to the speed of sound in air at 20°C (343 m/s).",
      conversion: 0,
      example: "1 ft/s ≈ 0.000887 Mach, 1126 ft/s ≈ 1 Mach",
    },
    {
      unit: "Velocity of Light in Vacuum (c)",
      description: "Fraction of the speed of light (299,792,458 m/s).",
      conversion: 0,
      example: "1 ft/s ≈ 1.0167 × 10⁻⁹ c",
    },
    {
      unit: "Cosmic Velocity - First",
      description:
        "Hypothetical astronomical speed unit (Earth's escape velocity ≈ 11.2 km/s).",
      conversion: 0,
      example: "1 ft/s ≈ 3.858 × 10⁻⁵ Cosmic Velocity - First",
    },
    {
      unit: "Earth's Velocity",
      description: "Ratio to Earth's average orbital speed (≈30 km/s).",
      conversion: 0,
      example: "1 ft/s ≈ 1.024 × 10⁻⁵ Earth's Velocity",
    },
    {
      unit: "Centimeter/second (cm/s)",
      description:
        "Metric unit for low speeds, used in scientific measurements.",
      conversion: 0,
      example: "1 ft/s = 30.48 cm/s, 5 ft/s = 152.4 cm/s",
    },
    {
      unit: "Millimeter/second (mm/s)",
      description: "Precise metric unit for very slow speeds.",
      conversion: 0,
      example: "1 ft/s = 304.8 mm/s, 0.1 ft/s = 30.48 mm/s",
    },
    {
      unit: "Yard/second (yd/s)",
      description: "Imperial unit for speed, 1 yard = 3 feet.",
      conversion: 0,
      example: "1 ft/s ≈ 0.333 yd/s, 3 ft/s = 1 yd/s",
    },
    {
      unit: "Foot/minute (ft/min)",
      description: "Used in industrial or ventilation speed measurements.",
      conversion: 0,
      example: "1 ft/s = 60 ft/min, 10 ft/s = 600 ft/min",
    },
    {
      unit: "Inch/second (in/s)",
      description: "Small-scale speed unit for engineering applications.",
      conversion: 0,
      example: "1 ft/s = 12 in/s, 2.5 ft/s = 30 in/s",
    },
    {
      unit: "Break",
      description: "Hypothetical unit representing extremely slow speeds.",
      conversion: 0,
      example: "1 ft/s = 1 × 10⁻¹⁵ Break",
    },
    {
      unit: "Velocity of Sound in Sea Water (20°C)",
      description: "Speed relative to sound in seawater (≈1,522 m/s).",
      conversion: 0,
      example: "1 ft/s ≈ 0.0002 × speed of sound in seawater",
    },
  ],
  Feet: [
    {
      unit: "Meter (m)",
      description:
        "The base unit of length in the International System of Units (SI).",
      conversion: 0,
      example: "1 ft = 0.3048 m, 10 ft ≈ 3.048 m",
    },
    {
      unit: "Kilometer (km)",
      description: "Metric unit of length equal to 1,000 meters.",
      conversion: 0,
      example: "1 ft ≈ 0.000305 km, 3,281 ft ≈ 1 km",
    },
    {
      unit: "Centimeter (cm)",
      description: "Metric unit equal to one hundredth of a meter.",
      conversion: 0,
      example: "1 ft = 30.48 cm, 6 ft = 182.88 cm",
    },
    {
      unit: "Millimeter (mm)",
      description: "Small metric unit equal to one thousandth of a meter.",
      conversion: 0,
      example: "1 ft = 304.8 mm, 1.5 ft = 457.2 mm",
    },
    {
      unit: "Mile (mi)",
      description:
        "Imperial unit of length commonly used in the United States.",
      conversion: 0,
      example: "1 ft ≈ 0.000189 mi, 5,280 ft = 1 mi",
    },
    {
      unit: "Yard (yd)",
      description: "Imperial unit equal to 3 feet.",
      conversion: 0,
      example: "1 ft ≈ 0.333 yd, 3 ft = 1 yd",
    },
    {
      unit: "Inch (in)",
      description: "Imperial unit equal to 1/12 of a foot.",
      conversion: 0,
      example: "1 ft = 12 in, 2.5 ft = 30 in",
    },
    {
      unit: "Nautical Mile (nmi)",
      description:
        "Unit used in maritime and aviation contexts, equal to 1,852 meters.",
      conversion: 0,
      example: "1 ft ≈ 0.000165 nmi, 6,076 ft ≈ 1 nmi",
    },
    {
      unit: "Light Year (ly)",
      description: "Astronomical distance that light travels in one year.",
      conversion: 0,
      example: "1 ft ≈ 3.22 × 10⁻¹⁷ ly",
    },
    {
      unit: "Astronomical Unit (AU)",
      description:
        "Average distance from Earth to the Sun (≈149.6 million km).",
      conversion: 0,
      example: "1 ft ≈ 2.04 × 10⁻¹² AU",
    },
    {
      unit: "Parsec (pc)",
      description: "Astronomical unit of distance (≈3.26 light years).",
      conversion: 0,
      example: "1 ft ≈ 9.88 × 10⁻¹⁸ pc",
    },
    {
      unit: "Furlong (fur)",
      description: "Traditional unit of distance equal to 660 feet.",
      conversion: 0,
      example: "1 ft ≈ 0.00152 fur, 660 ft = 1 fur",
    },
    {
      unit: "Chain (ch)",
      description: "Surveying unit equal to 66 feet.",
      conversion: 0,
      example: "1 ft ≈ 0.0152 ch, 66 ft = 1 ch",
    },
    {
      unit: "Rod (rd)",
      description: "Unit of length equal to 16.5 feet.",
      conversion: 0,
      example: "1 ft ≈ 0.0606 rd, 16.5 ft = 1 rd",
    },
    {
      unit: "Fathom (ftm)",
      description: "Nautical unit of depth equal to 6 feet.",
      conversion: 0,
      example: "1 ft ≈ 0.167 ftm, 6 ft = 1 ftm",
    },
    {
      unit: "Hand (hh)",
      description:
        "Unit used to measure the height of horses, equal to 4 inches.",
      conversion: 0,
      example: "1 ft = 3 hh, 5 ft = 15 hh",
    },
    {
      unit: "Cubit (cubit)",
      description:
        "Ancient unit based on the length of the forearm (≈18 inches).",
      conversion: 0,
      example: "1 ft ≈ 0.667 cubits, 1.5 ft ≈ 1 cubit",
    },
    {
      unit: "Planck Length (ℓₚ)",
      description: "The smallest measurable length in quantum physics.",
      conversion: 0,
      example: "1 ft ≈ 1.89 × 10³⁴ ℓₚ",
    },
    {
      unit: "Angstrom (Å)",
      description:
        "Unit used to measure atomic-scale distances (10⁻¹⁰ meters).",
      conversion: 0,
      example: "1 ft = 3.048 × 10⁹ Å",
    },
    {
      unit: "Micron (μm)",
      description: "Another name for micrometer (10⁻⁶ meters).",
      conversion: 0,
      example: "1 ft = 304,800 μm",
    },
    {
      unit: "Mil (thou)",
      description: "Unit equal to one thousandth of an inch.",
      conversion: 0,
      example: "1 ft = 12,000 mil",
    },
    {
      unit: "Earth's Equatorial Radius",
      description: "Radius of Earth at the equator (≈6,378 km).",
      conversion: 0,
      example: "1 ft ≈ 4.78 × 10⁻⁸ Earth radii",
    },
    {
      unit: "Sun's Radius",
      description: "Radius of the Sun (≈696,340 km).",
      conversion: 0,
      example: "1 ft ≈ 4.38 × 10⁻¹⁰ Solar radii",
    },
  ],
  Hectare: [
    {
      unit: "Square Meter (m²)",
      description:
        "The base unit of area in the International System of Units (SI).",
      conversion: 0,
      example: "1 ha = 10,000 m², 2.5 ha = 25,000 m²",
    },
    {
      unit: "Square Kilometer (km²)",
      description: "Metric unit of area equal to 1,000,000 square meters.",
      conversion: 0,
      example: "1 ha = 0.01 km², 100 ha = 1 km²",
    },
    {
      unit: "Acre",
      description:
        "Imperial unit of area commonly used in the United States and UK.",
      conversion: 0,
      example: "1 ha ≈ 2.47 acres, 5 ha ≈ 12.36 acres",
    },
    {
      unit: "Square Mile (mi²)",
      description: "Imperial unit of large land areas (1 mi² = 640 acres).",
      conversion: 0,
      example: "1 ha ≈ 0.00386 mi², 259 ha ≈ 1 mi²",
    },
    {
      unit: "Square Yard (yd²)",
      description: "Imperial unit of area equal to 9 square feet.",
      conversion: 0,
      example: "1 ha ≈ 11,960 yd², 0.1 ha ≈ 1,196 yd²",
    },
    {
      unit: "Square Foot (ft²)",
      description: "Imperial unit of area commonly used in real estate.",
      conversion: 0,
      example: "1 ha ≈ 107,639 ft², 0.01 ha ≈ 1,076 ft²",
    },
    {
      unit: "Square Inch (in²)",
      description: "Small imperial unit of area.",
      conversion: 0,
      example: "1 ha ≈ 15.5 million in², 0.001 ha ≈ 15,500 in²",
    },
    {
      unit: "Are (a)",
      description:
        "Metric unit equal to 100 square meters (1/100th of a hectare).",
      conversion: 0,
      example: "1 ha = 100 a, 0.5 ha = 50 a",
    },
    {
      unit: "Square Centimeter (cm²)",
      description: "Metric unit equal to one hundredth of a square meter.",
      conversion: 0,
      example: "1 ha = 100 million cm², 0.01 ha = 1 million cm²",
    },
    {
      unit: "Square Millimeter (mm²)",
      description: "Small metric unit of area.",
      conversion: 0,
      example: "1 ha = 10 billion mm², 0.001 ha = 10 million mm²",
    },
    {
      unit: "Barn (b)",
      description: "Extremely small unit used in nuclear physics (10⁻²⁸ m²).",
      conversion: 0,
      example: "1 ha = 1 × 10³² b",
    },
    {
      unit: "Rood",
      description: "Old English unit equal to 1/4 acre.",
      conversion: 0,
      example: "1 ha ≈ 9.88 roods, 0.101 ha ≈ 1 rood",
    },
    {
      unit: "Square Chain",
      description: "Surveying unit equal to 484 square yards.",
      conversion: 0,
      example: "1 ha ≈ 24.71 sq chains, 0.04 ha ≈ 1 sq chain",
    },
    {
      unit: "Circular Inch",
      description: "Area of a circle with 1-inch diameter.",
      conversion: 0,
      example: "1 ha ≈ 19.7 million circular inches",
    },
    {
      unit: "Township",
      description: "Large US surveying unit (36 square miles).",
      conversion: 0,
      example: "1 ha ≈ 0.0000101 townships, 98,842 ha ≈ 1 township",
    },
    {
      unit: "Section",
      description: "US land area equal to 1 square mile.",
      conversion: 0,
      example: "1 ha ≈ 0.00386 sections, 259 ha ≈ 1 section",
    },
    {
      unit: "Arpent",
      description: "Historical French land area unit (≈0.34 ha).",
      conversion: 0,
      example: "1 ha ≈ 0.139 arpents, 7.2 ha ≈ 1 arpent",
    },
    {
      unit: "Cuerda",
      description: "Traditional Spanish land area unit (≈0.39 ha).",
      conversion: 0,
      example: "1 ha ≈ 0.254 cuerdas, 3.93 ha ≈ 1 cuerda",
    },
    {
      unit: "Plaza",
      description: "Traditional Spanish unit for marketplaces (≈6,400 m²).",
      conversion: 0,
      example: "1 ha = 0.0625 plazas, 16 ha = 1 plaza",
    },
    {
      unit: "Electron Cross Section",
      description: "Approximate cross-sectional area of an electron.",
      conversion: 0,
      example: "1 ha ≈ 1.51 × 10³¹ electron cross sections",
    },
  ],
  GB: [
    {
      unit: "Bit (b)",
      description: "The smallest unit of digital data (binary digit).",
      conversion: 0,
      example: "1 GB = 8,589,934,592 bits, 0.5 GB = 4,294,967,296 bits",
    },
    {
      unit: "Byte (B)",
      description: "Basic unit of digital information (8 bits).",
      conversion: 0,
      example: "1 GB = 1,073,741,824 bytes, 2 GB = 2,147,483,648 bytes",
    },
    {
      unit: "Kilobyte (KB)",
      description: "1,024 bytes, used for small file sizes.",
      conversion: 0,
      example: "1 GB = 1,048,576 KB, 0.25 GB = 262,144 KB",
    },
    {
      unit: "Megabyte (MB)",
      description: "1,024 kilobytes, common for medium-sized files.",
      conversion: 0,
      example: "1 GB = 1,024 MB, 8 GB = 8,192 MB",
    },
    {
      unit: "Terabyte (TB)",
      description: "1,024 gigabytes, used for large storage capacities.",
      conversion: 0,
      example: "1 GB ≈ 0.000977 TB, 1,024 GB = 1 TB",
    },
    {
      unit: "Petabyte (PB)",
      description: "1,024 terabytes, for massive data storage.",
      conversion: 0,
      example: "1 GB ≈ 0.000000954 PB, 1,048,576 GB = 1 PB",
    },
    {
      unit: "Nibble",
      description: "4 bits (half a byte), used in low-level computing.",
      conversion: 0,
      example: "1 GB = 2,147,483,648 nibbles",
    },
    {
      unit: "Word",
      description: "Typically 2 bytes (16 bits), varies by system.",
      conversion: 0,
      example: "1 GB = 536,870,912 words (16-bit systems)",
    },
    {
      unit: 'Floppy Disk (3.5", HD)',
      description: "1.44 MB capacity, obsolete storage medium.",
      conversion: 0,
      example: "1 GB ≈ 737 floppies, 700 MB ≈ 0.49 GB",
    },
    {
      unit: "CD (80 Minute)",
      description: "700 MB capacity, standard audio/data CD.",
      conversion: 0,
      example: "1 GB ≈ 1.46 CDs, 4.7 GB DVD ≈ 6.7 CDs",
    },
    {
      unit: "DVD (Single Layer)",
      description: "4.7 GB capacity, common video/data format.",
      conversion: 0,
      example: "1 GB ≈ 0.21 single-layer DVDs, 5 GB ≈ 1.06 DVDs",
    },
    {
      unit: "Blu-ray (Single Layer)",
      description: "25 GB capacity, high-definition storage.",
      conversion: 0,
      example: "1 GB = 0.04 Blu-rays, 50 GB = 2 Blu-rays",
    },
    {
      unit: "Jaz 1GB",
      description: "Obsolete 1GB removable storage cartridge.",
      conversion: 0,
      example: "1 GB = 1 Jaz cartridge, 2 GB = 2 cartridges",
    },
    {
      unit: "Zip 100",
      description: "100 MB capacity, late 1990s removable media.",
      conversion: 0,
      example: "1 GB ≈ 10.8 Zip disks, 10 GB ≈ 108 disks",
    },
    {
      unit: "Exabyte (EB)",
      description: "1,024 petabytes, for hyperscale data.",
      conversion: 0,
      example: "1 GB ≈ 0.000000000931 EB, 1 EB ≈ 1,073,741,824 GB",
    },
    {
      unit: "Block (Traditional)",
      description: "512-byte units (common in filesystems).",
      conversion: 0,
      example: "1 GB = 2,097,152 blocks, 0.5 GB = 1,048,576 blocks",
    },
    {
      unit: "Tape Drive (LTO-8)",
      description: "12 TB native capacity, modern backup solution.",
      conversion: 0,
      example: "1 GB ≈ 0.000081 LTO-8 tapes, 12,000 GB = 1 tape",
    },
    {
      unit: "iPod Classic (160GB)",
      description: "Legacy Apple music player capacity.",
      conversion: 0,
      example: "1 GB = 0.00625 iPod capacity, 160 GB = full device",
    },
    {
      unit: "Human Genome",
      description: "Approximate uncompressed digital size (≈3.2 GB).",
      conversion: 0,
      example: "1 GB ≈ 0.31 genomes, 3.2 GB = 1 complete genome",
    },
    {
      unit: "Netflix HD Movie",
      description: "Average 2-hour stream (≈3 GB).",
      conversion: 0,
      example: "1 GB ≈ 20 minutes HD video, 30 GB ≈ 10 movies",
    },
  ],
  Hex: [
    {
      unit: "Binary",
      description: "Base-2 number system using digits 0 and 1",
      conversion: 0,
      example: "F (hex) = 1111 (binary), A (hex) = 1010 (binary)",
    },
    {
      unit: "Decimal",
      description: "Base-10 number system using digits 0-9",
      conversion: 0,
      example: "F (hex) = 15 (decimal), 10 (hex) = 16 (decimal)",
    },
    {
      unit: "Octal",
      description: "Base-8 number system using digits 0-7",
      conversion: 0,
      example: "F (hex) = 17 (octal), 20 (hex) = 40 (octal)",
    },
    {
      unit: "Base-4",
      description: "Quaternary number system using digits 0-3",
      conversion: 0,
      example: "F (hex) = 33 (base-4), 10 (hex) = 100 (base-4)",
    },
    {
      unit: "Base-5",
      description: "Quinary number system using digits 0-4",
      conversion: 0,
      example: "F (hex) = 30 (base-5), A (hex) = 20 (base-5)",
    },
    {
      unit: "Base-12",
      description: "Duodecimal number system",
      conversion: 0,
      example: "F (hex) = 13 (base-12), 10 (hex) = 18 (base-12)",
    },
    {
      unit: "Base-20",
      description: "Vigesimal number system",
      conversion: 0,
      example: "F (hex) = F (base-20), 10 (hex) = G (base-20)",
    },
    {
      unit: "Base-36",
      description: "Alphanumeric number system using 0-9 and A-Z",
      conversion: 0,
      example: "F (hex) = F (base-36), 10 (hex) = G (base-36)",
    },
    {
      unit: "ASCII Character",
      description: "Character representation of hexadecimal values",
      conversion: 0,
      example: "41 (hex) = 'A', 61 (hex) = 'a'",
    },
    {
      unit: "RGB Color",
      description: "Color representation in RGB format",
      conversion: 0,
      example: "FF (hex) = rgb(255, 255, 255), 80 (hex) = rgb(128, 128, 128)",
    },
  ],
  Hp: [
    {
      unit: "Watt (W)",
      description: "SI unit of power (1 W = 1 J/s)",
      conversion: 745.699872,
      example: "1 hp = 745.7 W, 10 hp = 7,457 W",
    },
    {
      unit: "Kilowatt (kW)",
      description: "Equal to 1,000 watts",
      conversion: 0.7457,
      example: "1 hp ≈ 0.7457 kW, 100 hp = 74.57 kW",
    },
    {
      unit: "Exawatt (EW)",
      description: "Quintillion watts (10¹⁸ W)",
      conversion: 7.457e-16,
      example: "1 hp = 7.457×10⁻¹⁶ EW",
    },
    {
      unit: "Petawatt (PW)",
      description: "Quadrillion watts (10¹⁵ W)",
      conversion: 7.457e-13,
      example: "1 hp = 7.457×10⁻¹³ PW",
    },
    {
      unit: "Terawatt (TW)",
      description: "Trillion watts (10¹² W)",
      conversion: 7.457e-10,
      example: "1 hp = 7.457×10⁻¹⁰ TW",
    },
    {
      unit: "Gigawatt (GW)",
      description: "Billion watts (10⁹ W)",
      conversion: 7.457e-7,
      example: "1 hp = 7.457×10⁻⁷ GW",
    },
    {
      unit: "Megawatt (MW)",
      description: "Million watts (10⁶ W)",
      conversion: 0.0007457,
      example: "1 hp = 0.0007457 MW",
    },
    {
      unit: "Hectowatt (hW)",
      description: "Hundred watts (10² W)",
      conversion: 7.457,
      example: "1 hp = 7.457 hW",
    },
    {
      unit: "Dekawatt (daW)",
      description: "Ten watts (10¹ W)",
      conversion: 74.57,
      example: "1 hp = 74.57 daW",
    },
    {
      unit: "Deciwatt (dW)",
      description: "Tenth of a watt (10⁻¹ W)",
      conversion: 7457,
      example: "1 hp = 7,457 dW",
    },
    {
      unit: "Centiwatt (cW)",
      description: "Hundredth of a watt (10⁻² W)",
      conversion: 74570,
      example: "1 hp = 74,570 cW",
    },
    {
      unit: "Milliwatt (mW)",
      description: "Thousandth of a watt (10⁻³ W)",
      conversion: 745700,
      example: "1 hp = 745,700 mW",
    },
    {
      unit: "Microwatt (µW)",
      description: "Millionth of a watt (10⁻⁶ W)",
      conversion: 7.457e8,
      example: "1 hp = 745.7 million µW",
    },
    {
      unit: "Nanowatt (nW)",
      description: "Billionth of a watt (10⁻⁹ W)",
      conversion: 7.457e11,
      example: "1 hp = 745.7 billion nW",
    },
    {
      unit: "Picowatt (pW)",
      description: "Trillionth of a watt (10⁻¹² W)",
      conversion: 7.457e14,
      example: "1 hp = 745.7 trillion pW",
    },
    {
      unit: "Femtowatt (fW)",
      description: "Quadrillionth of a watt (10⁻¹⁵ W)",
      conversion: 7.457e17,
      example: "1 hp = 745.7 quadrillion fW",
    },
    {
      unit: "Attowatt (aW)",
      description: "Quintillionth of a watt (10⁻¹⁸ W)",
      conversion: 7.457e20,
      example: "1 hp = 7.457×10²⁰ aW",
    },
    {
      unit: "Horsepower (metric/PS)",
      description: "European metric horsepower",
      conversion: 1.01387,
      example: "1 hp ≈ 1.0139 PS",
    },
    {
      unit: "Horsepower (boiler)",
      description: "Used for boiler power ratings",
      conversion: 0.076018,
      example: "1 hp ≈ 0.076 boiler hp",
    },
    {
      unit: "Horsepower (electric)",
      description: "Electric motor horsepower (746 W exactly)",
      conversion: 1.0004,
      example: "1 hp ≈ 1.0004 electric hp",
    },
    {
      unit: "Horsepower (water)",
      description: "Hydraulic horsepower",
      conversion: 1.01434,
      example: "1 hp ≈ 1.0143 water hp",
    },
    {
      unit: "Pferdestarke (ps)",
      description: "German metric horsepower",
      conversion: 1.01387,
      example: "1 hp ≈ 1.0139 ps",
    },
    {
      unit: "Btu (IT)/hour",
      description: "British thermal unit per hour (International Table)",
      conversion: 2544.43,
      example: "1 hp ≈ 2,544 BTU/h",
    },
    {
      unit: "Btu (IT)/minute",
      description: "BTU per minute (IT)",
      conversion: 42.4072,
      example: "1 hp ≈ 42.41 BTU/min",
    },
    {
      unit: "Btu (IT)/second",
      description: "BTU per second (IT)",
      conversion: 0.706787,
      example: "1 hp ≈ 0.7068 BTU/s",
    },
    {
      unit: "Btu (th)/hour",
      description: "Thermochemical BTU per hour",
      conversion: 2546.14,
      example: "1 hp ≈ 2,546 BTU/h (th)",
    },
    {
      unit: "Btu (th)/minute",
      description: "Thermochemical BTU per minute",
      conversion: 42.4357,
      example: "1 hp ≈ 42.44 BTU/min (th)",
    },
    {
      unit: "Btu (th)/second",
      description: "Thermochemical BTU per second",
      conversion: 0.707262,
      example: "1 hp ≈ 0.7073 BTU/s (th)",
    },
    {
      unit: "MBtu (IT)/hour",
      description: "Thousand BTU per hour (IT)",
      conversion: 2.54443,
      example: "1 hp ≈ 2.544 MBtu/h",
    },
    {
      unit: "MBH",
      description: "Thousand BTU per hour (identical to MBtu/h)",
      conversion: 2.54443,
      example: "1 hp ≈ 2.544 MBH",
    },
    {
      unit: "Ton (refrigeration)",
      description: "Refrigeration ton (12,000 BTU/h)",
      conversion: 0.212036,
      example: "1 hp ≈ 0.212 tons refrigeration",
    },
    {
      unit: "Kilocalorie (IT)/hour",
      description: "International Table kilocalorie per hour",
      conversion: 641.186,
      example: "1 hp ≈ 641 kcal/h (IT)",
    },
    {
      unit: "Kilocalorie (IT)/minute",
      description: "International Table kcal per minute",
      conversion: 10.6864,
      example: "1 hp ≈ 10.69 kcal/min (IT)",
    },
    {
      unit: "Kilocalorie (IT)/second",
      description: "International Table kcal per second",
      conversion: 0.178107,
      example: "1 hp ≈ 0.1781 kcal/s (IT)",
    },
    {
      unit: "Kilocalorie (th)/hour",
      description: "Thermochemical kilocalorie per hour",
      conversion: 641.615,
      example: "1 hp ≈ 641.6 kcal/h (th)",
    },
    {
      unit: "Kilocalorie (th)/minute",
      description: "Thermochemical kcal per minute",
      conversion: 10.6936,
      example: "1 hp ≈ 10.69 kcal/min (th)",
    },
    {
      unit: "Kilocalorie (th)/second",
      description: "Thermochemical kcal per second",
      conversion: 0.178226,
      example: "1 hp ≈ 0.1782 kcal/s (th)",
    },
    {
      unit: "Calorie (IT)/hour",
      description: "International Table calorie per hour",
      conversion: 641186,
      example: "1 hp ≈ 641,186 cal/h (IT)",
    },
    {
      unit: "Calorie (IT)/minute",
      description: "International Table cal per minute",
      conversion: 10686.4,
      example: "1 hp ≈ 10,686 cal/min (IT)",
    },
    {
      unit: "Calorie (IT)/second",
      description: "International Table cal per second",
      conversion: 178.107,
      example: "1 hp ≈ 178.1 cal/s (IT)",
    },
    {
      unit: "Calorie (th)/hour",
      description: "Thermochemical calorie per hour",
      conversion: 641615,
      example: "1 hp ≈ 641,615 cal/h (th)",
    },
    {
      unit: "Calorie (th)/minute",
      description: "Thermochemical cal per minute",
      conversion: 10693.6,
      example: "1 hp ≈ 10,694 cal/min (th)",
    },
    {
      unit: "Calorie (th)/second",
      description: "Thermochemical cal per second",
      conversion: 178.226,
      example: "1 hp ≈ 178.2 cal/s (th)",
    },
    {
      unit: "Foot Pound-force/hour",
      description: "Foot-pounds of torque per hour",
      conversion: 1980000,
      example: "1 hp = 1,980,000 ft·lbf/h",
    },
    {
      unit: "Foot Pound-force/minute",
      description: "Foot-pounds of torque per minute",
      conversion: 33000,
      example: "1 hp = 33,000 ft·lbf/min",
    },
    {
      unit: "Foot Pound-force/second",
      description: "Foot-pounds of torque per second",
      conversion: 550,
      example: "1 hp = 550 ft·lbf/s (definition)",
    },
    {
      unit: "Pound-foot/hour",
      description: "Alternative name for ft·lbf/h",
      conversion: 1980000,
      example: "1 hp = 1,980,000 lb·ft/h",
    },
    {
      unit: "Pound-foot/minute",
      description: "Alternative name for ft·lbf/min",
      conversion: 33000,
      example: "1 hp = 33,000 lb·ft/min",
    },
    {
      unit: "Pound-foot/second",
      description: "Alternative name for ft·lbf/s",
      conversion: 550,
      example: "1 hp = 550 lb·ft/s",
    },
    {
      unit: "Erg/second",
      description: "CGS unit of power (1 erg/s = 10⁻⁷ W)",
      conversion: 7.457e9,
      example: "1 hp = 7.457×10⁹ erg/s",
    },
    {
      unit: "Kilovolt Ampere (kVA)",
      description: "Electrical apparent power",
      conversion: 0.7457,
      example: "1 hp ≈ 0.7457 kVA (for resistive loads)",
    },
    {
      unit: "Volt Ampere (VA)",
      description: "Electrical apparent power",
      conversion: 745.7,
      example: "1 hp ≈ 745.7 VA (for resistive loads)",
    },
    {
      unit: "Newton Meter/second (N·m/s)",
      description: "Alternative expression for watts",
      conversion: 745.7,
      example: "1 hp = 745.7 N·m/s",
    },
    {
      unit: "Joule/second (J/s)",
      description: "Direct equivalent to watts",
      conversion: 745.7,
      example: "1 hp = 745.7 J/s",
    },
    {
      unit: "Exajoule/second (EJ/s)",
      description: "Quintillion joules per second",
      conversion: 7.457e-16,
      example: "1 hp = 7.457×10⁻¹⁶ EJ/s",
    },
    {
      unit: "Petajoule/second (PJ/s)",
      description: "Quadrillion joules per second",
      conversion: 7.457e-13,
      example: "1 hp = 7.457×10⁻¹³ PJ/s",
    },
    {
      unit: "Terajoule/second (TJ/s)",
      description: "Trillion joules per second",
      conversion: 7.457e-10,
      example: "1 hp = 7.457×10⁻¹⁰ TJ/s",
    },
    {
      unit: "Gigajoule/second (GJ/s)",
      description: "Billion joules per second",
      conversion: 7.457e-7,
      example: "1 hp = 7.457×10⁻⁷ GJ/s",
    },
    {
      unit: "Megajoule/second (MJ/s)",
      description: "Million joules per second",
      conversion: 0.0007457,
      example: "1 hp = 0.0007457 MJ/s",
    },
    {
      unit: "Kilojoule/second (kJ/s)",
      description: "Thousand joules per second",
      conversion: 0.7457,
      example: "1 hp ≈ 0.7457 kJ/s",
    },
    {
      unit: "Hectojoule/second (hJ/s)",
      description: "Hundred joules per second",
      conversion: 7.457,
      example: "1 hp = 7.457 hJ/s",
    },
    {
      unit: "Dekajoule/second (daJ/s)",
      description: "Ten joules per second",
      conversion: 74.57,
      example: "1 hp = 74.57 daJ/s",
    },
    {
      unit: "Decijoule/second (dJ/s)",
      description: "Tenth of a joule per second",
      conversion: 7457,
      example: "1 hp = 7,457 dJ/s",
    },
    {
      unit: "Centijoule/second (cJ/s)",
      description: "Hundredth of a joule per second",
      conversion: 74570,
      example: "1 hp = 74,570 cJ/s",
    },
    {
      unit: "Millijoule/second (mJ/s)",
      description: "Thousandth of a joule per second",
      conversion: 745700,
      example: "1 hp = 745,700 mJ/s",
    },
    {
      unit: "Microjoule/second (µJ/s)",
      description: "Millionth of a joule per second",
      conversion: 7.457e8,
      example: "1 hp = 745.7 million µJ/s",
    },
    {
      unit: "Nanojoule/second (nJ/s)",
      description: "Billionth of a joule per second",
      conversion: 7.457e11,
      example: "1 hp = 745.7 billion nJ/s",
    },
    {
      unit: "Picojoule/second (pJ/s)",
      description: "Trillionth of a joule per second",
      conversion: 7.457e14,
      example: "1 hp = 745.7 trillion pJ/s",
    },
    {
      unit: "Femtojoule/second (fJ/s)",
      description: "Quadrillionth of a joule per second",
      conversion: 7.457e17,
      example: "1 hp = 745.7 quadrillion fJ/s",
    },
    {
      unit: "Attojoule/second (aJ/s)",
      description: "Quintillionth of a joule per second",
      conversion: 7.457e20,
      example: "1 hp = 7.457×10²⁰ aJ/s",
    },
    {
      unit: "Joule/hour (J/h)",
      description: "Joules per hour",
      conversion: 2684520,
      example: "1 hp = 2,684,520 J/h",
    },
    {
      unit: "Joule/minute (J/min)",
      description: "Joules per minute",
      conversion: 44742,
      example: "1 hp = 44,742 J/min",
    },
    {
      unit: "Kilojoule/hour (kJ/h)",
      description: "Kilojoules per hour",
      conversion: 2684.52,
      example: "1 hp = 2,684.52 kJ/h",
    },
    {
      unit: "Kilojoule/minute (kJ/min)",
      description: "Kilojoules per minute",
      conversion: 44.742,
      example: "1 hp = 44.742 kJ/min",
    },
  ],
  Hours: [
    {
      unit: "Second (s)",
      description: "SI base unit of time",
      conversion: 3600,
      example: "1 hour = 3,600 seconds, 2 hours = 7,200 seconds",
    },
    {
      unit: "Millisecond (ms)",
      description: "Thousandth of a second",
      conversion: 3.6e6,
      example: "1 hour = 3.6 million ms, 0.5 hours = 1.8 million ms",
    },
    {
      unit: "Microsecond (µs)",
      description: "Millionth of a second",
      conversion: 3.6e9,
      example: "1 hour = 3.6 billion µs",
    },
    {
      unit: "Nanosecond (ns)",
      description: "Billionth of a second",
      conversion: 3.6e12,
      example: "1 hour = 3.6 trillion ns",
    },
    {
      unit: "Picosecond (ps)",
      description: "Trillionth of a second",
      conversion: 3.6e15,
      example: "1 hour = 3.6 quadrillion ps",
    },
    {
      unit: "Femtosecond (fs)",
      description: "Quadrillionth of a second",
      conversion: 3.6e18,
      example: "1 hour = 3.6 quintillion fs",
    },
    {
      unit: "Attosecond (as)",
      description: "Quintillionth of a second",
      conversion: 3.6e21,
      example: "1 hour = 3.6 sextillion as",
    },
    {
      unit: "Minute (min)",
      description: "60 seconds",
      conversion: 60,
      example: "1 hour = 60 minutes, 3 hours = 180 minutes",
    },
    {
      unit: "Day (d)",
      description: "24 hours",
      conversion: 0.0416667,
      example: "1 hour ≈ 0.04167 days, 12 hours = 0.5 days",
    },
    {
      unit: "Week (wk)",
      description: "7 days",
      conversion: 0.00595238,
      example: "1 hour ≈ 0.005952 weeks, 168 hours = 1 week",
    },
    {
      unit: "Month (avg)",
      description: "Average Gregorian month (30.44 days)",
      conversion: 0.00136893,
      example: "1 hour ≈ 0.001369 months, 730.5 hours ≈ 1 month",
    },
    {
      unit: "Year (calendar)",
      description: "Common year (365 days)",
      conversion: 0.000114155,
      example: "1 hour ≈ 0.0001142 years, 8,760 hours = 1 year",
    },
    {
      unit: "Decade",
      description: "10 years",
      conversion: 1.14155e-5,
      example: "1 hour ≈ 0.000011415 decades",
    },
    {
      unit: "Century",
      description: "100 years",
      conversion: 1.14155e-6,
      example: "1 hour ≈ 1.1416×10⁻⁶ centuries",
    },
    {
      unit: "Millennium",
      description: "1,000 years",
      conversion: 1.14155e-7,
      example: "1 hour ≈ 1.1416×10⁻⁷ millennia",
    },
    {
      unit: "Fortnight",
      description: "2 weeks (14 days)",
      conversion: 0.00297619,
      example: "1 hour ≈ 0.002976 fortnights",
    },
    {
      unit: "Shake",
      description: "10 nanoseconds (nuclear physics)",
      conversion: 3.6e11,
      example: "1 hour = 3.6×10¹¹ shakes",
    },
    {
      unit: "Month (synodic)",
      description: "Lunar month (29.53 days)",
      conversion: 0.00141097,
      example: "1 hour ≈ 0.001411 lunar months",
    },
    {
      unit: "Year (Julian)",
      description: "Julian year (365.25 days)",
      conversion: 0.000114077,
      example: "1 hour ≈ 0.00011408 Julian years",
    },
    {
      unit: "Year (leap)",
      description: "Leap year (366 days)",
      conversion: 0.000113843,
      example: "1 hour ≈ 0.00011384 leap years",
    },
    {
      unit: "Year (tropical)",
      description: "Solar/tropical year (365.24219 days)",
      conversion: 0.00011408,
      example: "1 hour ≈ 0.00011408 tropical years",
    },
    {
      unit: "Year (sidereal)",
      description: "Sidereal year (365.25636 days)",
      conversion: 0.000114075,
      example: "1 hour ≈ 0.000114075 sidereal years",
    },
    {
      unit: "Day (sidereal)",
      description: "Earth's rotation relative to stars (23h56m4.1s)",
      conversion: 0.0417807,
      example: "1 hour ≈ 0.04178 sidereal days",
    },
    {
      unit: "Hour (sidereal)",
      description: "Sidereal hour (59m50.17s)",
      conversion: 1.00274,
      example: "1 standard hour ≈ 1.00274 sidereal hours",
    },
    {
      unit: "Minute (sidereal)",
      description: "Sidereal minute (59.8362 seconds)",
      conversion: 60.1644,
      example: "1 standard hour ≈ 60.164 sidereal minutes",
    },
    {
      unit: "Second (sidereal)",
      description: "Sidereal second (0.99727 standard seconds)",
      conversion: 3609.86,
      example: "1 standard hour ≈ 3,609.86 sidereal seconds",
    },
    {
      unit: "Septennial",
      description: "7-year period",
      conversion: 1.63079e-5,
      example: "1 hour ≈ 0.000016308 septennials",
    },
    {
      unit: "Octennial",
      description: "8-year period",
      conversion: 1.42694e-5,
      example: "1 hour ≈ 0.000014269 octennials",
    },
    {
      unit: "Novennial",
      description: "9-year period",
      conversion: 1.26839e-5,
      example: "1 hour ≈ 0.000012684 novennials",
    },
    {
      unit: "Quindecennial",
      description: "15-year period",
      conversion: 7.60514e-6,
      example: "1 hour ≈ 0.000007605 quindecennials",
    },
    {
      unit: "Quinquennial",
      description: "5-year period",
      conversion: 2.28311e-5,
      example: "1 hour ≈ 0.000022831 quinquennials",
    },
    {
      unit: "Planck Time",
      description: "Quantum of time (5.39×10⁻⁴⁴ s)",
      conversion: 6.67833e46,
      example: "1 hour ≈ 6.678×10⁴⁶ Planck times",
    },
    {
      unit: "Break",
      description: "Extremely short time unit in physics",
      conversion: 3.6e-19,
      example: "1 hour ≈ 3.6×10⁻¹⁹ breaks",
    },
  ],
  Inches: [
    {
      unit: "Meter (m)",
      description: "The SI base unit of length.",
      conversion: 0.0254,
      example: "1 inch = 0.0254 m, 39.3701 inches = 1 m",
    },
    {
      unit: "Kilometer (km)",
      description: "Metric unit equal to 1,000 meters.",
      conversion: 0.0000254,
      example: "1 inch ≈ 0.0000254 km, 39,370.1 inches = 1 km",
    },
    {
      unit: "Centimeter (cm)",
      description: "Common metric unit equal to 1/100 meter.",
      conversion: 2.54,
      example: "1 inch = 2.54 cm, 0.393701 inches = 1 cm",
    },
    {
      unit: "Millimeter (mm)",
      description: "Small metric unit equal to 1/1,000 meter.",
      conversion: 25.4,
      example: "1 inch = 25.4 mm, 0.0393701 inches = 1 mm",
    },
    {
      unit: "Micrometer (µm)",
      description: "Tiny metric unit equal to 1/1,000,000 meter.",
      conversion: 25400,
      example: "1 inch = 25,400 µm, 0.0000393701 inches = 1 µm",
    },
    {
      unit: "Nanometer (nm)",
      description: "Extremely small metric unit used in nanotechnology.",
      conversion: 25400000,
      example: "1 inch = 25,400,000 nm, 3.93701e-8 inches = 1 nm",
    },
    {
      unit: "Mile (mi)",
      description: "Imperial unit for long distances.",
      conversion: 0.0000157828,
      example: "1 inch ≈ 0.0000157828 mi, 63,360 inches = 1 mi",
    },
    {
      unit: "Yard (yd)",
      description: "Imperial unit equal to 3 feet.",
      conversion: 0.0277778,
      example: "1 inch ≈ 0.0277778 yd, 36 inches = 1 yd",
    },
    {
      unit: "Foot (ft)",
      description: "Imperial unit equal to 12 inches.",
      conversion: 0.0833333,
      example: "1 inch ≈ 0.0833333 ft, 12 inches = 1 ft",
    },
    {
      unit: "Light Year (ly)",
      description: "Astronomical distance light travels in one year.",
      conversion: 2.68478e-18,
      example: "1 inch ≈ 2.68478e-18 ly, 3.7247e17 inches = 1 ly",
    },
    {
      unit: "Nautical Mile (nmi)",
      description: "Maritime and aviation distance unit.",
      conversion: 0.0000137149,
      example: "1 inch ≈ 0.0000137149 nmi, 72,913.4 inches = 1 nmi",
    },
    {
      unit: "Fathom (ftm)",
      description: "Nautical depth measurement.",
      conversion: 0.0138889,
      example: "1 inch ≈ 0.0138889 ftm, 72 inches = 1 ftm",
    },
    {
      unit: "Rod",
      description: "Old English unit for land measurement.",
      conversion: 0.00505051,
      example: "1 inch ≈ 0.00505051 rods, 198 inches = 1 rod",
    },
    {
      unit: "Furlong",
      description: "Traditional English unit equal to 40 rods.",
      conversion: 0.000126263,
      example: "1 inch ≈ 0.000126263 furlongs, 7,920 inches = 1 furlong",
    },
    {
      unit: "Astronomical Unit (AU)",
      description: "Average Earth-Sun distance.",
      conversion: 1.69789e-13,
      example: "1 inch ≈ 1.69789e-13 AU, 5.88968e12 inches = 1 AU",
    },
    {
      unit: "Parsec (pc)",
      description: "Astronomical distance unit.",
      conversion: 8.23158e-19,
      example: "1 inch ≈ 8.23158e-19 pc, 1.21483e18 inches = 1 pc",
    },
    {
      unit: "Angstrom (Å)",
      description: "Unit for atomic-scale measurements.",
      conversion: 254000000,
      example: "1 inch = 254,000,000 Å, 3.93701e-9 inches = 1 Å",
    },
    {
      unit: "Micron (µ)",
      description: "Another name for micrometer.",
      conversion: 25400,
      example: "1 inch = 25,400 µ, 0.0000393701 inches = 1 µ",
    },
    {
      unit: "Mil (thousandth of an inch)",
      description: "Engineering unit equal to 0.001 inches.",
      conversion: 1000,
      example: "1 inch = 1,000 mils, 0.001 inches = 1 mil",
    },
    {
      unit: "Point (typography)",
      description: "Printing measurement unit.",
      conversion: 72,
      example: "1 inch = 72 points, 0.0138889 inches = 1 point",
    },
    {
      unit: "Pica (typography)",
      description: "Printing measurement equal to 12 points.",
      conversion: 6,
      example: "1 inch = 6 picas, 0.166667 inches = 1 pica",
    },
    {
      unit: "Hand (equestrian)",
      description: "Unit for measuring horse height.",
      conversion: 0.25,
      example: "1 inch = 0.25 hands, 4 inches = 1 hand",
    },
    {
      unit: "Cubit (ancient)",
      description: "Ancient unit based on forearm length.",
      conversion: 0.0555556,
      example: "1 inch ≈ 0.0555556 cubits, 18 inches = 1 cubit",
    },
    {
      unit: "Span (cloth)",
      description: "Traditional measurement based on hand span.",
      conversion: 0.111111,
      example: "1 inch ≈ 0.111111 spans, 9 inches = 1 span",
    },
    {
      unit: "Finger (cloth)",
      description: "Old English textile measurement.",
      conversion: 0.222222,
      example: "1 inch ≈ 0.222222 fingers, 4.5 inches = 1 finger",
    },
    {
      unit: "Planck Length",
      description: "Theoretical smallest measurable length.",
      conversion: 1.57173e33,
      example:
        "1 inch ≈ 1.57173e33 Planck lengths, 6.3624e-34 inches ≈ 1 Planck length",
    },
    {
      unit: "Earth's Equatorial Radius",
      description: "Radius of Earth at the equator.",
      conversion: 3.98201e-9,
      example:
        "1 inch ≈ 3.98201e-9 Earth radii, 251,108,000 inches ≈ 1 Earth radius",
    },
    {
      unit: "Football Field (US, 100 yards)",
      description: "Standard American football field length.",
      conversion: 0.000277778,
      example: "1 inch ≈ 0.000277778 fields, 3,600 inches = 1 field",
    },
    {
      unit: "Olympic Swimming Pool (50m)",
      description: "Standard competition pool length.",
      conversion: 0.000508,
      example: "1 inch ≈ 0.000508 pools, 1,968.5 inches = 1 pool",
    },
    {
      unit: "Empire State Building Height (443.2m)",
      description: "Iconic New York skyscraper height.",
      conversion: 0.0000574,
      example: "1 inch ≈ 0.0000574 ESB heights, 17,448 inches ≈ 1 ESB height",
    },
    {
      unit: "Eiffel Tower Height (330m)",
      description: "Paris landmark height.",
      conversion: 0.000077,
      example:
        "1 inch ≈ 0.000077 Eiffel heights, 12,992 inches ≈ 1 Eiffel height",
    },
    {
      unit: "Human Hair Diameter (≈70µm)",
      description: "Average thickness of human hair.",
      conversion: 0.362,
      example: "1 inch ≈ 362 hair widths, 0.00276 inches ≈ 1 hair width",
    },
    {
      unit: "Credit Card Thickness (0.76mm)",
      description: "Standard plastic card thickness.",
      conversion: 33.3333,
      example:
        "1 inch ≈ 33.3333 card thicknesses, 0.03 inches ≈ 1 card thickness",
    },
    {
      unit: "Grain of Sand (0.5mm average)",
      description: "Typical medium sand grain size.",
      conversion: 50,
      example: "1 inch ≈ 50 sand grains, 0.02 inches ≈ 1 sand grain",
    },
    {
      unit: "Red Blood Cell (≈7.5µm)",
      description: "Average diameter of human erythrocytes.",
      conversion: 3386.67,
      example: "1 inch ≈ 3,386.67 RBCs, 0.000295 inches ≈ 1 RBC",
    },
    {
      unit: "DNA Helix Width (≈2nm)",
      description: "Diameter of DNA double helix.",
      conversion: 12700000,
      example: "1 inch ≈ 12,700,000 DNA widths, 7.874e-8 inches ≈ 1 DNA width",
    },
  ],
  J: [
    {
      unit: "Kilojoule (kJ)",
      description: "Metric unit equal to 1,000 joules.",
      conversion: 0.001,
      example: "1 J = 0.001 kJ, 1,000 J = 1 kJ",
    },
    {
      unit: "Kilowatt-hour (kWh)",
      description: "Common electrical energy unit.",
      conversion: 2.77778e-7,
      example: "1 J ≈ 2.77778e-7 kWh, 3.6e6 J = 1 kWh",
    },
    {
      unit: "Watt-hour (Wh)",
      description: "Electrical energy unit for smaller devices.",
      conversion: 0.000277778,
      example: "1 J ≈ 0.000277778 Wh, 3,600 J = 1 Wh",
    },
    {
      unit: "Calorie (nutritional)",
      description: "Food energy measurement.",
      conversion: 0.000238846,
      example: "1 J ≈ 0.000238846 cal, 4,186.8 J = 1 cal",
    },
    {
      unit: "British Thermal Unit (BTU)",
      description: "Traditional British/US heat energy unit.",
      conversion: 0.000947817,
      example: "1 J ≈ 0.000947817 BTU, 1,055.06 J = 1 BTU",
    },
    {
      unit: "Electronvolt (eV)",
      description: "Energy unit in particle physics.",
      conversion: 6.24151e18,
      example: "1 J ≈ 6.24151e18 eV, 1.60218e-19 J = 1 eV",
    },
    {
      unit: "Erg",
      description: "CGS system energy unit.",
      conversion: 1e7,
      example: "1 J = 10,000,000 erg, 1e-7 J = 1 erg",
    },
    {
      unit: "Foot-pound (ft·lb)",
      description: "Imperial mechanical energy unit.",
      conversion: 0.737562,
      example: "1 J ≈ 0.737562 ft·lb, 1.35582 J = 1 ft·lb",
    },
    {
      unit: "Horsepower-hour (hp·h)",
      description: "Mechanical engineering energy unit.",
      conversion: 3.72506e-7,
      example: "1 J ≈ 3.72506e-7 hp·h, 2.6845e6 J = 1 hp·h",
    },
    {
      unit: "Newton-meter (N·m)",
      description: "Direct equivalent to joule in SI system.",
      conversion: 1,
      example: "1 J = 1 N·m",
    },
    {
      unit: "Therm",
      description: "Natural gas energy measurement.",
      conversion: 9.47817e-9,
      example: "1 J ≈ 9.47817e-9 therms, 1.05506e8 J = 1 therm",
    },
    {
      unit: "Ton of TNT",
      description: "Explosive energy equivalent.",
      conversion: 2.39006e-10,
      example: "1 J ≈ 2.39006e-10 tons TNT, 4.184e9 J = 1 ton TNT",
    },
    {
      unit: "Watt-second (W·s)",
      description: "Direct equivalent to joule.",
      conversion: 1,
      example: "1 J = 1 W·s",
    },
    {
      unit: "Gram-force centimeter (gf·cm)",
      description: "Small mechanical work unit.",
      conversion: 10197.2,
      example: "1 J ≈ 10,197.2 gf·cm, 9.80665e-5 J = 1 gf·cm",
    },
    {
      unit: "Kilogram-force meter (kgf·m)",
      description: "Engineering work unit.",
      conversion: 0.101972,
      example: "1 J ≈ 0.101972 kgf·m, 9.80665 J = 1 kgf·m",
    },
    {
      unit: "Poundal-foot (pdl·ft)",
      description: "Alternative imperial energy unit.",
      conversion: 23.7304,
      example: "1 J ≈ 23.7304 pdl·ft, 0.0421401 J = 1 pdl·ft",
    },
    {
      unit: "Hartree energy (Eh)",
      description: "Atomic physics energy unit.",
      conversion: 2.29371e17,
      example: "1 J ≈ 2.29371e17 Eh, 4.35974e-18 J = 1 Eh",
    },
    {
      unit: "Rydberg constant (Ry)",
      description: "Atomic physics energy unit.",
      conversion: 4.58743e17,
      example: "1 J ≈ 4.58743e17 Ry, 2.17987e-18 J = 1 Ry",
    },
    {
      unit: "Barrel of oil equivalent",
      description: "Energy content of petroleum.",
      conversion: 1.63456e-10,
      example: "1 J ≈ 1.63456e-10 BOE, 6.12e9 J ≈ 1 BOE",
    },
    {
      unit: "Apple (100g) energy content",
      description: "Approximate food energy reference.",
      conversion: 0.000434783,
      example: "1 J ≈ 0.000434783 apples, 2,300 J ≈ 1 apple's energy",
    },
    {
      unit: "AA battery energy (alkaline)",
      description: "Typical battery energy storage.",
      conversion: 0.000142857,
      example: "1 J ≈ 0.000142857 AA batteries, 7,000 J ≈ 1 AA battery",
    },
    {
      unit: "Lightning bolt energy",
      description: "Approximate energy of single lightning strike.",
      conversion: 2e-10,
      example: "1 J ≈ 2e-10 lightning bolts, 5e9 J ≈ 1 lightning bolt",
    },
    {
      unit: "Human heartbeat energy",
      description: "Approximate energy per heartbeat.",
      conversion: 0.01,
      example: "1 J ≈ 0.01 heartbeats, 100 J ≈ 1 heartbeat's energy",
    },
    {
      unit: "ATP molecule energy",
      description: "Cellular energy currency.",
      conversion: 1.67e19,
      example: "1 J ≈ 1.67e19 ATP molecules, 6e-20 J ≈ 1 ATP hydrolysis",
    },
    {
      unit: "Big Mac energy content",
      description: "Fast food energy reference (550 kcal).",
      conversion: 4.34783e-7,
      example: "1 J ≈ 4.34783e-7 Big Macs, 2.3e6 J ≈ 1 Big Mac",
    },
    {
      unit: "Gallon of gasoline energy",
      description: "Automotive fuel energy reference.",
      conversion: 3.21574e-8,
      example: "1 J ≈ 3.21574e-8 gallons, 3.11e7 J ≈ 1 gallon gasoline",
    },
    {
      unit: "Tsar Bomba energy (largest nuke)",
      description: "Historical nuclear weapon reference.",
      conversion: 2.39e-19,
      example: "1 J ≈ 2.39e-19 Tsar Bombas, 4.2e18 J ≈ 1 Tsar Bomba yield",
    },
    {
      unit: "Supernova energy output",
      description: "Astrophysical energy reference.",
      conversion: 1e-44,
      example: "1 J ≈ 1e-44 supernovae, 1e44 J ≈ 1 typical supernova",
    },
    {
      unit: "Daily human energy intake",
      description: "Average adult caloric needs (2,000 kcal).",
      conversion: 1.19679e-7,
      example: "1 J ≈ 1.19679e-7 daily intakes, 8.36e6 J ≈ 1 daily intake",
    },
    {
      unit: "Lifting 1kg 1m against gravity",
      description: "Practical mechanical work reference.",
      conversion: 0.101972,
      example: "1 J ≈ 0.101972 kg lifts, 9.80665 J ≈ lifting 1kg 1m",
    },
  ],
  Kelvin: [
    {
      unit: "Celsius (°C)",
      description:
        "Metric temperature scale where 0°C is water's freezing point and 100°C is its boiling point (at 1 atm).",
      conversion: 0,
      example:
        "0 K = -273.15°C (absolute zero), 273.15 K = 0°C (water freezing point), 373.15 K = 100°C (water boiling point)",
    },
    {
      unit: "Fahrenheit (°F)",
      description:
        "Imperial temperature scale where 32°F is water's freezing point and 212°F is its boiling point (at 1 atm).",
      conversion: 0,
      example:
        "0 K = -459.67°F (absolute zero), 273.15 K = 32°F (water freezing point), 373.15 K = 212°F (water boiling point)",
    },
    {
      unit: "Rankine (°R)",
      description:
        "Absolute temperature scale using Fahrenheit degrees, where 0°R is absolute zero.",
      conversion: 0,
      example:
        "0 K = 0°R (absolute zero), 273.15 K = 491.67°R, 373.15 K = 671.67°R",
    },
    {
      unit: "Réaumur (°Ré)",
      description:
        "Historical scale where 0°Ré is water's freezing point and 80°Ré is its boiling point (at 1 atm).",
      conversion: 0,
      example:
        "0 K = -218.52°Ré, 273.15 K = 0°Ré (water freezing point), 373.15 K = 80°Ré (water boiling point)",
    },
    {
      unit: "Triple Point of Water",
      description:
        "The unique temperature and pressure where water coexists as solid, liquid, and gas (defined as exactly 273.16 K).",
      conversion: 0,
      example: "273.16 K = 1 (exact triple point), 0 K = 0, 546.32 K = 2",
    },
    {
      unit: "Planck Temperature",
      description:
        "Theoretical maximum temperature in quantum physics (≈1.41679×10³² K).",
      conversion: 0,
      example:
        "1.41679e32 K = 1 Planck Temperature, 7.08395e31 K ≈ 0.5 Planck Temperature",
    },
    {
      unit: "Room Temperature (20°C)",
      description: "Common reference for indoor temperatures (293.15 K).",
      conversion: 0,
      example:
        "293.15 K = 1 (room temp), 586.3 K ≈ 2 (hot oven), 146.575 K ≈ 0.5 (freezer)",
    },
    {
      unit: "Human Body Temperature (37°C)",
      description: "Average healthy human core body temperature (310.15 K).",
      conversion: 0,
      example:
        "310.15 K = 1 (normal body temp), 325.66 K ≈ 1.05 (fever), 294.64 K ≈ 0.95 (hypothermia)",
    },
    {
      unit: "Sun's Surface Temperature",
      description: "Photosphere temperature of our Sun (5,772 K).",
      conversion: 0,
      example:
        "5,772 K = 1 (Sun's surface), 11,544 K ≈ 2 (hot star), 2,886 K ≈ 0.5 (cool star)",
    },
    {
      unit: "Absolute Hot (theoretical limit)",
      description:
        "Theoretical maximum temperature before physics breaks down (1.417×10³² K).",
      conversion: 0,
      example: "1.417e32 K = 1 (absolute hot), 7.085e31 K ≈ 0.5",
    },
  ],
  Kg: [
    {
      unit: "Gram (g)",
      description: "Metric unit equal to 1/1000 of a kilogram.",
      conversion: 1000,
      example: "1 kg = 1,000 g, 0.001 kg = 1 g",
    },
    {
      unit: "Milligram (mg)",
      description: "Metric unit equal to 1/1,000,000 of a kilogram.",
      conversion: 1000000,
      example: "1 kg = 1,000,000 mg, 0.000001 kg = 1 mg",
    },
    {
      unit: "Metric Ton (t)",
      description: "Metric unit equal to 1,000 kilograms.",
      conversion: 0.001,
      example: "1 kg = 0.001 t, 1,000 kg = 1 t",
    },
    {
      unit: "Ounce (oz)",
      description: "Imperial/US customary unit equal to 1/16 pound.",
      conversion: 35.274,
      example: "1 kg ≈ 35.274 oz, 0.0283495 kg = 1 oz",
    },
    {
      unit: "Pound (lb)",
      description: "Common imperial/US unit equal to 16 ounces.",
      conversion: 2.20462,
      example: "1 kg ≈ 2.20462 lb, 0.453592 kg = 1 lb",
    },
    {
      unit: "Stone (st)",
      description: "British imperial unit equal to 14 pounds.",
      conversion: 0.157473,
      example: "1 kg ≈ 0.157473 st, 6.35029 kg = 1 st",
    },
    {
      unit: "US Ton (short ton)",
      description: "US unit equal to 2,000 pounds.",
      conversion: 0.00110231,
      example: "1 kg ≈ 0.00110231 short tons, 907.185 kg = 1 short ton",
    },
    {
      unit: "Imperial Ton (long ton)",
      description: "British unit equal to 2,240 pounds.",
      conversion: 0.000984207,
      example: "1 kg ≈ 0.000984207 long tons, 1,016.05 kg = 1 long ton",
    },
    {
      unit: "Atomic Mass Unit (u)",
      description: "Standard unit for atomic and molecular masses.",
      conversion: 6.02214e26,
      example: "1 kg ≈ 6.02214e26 u, 1.66054e-27 kg = 1 u",
    },
    {
      unit: "Carat (ct)",
      description: "Unit used for gemstones and pearls.",
      conversion: 5000,
      example: "1 kg = 5,000 ct, 0.0002 kg = 1 ct",
    },
    {
      unit: "Slug",
      description: "Imperial unit of mass in gravitational systems.",
      conversion: 0.0685218,
      example: "1 kg ≈ 0.0685218 slugs, 14.5939 kg = 1 slug",
    },
    {
      unit: "Quintal (q)",
      description: "Historical metric unit equal to 100 kilograms.",
      conversion: 0.01,
      example: "1 kg = 0.01 q, 100 kg = 1 q",
    },
    {
      unit: "Planck Mass",
      description: "Natural unit of mass in quantum physics.",
      conversion: 4.59466e7,
      example: "1 kg ≈ 4.59466e7 Planck masses, 2.17671e-8 kg = 1 Planck mass",
    },
    {
      unit: "Troy Ounce (oz t)",
      description: "Used for precious metals like gold and silver.",
      conversion: 32.1507,
      example: "1 kg ≈ 32.1507 oz t, 0.0311035 kg = 1 oz t",
    },
    {
      unit: "Grain (gr)",
      description: "Traditional unit based on wheat grain weight.",
      conversion: 15432.4,
      example: "1 kg ≈ 15,432.4 gr, 6.47989e-5 kg = 1 gr",
    },
    {
      unit: "Pennyweight (dwt)",
      description: "Unit used in jewelry, equal to 24 grains.",
      conversion: 643.015,
      example: "1 kg ≈ 643.015 dwt, 0.00155517 kg = 1 dwt",
    },
    {
      unit: "Dram (dr)",
      description: "Imperial unit equal to 1/16 ounce.",
      conversion: 564.383,
      example: "1 kg ≈ 564.383 dr, 0.00177185 kg = 1 dr",
    },
    {
      unit: "Hundredweight (cwt)",
      description: "Imperial unit equal to 112 pounds (UK).",
      conversion: 0.0196841,
      example: "1 kg ≈ 0.0196841 cwt, 50.8023 kg = 1 cwt",
    },
    {
      unit: "US Hundredweight (short cwt)",
      description: "US unit equal to 100 pounds.",
      conversion: 0.0220462,
      example: "1 kg ≈ 0.0220462 short cwt, 45.3592 kg = 1 short cwt",
    },
    {
      unit: "Earth Mass (M⊕)",
      description: "Astronomical unit equal to Earth's mass.",
      conversion: 1.6744e-25,
      example: "1 kg ≈ 1.6744e-25 M⊕, 5.972e24 kg = 1 M⊕",
    },
    {
      unit: "Solar Mass (M☉)",
      description: "Astronomical unit equal to Sun's mass.",
      conversion: 5.0279e-31,
      example: "1 kg ≈ 5.0279e-31 M☉, 1.989e30 kg = 1 M☉",
    },
    {
      unit: "Elephant (African bush)",
      description: "Approximate mass of adult male (6,000 kg).",
      conversion: 0.000166667,
      example: "1 kg ≈ 0.000166667 elephants, 6,000 kg ≈ 1 elephant",
    },
    {
      unit: "Blue Whale",
      description: "Approximate mass of adult (140,000 kg).",
      conversion: 0.00000714286,
      example: "1 kg ≈ 0.00000714286 whales, 140,000 kg ≈ 1 whale",
    },
    {
      unit: "Car (average midsize)",
      description: "Approximate mass (1,500 kg).",
      conversion: 0.000666667,
      example: "1 kg ≈ 0.000666667 cars, 1,500 kg ≈ 1 car",
    },
    {
      unit: "Human (adult average)",
      description: "Approximate body mass (62 kg).",
      conversion: 0.016129,
      example: "1 kg ≈ 0.016129 humans, 62 kg ≈ 1 human",
    },
    {
      unit: "Brick (standard)",
      description: "Approximate mass (2.3 kg).",
      conversion: 0.434783,
      example: "1 kg ≈ 0.434783 bricks, 2.3 kg ≈ 1 brick",
    },
    {
      unit: "Bag of Sugar (standard)",
      description: "Common reference (1 kg).",
      conversion: 1,
      example: "1 kg = 1 bag of sugar",
    },
    {
      unit: "Gallon of Water (US)",
      description: "Approximate mass at room temperature (3.785 kg).",
      conversion: 0.264172,
      example: "1 kg ≈ 0.264172 gallons, 3.785 kg ≈ 1 gallon",
    },
    {
      unit: "Baseball (regulation)",
      description: "Approximate mass (0.145 kg).",
      conversion: 6.89655,
      example: "1 kg ≈ 6.89655 baseballs, 0.145 kg ≈ 1 baseball",
    },
    {
      unit: "Soccer Ball (FIFA standard)",
      description: "Approximate mass (0.43 kg).",
      conversion: 2.32558,
      example: "1 kg ≈ 2.32558 soccer balls, 0.43 kg ≈ 1 soccer ball",
    },
  ],
  KB: [
    {
      unit: "Bit",
      description: "The smallest unit of digital information.",
      conversion: 8192,
      example: "1 KB = 8,192 bits, 0.00012207 KB = 1 bit",
    },
    {
      unit: "Nibble",
      description: "4 bits, or half a byte.",
      conversion: 2048,
      example: "1 KB = 2,048 nibbles, 0.000488281 KB = 1 nibble",
    },
    {
      unit: "Byte",
      description: "Basic unit of digital information (8 bits).",
      conversion: 1024,
      example: "1 KB = 1,024 bytes, 0.000976562 KB = 1 byte",
    },
    {
      unit: "Character",
      description: "Typically represented by 1 byte in ASCII encoding.",
      conversion: 1024,
      example: "1 KB ≈ 1,024 ASCII characters, 0.000976562 KB per character",
    },
    {
      unit: "Word",
      description: "Typically 2 bytes (16 bits) in many systems.",
      conversion: 512,
      example: "1 KB = 512 words, 0.00195312 KB = 1 word",
    },
    {
      unit: "MAPM-word",
      description: "4 bytes (32 bits) in MAPM library.",
      conversion: 256,
      example: "1 KB = 256 MAPM-words, 0.00390625 KB = 1 MAPM-word",
    },
    {
      unit: "Quadruple-word",
      description: "8 bytes (64 bits).",
      conversion: 128,
      example: "1 KB = 128 quadruple-words, 0.0078125 KB = 1 quadruple-word",
    },
    {
      unit: "Block",
      description: "Traditional block size of 512 bytes.",
      conversion: 2,
      example: "1 KB = 2 blocks, 0.5 KB = 1 block",
    },
    {
      unit: "Kilobit",
      description: "1,000 bits (note difference from kilobyte).",
      conversion: 8,
      example: "1 KB = 8 kilobits, 0.125 KB = 1 kilobit",
    },
    {
      unit: "Kilobyte (10^3 Bytes)",
      description: "Decimal kilobyte (1,000 bytes).",
      conversion: 1.024,
      example:
        "1 binary KB ≈ 1.024 decimal KB, 0.976562 binary KB = 1 decimal KB",
    },
    {
      unit: "Megabit",
      description: "1,000,000 bits.",
      conversion: 0.0078125,
      example: "1 KB ≈ 0.0078125 Mb, 128 KB = 1 Mb",
    },
    {
      unit: "Megabyte",
      description: "1,024 kilobytes (binary).",
      conversion: 0.000976562,
      example: "1 KB ≈ 0.000976562 MB, 1,024 KB = 1 MB",
    },
    {
      unit: "Megabyte (10^6 Bytes)",
      description: "Decimal megabyte (1,000,000 bytes).",
      conversion: 0.001024,
      example: "1 KB ≈ 0.001024 decimal MB, 976.562 KB ≈ 1 decimal MB",
    },
    {
      unit: "Gigabit",
      description: "1,000,000,000 bits.",
      conversion: 7.62939e-6,
      example: "1 KB ≈ 7.62939e-6 Gb, 131,072 KB = 1 Gb",
    },
    {
      unit: "Gigabyte",
      description: "1,024 megabytes (binary).",
      conversion: 9.53674e-7,
      example: "1 KB ≈ 9.53674e-7 GB, 1,048,576 KB = 1 GB",
    },
    {
      unit: "Gigabyte (10^9 Bytes)",
      description: "Decimal gigabyte (1,000,000,000 bytes).",
      conversion: 1.024e-6,
      example: "1 KB ≈ 1.024e-6 decimal GB, 976,562 KB ≈ 1 decimal GB",
    },
    {
      unit: "Terabit",
      description: "1,000,000,000,000 bits.",
      conversion: 7.45058e-9,
      example: "1 KB ≈ 7.45058e-9 Tb, 134,217,728 KB = 1 Tb",
    },
    {
      unit: "Terabyte",
      description: "1,024 gigabytes (binary).",
      conversion: 9.31323e-10,
      example: "1 KB ≈ 9.31323e-10 TB, 1,073,741,824 KB = 1 TB",
    },
    {
      unit: "Terabyte (10^12 Bytes)",
      description: "Decimal terabyte (1,000,000,000,000 bytes).",
      conversion: 1.024e-9,
      example: "1 KB ≈ 1.024e-9 decimal TB, 976,562,500 KB ≈ 1 decimal TB",
    },
    {
      unit: 'Floppy Disk (3.5", DD)',
      description: "720 KB capacity floppy disk.",
      conversion: 0.000140512,
      example: "1 KB ≈ 0.000140512 floppies, 7,116.8 KB = 1 floppy",
    },
    {
      unit: 'Floppy Disk (3.5", HD)',
      description: "1.44 MB capacity floppy disk.",
      conversion: 7.02563e-5,
      example: "1 KB ≈ 7.02563e-5 HD floppies, 1,423.36 KB = 1 HD floppy",
    },
    {
      unit: 'Floppy Disk (3.5", ED)',
      description: "2.88 MB capacity floppy disk.",
      conversion: 3.51281e-5,
      example: "1 KB ≈ 3.51281e-5 ED floppies, 2,846.72 KB = 1 ED floppy",
    },
    {
      unit: "CD (74 Minute)",
      description: "Approximately 650 MB storage capacity.",
      conversion: 1.50403e-6,
      example: "1 KB ≈ 1.50403e-6 CDs, 664,848 KB ≈ 1 CD",
    },
    {
      unit: "CD (80 Minute)",
      description: "Approximately 700 MB storage capacity.",
      conversion: 1.39138e-6,
      example: "1 KB ≈ 1.39138e-6 CDs, 718,750 KB ≈ 1 CD",
    },
    {
      unit: "DVD (1 Layer, 1 Side)",
      description: "Approximately 4.7 GB storage capacity.",
      conversion: 1.91371e-7,
      example: "1 KB ≈ 1.91371e-7 DVDs, 5,225,390 KB ≈ 1 DVD",
    },
    {
      unit: "Smartphone Storage (64GB)",
      description: "Average base model smartphone storage.",
      conversion: 1.52588e-8,
      example: "1 KB ≈ 1.52588e-8 smartphones, 65,536,000 KB ≈ 1 smartphone",
    },
    {
      unit: "Blu-ray Disc (25GB)",
      description: "Single-layer Blu-ray disc capacity.",
      conversion: 3.8147e-8,
      example: "1 KB ≈ 3.8147e-8 Blu-rays, 26,214,400 KB ≈ 1 Blu-ray",
    },
    {
      unit: "Library of Congress (Digital)",
      description: "Estimated 10TB for entire print collection.",
      conversion: 9.31323e-11,
      example: "1 KB ≈ 9.31323e-11 LoC, 10,737,418,240 KB ≈ 1 LoC",
    },
  ],
  KJ: [
    {
      unit: "Kilocalorie",
      description: "Energy needed to raise 1kg of water by 1°C.",
      conversion: 0.239006,
      example: "1 kJ ≈ 0.239 kcal, 4.184 kJ = 1 kcal",
    },
    {
      unit: "Joule",
      description: "SI unit of energy (1 kJ = 1000 J).",
      conversion: 1000,
      example: "1 kJ = 1,000 J, 0.001 kJ = 1 J",
    },
    {
      unit: "Kilowatt-hour",
      description: "Common electricity billing unit.",
      conversion: 0.000277778,
      example: "1 kJ ≈ 0.000277778 kWh, 3,600 kJ = 1 kWh",
    },
    {
      unit: "Watt-hour",
      description: "Energy from 1 watt over 1 hour.",
      conversion: 0.277778,
      example: "1 kJ ≈ 0.277778 Wh, 3.6 kJ = 1 Wh",
    },
    {
      unit: "Calorie (nutritional)",
      description: "Food energy measurement.",
      conversion: 0.238846,
      example: "1 kJ ≈ 0.238846 nutritional calories, 4.1868 kJ = 1 Cal",
    },
    {
      unit: "Btu (IT)",
      description: "British thermal unit (International Table).",
      conversion: 0.947817,
      example: "1 kJ ≈ 0.947817 BTU, 1.05506 kJ = 1 BTU",
    },
    {
      unit: "Btu (th)",
      description: "British thermal unit (thermochemical).",
      conversion: 0.948452,
      example: "1 kJ ≈ 0.948452 BTUth, 1.05435 kJ = 1 BTUth",
    },
    {
      unit: "Horsepower Hour",
      description: "Mechanical energy measurement.",
      conversion: 0.000372506,
      example: "1 kJ ≈ 0.000372506 hp·h, 2,684.5 kJ = 1 hp·h",
    },
    {
      unit: "Newton Meter",
      description: "Equivalent to 1 joule.",
      conversion: 1000,
      example: "1 kJ = 1,000 N·m, 0.001 kJ = 1 N·m",
    },
    {
      unit: "Erg",
      description: "CGS unit of energy (1 erg = 10^-7 J).",
      conversion: 1e10,
      example: "1 kJ = 10^10 erg, 10^-10 kJ = 1 erg",
    },
    {
      unit: "Electron-volt",
      description: "Energy gained by single electron in 1V potential.",
      conversion: 6.24151e18,
      example: "1 kJ ≈ 6.24151×10^18 eV, 1.60218×10^-19 kJ = 1 eV",
    },
    {
      unit: "Foot-pound",
      description: "Energy to apply 1 pound-force over 1 foot.",
      conversion: 737.562,
      example: "1 kJ ≈ 737.562 ft·lb, 0.00135582 kJ = 1 ft·lb",
    },
    {
      unit: "Therm",
      description: "Natural gas energy measurement.",
      conversion: 9.47817e-6,
      example: "1 kJ ≈ 9.47817×10^-6 therms, 105,506 kJ = 1 therm",
    },
    {
      unit: "Ton-hour (refrigeration)",
      description: "Cooling capacity measurement.",
      conversion: 0.0000789848,
      example: "1 kJ ≈ 0.0000789848 ton-hours, 12,660.7 kJ = 1 ton-hour",
    },
    {
      unit: "Gram TNT",
      description: "Explosive energy equivalent.",
      conversion: 239.006,
      example: "1 kJ ≈ 239 grams TNT equivalent, 0.004184 kJ = 1 gram TNT",
    },
    {
      unit: "Barrel of Oil Equivalent",
      description: "Energy in one barrel of crude oil.",
      conversion: 1.6346e-7,
      example: "1 kJ ≈ 1.6346×10^-7 BOE, 6,117,863 kJ ≈ 1 BOE",
    },
    {
      unit: "Cup of Gasoline",
      description: "Approximate energy in 240mL gasoline.",
      conversion: 0.000072,
      example: "1 kJ ≈ 0.000072 cups gasoline, 13,900 kJ ≈ 1 cup gasoline",
    },
    {
      unit: "Banana Equivalent",
      description: "Approximate energy in one medium banana.",
      conversion: 0.0714,
      example: "1 kJ ≈ 0.0714 bananas, 14 kJ ≈ 1 banana",
    },
    {
      unit: "AA Battery",
      description: "Energy in one alkaline AA battery.",
      conversion: 0.0833,
      example: "1 kJ ≈ 0.0833 AA batteries, 12 kJ ≈ 1 AA battery",
    },
    {
      unit: "Smartphone Battery Charge",
      description: "Energy to fully charge typical smartphone.",
      conversion: 0.0143,
      example: "1 kJ ≈ 0.0143 charges, 70 kJ ≈ 1 full charge",
    },
    {
      unit: "Human Heartbeat",
      description: "Energy expended per heartbeat.",
      conversion: 5000,
      example: "1 kJ ≈ energy for 5,000 heartbeats, 0.0002 kJ per beat",
    },
    {
      unit: "10-minute Walk",
      description: "Energy expended walking at average pace.",
      conversion: 0.0167,
      example: "1 kJ ≈ 0.0167 walks, 60 kJ ≈ energy for 10-minute walk",
    },
    {
      unit: "Light Bulb (60W for 1 minute)",
      description: "Energy consumed by standard bulb.",
      conversion: 0.0167,
      example: "1 kJ ≈ 1 minute of 60W bulb operation, 3.6 kJ per hour",
    },
    {
      unit: "Gram of Uranium-235",
      description: "Nuclear fission energy potential.",
      conversion: 8.2e-11,
      example: "1 kJ ≈ 8.2×10^-11 grams U-235, 1.22×10^10 kJ per gram",
    },
    {
      unit: "Supernova Energy",
      description: "Total energy from stellar explosion.",
      conversion: 1e-46,
      example: "1 kJ ≈ 1×10^-46 supernovae, 1×10^46 kJ ≈ 1 supernova",
    },
  ],
  Km: [
    {
      unit: "Mile/hour",
      description: "Common speed unit in imperial/US customary systems.",
      conversion: 0.621371,
      example: "100 km/h ≈ 62.1371 mph, 1 mph ≈ 1.60934 km/h",
    },
    {
      unit: "Meter/second",
      description: "SI unit of speed (m/s).",
      conversion: 0.277778,
      example: "36 km/h = 10 m/s, 1 m/s = 3.6 km/h",
    },
    {
      unit: "Knot",
      description: "Nautical miles per hour (international standard).",
      conversion: 0.539957,
      example: "100 km/h ≈ 53.9957 knots, 1 knot ≈ 1.852 km/h",
    },
    {
      unit: "Foot/second",
      description: "Imperial unit for velocity measurements.",
      conversion: 0.911344,
      example: "60 km/h ≈ 54.6807 ft/s, 1 ft/s ≈ 1.09728 km/h",
    },
    {
      unit: "Mach (20°C, 1 Atm)",
      description:
        "Ratio to speed of sound in standard atmospheric conditions.",
      conversion: 0.000808433,
      example: "1,234 km/h ≈ Mach 1, 1 Mach ≈ 1,236 km/h",
    },
    {
      unit: "Velocity Of Light In Vacuum",
      description: "Fundamental physical constant (c).",
      conversion: 9.26567e-10,
      example: "1,079,252,848.8 km/h = 1c, 1 km/h ≈ 9.26567×10^-10c",
    },
    {
      unit: "Cosmic Velocity - First",
      description: "Minimum orbital velocity around Earth.",
      conversion: 3.51614e-5,
      example: "28,440 km/h ≈ First Cosmic Velocity, 1 km/h ≈ 3.516×10^-5 CV1",
    },
    {
      unit: "Earth's Velocity",
      description: "Average orbital speed of Earth around the Sun.",
      conversion: 9.33236e-6,
      example:
        "107,000 km/h ≈ Earth's orbital speed, 1 km/h ≈ 9.332×10^-6 Earth velocities",
    },
    {
      unit: "Velocity Of Sound In Sea Water (20°C, 10 Meter Deep)",
      description: "Speed of sound in typical ocean conditions.",
      conversion: 0.000182508,
      example:
        "5,480 km/h ≈ speed of sound in seawater, 1 km/h ≈ 0.000183 sea sound speeds",
    },
    {
      unit: "Mile/minute",
      description: "Imperial unit for high-speed measurements.",
      conversion: 0.0103562,
      example: "96.5606 km/h = 1 mi/min, 1 km/h ≈ 0.01036 mi/min",
    },
    {
      unit: "Centimeter/second",
      description: "CGS unit of speed.",
      conversion: 27.7778,
      example: "1 km/h ≈ 27.7778 cm/s, 1 cm/s ≈ 0.036 km/h",
    },
    {
      unit: "Yard/minute",
      description: "Imperial unit for moderate speeds.",
      conversion: 18.2269,
      example: "3.29184 km/h = 60 yd/min, 1 km/h ≈ 18.2269 yd/min",
    },
    {
      unit: "Kilometer/minute",
      description: "Metric unit for very high speeds.",
      conversion: 0.0166667,
      example: "60 km/h = 1 km/min, 1 km/h ≈ 0.01667 km/min",
    },
    {
      unit: "Millimeter/hour",
      description: "Extremely slow speed measurement.",
      conversion: 1000000,
      example: "0.001 km/h = 1,000 mm/h, 1 km/h = 1,000,000 mm/h",
    },
    {
      unit: "Foot/hour",
      description: "Specialized slow speed unit.",
      conversion: 3280.84,
      example: "0.0003048 km/h = 1 ft/h, 1 km/h ≈ 3,280.84 ft/h",
    },
    {
      unit: "Knot (UK)",
      description:
        "UK nautical mile per hour (slightly different from international knot).",
      conversion: 0.539612,
      example: "100 km/h ≈ 53.9612 UK knots, 1 UK knot ≈ 1.85318 km/h",
    },
    {
      unit: "Cosmic Velocity - Second",
      description: "Escape velocity from Earth's gravitational pull.",
      conversion: 2.48016e-5,
      example: "40,320 km/h ≈ Second Cosmic Velocity, 1 km/h ≈ 2.480×10^-5 CV2",
    },
    {
      unit: "Velocity Of Sound In Pure Water",
      description: "Speed of sound in distilled water at 25°C.",
      conversion: 0.000187346,
      example:
        "5,400 km/h ≈ speed of sound in pure water, 1 km/h ≈ 0.000187 water sound speeds",
    },
    {
      unit: "Mach (SI Standard)",
      description: "Mach number based on SI-defined speed of sound.",
      conversion: 0.000941471,
      example: "1,062 km/h ≈ Mach 1 (SI), 1 km/h ≈ 0.000941 SI Mach",
    },
    {
      unit: "Cosmic Velocity - Third",
      description: "Escape velocity from the solar system.",
      conversion: 1.48792e-5,
      example: "67,200 km/h ≈ Third Cosmic Velocity, 1 km/h ≈ 1.488×10^-5 CV3",
    },
    {
      unit: "Mile/second",
      description: "Extremely high-speed measurement.",
      conversion: 0.000172603,
      example: "5,793.64 km/h = 1 mi/s, 1 km/h ≈ 0.000173 mi/s",
    },
    {
      unit: "Kilometer/second",
      description: "Astronomical speed measurements.",
      conversion: 0.000277778,
      example: "3,600 km/h = 1 km/s, 1 km/h ≈ 0.000278 km/s",
    },
    {
      unit: "Break",
      description: "Extremely small unit (demonstration purposes only).",
      conversion: 1e15,
      example: "1 km/h = 1×10^15 break units, 1 break = 1×10^-15 km/h",
    },
  ],
  Kw: [
    {
      unit: "Watt",
      description: "SI unit of power (1 kW = 1,000 W).",
      conversion: 1000,
      example: "1 kW = 1,000 W, 0.001 kW = 1 W",
    },
    {
      unit: "Horsepower (metric)",
      description: "Common mechanical power measurement.",
      conversion: 1.35962,
      example: "1 kW ≈ 1.35962 hp, 0.735499 kW = 1 hp",
    },
    {
      unit: "Btu (IT)/hour",
      description: "British thermal unit per hour.",
      conversion: 3412.14,
      example: "1 kW ≈ 3,412.14 BTU/h, 0.000293071 kW = 1 BTU/h",
    },
    {
      unit: "Ton (refrigeration)",
      description: "Cooling capacity unit.",
      conversion: 0.284345,
      example: "1 kW ≈ 0.284345 refrigeration tons, 3.51685 kW = 1 ton",
    },
    {
      unit: "Foot Pound-force/second",
      description: "Mechanical power unit.",
      conversion: 737.562,
      example: "1 kW ≈ 737.562 ft·lb/s, 0.00135582 kW = 1 ft·lb/s",
    },
    {
      unit: "Kilocalorie (IT)/hour",
      description: "Common thermal power unit.",
      conversion: 859.845,
      example: "1 kW ≈ 859.845 kcal/h, 0.001163 kW = 1 kcal/h",
    },
    {
      unit: "Calorie (IT)/second",
      description: "Small thermal power measurement.",
      conversion: 238.846,
      example: "1 kW ≈ 238.846 cal/s, 0.0041868 kW = 1 cal/s",
    },
    {
      unit: "Volt Ampere",
      description: "Electrical apparent power (equal to watts for DC).",
      conversion: 1000,
      example: "1 kW = 1,000 VA (DC), 1 VA = 0.001 kW",
    },
    {
      unit: "Newton Meter/second",
      description: "Mechanical power equivalent to watts.",
      conversion: 1000,
      example: "1 kW = 1,000 N·m/s, 1 N·m/s = 0.001 kW",
    },
    {
      unit: "Joule/second",
      description: "Direct equivalent to watts.",
      conversion: 1000,
      example: "1 kW = 1,000 J/s, 1 J/s = 0.001 kW",
    },
    {
      unit: "Erg/second",
      description: "CGS unit of power (1 erg/s = 10^-7 W).",
      conversion: 1e10,
      example: "1 kW = 10^10 erg/s, 1 erg/s = 10^-10 kW",
    },
    {
      unit: "Megawatt",
      description: "Large power unit (1 MW = 1,000 kW).",
      conversion: 0.001,
      example: "1,000 kW = 1 MW, 1 kW = 0.001 MW",
    },
    {
      unit: "Gigawatt",
      description: "Very large power unit (1 GW = 1,000,000 kW).",
      conversion: 1e-6,
      example: "1,000,000 kW = 1 GW, 1 kW = 0.000001 GW",
    },
    {
      unit: "Milliwatt",
      description: "Small power measurement (1 mW = 0.001 W).",
      conversion: 1e6,
      example: "1 kW = 1,000,000 mW, 1 mW = 0.000001 kW",
    },
    {
      unit: "Horsepower (electric)",
      description: "Electrical horsepower (slightly different from metric).",
      conversion: 1.34048,
      example: "1 kW ≈ 1.34048 hp(electric), 0.746043 kW = 1 hp(electric)",
    },
    {
      unit: "Pferdestarke (ps)",
      description: "German name for metric horsepower.",
      conversion: 1.35962,
      example: "1 kW ≈ 1.35962 ps, 0.735499 kW = 1 ps",
    },
    {
      unit: "Btu (th)/hour",
      description: "Thermochemical BTU per hour.",
      conversion: 3414.42,
      example: "1 kW ≈ 3,414.42 BTU(th)/h, 0.000292875 kW = 1 BTU(th)/h",
    },
    {
      unit: "Kilojoule/hour",
      description: "Energy rate measurement.",
      conversion: 3600,
      example: "1 kW = 3,600 kJ/h, 1 kJ/h ≈ 0.000277778 kW",
    },
    {
      unit: "Kilocalorie (th)/second",
      description: "Thermochemical thermal power.",
      conversion: 0.239006,
      example: "1 kW ≈ 0.239006 kcal(th)/s, 4.184 kW = 1 kcal(th)/s",
    },
    {
      unit: "Foot Pound-force/minute",
      description: "Rotational mechanical power.",
      conversion: 44253.7,
      example: "1 kW ≈ 44,253.7 ft·lb/min, 1 ft·lb/min ≈ 0.000022597 kW",
    },
    {
      unit: "MBH",
      description: "Thousands of BTU per hour.",
      conversion: 3.41214,
      example: "1 kW ≈ 3.41214 MBH, 0.293071 kW = 1 MBH",
    },
    {
      unit: "Horsepower (water)",
      description: "Water horsepower (slightly different value).",
      conversion: 1.34041,
      example: "1 kW ≈ 1.34041 hp(water), 0.746116 kW = 1 hp(water)",
    },
    {
      unit: "Dekawatt",
      description: "10 watts.",
      conversion: 100,
      example: "1 kW = 100 daW, 1 daW = 0.01 kW",
    },
    {
      unit: "Calorie (th)/minute",
      description: "Small thermal power measurement.",
      conversion: 14.3403,
      example: "1 kW ≈ 14,340.3 cal(th)/min, 1 cal(th)/min ≈ 0.0000697333 kW",
    },
    {
      unit: "Kilojoule/minute",
      description: "Energy rate measurement.",
      conversion: 60,
      example: "1 kW = 60 kJ/min, 1 kJ/min ≈ 0.0166667 kW",
    },
    {
      unit: "Horsepower (boiler)",
      description: "Boiler capacity measurement.",
      conversion: 0.101942,
      example: "1 kW ≈ 0.101942 hp(boiler), 9.8095 kW = 1 hp(boiler)",
    },
    {
      unit: "Pound-foot/second",
      description: "Alternative mechanical power unit.",
      conversion: 737.562,
      example: "1 kW ≈ 737.562 lb·ft/s, 1 lb·ft/s ≈ 0.00135582 kW",
    },
    {
      unit: "Joule/minute",
      description: "Small energy rate measurement.",
      conversion: 60000,
      example: "1 kW = 60,000 J/min, 1 J/min ≈ 0.0000166667 kW",
    },
    {
      unit: "Nanowatt",
      description: "Extremely small power measurement.",
      conversion: 1e12,
      example: "1 kW = 10^12 nW, 1 nW = 10^-12 kW",
    },
    {
      unit: "Terawatt",
      description: "Extremely large power unit.",
      conversion: 1e-9,
      example: "1,000,000,000 kW = 1 TW, 1 kW = 0.000000001 TW",
    },
  ],
  Liters: [
    {
      unit: "Cubic Meter (m³)",
      description: "The SI unit of volume, equal to 1,000 liters.",
      conversion: 0.001,
      example: "1 liter = 0.001 m³, 1,000 liters = 1 m³",
    },
    {
      unit: "Milliliter (mL)",
      description: "Metric unit equal to 1/1,000 of a liter.",
      conversion: 1000,
      example: "1 liter = 1,000 mL, 0.001 liters = 1 mL",
    },
    {
      unit: "Cubic Centimeter (cc)",
      description: "Equal to 1 mL, commonly used in medicine and automotive.",
      conversion: 1000,
      example: "1 liter = 1,000 cc, 0.001 liters = 1 cc",
    },
    {
      unit: "Gallon (US liquid)",
      description: "Standard US liquid volume unit.",
      conversion: 0.264172052,
      example: "1 liter ≈ 0.264 gallons, 3.78541 liters = 1 gallon",
    },
    {
      unit: "Quart (US liquid)",
      description: "US customary unit equal to 1/4 gallon.",
      conversion: 1.05668821,
      example: "1 liter ≈ 1.05669 quarts, 0.946353 liters = 1 quart",
    },
    {
      unit: "Pint (US liquid)",
      description: "US customary unit equal to 1/8 gallon.",
      conversion: 2.11337642,
      example: "1 liter ≈ 2.11338 pints, 0.473176 liters = 1 pint",
    },
    {
      unit: "Fluid Ounce (US fl oz)",
      description: "Small US liquid volume unit equal to 1/128 gallon.",
      conversion: 33.8140227,
      example: "1 liter ≈ 33.814 fl oz, 0.0295735 liters = 1 fl oz",
    },
    {
      unit: "Cubic Inch (in³)",
      description: "Imperial unit of volume commonly used in engineering.",
      conversion: 61.0237441,
      example: "1 liter ≈ 61.0237 in³, 0.0163871 liters = 1 in³",
    },
    {
      unit: "Cubic Foot (ft³)",
      description: "Imperial unit of volume for larger measurements.",
      conversion: 0.0353146667,
      example: "1 liter ≈ 0.0353147 ft³, 28.3168 liters = 1 ft³",
    },
    {
      unit: "Teaspoon (US tsp)",
      description: "Small cooking measurement equal to 1/6 fl oz.",
      conversion: 202.884136,
      example: "1 liter ≈ 202.884 tsp, 0.00492892 liters = 1 tsp",
    },
    {
      unit: "Tablespoon (US tbsp)",
      description: "Common cooking measurement equal to 3 tsp.",
      conversion: 67.6280454,
      example: "1 liter ≈ 67.628 tbsp, 0.0147868 liters = 1 tbsp",
    },
    {
      unit: "Cup (US)",
      description: "Common cooking measurement equal to 16 tbsp.",
      conversion: 4.22675284,
      example: "1 liter ≈ 4.22675 cups, 0.236588 liters = 1 cup",
    },
    {
      unit: "Barrel (oil)",
      description: "Standard volume for crude oil and petroleum products.",
      conversion: 0.00628981077,
      example: "1 liter ≈ 0.00628981 barrels, 158.987 liters = 1 barrel",
    },
    {
      unit: "Gallon (UK imperial)",
      description: "British imperial gallon, about 20% larger than US gallon.",
      conversion: 0.219969157,
      example: "1 liter ≈ 0.219969 UK gallons, 4.54609 liters = 1 UK gallon",
    },
    {
      unit: "Fluid Ounce (UK fl oz)",
      description: "Imperial fluid ounce, slightly smaller than US fl oz.",
      conversion: 35.1950797,
      example: "1 liter ≈ 35.1951 UK fl oz, 0.0284131 liters = 1 UK fl oz",
    },
    {
      unit: "Hogshead",
      description: "Traditional unit for alcoholic beverages and tobacco.",
      conversion: 0.0042459146,
      example: "1 liter ≈ 0.00424591 hogsheads, 235.48 liters = 1 hogshead",
    },
    {
      unit: "Cord",
      description: "Unit for measuring firewood volume.",
      conversion: 0.0002758958,
      example: "1 liter ≈ 0.000275896 cords, 3,624.56 liters = 1 cord",
    },
    {
      unit: "Engine Displacement (cc)",
      description: "Cubic centimeters, used for engine cylinder volumes.",
      conversion: 1000,
      example: "1 liter = 1,000 cc, 2.0 liters = 2,000 cc engine",
    },
    {
      unit: "Shot Glass (1.5 fl oz)",
      description: "Standard volume for alcoholic shots.",
      conversion: 22.5426818,
      example: "1 liter ≈ 22.5427 shots, 0.0443603 liters = 1 shot",
    },
    {
      unit: "Soda Can (12 fl oz)",
      description: "Common reference volume for beverages.",
      conversion: 2.81783521,
      example: "1 liter ≈ 2.81784 cans, 0.354882 liters = 1 can",
    },
    {
      unit: "Baseball (regulation size)",
      description: "Approximate volume of a baseball (≈0.213 liter).",
      conversion: 4.69219,
      example: "1 liter ≈ 4.692 baseballs, 0.213 liters ≈ 1 baseball",
    },
    {
      unit: "Golf Ball (regulation size)",
      description: "Approximate volume of a golf ball (≈0.0407 liter).",
      conversion: 24.568,
      example: "1 liter ≈ 24.568 golf balls, 0.0407 liters ≈ 1 golf ball",
    },
    {
      unit: "Bath (Biblical)",
      description: "Ancient Hebrew liquid measure.",
      conversion: 0.0454545455,
      example: "1 liter ≈ 0.0454545 bath, 22 liters = 1 bath",
    },
    {
      unit: "Earth's Volume",
      description: "Theoretical volume of planet Earth (approximate).",
      conversion: 9.23e-22,
      example:
        "1 liter ≈ 9.23e-22 Earth volumes, 1.083e21 liters ≈ 1 Earth volume",
    },
  ],
  MB: [
    {
      unit: "Bit",
      description: "The smallest unit of digital information.",
      conversion: 8388608,
      example: "1 MB = 8,388,608 bits, 0.000000119209 MB = 1 bit",
    },
    {
      unit: "Nibble",
      description: "4 bits, or half a byte.",
      conversion: 2097152,
      example: "1 MB = 2,097,152 nibbles, 0.000000476837 MB = 1 nibble",
    },
    {
      unit: "Byte",
      description: "8 bits, fundamental unit for most computer systems.",
      conversion: 1048576,
      example: "1 MB = 1,048,576 bytes, 0.000000953674 MB = 1 byte",
    },
    {
      unit: "Kilobyte (KB)",
      description: "1,024 bytes, common for small files.",
      conversion: 1024,
      example: "1 MB = 1,024 KB, 0.000976562 MB = 1 KB",
    },
    {
      unit: "Gigabyte (GB)",
      description: "1,024 MB, standard for hard drive capacities.",
      conversion: 0.000976562,
      example: "1 MB ≈ 0.000977 GB, 1,024 MB = 1 GB",
    },
    {
      unit: "Terabyte (TB)",
      description: "1,024 GB, used for large storage systems.",
      conversion: 9.53674e-7,
      example: "1 MB ≈ 0.000000954 TB, 1,048,576 MB = 1 TB",
    },
    {
      unit: "Petabyte (PB)",
      description: "1,024 TB, for massive data storage.",
      conversion: 9.31323e-10,
      example: "1 MB ≈ 0.000000000931 PB, 1,073,741,824 MB = 1 PB",
    },
    {
      unit: "Gigabit (Gb)",
      description: "1 billion bits, used in networking.",
      conversion: 0.0078125,
      example: "1 MB ≈ 0.0078125 Gb, 128 MB = 1 Gb",
    },
    {
      unit: "Terabit (Tb)",
      description: "1 trillion bits, for high-capacity networks.",
      conversion: 7.62939e-6,
      example: "1 MB ≈ 0.000007629 Tb, 131,072 MB = 1 Tb",
    },
    {
      unit: "Word",
      description: "Typically 2 bytes (16 bits) in many systems.",
      conversion: 524288,
      example: "1 MB = 524,288 words, 0.00000190735 MB = 1 word",
    },
    {
      unit: 'Floppy Disk (3.5", HD)',
      description: "Classic 1.44 MB storage medium.",
      conversion: 0.694444,
      example: "1 MB ≈ 0.694 floppies, 1.44 MB = 1 floppy",
    },
    {
      unit: 'Floppy Disk (3.5", ED)',
      description: "Extended density 2.88 MB floppy.",
      conversion: 0.347222,
      example: "1 MB ≈ 0.347 ED floppies, 2.88 MB = 1 ED floppy",
    },
    {
      unit: "CD (74 Minute)",
      description: "Standard 650-700 MB CD-ROM capacity.",
      conversion: 0.00141878,
      example: "1 MB ≈ 0.00142 CDs, 700 MB ≈ 1 CD",
    },
    {
      unit: "DVD (Single Layer)",
      description: "4.7 GB storage capacity.",
      conversion: 0.000212314,
      example: "1 MB ≈ 0.000212 DVDs, 4,700 MB ≈ 1 DVD",
    },
    {
      unit: "DVD (Dual Layer)",
      description: "8.5 GB storage capacity.",
      conversion: 0.000116959,
      example: "1 MB ≈ 0.000117 dual-layer DVDs, 8,500 MB ≈ 1 dual-layer DVD",
    },
    {
      unit: "Blu-ray (Single Layer)",
      description: "25 GB storage capacity.",
      conversion: 0.00004,
      example: "1 MB ≈ 0.00004 Blu-rays, 25,000 MB = 1 Blu-ray",
    },
    {
      unit: "Blu-ray (Dual Layer)",
      description: "50 GB storage capacity.",
      conversion: 0.00002,
      example:
        "1 MB ≈ 0.00002 dual-layer Blu-rays, 50,000 MB = 1 dual-layer Blu-ray",
    },
    {
      unit: "Zip 100 Disk",
      description: "100 MB removable storage (Iomega).",
      conversion: 0.01,
      example: "1 MB = 0.01 Zip disks, 100 MB = 1 Zip 100 disk",
    },
    {
      unit: "Jaz 1GB Disk",
      description: "1 GB removable storage (Iomega).",
      conversion: 0.001024,
      example: "1 MB ≈ 0.00102 Jaz disks, 1,024 MB = 1 Jaz 1GB disk",
    },
    {
      unit: "iPhone Photo (12MP)",
      description: "Average 3.5 MB per photo.",
      conversion: 0.285714,
      example: "1 MB ≈ 0.286 photos, 3.5 MB = 1 iPhone photo",
    },
    {
      unit: "MP3 Song (4 min)",
      description: "Average 4 MB per song at 128 kbps.",
      conversion: 0.25,
      example: "1 MB = 0.25 songs, 4 MB = 1 MP3 song",
    },
    {
      unit: "Email with Attachment",
      description: "Average 0.3 MB for typical emails.",
      conversion: 3.33333,
      example: "1 MB ≈ 3.33 emails, 0.3 MB = 1 typical email",
    },
    {
      unit: "Text Page",
      description: "Approximately 0.004 MB per page.",
      conversion: 250,
      example: "1 MB ≈ 250 text pages, 0.004 MB = 1 text page",
    },
    {
      unit: "Standard Web Page",
      description: "Average 2 MB for modern web pages.",
      conversion: 0.5,
      example: "1 MB = 0.5 web pages, 2 MB = 1 standard web page",
    },
  ],
  MetersPerSecond: [
    {
      unit: "Kilometer/hour (km/h)",
      description:
        "Common speed unit used in most countries for road signs and vehicle speedometers.",
      conversion: 3.6,
      example: "1 m/s = 3.6 km/h, 100 km/h ≈ 27.778 m/s",
    },
    {
      unit: "Mile/hour (mph)",
      description:
        "Standard speed unit in the United States and United Kingdom.",
      conversion: 2.23694,
      example: "1 m/s ≈ 2.237 mph, 60 mph ≈ 26.822 m/s",
    },
    {
      unit: "Foot/second (ft/s)",
      description: "Common in engineering and physics in the US.",
      conversion: 3.28084,
      example: "1 m/s ≈ 3.281 ft/s, 10 ft/s ≈ 3.048 m/s",
    },
    {
      unit: "Knot (kn)",
      description:
        "Nautical mile per hour, used in maritime and aviation navigation.",
      conversion: 1.94384,
      example: "1 m/s ≈ 1.944 knots, 15 knots ≈ 7.717 m/s",
    },
    {
      unit: "Mach (at sea level)",
      description:
        "Ratio of speed to the speed of sound in air (≈343 m/s at sea level).",
      conversion: 0.00291545,
      example: "1 m/s ≈ Mach 0.002915, Mach 1 ≈ 343 m/s",
    },
    {
      unit: "Speed of Light (c)",
      description: "Fundamental physical constant (299,792,458 m/s).",
      conversion: 3.33564e-9,
      example: "1 m/s ≈ 3.336×10⁻⁹ c, 1 c ≈ 299,792,458 m/s",
    },
    {
      unit: "Inch/second (in/s)",
      description: "Used in some engineering applications.",
      conversion: 39.3701,
      example: "1 m/s ≈ 39.37 in/s, 10 in/s ≈ 0.254 m/s",
    },
    {
      unit: "Centimeter/second (cm/s)",
      description: "Used for very slow speeds in scientific contexts.",
      conversion: 100,
      example: "1 m/s = 100 cm/s, 50 cm/s = 0.5 m/s",
    },
    {
      unit: "Kilometer/second (km/s)",
      description: "Used for astronomical and high-speed measurements.",
      conversion: 0.001,
      example: "1 m/s = 0.001 km/s, 7 km/s = 7,000 m/s",
    },
    {
      unit: "Earth's Orbital Speed",
      description: "Average speed of Earth around the Sun (≈29,785 m/s).",
      conversion: 0.00003357,
      example: "1 m/s ≈ 0.0000336 × Earth's orbital speed",
    },
    {
      unit: "Cosmic Velocity - First",
      description:
        "Minimum speed needed to escape Earth's gravity (7,910 m/s).",
      conversion: 0.0001264,
      example: "1 m/s ≈ 0.000126 × cosmic velocity (first)",
    },
    {
      unit: "Velocity of Sound in Water",
      description: "Speed of sound in pure water (≈1,480 m/s).",
      conversion: 0.0006757,
      example: "1 m/s ≈ 0.000676 × speed of sound in water",
    },
    {
      unit: "Cheetah Speed",
      description: "Maximum speed of a cheetah (≈29 m/s).",
      conversion: 0.03448,
      example: "1 m/s ≈ 0.0345 × cheetah's top speed",
    },
    {
      unit: "Usain Bolt's Record (100m)",
      description: "Average speed during 9.58s 100m dash (≈10.44 m/s).",
      conversion: 0.0958,
      example: "1 m/s ≈ 0.0958 × Bolt's record speed",
    },
    {
      unit: "Walking Speed (human)",
      description: "Average human walking speed (≈1.4 m/s).",
      conversion: 0.7143,
      example: "1 m/s ≈ 0.714 × average walking speed",
    },
    {
      unit: "Snail Speed",
      description: "Average speed of a garden snail (≈0.001 m/s).",
      conversion: 1000,
      example: "1 m/s ≈ 1,000 × snail speed",
    },
    {
      unit: "Tornado Wind Speed (EF5)",
      description: "Maximum wind speed in strongest tornadoes (≈142 m/s).",
      conversion: 0.007042,
      example: "1 m/s ≈ 0.00704 × EF5 tornado wind speed",
    },
    {
      unit: "Jet Stream Speed",
      description: "Average speed of high-altitude jet streams (≈50 m/s).",
      conversion: 0.02,
      example: "1 m/s ≈ 0.02 × jet stream speed",
    },
    {
      unit: "Blood Flow Speed (aorta)",
      description: "Peak speed of blood in human aorta (≈1.2 m/s).",
      conversion: 0.8333,
      example: "1 m/s ≈ 0.833 × peak aortic blood flow",
    },
    {
      unit: "Typical CPU Electron Speed",
      description: "Drift velocity of electrons in CPU (≈0.0001 m/s).",
      conversion: 10000,
      example: "1 m/s ≈ 10,000 × CPU electron drift speed",
    },
  ],
  Meters: [
    {
      unit: "Kilometer (km)",
      description:
        "Metric unit equal to 1,000 meters, used for longer distances.",
      conversion: 0.001,
      example: "1 m = 0.001 km, 1 km = 1,000 m",
    },
    {
      unit: "Centimeter (cm)",
      description: "Common metric unit equal to 1/100 of a meter.",
      conversion: 100,
      example: "1 m = 100 cm, 1 cm = 0.01 m",
    },
    {
      unit: "Millimeter (mm)",
      description: "Small metric unit equal to 1/1,000 of a meter.",
      conversion: 1000,
      example: "1 m = 1,000 mm, 1 mm = 0.001 m",
    },
    {
      unit: "Mile (mi)",
      description: "Imperial unit commonly used in the United States and UK.",
      conversion: 0.000621371,
      example: "1 m ≈ 0.000621 mi, 1 mi ≈ 1,609.34 m",
    },
    {
      unit: "Yard (yd)",
      description: "Imperial unit equal to 3 feet.",
      conversion: 1.09361,
      example: "1 m ≈ 1.094 yd, 1 yd ≈ 0.9144 m",
    },
    {
      unit: "Foot (ft)",
      description:
        "Imperial unit commonly used for human height and short distances.",
      conversion: 3.28084,
      example: "1 m ≈ 3.281 ft, 1 ft ≈ 0.3048 m",
    },
    {
      unit: "Inch (in)",
      description: "Small imperial unit equal to 1/12 of a foot.",
      conversion: 39.3701,
      example: "1 m ≈ 39.37 in, 1 in = 0.0254 m",
    },
    {
      unit: "Light-year (ly)",
      description: "Distance light travels in one year in vacuum.",
      conversion: 1.057e-16,
      example: "1 m ≈ 1.057×10⁻¹⁶ ly, 1 ly ≈ 9.461×10¹⁵ m",
    },
    {
      unit: "Astronomical Unit (AU)",
      description: "Average distance from Earth to Sun.",
      conversion: 6.68459e-12,
      example: "1 m ≈ 6.685×10⁻¹² AU, 1 AU ≈ 1.496×10¹¹ m",
    },
    {
      unit: "Nautical Mile (nmi)",
      description: "Used in maritime and aviation navigation.",
      conversion: 0.000539957,
      example: "1 m ≈ 0.000540 nmi, 1 nmi = 1,852 m",
    },
    {
      unit: "Fathom (ftm)",
      description: "Nautical unit for measuring water depth.",
      conversion: 0.546807,
      example: "1 m ≈ 0.547 fathoms, 1 fathom = 1.8288 m",
    },
    {
      unit: "Football Field (US)",
      description: "American football field including end zones (91.44 m).",
      conversion: 0.0109361,
      example: "1 m ≈ 0.0109 football fields, 1 field = 91.44 m",
    },
    {
      unit: "Olympic Swimming Pool (50m)",
      description: "Standard Olympic-sized pool length.",
      conversion: 0.02,
      example: "1 m = 0.02 pool lengths, 50 m = 1 pool length",
    },
    {
      unit: "Basketball Court (FIBA)",
      description: "FIBA standard court length (28 m).",
      conversion: 0.0357143,
      example: "1 m ≈ 0.0357 courts, 28 m = 1 court length",
    },
    {
      unit: "Human Height (average)",
      description: "Approximate average human height (1.7 m).",
      conversion: 0.588235,
      example: "1 m ≈ 0.588 human heights, 1.7 m ≈ average height",
    },
    {
      unit: "Giraffe Height (adult male)",
      description: "Average height of adult male giraffe (5.5 m).",
      conversion: 0.181818,
      example: "1 m ≈ 0.182 giraffes, 5.5 m ≈ 1 giraffe height",
    },
    {
      unit: "Blue Whale Length",
      description: "Average length of adult blue whale (30 m).",
      conversion: 0.0333333,
      example: "1 m ≈ 0.0333 whale lengths, 30 m ≈ 1 blue whale",
    },
    {
      unit: "Eiffel Tower Height",
      description: "Height to tip (330 m including antenna).",
      conversion: 0.0030303,
      example: "1 m ≈ 0.00303 Eiffel Towers, 330 m = 1 Eiffel Tower",
    },
    {
      unit: "Empire State Building Height",
      description: "Height to tip (443 m including antenna).",
      conversion: 0.00225734,
      example: "1 m ≈ 0.00226 ESB heights, 443 m = 1 ESB height",
    },
    {
      unit: "Earth's Circumference",
      description: "Circumference at equator (40,075,017 m).",
      conversion: 2.49532e-8,
      example: "1 m ≈ 2.495×10⁻⁸ Earth circumferences",
    },
    {
      unit: "Planck Length",
      description: "Theoretical smallest measurable length.",
      conversion: 6.18793e34,
      example: "1 m ≈ 6.188×10³⁴ Planck lengths",
    },
    {
      unit: "DNA Helix Width",
      description: "Approximate diameter of DNA double helix (2 nm).",
      conversion: 5e8,
      example: "1 m = 500 million DNA widths",
    },
    {
      unit: "Grain of Sand (medium)",
      description: "Average medium sand grain diameter (0.5 mm).",
      conversion: 2000,
      example: "1 m ≈ 2,000 sand grains lined up",
    },
    {
      unit: "US Dollar Bill Length",
      description: "Length of US paper currency (0.155955 m).",
      conversion: 6.4121,
      example: "1 m ≈ 6.41 dollar bills, 1 bill ≈ 0.156 m",
    },
    {
      unit: "iPhone 14 Length",
      description: "Length of iPhone 14 (0.1467 m).",
      conversion: 6.81663,
      example: "1 m ≈ 6.82 iPhones, 1 iPhone ≈ 0.1467 m",
    },
    {
      unit: "Pencil Length",
      description: "Standard unsharpened pencil (0.19 m).",
      conversion: 5.26316,
      example: "1 m ≈ 5.26 pencils, 1 pencil ≈ 0.19 m",
    },
    {
      unit: "Football (Soccer) Goal Width",
      description: "Standard goal width (7.32 m).",
      conversion: 0.136612,
      example: "1 m ≈ 0.137 goal widths, 7.32 m = 1 goal width",
    },
    {
      unit: "Tennis Court Length",
      description: "Singles court length (23.77 m).",
      conversion: 0.04207,
      example: "1 m ≈ 0.042 court lengths, 23.77 m = 1 court",
    },
    {
      unit: "Average Step Length",
      description: "Average adult human step (0.79 m).",
      conversion: 1.26582,
      example: "1 m ≈ 1.27 steps, 1 step ≈ 0.79 m",
    },
  ],
  Milligrams: [
    {
      unit: "Gram (g)",
      description:
        "Base metric unit of mass equal to one thousandth of a kilogram.",
      conversion: 0.001,
      example: "1 milligram = 0.001 grams, 1,000 milligrams = 1 gram",
    },
    {
      unit: "Kilogram (kg)",
      description: "SI base unit of mass, equal to 1,000 grams.",
      conversion: 0.000001,
      example: "1 milligram = 0.000001 kg, 1,000,000 milligrams = 1 kg",
    },
    {
      unit: "Metric Ton (t)",
      description: "Metric unit equal to 1,000 kilograms.",
      conversion: 1e-9,
      example: "1 milligram = 1e-9 metric tons, 1e9 milligrams = 1 metric ton",
    },
    {
      unit: "Pound (lb)",
      description: "Common imperial unit of mass.",
      conversion: 0.00000220462,
      example: "1 milligram ≈ 0.00000220462 lb, 453,592 milligrams = 1 lb",
    },
    {
      unit: "Ounce (oz)",
      description: "Imperial unit equal to 1/16 pound.",
      conversion: 0.000035274,
      example: "1 milligram ≈ 0.000035274 oz, 28,349.5 milligrams = 1 oz",
    },
    {
      unit: "Carat (ct)",
      description: "Unit used for gemstones and pearls.",
      conversion: 0.005,
      example: "1 milligram = 0.005 carats, 200 milligrams = 1 carat",
    },
    {
      unit: "Grain (gr)",
      description: "Traditional unit based on the weight of a grain of wheat.",
      conversion: 0.0154324,
      example: "1 milligram ≈ 0.0154324 grains, 64.7989 milligrams = 1 grain",
    },
    {
      unit: "Microgram (μg)",
      description: "Metric unit equal to one millionth of a gram.",
      conversion: 1000,
      example: "1 milligram = 1,000 micrograms, 0.001 milligrams = 1 microgram",
    },
    {
      unit: "Nanogram (ng)",
      description: "Metric unit equal to one billionth of a gram.",
      conversion: 1000000,
      example:
        "1 milligram = 1,000,000 nanograms, 0.000001 milligrams = 1 nanogram",
    },
    {
      unit: "Atomic Mass Unit (u)",
      description: "Unit used to express atomic and molecular weights.",
      conversion: 6.02214076e20,
      example: "1 milligram ≈ 6.022e20 AMU, 1.66054e-24 milligrams = 1 AMU",
    },
    {
      unit: "Pennyweight (dwt)",
      description: "Unit used in measuring precious metals.",
      conversion: 0.000643015,
      example: "1 milligram ≈ 0.000643015 dwt, 1,555.17 milligrams = 1 dwt",
    },
    {
      unit: "Troy Ounce (oz t)",
      description: "Unit used for precious metals like gold and silver.",
      conversion: 0.0000321507,
      example: "1 milligram ≈ 0.0000321507 oz t, 31,103.5 milligrams = 1 oz t",
    },
    {
      unit: "Slug",
      description: "Imperial unit of mass in the gravitational system.",
      conversion: 6.85218e-8,
      example: "1 milligram ≈ 6.85218e-8 slugs, 14,593.9 grams = 1 slug",
    },
    {
      unit: "Stone (st)",
      description: "British unit of weight equal to 14 pounds.",
      conversion: 1.57473e-7,
      example: "1 milligram ≈ 1.57473e-7 stone, 6,350,293 milligrams = 1 stone",
    },
    {
      unit: "US Ton (short ton)",
      description: "US unit equal to 2,000 pounds.",
      conversion: 1.10231e-9,
      example:
        "1 milligram ≈ 1.10231e-9 short tons, 907,184,740 milligrams = 1 short ton",
    },
    {
      unit: "UK Ton (long ton)",
      description: "British unit equal to 2,240 pounds.",
      conversion: 9.84207e-10,
      example:
        "1 milligram ≈ 9.84207e-10 long tons, 1,016,046,908.8 milligrams = 1 long ton",
    },
    {
      unit: "Dram (dr)",
      description: "Unit equal to 1/16 ounce or 1/256 pound.",
      conversion: 0.000564383,
      example: "1 milligram ≈ 0.000564383 dr, 1,771.85 milligrams = 1 dr",
    },
    {
      unit: "Scruple (s ap)",
      description: "Apothecary unit equal to 20 grains.",
      conversion: 0.000771618,
      example:
        "1 milligram ≈ 0.000771618 scruples, 1,295.98 milligrams = 1 scruple",
    },
    {
      unit: "Planck Mass",
      description: "Natural unit of mass in quantum physics.",
      conversion: 4.59e31,
      example:
        "1 milligram ≈ 4.59e31 Planck masses, 2.18e-32 milligrams = 1 Planck mass",
    },
    {
      unit: "Earth Mass",
      description: "Mass of planet Earth (approximate).",
      conversion: 1.674e-28,
      example:
        "1 milligram ≈ 1.674e-28 Earth masses, 5.972e27 grams = 1 Earth mass",
    },
    {
      unit: "Solar Mass",
      description: "Mass of the Sun (astronomical unit).",
      conversion: 5.03e-34,
      example:
        "1 milligram ≈ 5.03e-34 solar masses, 1.9885e33 grams = 1 solar mass",
    },
    {
      unit: "Paper Clip",
      description: "Approximate mass of a standard paper clip.",
      conversion: 0.01,
      example: "1 milligram = 0.01 paper clips, 100 milligrams ≈ 1 paper clip",
    },
    {
      unit: "US Dollar Bill",
      description: "Approximate mass of a US banknote.",
      conversion: 0.001,
      example:
        "1 milligram = 0.001 dollar bills, 1,000 milligrams ≈ 1 dollar bill",
    },
    {
      unit: "Grain of Rice",
      description: "Approximate mass of a single grain of rice.",
      conversion: 0.02,
      example:
        "1 milligram = 0.02 rice grains, 50 milligrams ≈ 1 grain of rice",
    },
    {
      unit: "Snowflake",
      description: "Approximate mass of a typical snowflake.",
      conversion: 0.003,
      example: "1 milligram ≈ 0.003 snowflakes, 333 milligrams ≈ 1 snowflake",
    },
    {
      unit: "Human Hair",
      description: "Approximate mass of one centimeter of human hair.",
      conversion: 0.0005,
      example: "1 milligram = 0.0005 hair cm, 2,000 milligrams ≈ 1 cm of hair",
    },
  ],
  Mph: [
    {
      unit: "Meter/second (m/s)",
      description:
        "SI unit of speed, representing distance traveled in meters per second.",
      conversion: 0.44704,
      example: "1 mph ≈ 0.44704 m/s, 2.23694 mph = 1 m/s",
    },
    {
      unit: "Kilometer/hour (km/h)",
      description:
        "Common metric unit of speed, used in most countries for road signs.",
      conversion: 1.60934,
      example: "1 mph ≈ 1.60934 km/h, 0.621371 mph = 1 km/h",
    },
    {
      unit: "Foot/second (ft/s)",
      description: "Imperial unit of speed, commonly used in engineering.",
      conversion: 1.46667,
      example: "1 mph ≈ 1.46667 ft/s, 0.681818 mph = 1 ft/s",
    },
    {
      unit: "Knot (kn)",
      description:
        "Nautical unit of speed used in maritime and aviation contexts.",
      conversion: 0.868976,
      example: "1 mph ≈ 0.868976 knots, 1.15078 mph = 1 knot",
    },
    {
      unit: "Mach (at sea level, 20°C)",
      description: "Ratio of speed to the speed of sound in air.",
      conversion: 0.00130105,
      example: "1 mph ≈ 0.001301 Mach, 768.62 mph ≈ 1 Mach at sea level",
    },
    {
      unit: "Speed of Light (c)",
      description:
        "Fundamental physical constant representing the maximum speed in the universe.",
      conversion: 1.49116e-9,
      example: "1 mph ≈ 1.49116e-9 c, 670,616,629 mph = 1 c",
    },
    {
      unit: "Cosmic Velocity - First",
      description: "Astronomical speed unit based on Earth's orbital velocity.",
      conversion: 5.65873e-5,
      example:
        "1 mph ≈ 5.65873e-5 cosmic velocity, 17,672 mph ≈ 1 cosmic velocity (first)",
    },
    {
      unit: "Earth's Velocity",
      description: "Average speed of Earth's rotation at the equator.",
      conversion: 1.50192e-5,
      example:
        "1 mph ≈ 1.50192e-5 Earth's velocity, 66,582 mph ≈ 1 Earth's velocity",
    },
    {
      unit: "Velocity of Sound in Water",
      description: "Speed of sound in pure water at 20°C.",
      conversion: 0.0003015,
      example:
        "1 mph ≈ 0.0003015 sound speed in water, 3,317 mph ≈ sound speed in water",
    },
    {
      unit: "Inch/second (in/s)",
      description: "Small imperial unit of speed.",
      conversion: 17.6,
      example: "1 mph = 17.6 in/s, 0.0568182 mph = 1 in/s",
    },
    {
      unit: "Mile/minute (mi/min)",
      description: "Larger imperial unit of speed.",
      conversion: 0.0166667,
      example: "1 mph = 0.0166667 mi/min, 60 mph = 1 mi/min",
    },
    {
      unit: "Mile/second (mi/s)",
      description: "Extreme speed unit used in rocketry.",
      conversion: 0.000277778,
      example: "1 mph = 0.000277778 mi/s, 3,600 mph = 1 mi/s",
    },
    {
      unit: "Yard/second (yd/s)",
      description: "Imperial unit used in some sports measurements.",
      conversion: 0.488889,
      example: "1 mph ≈ 0.488889 yd/s, 2.04545 mph = 1 yd/s",
    },
    {
      unit: "Furlong/fortnight",
      description: "Humorous unit combining medieval distance with time.",
      conversion: 2688,
      example:
        "1 mph = 2,688 furlongs/fortnight, 0.000372024 mph = 1 furlong/fortnight",
    },
    {
      unit: "Cheetah Speed",
      description: "Approximate top speed of a cheetah (70-75 mph).",
      conversion: 0.01333,
      example: "1 mph ≈ 0.01333 cheetah speeds, 75 mph ≈ 1 cheetah speed",
    },
    {
      unit: "Human Running Speed",
      description: "Approximate world record sprint speed (≈27.8 mph).",
      conversion: 0.03597,
      example:
        "1 mph ≈ 0.03597 human record speeds, 27.8 mph ≈ 1 human record speed",
    },
    {
      unit: "Commercial Airplane Speed",
      description: "Typical cruising speed of a jet airliner (≈575 mph).",
      conversion: 0.001739,
      example: "1 mph ≈ 0.001739 airplane speeds, 575 mph ≈ 1 airplane speed",
    },
    {
      unit: "Bullet Speed (9mm)",
      description: "Approximate muzzle velocity of a 9mm handgun (≈1,200 mph).",
      conversion: 0.000833,
      example: "1 mph ≈ 0.000833 bullet speeds, 1,200 mph ≈ 1 bullet speed",
    },
    {
      unit: "Earth's Rotation at Equator",
      description: "Speed of Earth's surface at the equator (≈1,040 mph).",
      conversion: 0.0009615,
      example:
        "1 mph ≈ 0.0009615 Earth's equatorial rotation, 1,040 mph ≈ 1 Earth rotation speed",
    },
    {
      unit: "International Space Station Speed",
      description: "Orbital velocity of the ISS (≈17,500 mph).",
      conversion: 0.00005714,
      example:
        "1 mph ≈ 0.00005714 ISS speeds, 17,500 mph ≈ 1 ISS orbital speed",
    },
    {
      unit: "Escape Velocity (Earth)",
      description:
        "Speed needed to break free from Earth's gravity (≈25,000 mph).",
      conversion: 0.00004,
      example:
        "1 mph ≈ 0.00004 Earth escape velocities, 25,000 mph ≈ 1 escape velocity",
    },
    {
      unit: "Solar System Speed Around Galaxy",
      description:
        "Approximate speed of our solar system orbiting Milky Way center (≈514,000 mph).",
      conversion: 0.000001945,
      example:
        "1 mph ≈ 0.000001945 galactic orbit speeds, 514,000 mph ≈ 1 solar system orbital speed",
    },
    {
      unit: "Light-minute per Hour",
      description: "Ratio comparing speed to light travel distance.",
      conversion: 8.94699e-8,
      example:
        "1 mph ≈ 8.94699e-8 light-minutes/hour, 11,176,920 mph = 1 light-minute/hour",
    },
    {
      unit: "Snail Speed",
      description: "Approximate top speed of a garden snail (≈0.03 mph).",
      conversion: 33.3333,
      example: "1 mph ≈ 33.3333 snail speeds, 0.03 mph ≈ 1 snail speed",
    },
    {
      unit: "Tortoise Speed",
      description: "Approximate speed of a Galapagos tortoise (≈0.2 mph).",
      conversion: 5,
      example: "1 mph ≈ 5 tortoise speeds, 0.2 mph ≈ 1 tortoise speed",
    },
  ],
  Miles: [
    {
      unit: "Meter (m)",
      description:
        "SI base unit of length, defined as the distance light travels in 1/299,792,458 seconds.",
      conversion: 1609.34,
      example: "1 mile = 1,609.34 meters, 0.000621371 miles = 1 meter",
    },
    {
      unit: "Kilometer (km)",
      description:
        "Metric unit equal to 1,000 meters, commonly used for road distances.",
      conversion: 1.60934,
      example: "1 mile ≈ 1.60934 km, 0.621371 miles = 1 km",
    },
    {
      unit: "Yard (yd)",
      description: "Imperial unit equal to 3 feet or 36 inches.",
      conversion: 1760,
      example: "1 mile = 1,760 yards, 0.000568182 miles = 1 yard",
    },
    {
      unit: "Foot (ft)",
      description:
        "Imperial unit equal to 12 inches, commonly used in aviation and elevation.",
      conversion: 5280,
      example: "1 mile = 5,280 feet, 0.000189394 miles = 1 foot",
    },
    {
      unit: "Inch (in)",
      description: "Small imperial unit, 1/12 of a foot.",
      conversion: 63360,
      example: "1 mile = 63,360 inches, 0.0000157828 miles = 1 inch",
    },
    {
      unit: "Nautical Mile (international)",
      description:
        "Unit used in maritime and aviation navigation, equal to 1 minute of latitude.",
      conversion: 0.868976,
      example:
        "1 mile ≈ 0.868976 nautical miles, 1.15078 miles = 1 nautical mile",
    },
    {
      unit: "Light Year (ly)",
      description:
        "Astronomical distance that light travels in one Julian year.",
      conversion: 1.70108e-13,
      example:
        "1 mile ≈ 1.70108e-13 light years, 5.8786e12 miles = 1 light year",
    },
    {
      unit: "Astronomical Unit (AU)",
      description:
        "Average distance from Earth to the Sun, used for solar system measurements.",
      conversion: 1.07578e-8,
      example: "1 mile ≈ 1.07578e-8 AU, 92,955,807 miles = 1 AU",
    },
    {
      unit: "Furlong",
      description: "Traditional unit equal to 1/8 mile, used in horse racing.",
      conversion: 8,
      example: "1 mile = 8 furlongs, 0.125 miles = 1 furlong",
    },
    {
      unit: "Fathom (ftm)",
      description: "Nautical unit of depth equal to 6 feet.",
      conversion: 880,
      example: "1 mile = 880 fathoms, 0.00113636 miles = 1 fathom",
    },
    {
      unit: "Chain (ch)",
      description: "Surveying unit equal to 66 feet or 1/80 mile.",
      conversion: 80,
      example: "1 mile = 80 chains, 0.0125 miles = 1 chain",
    },
    {
      unit: "Rod (rd)",
      description: "Survey unit equal to 16.5 feet or 1/320 mile.",
      conversion: 320,
      example: "1 mile = 320 rods, 0.003125 miles = 1 rod",
    },
    {
      unit: "League",
      description: "Traditional unit of distance, often equal to 3 miles.",
      conversion: 0.333333,
      example: "1 mile ≈ 0.333333 leagues, 3 miles = 1 league",
    },
    {
      unit: "Mil",
      description: "Unit equal to 1/1000 inch, used in manufacturing.",
      conversion: 63360000,
      example: "1 mile = 63,360,000 mils, 1.5783e-8 miles = 1 mil",
    },
    {
      unit: "Micrometer (μm)",
      description: "Metric unit equal to one millionth of a meter.",
      conversion: 1609340000,
      example: "1 mile = 1.60934e9 μm, 6.2137e-10 miles = 1 μm",
    },
    {
      unit: "Angstrom (Å)",
      description: "Unit used to measure atomic-scale distances.",
      conversion: 16093400000000,
      example: "1 mile = 1.60934e13 Å, 6.2137e-14 miles = 1 Å",
    },
    {
      unit: "Earth's Equatorial Radius",
      description: "Average radius at Earth's equator (≈3,963 miles).",
      conversion: 0.000252321,
      example: "1 mile ≈ 0.000252321 Earth radii, 3,963 miles ≈ 1 Earth radius",
    },
    {
      unit: "Sun's Radius",
      description: "Nominal radius of the Sun (≈432,288 miles).",
      conversion: 0.00231228,
      example:
        "1 mile ≈ 0.00231228 solar radii, 432,288 miles ≈ 1 solar radius",
    },
    {
      unit: "Parsec (pc)",
      description: "Astronomical unit based on parallax measurements.",
      conversion: 5.21553e-14,
      example: "1 mile ≈ 5.21553e-14 parsecs, 1.9174e13 miles = 1 parsec",
    },
    {
      unit: "Planck Length",
      description: "Theoretical smallest measurable length in quantum physics.",
      conversion: 9.9585e37,
      example:
        "1 mile ≈ 9.9585e37 Planck lengths, 1.0042e-38 miles ≈ 1 Planck length",
    },
    {
      unit: "Football Field (100 yd)",
      description:
        "Standard American football field length including end zones.",
      conversion: 17.6,
      example:
        "1 mile ≈ 17.6 football fields, 0.0568182 miles = 1 football field",
    },
    {
      unit: "Marathon Distance",
      description: "Standard marathon race length (26 miles 385 yards).",
      conversion: 0.0381408,
      example: "1 mile ≈ 0.0381408 marathons, 26.2188 miles = 1 marathon",
    },
    {
      unit: "Height of Burj Khalifa",
      description: "World's tallest building (≈0.515 miles).",
      conversion: 1.9417,
      example:
        "1 mile ≈ 1.9417 Burj Khalifas, 0.515 miles = 1 Burj Khalifa height",
    },
    {
      unit: "Length of Central Park",
      description: "North-south length of NYC's Central Park (2.5 miles).",
      conversion: 0.4,
      example:
        "1 mile = 0.4 Central Park lengths, 2.5 miles = 1 Central Park length",
    },
    {
      unit: "Distance of Golden Gate Bridge",
      description: "Total length including approaches (≈1.7 miles).",
      conversion: 0.588235,
      example:
        "1 mile ≈ 0.588235 bridge lengths, 1.7 miles = 1 Golden Gate Bridge length",
    },
  ],
  Milliseconds: [
    {
      unit: "Second (s)",
      description: "SI base unit of time, defined by the cesium atomic clock.",
      conversion: 0.001,
      example: "1 millisecond = 0.001 seconds, 1,000 milliseconds = 1 second",
    },
    {
      unit: "Microsecond (μs)",
      description: "Metric unit equal to one millionth of a second.",
      conversion: 1000,
      example:
        "1 millisecond = 1,000 microseconds, 0.001 milliseconds = 1 microsecond",
    },
    {
      unit: "Nanosecond (ns)",
      description: "Metric unit equal to one billionth of a second.",
      conversion: 1000000,
      example:
        "1 millisecond = 1,000,000 nanoseconds, 0.000001 milliseconds = 1 nanosecond",
    },
    {
      unit: "Minute (min)",
      description: "Common unit equal to 60 seconds.",
      conversion: 1.66667e-5,
      example:
        "1 millisecond ≈ 1.66667e-5 minutes, 60,000 milliseconds = 1 minute",
    },
    {
      unit: "Hour (hr)",
      description: "Standard time unit equal to 3,600 seconds.",
      conversion: 2.77778e-7,
      example:
        "1 millisecond ≈ 2.77778e-7 hours, 3,600,000 milliseconds = 1 hour",
    },
    {
      unit: "Day (d)",
      description: "Earth's rotation period (86,400 seconds).",
      conversion: 1.15741e-8,
      example:
        "1 millisecond ≈ 1.15741e-8 days, 86,400,000 milliseconds = 1 day",
    },
    {
      unit: "Week",
      description: "7-day period used in calendars worldwide.",
      conversion: 1.65344e-9,
      example:
        "1 millisecond ≈ 1.65344e-9 weeks, 604,800,000 milliseconds = 1 week",
    },
    {
      unit: "Month (average)",
      description: "Approximate average month duration.",
      conversion: 3.80265e-10,
      example:
        "1 millisecond ≈ 3.80265e-10 months, 2,629,746,000 milliseconds ≈ 1 month",
    },
    {
      unit: "Year (Julian)",
      description: "Calendar year of exactly 365.25 days.",
      conversion: 3.16881e-11,
      example:
        "1 millisecond ≈ 3.16881e-11 years, 31,557,600,000 milliseconds = 1 Julian year",
    },
    {
      unit: "Decade",
      description: "10-year period used for historical measurements.",
      conversion: 3.16888e-12,
      example:
        "1 millisecond ≈ 3.16888e-12 decades, 315,569,520,000 milliseconds = 1 decade",
    },
    {
      unit: "Century",
      description: "100-year period used in historical contexts.",
      conversion: 3.16888e-13,
      example:
        "1 millisecond ≈ 3.16888e-13 centuries, 3,155,695,200,000 milliseconds = 1 century",
    },
    {
      unit: "Millennium",
      description: "1,000-year period used in geological time.",
      conversion: 3.16888e-14,
      example:
        "1 millisecond ≈ 3.16888e-14 millennia, 31,556,952,000,000 milliseconds = 1 millennium",
    },
    {
      unit: "Planck Time",
      description:
        "Theoretical smallest measurable time unit in quantum physics.",
      conversion: 1.85509e40,
      example:
        "1 millisecond ≈ 1.85509e40 Planck times, 5.39e-44 seconds = 1 Planck time",
    },
    {
      unit: "Shake",
      description: "Nuclear physics unit equal to 10 nanoseconds.",
      conversion: 100000,
      example: "1 millisecond = 100,000 shakes, 0.00001 milliseconds = 1 shake",
    },
    {
      unit: "Fortnight",
      description: "Traditional unit equal to 2 weeks.",
      conversion: 8.2672e-10,
      example:
        "1 millisecond ≈ 8.2672e-10 fortnights, 1,209,600,000 milliseconds = 1 fortnight",
    },
    {
      unit: "Human Blink",
      description: "Average duration of an eye blink (≈300-400ms).",
      conversion: 0.002857,
      example: "1 millisecond ≈ 0.002857 blinks, 350 milliseconds ≈ 1 blink",
    },
    {
      unit: "Camera Flash Duration",
      description: "Typical duration of a professional camera flash (≈1ms).",
      conversion: 1,
      example:
        "1 millisecond ≈ 1 flash duration, 1 millisecond ≈ 1 flash pulse",
    },
    {
      unit: "Neural Impulse",
      description: "Time for a neuron to fire (≈1-5ms).",
      conversion: 0.2,
      example:
        "1 millisecond ≈ 0.2 neural impulses, 5 milliseconds ≈ 1 neural firing",
    },
    {
      unit: "1Gbps Data Packet",
      description: "Time to transmit 125 bytes at 1 gigabit/sec (≈1μs).",
      conversion: 0.001,
      example:
        "1 millisecond = 1,000 1Gbps packet times, 1 microsecond = 1 packet at 1Gbps",
    },
    {
      unit: "CPU Clock Cycle (3GHz)",
      description: "Single processor cycle on a 3GHz CPU (≈0.33ns).",
      conversion: 3000000,
      example:
        "1 millisecond = 3,000,000 clock cycles, 0.000000333 milliseconds = 1 cycle",
    },
    {
      unit: "Light Travel (1km)",
      description: "Time for light to travel 1 kilometer in vacuum (≈3.33μs).",
      conversion: 300,
      example:
        "1 millisecond ≈ 300 light-km times, 0.00333 milliseconds = light traveling 1km",
    },
    {
      unit: "Earth Rotation (1°)",
      description: "Time for Earth to rotate 1 degree (≈4 minutes).",
      conversion: 4.62963e-8,
      example:
        "1 millisecond ≈ 4.62963e-8 degree-rotations, 240,000 milliseconds = 1° rotation",
    },
    {
      unit: "Moon Orbit (1°)",
      description:
        "Time for Moon to orbit 1 degree around Earth (≈6.5 minutes).",
      conversion: 2.5641e-8,
      example:
        "1 millisecond ≈ 2.5641e-8 degree-orbits, 390,000 milliseconds = 1° lunar orbit",
    },
    {
      unit: "Quinquennial",
      description: "5-year period used in planning and contracts.",
      conversion: 6.34196e-12,
      example:
        "1 millisecond ≈ 6.34196e-12 quinquennials, 157,784,760,000 milliseconds = 1 quinquennial",
    },
  ],
  Minutes: [
    {
      unit: "Second",
      description: "Base unit of time in the International System of Units.",
      conversion: 60,
      example: "1 minute = 60 seconds, 0.0166667 minutes = 1 second",
    },
    {
      unit: "Millisecond",
      description: "One thousandth of a second.",
      conversion: 60000,
      example:
        "1 minute = 60,000 milliseconds, 0.0000166667 minutes = 1 millisecond",
    },
    {
      unit: "Hour",
      description: "Common time unit equal to 60 minutes.",
      conversion: 0.0166667,
      example: "1 minute ≈ 0.0166667 hours, 60 minutes = 1 hour",
    },
    {
      unit: "Day",
      description: "24-hour period of time.",
      conversion: 0.000694444,
      example: "1 minute ≈ 0.000694444 days, 1,440 minutes = 1 day",
    },
    {
      unit: "Week",
      description: "7-day period of time.",
      conversion: 9.92063e-5,
      example: "1 minute ≈ 0.0000992063 weeks, 10,080 minutes = 1 week",
    },
    {
      unit: "Month (average)",
      description: "Approximate average month length.",
      conversion: 2.28159e-5,
      example: "1 minute ≈ 0.0000228159 months, 43,829 minutes ≈ 1 month",
    },
    {
      unit: "Year (common)",
      description: "365-day year (non-leap year).",
      conversion: 1.90133e-6,
      example:
        "1 minute ≈ 0.00000190133 years, 525,600 minutes = 1 common year",
    },
    {
      unit: "Decade",
      description: "10-year period.",
      conversion: 1.90133e-7,
      example: "1 minute ≈ 1.90133e-7 decades, 5,256,000 minutes = 1 decade",
    },
    {
      unit: "Century",
      description: "100-year period.",
      conversion: 1.90133e-8,
      example:
        "1 minute ≈ 1.90133e-8 centuries, 52,560,000 minutes = 1 century",
    },
    {
      unit: "Millennium",
      description: "1,000-year period.",
      conversion: 1.90133e-9,
      example:
        "1 minute ≈ 1.90133e-9 millennia, 525,600,000 minutes = 1 millennium",
    },
    {
      unit: "Microsecond",
      description: "One millionth of a second.",
      conversion: 6e7,
      example:
        "1 minute = 60,000,000 microseconds, 1.66667e-8 minutes = 1 microsecond",
    },
    {
      unit: "Nanosecond",
      description: "One billionth of a second.",
      conversion: 6e10,
      example:
        "1 minute = 60,000,000,000 nanoseconds, 1.66667e-11 minutes = 1 nanosecond",
    },
    {
      unit: "Picosecond",
      description: "One trillionth of a second.",
      conversion: 6e13,
      example:
        "1 minute = 60,000,000,000,000 picoseconds, 1.66667e-14 minutes = 1 picosecond",
    },
    {
      unit: "Femtosecond",
      description: "One quadrillionth of a second.",
      conversion: 6e16,
      example:
        "1 minute = 6e16 femtoseconds, 1.66667e-17 minutes = 1 femtosecond",
    },
    {
      unit: "Attosecond",
      description: "One quintillionth of a second.",
      conversion: 6e19,
      example:
        "1 minute = 6e19 attoseconds, 1.66667e-20 minutes = 1 attosecond",
    },
    {
      unit: "Planck Time",
      description: "The smallest measurable unit of time in quantum physics.",
      conversion: 1.11306e45,
      example:
        "1 minute ≈ 1.11306e45 Planck times, 8.984e-46 minutes ≈ 1 Planck time",
    },
    {
      unit: "Day (sidereal)",
      description: "Time for Earth to complete one rotation relative to stars.",
      conversion: 0.000696346,
      example:
        "1 minute ≈ 0.000696346 sidereal days, 1,436.07 minutes ≈ 1 sidereal day",
    },
    {
      unit: "Year (sidereal)",
      description: "Time for Earth to orbit the Sun relative to fixed stars.",
      conversion: 1.90125e-6,
      example:
        "1 minute ≈ 1.90125e-6 sidereal years, 525,969 minutes ≈ 1 sidereal year",
    },
    {
      unit: "Fortnight",
      description: "Period of 2 weeks.",
      conversion: 4.96032e-5,
      example:
        "1 minute ≈ 0.0000496032 fortnights, 20,160 minutes = 1 fortnight",
    },
    {
      unit: "Olympiad",
      description: "4-year period between Olympic Games.",
      conversion: 4.75333e-7,
      example:
        "1 minute ≈ 4.75333e-7 olympiads, 2,103,840 minutes ≈ 1 olympiad",
    },
    {
      unit: "Lunar Month",
      description: "Time between successive new moons (≈29.53 days).",
      conversion: 2.35161e-5,
      example:
        "1 minute ≈ 0.0000235161 lunar months, 42,524 minutes ≈ 1 lunar month",
    },
    {
      unit: "Human Heartbeat (average)",
      description: "Approximate time between heartbeats at rest.",
      conversion: 72,
      example: "1 minute ≈ 72 heartbeats, 0.83333 minutes ≈ 1 heartbeat",
    },
    {
      unit: "Commercial Break (TV)",
      description: "Typical duration of television commercials.",
      conversion: 2,
      example:
        "1 minute ≈ 2 commercial breaks (30 sec each), 0.5 minutes = 1 commercial break",
    },
    {
      unit: "Microwave Popcorn",
      description: "Typical cooking time for microwave popcorn.",
      conversion: 0.2,
      example:
        "1 minute = 5 microwave popcorn cycles, 3 minutes = 1 popcorn cycle",
    },
    {
      unit: "Soccer Half",
      description: "Duration of one half in professional soccer.",
      conversion: 0.0166667,
      example: "1 minute ≈ 0.0166667 soccer halves, 45 minutes = 1 soccer half",
    },
    {
      unit: "Baseball Inning",
      description: "Average duration of one baseball inning.",
      conversion: 0.0833333,
      example: "1 minute ≈ 0.0833333 innings, 12 minutes ≈ 1 baseball inning",
    },
  ],
  Ml: [
    {
      unit: "Cubic Meter (m³)",
      description:
        "The SI unit of volume, representing a cube with 1-meter sides.",
      conversion: 0.000001,
      example: "1 milliliter = 0.000001 m³, 1,000,000 milliliters = 1 m³",
    },
    {
      unit: "Liter (L)",
      description: "Common metric unit equal to 1 cubic decimeter.",
      conversion: 0.001,
      example: "1 milliliter = 0.001 L, 1,000 milliliters = 1 L",
    },
    {
      unit: "Cubic Centimeter (cc)",
      description: "Equal to 1 milliliter, commonly used in medicine.",
      conversion: 1,
      example: "1 milliliter = 1 cc, 1 cc = 1 milliliter",
    },
    {
      unit: "Cubic Inch (in³)",
      description: "Imperial unit of volume.",
      conversion: 0.0610237,
      example: "1 milliliter ≈ 0.0610237 in³, 16.3871 milliliters = 1 in³",
    },
    {
      unit: "Gallon (US liquid)",
      description: "Standard US liquid volume unit.",
      conversion: 0.000264172,
      example:
        "1 milliliter ≈ 0.000264172 gallons, 3,785.41 milliliters = 1 gallon",
    },
    {
      unit: "Quart (US liquid)",
      description: "US customary unit equal to 1/4 gallon.",
      conversion: 0.00105669,
      example:
        "1 milliliter ≈ 0.00105669 quarts, 946.353 milliliters = 1 quart",
    },
    {
      unit: "Pint (US liquid)",
      description: "US customary unit equal to 1/8 gallon.",
      conversion: 0.00211338,
      example: "1 milliliter ≈ 0.00211338 pints, 473.176 milliliters = 1 pint",
    },
    {
      unit: "Fluid Ounce (US fl oz)",
      description: "Small US liquid volume unit equal to 1/128 gallon.",
      conversion: 0.033814,
      example: "1 milliliter ≈ 0.033814 fl oz, 29.5735 milliliters = 1 fl oz",
    },
    {
      unit: "Tablespoon (US tbsp)",
      description: "Common cooking measurement equal to 3 teaspoons.",
      conversion: 0.067628,
      example: "1 milliliter ≈ 0.067628 tbsp, 14.7868 milliliters = 1 tbsp",
    },
    {
      unit: "Teaspoon (US tsp)",
      description: "Small cooking measurement equal to 1/6 fl oz.",
      conversion: 0.202884,
      example: "1 milliliter ≈ 0.202884 tsp, 4.92892 milliliters = 1 tsp",
    },
    {
      unit: "Cup (US)",
      description: "Common cooking measurement equal to 16 tablespoons.",
      conversion: 0.00422675,
      example: "1 milliliter ≈ 0.00422675 cups, 236.588 milliliters = 1 cup",
    },
    {
      unit: "Drop (metric)",
      description: "Approximate volume of a liquid drop.",
      conversion: 20,
      example: "1 milliliter = 20 drops, 0.05 milliliters = 1 drop",
    },
    {
      unit: "Microliter (µL)",
      description: "One millionth of a liter.",
      conversion: 1000,
      example: "1 milliliter = 1,000 µL, 0.001 milliliters = 1 µL",
    },
    {
      unit: "Cubic Millimeter (mm³)",
      description: "Very small volume unit equal to 1 µL.",
      conversion: 1000,
      example: "1 milliliter = 1,000 mm³, 0.001 milliliters = 1 mm³",
    },
    {
      unit: "Gallon (UK imperial)",
      description: "British imperial gallon, about 20% larger than US gallon.",
      conversion: 0.000219969,
      example:
        "1 milliliter ≈ 0.000219969 UK gallons, 4,546.09 milliliters = 1 UK gallon",
    },
    {
      unit: "Fluid Ounce (UK fl oz)",
      description: "Imperial fluid ounce, slightly smaller than US fl oz.",
      conversion: 0.0351951,
      example:
        "1 milliliter ≈ 0.0351951 UK fl oz, 28.4131 milliliters = 1 UK fl oz",
    },
    {
      unit: "Dram (US fluid)",
      description: "Small unit used in pharmacy measurements.",
      conversion: 0.270512,
      example: "1 milliliter ≈ 0.270512 drams, 3.69669 milliliters = 1 dram",
    },
    {
      unit: "Barrel (oil)",
      description: "Standard volume for crude oil and petroleum products.",
      conversion: 0.00000628981,
      example:
        "1 milliliter ≈ 6.28981e-6 barrels, 158,987 milliliters = 1 barrel",
    },
    {
      unit: "Coffee Spoon",
      description: "Approximate volume of a standard coffee spoon.",
      conversion: 0.5,
      example: "1 milliliter = 2 coffee spoons, 2 milliliters = 1 coffee spoon",
    },
    {
      unit: "Sugar Cube",
      description: "Approximate volume of a standard sugar cube.",
      conversion: 0.25,
      example: "1 milliliter = 4 sugar cubes, 4 milliliters ≈ 1 sugar cube",
    },
    {
      unit: "Medicine Cup (small)",
      description: "Standard small medicine dosing cup.",
      conversion: 0.2,
      example:
        "1 milliliter = 5 medicine cups, 5 milliliters = 1 small medicine cup",
    },
    {
      unit: "Eye Dropper (drop)",
      description: "Approximate volume from a standard eye dropper.",
      conversion: 0.05,
      example: "1 milliliter = 20 eye dropper drops, 20 drops ≈ 1 milliliter",
    },
    {
      unit: "Thimble",
      description: "Approximate volume of a standard sewing thimble.",
      conversion: 0.4,
      example: "1 milliliter = 2.5 thimbles, 2.5 milliliters ≈ 1 thimble",
    },
    {
      unit: "Shot Glass (standard)",
      description: "Typical volume for an alcoholic shot (US).",
      conversion: 0.0443603,
      example:
        "1 milliliter ≈ 0.0443603 shots, 44.3603 milliliters = 1 shot (1.5 fl oz)",
    },
    {
      unit: "Soda Cap",
      description: "Approximate volume of a plastic soda bottle cap.",
      conversion: 0.25,
      example: "1 milliliter = 4 soda caps, 4 milliliters ≈ 1 soda cap",
    },
    {
      unit: "Raindrop (average)",
      description: "Approximate volume of a raindrop.",
      conversion: 0.05,
      example: "1 milliliter = 20 raindrops, 20 raindrops ≈ 1 milliliter",
    },
    {
      unit: "Pinch (cooking)",
      description: "Approximate volume of a pinch in cooking.",
      conversion: 0.3125,
      example: "1 milliliter ≈ 3.2 pinches, 3.2 pinches ≈ 1 milliliter",
    },
    {
      unit: "Dash (cooking)",
      description: "Approximate volume of a dash in cooking.",
      conversion: 0.125,
      example: "1 milliliter = 8 dashes, 8 dashes ≈ 1 milliliter",
    },
    {
      unit: "Board Foot",
      description: "Lumber volume measurement equal to 1 ft × 1 ft × 1 in.",
      conversion: 0.000423776,
      example:
        "1 milliliter ≈ 0.000423776 board feet, 2,359.74 milliliters = 1 board foot",
    },
    {
      unit: "Acre-foot",
      description: "Large volume unit used in water reservoir measurements.",
      conversion: 8.10713e-10,
      example:
        "1 milliliter ≈ 8.10713e-10 acre-feet, 1,233,482,000 milliliters = 1 acre-foot",
    },
  ],
  Mm: [
    {
      unit: "Meter (m)",
      description:
        "The base unit of length in the International System of Units (SI).",
      conversion: 0.001,
      example: "1 millimeter = 0.001 meters, 1,000 millimeters = 1 meter",
    },
    {
      unit: "Centimeter (cm)",
      description: "Common metric unit equal to 1/100th of a meter.",
      conversion: 0.1,
      example: "1 millimeter = 0.1 centimeters, 10 millimeters = 1 centimeter",
    },
    {
      unit: "Kilometer (km)",
      description: "Metric unit for long distances, equal to 1,000 meters.",
      conversion: 0.000001,
      example:
        "1 millimeter = 0.000001 kilometers, 1,000,000 millimeters = 1 kilometer",
    },
    {
      unit: "Micrometer (µm)",
      description:
        "Metric unit for microscopic measurements, equal to 1/1,000th of a millimeter.",
      conversion: 1000,
      example:
        "1 millimeter = 1,000 micrometers, 0.001 millimeters = 1 micrometer",
    },
    {
      unit: "Nanometer (nm)",
      description: "Metric unit used in nanotechnology and light wavelengths.",
      conversion: 1000000,
      example:
        "1 millimeter = 1,000,000 nanometers, 0.000001 millimeters = 1 nanometer",
    },
    {
      unit: "Inch (in)",
      description: "Imperial unit commonly used in the US and UK.",
      conversion: 0.0393701,
      example: "1 millimeter ≈ 0.03937 inches, 25.4 millimeters = 1 inch",
    },
    {
      unit: "Foot (ft)",
      description: "Imperial unit equal to 12 inches.",
      conversion: 0.00328084,
      example: "1 millimeter ≈ 0.00328084 feet, 304.8 millimeters = 1 foot",
    },
    {
      unit: "Yard (yd)",
      description: "Imperial unit equal to 3 feet.",
      conversion: 0.00109361,
      example: "1 millimeter ≈ 0.00109361 yards, 914.4 millimeters = 1 yard",
    },
    {
      unit: "Mile (mi)",
      description: "Imperial unit for long distances, equal to 5,280 feet.",
      conversion: 6.21371e-7,
      example:
        "1 millimeter ≈ 6.21371e-7 miles, 1,609,344 millimeters = 1 mile",
    },
    {
      unit: "Nautical Mile (nmi)",
      description:
        "Used in marine and aviation navigation, based on Earth’s circumference.",
      conversion: 5.39957e-7,
      example:
        "1 millimeter ≈ 5.39957e-7 nautical miles, 1,852,000 millimeters = 1 nautical mile",
    },
    {
      unit: "Light Year (ly)",
      description: "Distance light travels in a vacuum in one year.",
      conversion: 1.057e-19,
      example:
        "1 millimeter ≈ 1.057e-19 light years, 9.461e+18 millimeters = 1 light year",
    },
    {
      unit: "Astronomical Unit (AU)",
      description: "Average distance from Earth to the Sun (~150 million km).",
      conversion: 6.68459e-15,
      example: "1 millimeter ≈ 6.68459e-15 AU, 1.496e+14 millimeters = 1 AU",
    },
    {
      unit: "Parsec (pc)",
      description: "Astronomical distance unit (~3.26 light years).",
      conversion: 3.24078e-17,
      example:
        "1 millimeter ≈ 3.24078e-17 parsecs, 3.086e+16 millimeters = 1 parsec",
    },
    {
      unit: "Planck Length",
      description:
        "The smallest theoretically measurable length in quantum physics.",
      conversion: 6.18793e31,
      example:
        "1 millimeter ≈ 6.18793e+31 Planck lengths, 1.616e-32 millimeters ≈ 1 Planck length",
    },
    {
      unit: "Fathom (ftm)",
      description: "Nautical depth measurement (6 feet).",
      conversion: 0.000546807,
      example:
        "1 millimeter ≈ 0.000546807 fathoms, 1,828.8 millimeters = 1 fathom",
    },
    {
      unit: "Furlong (fur)",
      description: "Old English unit (1/8 mile), used in horse racing.",
      conversion: 4.97097e-6,
      example:
        "1 millimeter ≈ 4.97097e-6 furlongs, 201,168 millimeters = 1 furlong",
    },
    {
      unit: "Micron (µm)",
      description: "Synonym for micrometer, used in engineering and biology.",
      conversion: 1000,
      example: "1 millimeter = 1,000 microns, 0.001 millimeters = 1 micron",
    },
    {
      unit: "Angstrom (Å)",
      description: "Used for atomic-scale distances (e.g., bond lengths).",
      conversion: 10000000,
      example: "1 millimeter = 10,000,000 Å, 0.0000001 millimeters = 1 Å",
    },
    {
      unit: "Mil (thou)",
      description: "Engineering unit (1/1000 inch).",
      conversion: 39.3701,
      example: "1 millimeter ≈ 39.3701 mils, 0.0254 millimeters = 1 mil",
    },
    {
      unit: "Point (pt)",
      description: "Used in typography (1/72 inch).",
      conversion: 2.83465,
      example: "1 millimeter ≈ 2.83465 points, 0.352778 millimeters = 1 point",
    },
    {
      unit: "Pica (p)",
      description: "Typography unit (12 points).",
      conversion: 0.23622,
      example: "1 millimeter ≈ 0.23622 picas, 4.23333 millimeters = 1 pica",
    },
    {
      unit: "Football Field (US, 100 yards)",
      description:
        "Length of an American football field (including end zones).",
      conversion: 0.0000109361,
      example:
        "1 millimeter ≈ 0.0000109361 football fields, 91,440 millimeters = 1 football field",
    },
    {
      unit: "Olympic Swimming Pool (50m)",
      description: "Standard length of an Olympic swimming pool.",
      conversion: 0.00002,
      example:
        "1 millimeter = 0.00002 Olympic pools, 50,000 millimeters = 1 pool",
    },
    {
      unit: "Grain of Sand (average)",
      description: "Approximate diameter of a medium sand grain.",
      conversion: 0.5,
      example: "1 millimeter ≈ 2 grains of sand, 0.5 millimeters ≈ 1 grain",
    },
    {
      unit: "Human Hair (diameter)",
      description: "Average thickness of a human hair.",
      conversion: 10,
      example: "1 millimeter ≈ 10 human hairs, 0.1 millimeters ≈ 1 hair",
    },
    {
      unit: "Credit Card (thickness)",
      description: "Standard thickness of a credit card (~0.76 mm).",
      conversion: 1.31579,
      example:
        "1 millimeter ≈ 1.31579 credit cards, 0.76 millimeters ≈ 1 credit card",
    },
    {
      unit: "Pencil Lead (0.5mm)",
      description: "Standard mechanical pencil lead diameter.",
      conversion: 2,
      example: "1 millimeter ≈ 2 pencil leads, 0.5 millimeters = 1 lead",
    },
    {
      unit: "Bacterium (E. coli, length)",
      description: "Approximate length of a typical E. coli bacterium.",
      conversion: 2000,
      example:
        "1 millimeter ≈ 2,000 E. coli bacteria, 0.0005 millimeters ≈ 1 bacterium",
    },
    {
      unit: "DNA Width (2nm)",
      description: "Approximate diameter of a DNA double helix.",
      conversion: 500000,
      example:
        "1 millimeter ≈ 500,000 DNA widths, 0.000002 millimeters ≈ 1 DNA width",
    },
    {
      unit: "Earth's Circumference",
      description: "Distance around the Earth at the equator (~40,075 km).",
      conversion: 2.4986e-11,
      example:
        "1 millimeter ≈ 2.4986e-11 Earth circumferences, 40,075,000,000 millimeters ≈ 1 circumference",
    },
  ],
  Months: [
    {
      unit: "Second",
      description:
        "The base unit of time in the International System of Units (SI).",
      conversion: 2629740,
      example: "1 month ≈ 2,629,740 seconds, 1 second ≈ 3.80265e-7 months",
    },
    {
      unit: "Minute",
      description: "Common time unit equal to 60 seconds.",
      conversion: 43829.1,
      example: "1 month ≈ 43,829 minutes, 1 minute ≈ 0.0000228158 months",
    },
    {
      unit: "Hour",
      description: "Common time unit equal to 60 minutes.",
      conversion: 730.485,
      example: "1 month ≈ 730.485 hours, 1 hour ≈ 0.00136893 months",
    },
    {
      unit: "Day",
      description: "24-hour period of time.",
      conversion: 30.4369,
      example: "1 month ≈ 30.4369 days, 1 day ≈ 0.0328549 months",
    },
    {
      unit: "Week",
      description: "7-day period of time.",
      conversion: 4.34813,
      example: "1 month ≈ 4.34813 weeks, 1 week ≈ 0.229984 months",
    },
    {
      unit: "Year (common)",
      description: "365-day year (non-leap year).",
      conversion: 0.0833333,
      example: "1 month ≈ 0.0833333 years, 1 year = 12 months",
    },
    {
      unit: "Decade",
      description: "10-year period.",
      conversion: 0.00833333,
      example: "1 month ≈ 0.00833333 decades, 1 decade = 120 months",
    },
    {
      unit: "Century",
      description: "100-year period.",
      conversion: 0.000833333,
      example: "1 month ≈ 0.000833333 centuries, 1 century = 1,200 months",
    },
    {
      unit: "Millennium",
      description: "1,000-year period.",
      conversion: 0.0000833333,
      example: "1 month ≈ 0.0000833333 millennia, 1 millennium = 12,000 months",
    },
    {
      unit: "Millisecond",
      description: "One thousandth of a second.",
      conversion: 2629740000,
      example:
        "1 month ≈ 2.62974e9 milliseconds, 1 millisecond ≈ 3.80265e-10 months",
    },
    {
      unit: "Microsecond",
      description: "One millionth of a second.",
      conversion: 2629740000000,
      example:
        "1 month ≈ 2.62974e12 microseconds, 1 microsecond ≈ 3.80265e-13 months",
    },
    {
      unit: "Nanosecond",
      description: "One billionth of a second.",
      conversion: 2629740000000000,
      example:
        "1 month ≈ 2.62974e15 nanoseconds, 1 nanosecond ≈ 3.80265e-16 months",
    },
    {
      unit: "Planck Time",
      description: "The smallest measurable unit of time in quantum physics.",
      conversion: 4.8792e49,
      example:
        "1 month ≈ 4.8792e49 Planck times, 1 Planck time ≈ 2.0495e-50 months",
    },
    {
      unit: "Month (synodic)",
      description: "Time between successive new moons (≈29.53 days).",
      conversion: 1.03069,
      example:
        "1 month ≈ 1.03069 synodic months, 1 synodic month ≈ 0.970224 months",
    },
    {
      unit: "Fortnight",
      description: "Period of 2 weeks.",
      conversion: 2.17406,
      example: "1 month ≈ 2.17406 fortnights, 1 fortnight ≈ 0.459968 months",
    },
    {
      unit: "Quarter (financial)",
      description: "3-month period used in business reporting.",
      conversion: 0.333333,
      example: "1 month ≈ 0.333333 quarters, 1 quarter = 3 months",
    },
    {
      unit: "Semester (academic)",
      description: "Approximate length of a school semester.",
      conversion: 0.166667,
      example: "1 month ≈ 0.166667 semesters, 1 semester ≈ 6 months",
    },
    {
      unit: "Trimester (pregnancy)",
      description: "Approximate length of a pregnancy trimester.",
      conversion: 0.333333,
      example: "1 month ≈ 0.333333 trimesters, 1 trimester ≈ 3 months",
    },
    {
      unit: "Olympiad",
      description: "4-year period between Olympic Games.",
      conversion: 0.0208333,
      example: "1 month ≈ 0.0208333 olympiads, 1 olympiad = 48 months",
    },
    {
      unit: "Generation (human)",
      description: "Approximate time between human generations.",
      conversion: 0.00277778,
      example:
        "1 month ≈ 0.00277778 generations, 1 generation ≈ 360 months (30 years)",
    },
    {
      unit: "Dog Year",
      description:
        "Popular approximation of dog aging (7 human years = 1 dog year).",
      conversion: 0.0119048,
      example:
        "1 month ≈ 0.0119048 dog years, 1 dog year ≈ 84 months (7 human years)",
    },
    {
      unit: "Presidential Term (US)",
      description: "Length of a U.S. presidential term.",
      conversion: 0.0208333,
      example:
        "1 month ≈ 0.0208333 presidential terms, 1 term = 48 months (4 years)",
    },
    {
      unit: "Moon Phase Cycle",
      description: "Time between identical moon phases (≈29.5 days).",
      conversion: 1.03069,
      example: "1 month ≈ 1.03069 moon cycles, 1 moon cycle ≈ 0.970224 months",
    },
    {
      unit: "Human Pregnancy",
      description: "Average duration of human pregnancy.",
      conversion: 0.0833333,
      example: "1 month ≈ 0.0833333 pregnancies, 1 pregnancy ≈ 9 months",
    },
    {
      unit: "Academic Year",
      description: "Typical length of a school year.",
      conversion: 0.0833333,
      example:
        "1 month ≈ 0.0833333 academic years, 1 academic year ≈ 9 months (school year)",
    },
    {
      unit: "Season (temperate)",
      description: "Approximate length of a temperate season.",
      conversion: 0.333333,
      example: "1 month ≈ 0.333333 seasons, 1 season ≈ 3 months",
    },
    {
      unit: "TV Season",
      description: "Typical duration of a television season.",
      conversion: 0.0833333,
      example:
        "1 month ≈ 0.0833333 TV seasons, 1 TV season ≈ 9 months (including hiatus)",
    },
    {
      unit: "Average Movie Production",
      description: "Typical time to produce a feature film.",
      conversion: 0.166667,
      example:
        "1 month ≈ 0.166667 movie productions, 1 movie production ≈ 6 months",
    },
    {
      unit: "Houseplant Watering Cycle",
      description: "Average time between watering common houseplants.",
      conversion: 1,
      example: "1 month ≈ 1 watering cycle, 1 watering cycle ≈ 1 month",
    },
    {
      unit: "Credit Card Billing Cycle",
      description: "Standard duration between credit card statements.",
      conversion: 1,
      example: "1 month ≈ 1 billing cycle, 1 billing cycle ≈ 1 month",
    },
  ],
  Newtons: [
    {
      unit: "Newton (N)",
      description:
        "SI unit of force, defined as the force required to accelerate 1 kg at 1 m/s²",
      conversion: 1,
      example: "1 N = 1 N, 10 N = 10 N",
    },
    {
      unit: "Kilogram-force (kgf)",
      description:
        "Force exerted by one kilogram of mass in standard Earth gravity",
      conversion: 0.101971621,
      example: "1 N ≈ 0.102 kgf, 9.80665 N = 1 kgf",
    },
    {
      unit: "Kilonewton (kN)",
      description: "Common engineering unit equal to 1,000 newtons",
      conversion: 0.001,
      example: "1 N = 0.001 kN, 10,000 N = 10 kN",
    },
    {
      unit: "Gram-force (gf)",
      description: "Force exerted by one gram of mass in standard gravity",
      conversion: 101.971621,
      example: "1 N ≈ 102 gf, 0.00980665 N = 1 gf",
    },
    {
      unit: "Ton-force (metric)",
      description: "Metric ton-force (1,000 kilograms under standard gravity)",
      conversion: 0.0001019716,
      example: "1 N ≈ 0.000102 tf, 9,806.65 N = 1 metric ton-force",
    },
    {
      unit: "Dyne (dyn)",
      description: "CGS unit of force (1 g·cm/s²)",
      conversion: 100000,
      example: "1 N = 100,000 dyn, 0.00001 N = 1 dyn",
    },
    {
      unit: "Joule/meter (J/m)",
      description: "Alternative expression for newton (work per unit distance)",
      conversion: 1,
      example: "1 N = 1 J/m, 5 N = 5 J/m",
    },
    {
      unit: "Joule/centimeter (J/cm)",
      description: "Equal to 100 dynes",
      conversion: 100,
      example: "1 N = 100 J/cm, 0.01 N = 1 J/cm",
    },
    {
      unit: "Ton-force (short)",
      description: "US customary unit (2,000 pounds under standard gravity)",
      conversion: 0.0001124045,
      example: "1 N ≈ 0.000112 short ton-force, 8,896.44 N = 1 short ton-force",
    },
    {
      unit: "Ton-force (long)",
      description: "Imperial unit (2,240 pounds under standard gravity)",
      conversion: 0.0001003611,
      example: "1 N ≈ 0.000100 long ton-force, 9,964.02 N = 1 long ton-force",
    },
    {
      unit: "Kip-force (kipf)",
      description: "Common engineering unit equal to 1,000 pounds-force",
      conversion: 0.0002248089,
      example: "1 N ≈ 0.000225 kipf, 4,448.22 N = 1 kipf",
    },
    {
      unit: "Kilopound-force (klbf)",
      description: "Equivalent to kip-force (1,000 pounds-force)",
      conversion: 0.0002248089,
      example: "1 N ≈ 0.000225 klbf, 4,448.22 N = 1 klbf",
    },
    {
      unit: "Pound-force (lbf)",
      description: "Standard US/Imperial unit of force",
      conversion: 0.224808943,
      example: "1 N ≈ 0.225 lbf, 4.44822 N = 1 lbf",
    },
    {
      unit: "Ounce-force (ozf)",
      description: "Small imperial force unit (1/16 pound-force)",
      conversion: 3.59694309,
      example: "1 N ≈ 3.6 ozf, 0.278014 N = 1 ozf",
    },
    {
      unit: "Poundal (pdl)",
      description: "Imperial unit (1 lb·ft/s²)",
      conversion: 7.233013851,
      example: "1 N ≈ 7.23 pdl, 0.138255 N = 1 pdl",
    },
    {
      unit: "Pound Foot/square Second",
      description: "Alternative name for poundal (lb·ft/s²)",
      conversion: 7.233013851,
      example: "1 N ≈ 7.23 lb·ft/s², 0.138255 N = 1 lb·ft/s²",
    },
    {
      unit: "Pond (p)",
      description: "Obsolete name for gram-force",
      conversion: 101.971621,
      example: "1 N ≈ 102 p, 0.00980665 N = 1 p",
    },
    {
      unit: "Kilopond (kp)",
      description: "Obsolete name for kilogram-force",
      conversion: 0.101971621,
      example: "1 N ≈ 0.102 kp, 9.80665 N = 1 kp",
    },
  ],
  Ounces: [
    {
      unit: "Kilogram (kg)",
      description:
        "The base unit of mass in the International System of Units (SI), defined by the Planck constant. Used globally in science, engineering, and commerce.",
      conversion: 0.028349523125,
      example:
        "A 16 oz bag of coffee ≈ 0.4536 kg (1 lb). A 1 kg bag of rice ≈ 35.27 oz.",
    },
    {
      unit: "Gram (g)",
      description:
        "A metric unit equal to one-thousandth of a kilogram. Commonly used for food nutrition labels, small packages, and scientific measurements.",
      conversion: 28.349523125,
      example: "A 1 oz chocolate bar ≈ 28.35 g. A 100 g yogurt cup ≈ 3.53 oz.",
    },
    {
      unit: "Milligram (mg)",
      description:
        "A tiny metric unit (1/1000 gram), often used for medications, supplements, and precise chemical measurements.",
      conversion: 28349.523125,
      example:
        "A 500 mg aspirin tablet ≈ 0.0176 oz. A 1 oz gold bar ≈ 28,350 mg.",
    },
    {
      unit: "Metric Ton (tonne)",
      description:
        "Equal to 1,000 kilograms. Used for heavy commodities like vehicles, shipping containers, and industrial materials.",
      conversion: 0.000028349523125,
      example:
        "A small car (1 tonne) ≈ 35,274 oz. A 10 oz package ≈ 0.000283 tonnes.",
    },
    {
      unit: "Pound (lb)",
      description:
        "A US customary and imperial unit equal to 16 ounces. Widely used for body weight, produce, and bulk goods.",
      conversion: 0.0625,
      example:
        "A newborn baby (7 lbs) ≈ 112 oz. A 24 oz water bottle ≈ 1.5 lbs.",
    },
    {
      unit: "Carat (ct)",
      description:
        "Standard unit for gemstone mass (1 carat = 200 mg). Also used in jewelry to measure diamonds and precious stones.",
      conversion: 141.747615625,
      example: "A 1 oz diamond ≈ 141.75 carats. A 5-carat ring ≈ 0.035 oz.",
    },
    {
      unit: "Short Ton (US ton)",
      description:
        "A US customary unit equal to 2,000 pounds. Commonly used in shipping, mining, and heavy industry.",
      conversion: 0.00003125,
      example:
        "A mid-size car (1.5 US tons) ≈ 48,000 oz. A 10 oz package ≈ 0.0003125 US tons.",
    },
    {
      unit: "Long Ton (UK ton)",
      description:
        "An imperial unit equal to 2,240 pounds. Primarily used in the UK for ship displacement and large-scale trade.",
      conversion: 0.000027901785714,
      example:
        "A cargo ship (10,000 UK tons) ≈ 358,400,000 oz. A 1 oz coin ≈ 0.0000279 UK tons.",
    },
    {
      unit: "Atomic Mass Unit (u)",
      description:
        "The mass of one proton or neutron (~1.66 × 10⁻²⁷ kg). Essential in physics and chemistry for atomic-scale measurements.",
      conversion: 1.707248e25,
      example:
        "A carbon atom (12 u) ≈ 7.03 × 10⁻²⁶ oz. A 1 oz object ≈ 1.7 × 10²⁵ atomic units.",
    },
    {
      unit: "Slug",
      description:
        "A unit of mass in the imperial system that accelerates by 1 ft/s² when 1 pound-force is applied. Used in engineering and physics.",
      conversion: 0.0019425594,
      example: "A 10 oz wrench ≈ 0.0194 slugs. A 1-slug mass ≈ 514.8 oz.",
    },
    {
      unit: "Troy Pound (lb t)",
      description:
        "Used for precious metals like gold and silver (12 troy ounces). Different from the avoirdupois pound (16 oz).",
      conversion: 0.0759548611,
      example:
        "A 1 oz gold bar ≈ 0.076 troy lbs. A 1 troy lb of silver ≈ 13.17 oz.",
    },
    {
      unit: "Poundal",
      description:
        "An imperial unit of force (1 lb·ft/s²). Rarely used today but appears in older physics texts.",
      conversion: 2.0125,
      example:
        "A 1 oz object exerts ≈ 2.01 poundals under Earth's gravity. 1 poundal ≈ 0.497 oz·ft/s².",
    },
    {
      unit: "Quintal (metric)",
      description:
        "A historical unit equal to 100 kilograms. Still used in agriculture for crop yields in some countries.",
      conversion: 0.00028349523125,
      example:
        "A 1-quintal sack of wheat ≈ 3,527 oz. A 10 oz bag ≈ 0.00283 quintals.",
    },
    {
      unit: "Stone (UK)",
      description:
        "An imperial unit equal to 14 pounds. Traditionally used for body weight in the UK and Ireland.",
      conversion: 0.004464285714,
      example:
        "A person weighing 11 stone ≈ 2,464 oz. A 1 oz candy ≈ 0.00446 stone.",
    },
    {
      unit: "Pennyweight (dwt)",
      description:
        "A unit for precious metals (24 grains = 1/20 troy oz). Common in jewelry and metallurgy.",
      conversion: 18.22916667,
      example: "A 1 oz gold coin ≈ 18.23 dwt. A 5-dwt ring ≈ 0.274 oz.",
    },
    {
      unit: "Grain (gr)",
      description:
        "The smallest imperial mass unit (1/7,000 lb). Used for bullets, arrows, and gunpowder.",
      conversion: 437.5,
      example:
        "A .50 BMG bullet (647 gr) ≈ 1.48 oz. A 1 oz object ≈ 437.5 grains.",
    },
    {
      unit: "Planck Mass",
      description:
        "The natural unit of mass in quantum physics (~2.18 × 10⁻⁸ kg). Theoretical and used in particle physics.",
      conversion: 1.618944e36,
      example:
        "A 1 oz object ≈ 1.6 × 10³⁶ Planck masses. 1 Planck mass ≈ 6.18 × 10⁻³⁷ oz.",
    },
    {
      unit: "Earth's Mass",
      description:
        "The mass of planet Earth (~5.97 × 10²⁴ kg). Used in astronomy and astrophysics.",
      conversion: 4.715e-25,
      example:
        "Earth's mass ≈ 2.1 × 10²⁵ oz. A 1 oz feather ≈ 4.7 × 10⁻²⁵ Earth masses.",
    },
  ],
  Pint: [
    {
      unit: "Cubic Meter (m³)",
      description:
        "The SI unit of volume, representing a cube with 1-meter sides. Used for large-scale measurements like construction or shipping containers.",
      conversion: 0.000473176473,
      example:
        "1 pint ≈ 0.000473 m³, 2,113 pints ≈ 1 m³ (a small car's trunk volume)",
    },
    {
      unit: "Liter (L)",
      description:
        "Common metric unit equal to 1 cubic decimeter. Used for beverages, fuel, and liquid quantities worldwide.",
      conversion: 0.473176473,
      example:
        "1 pint ≈ 0.473 L, 2.113 pints = 1 L (roughly a standard soda bottle)",
    },
    {
      unit: "Milliliter (mL)",
      description:
        "Small metric volume (1/1000 liter). Used for medications, cooking, and lab measurements.",
      conversion: 473.176473,
      example:
        "1 pint = 473 mL, 1 mL ≈ 0.0021 pints (an eye dropper of liquid)",
    },
    {
      unit: "Gallon (US liquid)",
      description:
        "Standard US liquid volume (8 pints). Used for fuel, milk, and bulk liquids.",
      conversion: 0.125,
      example: "1 pint = 0.125 gal, 8 pints = 1 gal (a milk jug)",
    },
    {
      unit: "Quart (US liquid)",
      description:
        "US customary unit equal to 2 pints. Common for cooking and automotive fluids.",
      conversion: 0.5,
      example: "1 pint = 0.5 qt, 2 pints = 1 qt (standard soup container)",
    },
    {
      unit: "Cup (US)",
      description:
        "US cooking measure equal to 0.5 pints. Used in recipes and food packaging.",
      conversion: 2,
      example: "1 pint = 2 cups, 0.5 pints = 1 cup (a coffee mug)",
    },
    {
      unit: "Fluid Ounce (US fl oz)",
      description:
        "Small US liquid unit (1/16 pint). Used for beverages and cosmetics.",
      conversion: 16,
      example: "1 pint = 16 fl oz, 0.0625 pints = 1 fl oz (a shot glass)",
    },
    {
      unit: "Cubic Inch (in³)",
      description:
        "Imperial volume unit for small spaces. Used in engineering and appliance specs.",
      conversion: 28.875,
      example: "1 pint ≈ 28.9 in³, 0.0346 pints = 1 in³ (a small jewelry box)",
    },
    {
      unit: "Cubic Foot (ft³)",
      description:
        "Larger imperial volume. Used for refrigerators, freezers, and room capacities.",
      conversion: 0.0167100694,
      example: "1 pint ≈ 0.0167 ft³, 60 pints ≈ 1 ft³ (a mini-fridge volume)",
    },
    {
      unit: "Gallon (UK imperial)",
      description:
        "British gallon (20% larger than US gallon). Used in the UK and Commonwealth.",
      conversion: 0.104084273,
      example:
        "1 pint ≈ 0.104 UK gal, 9.61 pints = 1 UK gal (a British petrol measure)",
    },
    {
      unit: "Barrel (oil)",
      description:
        "Standard petroleum unit (42 US gallons). Used globally for oil trading.",
      conversion: 0.00297619048,
      example: "1 pint ≈ 0.00298 barrels, 336 pints = 1 barrel (oil drum)",
    },
    {
      unit: "Teaspoon (US tsp)",
      description:
        "Small cooking measure (1/96 pint). Used for recipes and pharmaceuticals.",
      conversion: 96,
      example: "1 pint = 96 tsp, 0.0104 pints = 1 tsp (a sugar packet)",
    },
    {
      unit: "Tablespoon (US tbsp)",
      description:
        "Common cooking measure (1/32 pint). Standard for recipe measurements.",
      conversion: 32,
      example: "1 pint = 32 tbsp, 0.03125 pints = 1 tbsp (a soup spoon)",
    },
    {
      unit: "Board Foot",
      description:
        "Lumber volume unit (1 ft × 1 ft × 1 in). Used in woodworking and construction.",
      conversion: 0.200520833,
      example: "1 pint ≈ 0.2 board feet, 5 pints ≈ 1 board foot (a 1×6 plank)",
    },
    {
      unit: "Acre-foot",
      description:
        "Large volume for water resources (1 acre × 1 ft deep). Used in reservoir management.",
      conversion: 3.8767076e-7,
      example:
        "1 pint ≈ 3.88e-7 acre-feet, 2.58M pints = 1 acre-foot (20 football fields covered in 1 ft of water)",
    },
    {
      unit: "Cord",
      description:
        "Firewood volume unit (128 ft³). Traditional measure for stacked wood.",
      conversion: 0.0013054741,
      example:
        "1 pint ≈ 0.0013 cords, 766 pints = 1 cord (a pickup truck load of firewood)",
    },
    {
      unit: "Hogshead",
      description:
        "Large cask for liquids (63 US gallons). Historic unit for wine and tobacco.",
      conversion: 0.00198412698,
      example:
        "1 pint ≈ 0.00198 hogsheads, 504 pints = 1 hogshead (a colonial-era wine barrel)",
    },
    {
      unit: "Olympic Swimming Pool",
      description:
        "Standard competition pool volume (2,500 m³). For large-scale liquid comparisons.",
      conversion: 1.8927e-7,
      example: "1 pint ≈ 1.89e-7 pools, 5.28M pints fill an Olympic pool",
    },
  ],
  Pounds: [
    {
      unit: "Newton (N)",
      description:
        "The SI unit of force. Defined as the force required to accelerate a 1 kg mass at 1 m/s². Used globally in physics and engineering.",
      conversion: 4.4482216153,
      example: "1 lbf ≈ 4.45 N (the weight of a small apple is about 1 N)",
    },
    {
      unit: "Kilonewton (kN)",
      description:
        "Equal to 1,000 newtons. Commonly used in structural engineering and vehicle load ratings.",
      conversion: 0.0044482216,
      example:
        "1 lbf ≈ 0.00445 kN, a mid-size car's weight ≈ 10 kN (2,250 lbf)",
    },
    {
      unit: "Kilogram-force (kgf)",
      description:
        "The force exerted by one kilogram of mass in standard Earth gravity (9.80665 m/s²).",
      conversion: 0.45359237,
      example: "1 lbf ≈ 0.454 kgf, a 2.2 lbf object = 1 kgf (1 liter of water)",
    },
    {
      unit: "Gram-force (gf)",
      description:
        "The force exerted by one gram of mass in standard gravity. Used for small force measurements.",
      conversion: 453.59237,
      example: "1 lbf ≈ 454 gf, a paperclip weighs about 1 gf (0.0022 lbf)",
    },
    {
      unit: "Dyne (dyn)",
      description:
        "The CGS unit of force (1 g·cm/s²). Primarily used in physics and chemistry for small-scale measurements.",
      conversion: 444822.16153,
      example:
        "1 lbf ≈ 444,822 dyn, a mosquito's flight force ≈ 2,000 dyn (0.0045 lbf)",
    },
    {
      unit: "Poundal (pdl)",
      description:
        "An imperial unit of force (1 lb·ft/s²). Rarely used today but appears in some physics contexts.",
      conversion: 32.174048556,
      example: "1 lbf ≈ 32.17 pdl, a 10 pdl force ≈ 0.31 lbf",
    },
    {
      unit: "Ton-force (short)",
      description:
        "US customary unit equal to 2,000 pounds-force. Used in heavy machinery and industrial applications.",
      conversion: 0.0005,
      example:
        "1 lbf = 0.0005 short ton-force, a bulldozer might weigh 20 short ton-force (40,000 lbf)",
    },
    {
      unit: "Ton-force (long)",
      description:
        "Imperial unit equal to 2,240 pounds-force. Historically used in British engineering.",
      conversion: 0.0004464286,
      example:
        "1 lbf ≈ 0.000446 long ton-force, a steam locomotive might weigh 50 long ton-force (112,000 lbf)",
    },
    {
      unit: "Kip-force (kipf)",
      description:
        "Engineering unit equal to 1,000 pounds-force. Common in structural engineering and construction.",
      conversion: 0.001,
      example:
        "1 lbf = 0.001 kipf, a steel I-beam might support 30 kipf (30,000 lbf)",
    },
    {
      unit: "Ounce-force (ozf)",
      description:
        "Small imperial force unit equal to 1/16 pound-force. Used in precision instruments.",
      conversion: 16,
      example: "1 lbf = 16 ozf, a smartphone might weigh 6 ozf (0.375 lbf)",
    },
    {
      unit: "Pond (p)",
      description:
        "Obsolete name for gram-force. Still encountered in some European technical documents.",
      conversion: 453.59237,
      example: "1 lbf ≈ 453.6 p, a 100 p force ≈ 0.22 lbf",
    },
    {
      unit: "Joule/meter (J/m)",
      description:
        "Alternative expression for newton (force per unit distance). Used in some physics contexts.",
      conversion: 4.4482216153,
      example: "1 lbf ≈ 4.45 J/m, equivalent to 4.45 N",
    },
    {
      unit: "Millinewton (mN)",
      description:
        "One-thousandth of a newton. Used for small force measurements like material testing.",
      conversion: 4448.2216153,
      example:
        "1 lbf ≈ 4,448 mN, a typical computer keypress requires about 500 mN (0.11 lbf)",
    },
    {
      unit: "Micronewton (μN)",
      description:
        "One-millionth of a newton. Used in microtechnology and space applications.",
      conversion: 4448221.6153,
      example:
        "1 lbf ≈ 4.45 million μN, ion thrusters for satellites produce about 200 μN (0.000045 lbf)",
    },
    {
      unit: "Sthene (sn)",
      description:
        "Obsolete metric unit equal to 1 kilonewton. Formerly used in some European engineering.",
      conversion: 0.0044482216,
      example: "1 lbf ≈ 0.00445 sn, a small car's weight ≈ 10 sn (2,250 lbf)",
    },
  ],
  Psi: [
    {
      unit: "Pascal (Pa)",
      description:
        "The SI unit of pressure, equal to one newton per square meter.",
      conversion: 6894.76,
      example: "1 psi ≈ 6894.76 Pa, 0.000145038 psi = 1 Pa",
    },
    {
      unit: "Kilopascal (kPa)",
      description: "Common metric pressure unit equal to 1000 pascals.",
      conversion: 6.89476,
      example: "1 psi ≈ 6.89476 kPa, 0.145038 psi = 1 kPa",
    },
    {
      unit: "Megapascal (MPa)",
      description:
        "Metric unit for higher pressures, equal to 1,000,000 pascals.",
      conversion: 0.00689476,
      example: "1 psi ≈ 0.00689476 MPa, 145.038 psi = 1 MPa",
    },
    {
      unit: "Bar",
      description:
        "Metric unit approximately equal to atmospheric pressure at sea level.",
      conversion: 0.0689476,
      example: "1 psi ≈ 0.0689476 bar, 14.5038 psi = 1 bar",
    },
    {
      unit: "Standard Atmosphere (atm)",
      description: "Standard reference pressure at sea level on Earth.",
      conversion: 0.068046,
      example: "1 psi ≈ 0.068046 atm, 14.6959 psi = 1 atm",
    },
    {
      unit: "Torr",
      description: "Pressure unit based on millimeter of mercury.",
      conversion: 51.7149,
      example: "1 psi ≈ 51.7149 torr, 0.0193368 psi = 1 torr",
    },
    {
      unit: "Millimeters of Mercury (mmHg)",
      description: "Common medical pressure measurement.",
      conversion: 51.7149,
      example: "1 psi ≈ 51.7149 mmHg, 0.0193368 psi = 1 mmHg",
    },
    {
      unit: "Inches of Mercury (inHg)",
      description: "Commonly used in aviation and meteorology.",
      conversion: 2.03602,
      example: "1 psi ≈ 2.03602 inHg, 0.491154 psi = 1 inHg",
    },
    {
      unit: "Kilogram-force per Square Centimeter (kgf/cm²)",
      description: "Metric pressure unit using gravitational force.",
      conversion: 0.070307,
      example: "1 psi ≈ 0.070307 kgf/cm², 14.2233 psi = 1 kgf/cm²",
    },
    {
      unit: "Kilonewton per Square Meter (kN/m²)",
      description: "Metric pressure unit equivalent to kilopascal.",
      conversion: 6.89476,
      example: "1 psi ≈ 6.89476 kN/m², 0.145038 psi = 1 kN/m²",
    },
    {
      unit: "Millibar (mbar)",
      description: "Common meteorological pressure unit.",
      conversion: 68.9476,
      example: "1 psi ≈ 68.9476 mbar, 0.0145038 psi = 1 mbar",
    },
    {
      unit: "Technical Atmosphere (at)",
      description: "Metric pressure unit defined as 1 kgf/cm².",
      conversion: 0.070307,
      example: "1 psi ≈ 0.070307 at, 14.2233 psi = 1 at",
    },
    {
      unit: "Pound-force per Square Foot (psf)",
      description: "Smaller imperial pressure unit.",
      conversion: 144,
      example: "1 psi = 144 psf, 0.00694444 psi = 1 psf",
    },
    {
      unit: "Inch of Water Column (inH₂O)",
      description: "Used for low pressure differentials.",
      conversion: 27.7076,
      example: "1 psi ≈ 27.7076 inH₂O, 0.0360912 psi = 1 inH₂O",
    },
    {
      unit: "Foot of Water Column (ftH₂O)",
      description: "Used in hydraulics and plumbing.",
      conversion: 2.30897,
      example: "1 psi ≈ 2.30897 ftH₂O, 0.433088 psi = 1 ftH₂O",
    },
    {
      unit: "Kip per Square Inch (ksi)",
      description: "Engineering unit equal to 1000 psi.",
      conversion: 0.001,
      example: "1 psi = 0.001 ksi, 1000 psi = 1 ksi",
    },
    {
      unit: "Dyne per Square Centimeter (dyn/cm²)",
      description: "CGS unit of pressure.",
      conversion: 68947.6,
      example: "1 psi ≈ 68947.6 dyn/cm², 0.0000145038 psi = 1 dyn/cm²",
    },
    {
      unit: "Barye (Ba)",
      description: "CGS pressure unit equal to 1 dyn/cm².",
      conversion: 68947.6,
      example: "1 psi ≈ 68947.6 Ba, 0.0000145038 psi = 1 Ba",
    },
    {
      unit: "Meter of Water Column (mH₂O)",
      description: "Metric hydraulic pressure unit.",
      conversion: 0.703089,
      example: "1 psi ≈ 0.703089 mH₂O, 1.42233 psi = 1 mH₂O",
    },
    {
      unit: "Centimeter of Water Column (cmH₂O)",
      description: "Medical and low-pressure applications.",
      conversion: 70.3089,
      example: "1 psi ≈ 70.3089 cmH₂O, 0.0142233 psi = 1 cmH₂O",
    },
    {
      unit: "Micron of Mercury (µmHg)",
      description: "Very small pressure measurement.",
      conversion: 51714.9,
      example: "1 psi ≈ 51714.9 µmHg, 0.0000193368 psi = 1 µmHg",
    },
    {
      unit: "Newton per Square Millimeter (N/mm²)",
      description: "High-pressure metric unit.",
      conversion: 0.00689476,
      example: "1 psi ≈ 0.00689476 N/mm², 145.038 psi = 1 N/mm²",
    },
    {
      unit: "Hectopascal (hPa)",
      description: "Common meteorological unit equal to millibar.",
      conversion: 68.9476,
      example: "1 psi ≈ 68.9476 hPa, 0.0145038 psi = 1 hPa",
    },
    {
      unit: "Decapascal (daPa)",
      description: "Metric pressure unit equal to 10 pascals.",
      conversion: 689.476,
      example: "1 psi ≈ 689.476 daPa, 0.00145038 psi = 1 daPa",
    },
    {
      unit: "Gigapascal (GPa)",
      description: "Very high pressure unit used in material science.",
      conversion: 0.00000689476,
      example: "1 psi ≈ 6.89476e-6 GPa, 145038 psi = 1 GPa",
    },
    {
      unit: "Ocean (at 10m depth)",
      description: "Approximate pressure increase per 10m of seawater.",
      conversion: 0.7043,
      example: "1 psi ≈ 0.7043 ocean pressures, 1.41986 psi = 1 ocean pressure",
    },
    {
      unit: "Car Tire Pressure (typical)",
      description: "Average passenger vehicle tire pressure.",
      conversion: 0.0714,
      example:
        "1 psi ≈ 0.0714 car tire pressures, 14 psi ≈ 1 car tire pressure",
    },
    {
      unit: "Bicycle Tire Pressure (road bike)",
      description: "Typical high-pressure bicycle tire.",
      conversion: 0.08,
      example:
        "1 psi ≈ 0.08 bike tire pressures, 120 psi ≈ 1 bike tire pressure",
    },
  ],
  Quart: [
    {
      unit: "Cubic Meter (m³)",
      description:
        "The SI unit of volume, representing a cube with 1-meter sides.",
      conversion: 0.000946353,
      example: "1 quart ≈ 0.000946353 m³, 1056.69 quarts = 1 m³",
    },
    {
      unit: "Liter (L)",
      description: "Common metric unit equal to 1 cubic decimeter.",
      conversion: 0.946353,
      example: "1 quart ≈ 0.946353 L, 1.05669 quarts = 1 L",
    },
    {
      unit: "Milliliter (mL)",
      description:
        "Common metric unit for small volumes, equal to 1 cubic centimeter.",
      conversion: 946.353,
      example: "1 quart = 946.353 mL, 0.00105669 quarts = 1 mL",
    },
    {
      unit: "Gallon (US liquid)",
      description: "Standard US liquid volume unit.",
      conversion: 0.25,
      example: "1 quart = 0.25 gallons, 4 quarts = 1 gallon",
    },
    {
      unit: "Pint (US liquid)",
      description: "US customary unit equal to 1/2 quart.",
      conversion: 2,
      example: "1 quart = 2 pints, 0.5 quarts = 1 pint",
    },
    {
      unit: "Cup (US)",
      description: "Common cooking measurement equal to 1/4 quart.",
      conversion: 4,
      example: "1 quart = 4 cups, 0.25 quarts = 1 cup",
    },
    {
      unit: "Fluid Ounce (US fl oz)",
      description: "Small US liquid volume unit equal to 1/32 quart.",
      conversion: 32,
      example: "1 quart = 32 fl oz, 0.03125 quarts = 1 fl oz",
    },
    {
      unit: "Tablespoon (US tbsp)",
      description: "Common cooking measurement equal to 1/64 quart.",
      conversion: 64,
      example: "1 quart = 64 tbsp, 0.015625 quarts = 1 tbsp",
    },
    {
      unit: "Teaspoon (US tsp)",
      description: "Small cooking measurement equal to 1/192 quart.",
      conversion: 192,
      example: "1 quart = 192 tsp, 0.00520833 quarts = 1 tsp",
    },
    {
      unit: "Cubic Inch (in³)",
      description: "Imperial unit of volume for smaller measurements.",
      conversion: 57.75,
      example: "1 quart ≈ 57.75 in³, 0.017316 quarts = 1 in³",
    },
    {
      unit: "Cubic Foot (ft³)",
      description: "Imperial unit of volume for larger measurements.",
      conversion: 0.0334201,
      example: "1 quart ≈ 0.0334201 ft³, 29.9221 quarts = 1 ft³",
    },
    {
      unit: "Cubic Yard (yd³)",
      description: "Common construction and landscaping volume unit.",
      conversion: 0.00123778,
      example: "1 quart ≈ 0.00123778 yd³, 807.896 quarts = 1 yd³",
    },
    {
      unit: "Barrel (oil)",
      description: "Standard volume for crude oil and petroleum products.",
      conversion: 0.00595238,
      example: "1 quart ≈ 0.00595238 barrel, 168 quarts = 1 barrel",
    },
    {
      unit: "Gallon (UK imperial)",
      description: "British imperial gallon, about 20% larger than US gallon.",
      conversion: 0.208169,
      example: "1 quart ≈ 0.208169 UK gallon, 4.8038 quarts = 1 UK gallon",
    },
    {
      unit: "Fluid Ounce (UK fl oz)",
      description: "Imperial fluid ounce, slightly smaller than US fl oz.",
      conversion: 33.307,
      example: "1 quart ≈ 33.307 UK fl oz, 0.0300237 quarts = 1 UK fl oz",
    },
    {
      unit: "Board Foot",
      description: "Lumber volume measurement equal to 1 ft × 1 ft × 1 in.",
      conversion: 0.401042,
      example: "1 quart ≈ 0.401042 board foot, 2.4935 quarts = 1 board foot",
    },
    {
      unit: "Acre-foot",
      description: "Large volume unit used in water reservoir measurements.",
      conversion: 7.758e-7,
      example: "1 quart ≈ 7.758e-7 acre-foot, 1,288,931 quarts ≈ 1 acre-foot",
    },
    {
      unit: "Cubic Mile (mi³)",
      description: "Enormous volume unit used for geological measurements.",
      conversion: 2.2746e-13,
      example: "1 quart ≈ 2.2746e-13 mi³, 4.3959e12 quarts = 1 mi³",
    },
    {
      unit: "Shot Glass (1.5 fl oz)",
      description: "Standard volume for alcoholic shots.",
      conversion: 21.3333,
      example: "1 quart ≈ 21.3333 shots, 0.046875 quarts = 1 shot",
    },
    {
      unit: "Soda Can (12 fl oz)",
      description: "Common reference volume for beverages.",
      conversion: 2.66667,
      example: "1 quart ≈ 2.66667 cans, 0.375 quarts = 1 can",
    },
    {
      unit: "Baseball (regulation size)",
      description: "Approximate volume of a baseball (≈13.39 cubic inches).",
      conversion: 4.313,
      example: "1 quart ≈ 4.313 baseballs, 0.2318 quarts ≈ 1 baseball",
    },
    {
      unit: "Golf Ball (regulation size)",
      description: "Approximate volume of a golf ball (≈2.482 cubic inches).",
      conversion: 23.279,
      example: "1 quart ≈ 23.279 golf balls, 0.04296 quarts ≈ 1 golf ball",
    },
    {
      unit: "Bath (Biblical)",
      description: "Ancient Hebrew liquid measure.",
      conversion: 0.043016,
      example: "1 quart ≈ 0.043016 bath, 23.247 quarts = 1 bath",
    },
    {
      unit: "Hogshead",
      description: "Traditional unit for alcoholic beverages and tobacco.",
      conversion: 0.00396825,
      example: "1 quart ≈ 0.00396825 hogshead, 252 quarts = 1 hogshead",
    },
    {
      unit: "Cord",
      description: "Unit for measuring firewood volume.",
      conversion: 0.002611,
      example: "1 quart ≈ 0.002611 cord, 383 quarts = 1 cord",
    },
    {
      unit: "Engine Displacement (cc)",
      description: "Cubic centimeters, used for engine cylinder volumes.",
      conversion: 946.353,
      example: "1 quart = 946.353 cc, 350 quarts ≈ 331,224 cc (331L)",
    },
    {
      unit: "Earth's Volume",
      description: "Theoretical volume of planet Earth (approximate).",
      conversion: 8.739e-22,
      example:
        "1 quart ≈ 8.739e-22 Earth volumes, 1.144e21 quarts ≈ 1 Earth volume",
    },
  ],
  Radians: [
    {
      unit: "Degree (°)",
      description:
        "The most common unit for measuring angles, equal to 1/360 of a full rotation.",
      conversion: 57.2958,
      example: "1 radian ≈ 57.2958°, 0.0174533 radians = 1°",
    },
    {
      unit: "Gradian (grad)",
      description: "Decimal angle unit where a right angle is 100 gradians.",
      conversion: 63.662,
      example: "1 radian ≈ 63.662 grad, 0.015708 radians = 1 grad",
    },
    {
      unit: "Minute of Arc (')",
      description: "1/60th of a degree, used in astronomy and navigation.",
      conversion: 3437.75,
      example: "1 radian ≈ 3437.75', 0.000290888 radians = 1'",
    },
    {
      unit: 'Second of Arc (")',
      description: "1/60th of a minute, used for precise angle measurements.",
      conversion: 206265,
      example: '1 radian ≈ 206,265", 0.00000484814 radians = 1"',
    },
    {
      unit: "Revolution (rev)",
      description: "Complete 360° rotation, also called a turn or cycle.",
      conversion: 0.159155,
      example: "1 radian ≈ 0.159155 rev, 6.28319 radians = 1 rev",
    },
    {
      unit: "Quadrant",
      description: "Right angle measurement equal to 90 degrees.",
      conversion: 0.63662,
      example: "1 radian ≈ 0.63662 quadrants, 1.5708 radians = 1 quadrant",
    },
    {
      unit: "Sextant",
      description: "60 degree angle used in navigation.",
      conversion: 0.95493,
      example: "1 radian ≈ 0.95493 sextants, 1.0472 radians = 1 sextant",
    },
    {
      unit: "Sign",
      description: "Astrological unit equal to 30 degrees.",
      conversion: 1.90986,
      example: "1 radian ≈ 1.90986 signs, 0.523599 radians = 1 sign",
    },
    {
      unit: "Mil (NATO)",
      description: "Military unit where 6400 mils equal 360 degrees.",
      conversion: 1018.59,
      example: "1 radian ≈ 1018.59 mils, 0.000981748 radians = 1 mil",
    },
    {
      unit: "Point (navigation)",
      description: "1/32 of a full circle (11.25 degrees).",
      conversion: 5.09296,
      example: "1 radian ≈ 5.09296 points, 0.19635 radians = 1 point",
    },
    {
      unit: "Hour Angle",
      description: "Astronomical unit where 24 hours = 360 degrees.",
      conversion: 3.81972,
      example: "1 radian ≈ 3.81972 hours, 0.261799 radians = 1 hour",
    },
    {
      unit: "Binary Degree (binary)",
      description: "Angle unit where 256 binary degrees equal a full circle.",
      conversion: 40.7437,
      example:
        "1 radian ≈ 40.7437 binary degrees, 0.0245437 radians = 1 binary degree",
    },
    {
      unit: "Octant",
      description: "45 degree angle (1/8 of a circle).",
      conversion: 1.27324,
      example: "1 radian ≈ 1.27324 octants, 0.785398 radians = 1 octant",
    },
    {
      unit: "Percent Grade (%)",
      description: "Slope measurement where 100% = 45 degrees.",
      conversion: 63.662,
      example: "1 radian ≈ 63.662% grade, 0.015708 radians = 1% grade",
    },
    {
      unit: "Diameter Part",
      description: "Ancient unit where 60 diameter parts ≈ 57°.",
      conversion: 60.0001,
      example:
        "1 radian ≈ 60 diameter parts, 0.0166667 radians = 1 diameter part",
    },
    {
      unit: "Hexacontade",
      description: "Ancient Babylonian unit equal to 6 degrees.",
      conversion: 9.5493,
      example:
        "1 radian ≈ 9.5493 hexacontades, 0.10472 radians = 1 hexacontade",
    },
    {
      unit: "Pechus",
      description: "Ancient Babylonian unit equal to 2.5 degrees.",
      conversion: 22.9183,
      example: "1 radian ≈ 22.9183 pechus, 0.0436332 radians = 1 pechus",
    },
    {
      unit: "Arcminute (')",
      description: "Alternative name for minute of arc.",
      conversion: 3437.75,
      example:
        "1 radian ≈ 3437.75 arcminutes, 0.000290888 radians = 1 arcminute",
    },
    {
      unit: 'Arcsecond (")',
      description: "Alternative name for second of arc.",
      conversion: 206265,
      example:
        "1 radian ≈ 206,265 arcseconds, 0.00000484814 radians = 1 arcsecond",
    },
    {
      unit: "Full Circle",
      description: "Complete 360 degree rotation.",
      conversion: 0.159155,
      example:
        "1 radian ≈ 0.159155 full circles, 6.28319 radians = 1 full circle",
    },
    {
      unit: "Right Angle",
      description: "90 degree angle (π/2 radians).",
      conversion: 0.63662,
      example:
        "1 radian ≈ 0.63662 right angles, 1.5708 radians = 1 right angle",
    },
    {
      unit: "Gon",
      description: "Alternative name for gradian.",
      conversion: 63.662,
      example: "1 radian ≈ 63.662 gons, 0.015708 radians = 1 gon",
    },
    {
      unit: "Turn",
      description: "Alternative name for revolution.",
      conversion: 0.159155,
      example: "1 radian ≈ 0.159155 turns, 6.28319 radians = 1 turn",
    },
    {
      unit: "Circle",
      description: "Alternative name for full rotation.",
      conversion: 0.159155,
      example: "1 radian ≈ 0.159155 circles, 6.28319 radians = 1 circle",
    },
  ],
  Seconds: [
    {
      unit: "Millisecond (ms)",
      description:
        "One thousandth of a second, common in scientific measurements.",
      conversion: 1000,
      example: "1 second = 1000 ms, 0.001 seconds = 1 ms",
    },
    {
      unit: "Microsecond (μs)",
      description:
        "One millionth of a second, used in electronics and physics.",
      conversion: 1000000,
      example: "1 second = 1,000,000 μs, 0.000001 seconds = 1 μs",
    },
    {
      unit: "Nanosecond (ns)",
      description: "One billionth of a second, timing in computer systems.",
      conversion: 1000000000,
      example: "1 second = 1,000,000,000 ns, 0.000000001 seconds = 1 ns",
    },
    {
      unit: "Minute (min)",
      description: "60 seconds, standard time measurement unit.",
      conversion: 0.0166667,
      example: "1 second ≈ 0.0166667 min, 60 seconds = 1 min",
    },
    {
      unit: "Hour (hr)",
      description: "3,600 seconds, common daily time unit.",
      conversion: 0.000277778,
      example: "1 second ≈ 0.000277778 hr, 3600 seconds = 1 hr",
    },
    {
      unit: "Day (d)",
      description: "86,400 seconds, Earth's rotation period.",
      conversion: 0.0000115741,
      example: "1 second ≈ 0.0000115741 d, 86400 seconds = 1 d",
    },
    {
      unit: "Week",
      description: "604,800 seconds, 7-day period.",
      conversion: 0.00000165344,
      example: "1 second ≈ 1.65344e-6 weeks, 604800 seconds = 1 week",
    },
    {
      unit: "Month (average)",
      description: "Approximately 2,629,746 seconds (30.44 days).",
      conversion: 0.000000380265,
      example: "1 second ≈ 3.80265e-7 months, 2,629,746 seconds ≈ 1 month",
    },
    {
      unit: "Year (calendar)",
      description: "31,536,000 seconds (365 days).",
      conversion: 0.0000000316888,
      example: "1 second ≈ 3.16888e-8 years, 31,536,000 seconds = 1 year",
    },
    {
      unit: "Decade",
      description: "10-year period (315,360,000 seconds).",
      conversion: 0.00000000316888,
      example: "1 second ≈ 3.16888e-9 decades, 315,360,000 seconds = 1 decade",
    },
    {
      unit: "Century",
      description: "100-year period (3,153,600,000 seconds).",
      conversion: 0.000000000316888,
      example:
        "1 second ≈ 3.16888e-10 centuries, 3,153,600,000 seconds = 1 century",
    },
    {
      unit: "Millennium",
      description: "1,000-year period (31,536,000,000 seconds).",
      conversion: 0.0000000000316888,
      example:
        "1 second ≈ 3.16888e-11 millennia, 31,536,000,000 seconds = 1 millennium",
    },
    {
      unit: "Fortnight",
      description: "14 days (1,209,600 seconds).",
      conversion: 0.00000082672,
      example:
        "1 second ≈ 8.2672e-7 fortnights, 1,209,600 seconds = 1 fortnight",
    },
    {
      unit: "Shake",
      description: "10 nanoseconds, nuclear physics unit.",
      conversion: 100000000,
      example: "1 second = 100,000,000 shakes, 0.00000001 seconds = 1 shake",
    },
    {
      unit: "Planck Time",
      description: "The smallest meaningful time unit in quantum physics.",
      conversion: 1.855e43,
      example:
        "1 second ≈ 1.855e43 Planck times, 5.39e-44 seconds = 1 Planck time",
    },
    {
      unit: "Human Heartbeat (resting)",
      description: "Approximately 1 second per beat at 60 bpm.",
      conversion: 1,
      example: "1 second ≈ 1 heartbeat, 1 second ≈ 1 heartbeat",
    },
    {
      unit: "Light Travel (Earth to Moon)",
      description: "Time for light to reach Moon from Earth (1.28 seconds).",
      conversion: 0.78125,
      example:
        "1 second ≈ 0.78125 Earth-Moon light trips, 1.28 seconds = 1 trip",
    },
    {
      unit: "Computer Clock Cycle (3 GHz)",
      description: "Processor cycle time for modern CPUs.",
      conversion: 3000000000,
      example: "1 second = 3 billion cycles, 0.333 ns = 1 cycle",
    },
    {
      unit: "Blink of an Eye",
      description: "Approximately 0.1-0.4 seconds.",
      conversion: 3,
      example: "1 second ≈ 3 blinks, 0.3 seconds ≈ 1 blink",
    },
    {
      unit: "Day (sidereal)",
      description: "Earth's rotation relative to stars (86,164.1 seconds).",
      conversion: 0.0000116058,
      example:
        "1 second ≈ 1.16058e-5 sidereal days, 86,164.1 seconds = 1 sidereal day",
    },
    {
      unit: "Year (sidereal)",
      description:
        "Earth's orbital period relative to stars (31,558,150 seconds).",
      conversion: 0.0000000316875,
      example:
        "1 second ≈ 3.16875e-8 sidereal years, 31,558,150 seconds = 1 sidereal year",
    },
    {
      unit: "Frame (24fps video)",
      description: "Duration of one frame in standard cinema.",
      conversion: 24,
      example: "1 second = 24 frames, 0.0416667 seconds = 1 frame",
    },
    {
      unit: "Olympic Sprint (100m)",
      description: "World record time ≈ 9.58 seconds.",
      conversion: 0.104384,
      example: "1 second ≈ 0.1044 sprints, 9.58 seconds = 1 sprint",
    },
    {
      unit: "Commercial Break",
      description: "Average TV commercial duration (15-30 seconds).",
      conversion: 0.0333333,
      example: "1 second ≈ 0.0333 breaks, 30 seconds = 1 break",
    },
  ],
  SquareFeet: [
    {
      unit: "Square Meter (m²)",
      description: "The SI unit of area, equal to a square with 1-meter sides.",
      conversion: 0.092903,
      example: "1 ft² ≈ 0.092903 m², 10.7639 ft² = 1 m²",
    },
    {
      unit: "Square Inch (in²)",
      description:
        "Small imperial area unit, equal to a square with 1-inch sides.",
      conversion: 144,
      example: "1 ft² = 144 in², 0.00694444 ft² = 1 in²",
    },
    {
      unit: "Square Yard (yd²)",
      description: "Imperial unit equal to a square with 1-yard sides.",
      conversion: 0.111111,
      example: "1 ft² ≈ 0.111111 yd², 9 ft² = 1 yd²",
    },
    {
      unit: "Acre",
      description: "Common land measurement equal to 43,560 square feet.",
      conversion: 0.0000229568,
      example: "1 ft² ≈ 0.0000229568 acres, 43,560 ft² = 1 acre",
    },
    {
      unit: "Hectare (ha)",
      description: "Metric land measurement equal to 10,000 square meters.",
      conversion: 0.0000092903,
      example: "1 ft² ≈ 0.0000092903 ha, 107,639 ft² = 1 ha",
    },
    {
      unit: "Square Mile (mi²)",
      description: "Large area measurement equal to 27,878,400 square feet.",
      conversion: 0.00000003587,
      example: "1 ft² ≈ 3.587e-8 mi², 27,878,400 ft² = 1 mi²",
    },
    {
      unit: "Square Centimeter (cm²)",
      description:
        "Metric unit for small areas, equal to a square with 1-centimeter sides.",
      conversion: 929.03,
      example: "1 ft² ≈ 929.03 cm², 0.00107639 ft² = 1 cm²",
    },
    {
      unit: "Square Kilometer (km²)",
      description:
        "Metric unit for large areas, equal to a square with 1-kilometer sides.",
      conversion: 0.000000092903,
      example: "1 ft² ≈ 9.2903e-8 km², 10,763,910 ft² = 1 km²",
    },
    {
      unit: "Square Millimeter (mm²)",
      description: "Metric unit for very small areas.",
      conversion: 92903,
      example: "1 ft² = 92,903 mm², 0.0000107639 ft² = 1 mm²",
    },
    {
      unit: "Barn (b)",
      description: "Extremely small unit used in nuclear physics.",
      conversion: 9.2903e32,
      example: "1 ft² ≈ 9.2903e32 barns, 1.07639e-33 ft² = 1 barn",
    },
    {
      unit: "Football Field (including end zones)",
      description: "Standard American football field area (57,600 ft²).",
      conversion: 0.0000173611,
      example:
        "1 ft² ≈ 0.0000173611 football fields, 57,600 ft² = 1 football field",
    },
    {
      unit: "Tennis Court (doubles)",
      description: "Standard tennis court area (2,808 ft²).",
      conversion: 0.0003561,
      example: "1 ft² ≈ 0.0003561 tennis courts, 2,808 ft² = 1 tennis court",
    },
    {
      unit: "Basketball Court (NBA)",
      description: "Standard NBA court area (4,700 ft²).",
      conversion: 0.000212766,
      example: "1 ft² ≈ 0.000212766 NBA courts, 4,700 ft² = 1 NBA court",
    },
    {
      unit: "Baseball Infield (90ft bases)",
      description: "Area of a standard baseball infield (8,100 ft²).",
      conversion: 0.000123457,
      example: "1 ft² ≈ 0.000123457 infields, 8,100 ft² = 1 infield",
    },
    {
      unit: "Parking Space (standard)",
      description: "Average parking space area (180 ft²).",
      conversion: 0.00555556,
      example: "1 ft² ≈ 0.00555556 parking spaces, 180 ft² = 1 parking space",
    },
    {
      unit: "King Size Bed (42.15 ft²)",
      description: "Area occupied by a standard king size bed.",
      conversion: 0.023725,
      example: "1 ft² ≈ 0.023725 king beds, 42.15 ft² = 1 king bed",
    },
    {
      unit: "Manhattan City Block (2 acres)",
      description: "Average Manhattan block area (87,120 ft²).",
      conversion: 0.0000114784,
      example: "1 ft² ≈ 0.0000114784 city blocks, 87,120 ft² = 1 city block",
    },
    {
      unit: "Average House (U.S.)",
      description: "Median new single-family home size (2,273 ft²).",
      conversion: 0.000439947,
      example: "1 ft² ≈ 0.000439947 houses, 2,273 ft² = 1 average house",
    },
    {
      unit: "Olympic Swimming Pool (13,454.72 ft²)",
      description: "Surface area of an Olympic pool.",
      conversion: 0.00007432,
      example: "1 ft² ≈ 0.00007432 pools, 13,454.72 ft² = 1 Olympic pool",
    },
    {
      unit: "Sheet of Letter Paper (0.935 ft²)",
      description: "Area of standard 8.5×11 inch paper.",
      conversion: 1.06952,
      example: "1 ft² ≈ 1.06952 sheets, 0.935 ft² = 1 sheet",
    },
    {
      unit: "Pixel (on 96ppi display)",
      description: "Area of one pixel on a standard resolution screen.",
      conversion: 921600,
      example: "1 ft² ≈ 921,600 pixels, 0.00000108507 ft² = 1 pixel",
    },
    {
      unit: "Postage Stamp (0.00694 ft²)",
      description: "Area of standard US postage stamp (1×0.75 inches).",
      conversion: 144.1,
      example: "1 ft² ≈ 144.1 stamps, 0.00694 ft² = 1 stamp",
    },
    {
      unit: "Dollar Bill (0.00694 ft²)",
      description: "Area of US currency bill (2.61×6.14 inches).",
      conversion: 144.1,
      example: "1 ft² ≈ 144.1 dollar bills, 0.00694 ft² = 1 bill",
    },
    {
      unit: "Central Park (1.317 mi²)",
      description: "Total area of New York's Central Park.",
      conversion: 0.000000000227,
      example:
        "1 ft² ≈ 2.27e-10 Central Parks, 3.49 billion ft² = 1 Central Park",
    },
    {
      unit: "Texas (268,597 mi²)",
      description: "Total area of the state of Texas.",
      conversion: 1.33e-13,
      example: "1 ft² ≈ 1.33e-13 Texases, 7.49 trillion ft² = 1 Texas",
    },
  ],
  SquareMeter: [
    {
      unit: "Square Kilometer (km²)",
      description:
        "Metric unit for large areas, equal to 1,000,000 square meters.",
      conversion: 0.000001,
      example: "1 m² = 0.000001 km², 1,000,000 m² = 1 km²",
    },
    {
      unit: "Square Centimeter (cm²)",
      description: "Common metric unit equal to 0.0001 square meters.",
      conversion: 10000,
      example: "1 m² = 10,000 cm², 0.0001 m² = 1 cm²",
    },
    {
      unit: "Square Millimeter (mm²)",
      description:
        "Metric unit for small areas, equal to 0.000001 square meters.",
      conversion: 1000000,
      example: "1 m² = 1,000,000 mm², 0.000001 m² = 1 mm²",
    },
    {
      unit: "Square Micrometer (µm²)",
      description: "Extremely small metric area unit.",
      conversion: 1000000000000,
      example: "1 m² = 1e12 µm², 1e-12 m² = 1 µm²",
    },
    {
      unit: "Hectare (ha)",
      description: "Metric unit for land area, equal to 10,000 square meters.",
      conversion: 0.0001,
      example: "1 m² = 0.0001 ha, 10,000 m² = 1 ha",
    },
    {
      unit: "Acre",
      description: "Common land measurement unit in imperial systems.",
      conversion: 0.000247105,
      example: "1 m² ≈ 0.000247 acres, 4,046.86 m² = 1 acre",
    },
    {
      unit: "Square Mile (mi²)",
      description: "Imperial unit for very large areas.",
      conversion: 0.000000386102,
      example: "1 m² ≈ 3.861e-7 mi², 2.59e6 m² = 1 mi²",
    },
    {
      unit: "Square Yard (yd²)",
      description: "Common imperial unit for medium-sized areas.",
      conversion: 1.19599,
      example: "1 m² ≈ 1.19599 yd², 0.836127 m² = 1 yd²",
    },
    {
      unit: "Square Foot (ft²)",
      description: "Standard imperial unit for area measurements.",
      conversion: 10.7639,
      example: "1 m² ≈ 10.7639 ft², 0.092903 m² = 1 ft²",
    },
    {
      unit: "Square Inch (in²)",
      description: "Imperial unit for small areas.",
      conversion: 1550,
      example: "1 m² ≈ 1,550 in², 0.00064516 m² = 1 in²",
    },
    {
      unit: "Square Hectometer (hm²)",
      description: "Equal to 10,000 square meters (same as hectare).",
      conversion: 0.01,
      example: "1 m² = 0.01 hm², 100 m² = 1 hm²",
    },
    {
      unit: "Are (a)",
      description: "Metric unit equal to 100 square meters.",
      conversion: 0.01,
      example: "1 m² = 0.01 a, 100 m² = 1 a",
    },
    {
      unit: "Barn (b)",
      description: "Extremely small unit used in nuclear physics.",
      conversion: 1e28,
      example: "1 m² = 1e28 b, 1e-28 m² = 1 b",
    },
    {
      unit: "Circular Inch",
      description: "Area of a circle with 1-inch diameter.",
      conversion: 1973.53,
      example: "1 m² ≈ 1,973.53 circular inches",
    },
    {
      unit: "Township",
      description: "Large area unit used in US surveying.",
      conversion: 0.000000010725,
      example: "1 m² ≈ 1.0725e-8 townships",
    },
    {
      unit: "Section",
      description: "Area unit equal to 1 square mile.",
      conversion: 0.000000386102,
      example: "1 m² ≈ 3.861e-7 sections",
    },
    {
      unit: "Rood",
      description: "Old English unit equal to 1/4 acre.",
      conversion: 0.000988422,
      example: "1 m² ≈ 0.000988 roods",
    },
    {
      unit: "Square Chain",
      description: "Surveying unit equal to 66 feet × 66 feet.",
      conversion: 0.00247105,
      example: "1 m² ≈ 0.002471 square chains",
    },
    {
      unit: "Square Rod",
      description: "Old unit equal to 30.25 square yards.",
      conversion: 0.0395369,
      example: "1 m² ≈ 0.039537 square rods",
    },
    {
      unit: "Football Field (American)",
      description: "Approximate area including end zones (5,300 m²).",
      conversion: 0.000188679,
      example: "1 m² ≈ 0.000189 football fields",
    },
    {
      unit: "Tennis Court (doubles)",
      description: "Approximate area of a doubles tennis court (260 m²).",
      conversion: 0.00384615,
      example: "1 m² ≈ 0.003846 tennis courts",
    },
    {
      unit: "Basketball Court (NBA)",
      description: "Approximate area of an NBA court (436.64 m²).",
      conversion: 0.00229018,
      example: "1 m² ≈ 0.00229 NBA courts",
    },
    {
      unit: "Baseball Infield",
      description: "Approximate area of a baseball infield (83.61 m²).",
      conversion: 0.0119603,
      example: "1 m² ≈ 0.01196 baseball infields",
    },
    {
      unit: "Manhattan Island",
      description: "Approximate land area of Manhattan (59.1 km²).",
      conversion: 0.00000001692,
      example: "1 m² ≈ 1.692e-8 Manhattan Islands",
    },
    {
      unit: "Central Park",
      description: "Approximate area of Central Park, NYC (3.41 km²).",
      conversion: 0.000000293255,
      example: "1 m² ≈ 2.933e-7 Central Parks",
    },
    {
      unit: "Football Pitch (soccer)",
      description: "Approximate area of a soccer field (7,140 m²).",
      conversion: 0.000140056,
      example: "1 m² ≈ 0.00014 soccer pitches",
    },
    {
      unit: "Olympic Swimming Pool",
      description: "Approximate surface area (1,250 m²).",
      conversion: 0.0008,
      example: "1 m² = 0.0008 Olympic pools",
    },
    {
      unit: "Pixel (at 300 ppi)",
      description: "Area of one pixel at 300 pixels per inch.",
      conversion: 1550000,
      example: "1 m² ≈ 1.55 million pixels at 300 ppi",
    },
    {
      unit: "A4 Sheet of Paper",
      description: "Area of one A4 sheet (0.06237 m²).",
      conversion: 16.0333,
      example: "1 m² ≈ 16.033 A4 sheets",
    },
    {
      unit: "Postage Stamp",
      description: "Approximate area of a standard stamp (0.0004 m²).",
      conversion: 2500,
      example: "1 m² ≈ 2,500 postage stamps",
    },
    {
      unit: "King Size Bed",
      description: "Approximate area (3.77 m²).",
      conversion: 0.265252,
      example: "1 m² ≈ 0.265 king beds",
    },
    {
      unit: "Parking Space",
      description: "Standard parking space area (12.5 m²).",
      conversion: 0.08,
      example: "1 m² = 0.08 parking spaces",
    },
  ],
  SquareMiles: [
    {
      unit: "Acre",
      description: "Common land measurement unit in imperial systems.",
      conversion: 640,
      example: "1 mi² = 640 acres, 0.0015625 mi² = 1 acre",
    },
    {
      unit: "Square Meter (m²)",
      description: "The SI unit of area.",
      conversion: 2589988.11,
      example: "1 mi² ≈ 2,589,988 m², 0.000000386102 mi² = 1 m²",
    },
    {
      unit: "Square Kilometer (km²)",
      description: "Metric unit for large areas.",
      conversion: 2.58999,
      example: "1 mi² ≈ 2.59 km², 0.386102 mi² = 1 km²",
    },
    {
      unit: "Hectare (ha)",
      description: "Metric unit for land area.",
      conversion: 258.999,
      example: "1 mi² ≈ 259 ha, 0.00386102 mi² = 1 ha",
    },
    {
      unit: "Square Yard (yd²)",
      description: "Common imperial unit for medium-sized areas.",
      conversion: 3097600,
      example: "1 mi² ≈ 3,097,600 yd², 0.000000322831 mi² = 1 yd²",
    },
    {
      unit: "Square Foot (ft²)",
      description: "Standard imperial unit for area measurements.",
      conversion: 27878400,
      example: "1 mi² ≈ 27,878,400 ft², 0.00000003587 mi² = 1 ft²",
    },
    {
      unit: "Square Inch (in²)",
      description: "Imperial unit for small areas.",
      conversion: 4014489600,
      example: "1 mi² ≈ 4.01449×10⁹ in², 2.78784×10⁻¹² mi² = 1 in²",
    },
    {
      unit: "Section",
      description: "US land surveying unit equal to 1 square mile.",
      conversion: 1,
      example: "1 mi² = 1 section",
    },
    {
      unit: "Township",
      description: "US surveying unit equal to 36 square miles.",
      conversion: 0.0277778,
      example: "1 mi² ≈ 0.027778 townships, 36 mi² = 1 township",
    },
    {
      unit: "Homestead",
      description: "US land unit equal to 1/4 square mile.",
      conversion: 4,
      example: "1 mi² = 4 homesteads, 0.25 mi² = 1 homestead",
    },
    {
      unit: "Football Fields (American)",
      description: "Approximate area including end zones (5,300 m²).",
      conversion: 484,
      example: "1 mi² ≈ 484 football fields",
    },
    {
      unit: "Central Park",
      description: "Approximate area of Central Park, NYC (3.41 km²).",
      conversion: 0.758,
      example: "1 mi² ≈ 0.758 Central Parks",
    },
    {
      unit: "Manhattan Island",
      description: "Approximate land area of Manhattan (59.1 km²).",
      conversion: 0.439,
      example: "1 mi² ≈ 0.439 Manhattan Islands",
    },
    {
      unit: "City Block (NYC average)",
      description: "Approximate area of a NYC block (2 acres).",
      conversion: 320,
      example: "1 mi² ≈ 320 NYC city blocks",
    },
    {
      unit: "Tennis Courts (doubles)",
      description: "Approximate area of a doubles tennis court (260 m²).",
      conversion: 9961,
      example: "1 mi² ≈ 9,961 tennis courts",
    },
    {
      unit: "Basketball Courts (NBA)",
      description: "Approximate area of an NBA court (436.64 m²).",
      conversion: 5930,
      example: "1 mi² ≈ 5,930 NBA courts",
    },
    {
      unit: "Baseball Fields (infield only)",
      description: "Approximate area of a baseball infield (83.61 m²).",
      conversion: 30976,
      example: "1 mi² ≈ 30,976 baseball infields",
    },
    {
      unit: "Olympic Swimming Pools",
      description: "Approximate surface area (1,250 m²).",
      conversion: 2072,
      example: "1 mi² ≈ 2,072 Olympic pools",
    },
    {
      unit: "A4 Sheets of Paper",
      description: "Area of one A4 sheet (0.06237 m²).",
      conversion: 41522176,
      example: "1 mi² ≈ 41.5 million A4 sheets",
    },
    {
      unit: "King Size Beds",
      description: "Approximate area (3.77 m²).",
      conversion: 687000,
      example: "1 mi² ≈ 687,000 king beds",
    },
    {
      unit: "Parking Spaces",
      description: "Standard parking space area (12.5 m²).",
      conversion: 207200,
      example: "1 mi² ≈ 207,200 parking spaces",
    },
    {
      unit: "Postage Stamps",
      description: "Approximate area of a standard stamp (0.0004 m²).",
      conversion: 6.47e9,
      example: "1 mi² ≈ 6.47 billion postage stamps",
    },
    {
      unit: "Pixels (at 300 ppi)",
      description: "Area of one pixel at 300 pixels per inch.",
      conversion: 4.0145e12,
      example: "1 mi² ≈ 4 trillion pixels at 300 ppi",
    },
    {
      unit: "Wal-Mart Supercenters",
      description: "Average footprint of a supercenter (1.7 ha).",
      conversion: 152,
      example: "1 mi² ≈ 152 Wal-Mart Supercenters",
    },
    {
      unit: "Football Pitches (soccer)",
      description: "Approximate area of a soccer field (7,140 m²).",
      conversion: 362,
      example: "1 mi² ≈ 362 soccer pitches",
    },
    {
      unit: "City of Monaco",
      description: "Land area of Monaco (2.02 km²).",
      conversion: 1.28,
      example: "1 mi² ≈ 1.28 Monacos",
    },
    {
      unit: "Vatican City",
      description: "Land area of Vatican City (0.44 km²).",
      conversion: 5.87,
      example: "1 mi² ≈ 5.87 Vatican Cities",
    },
    {
      unit: "Disneyland (California)",
      description: "Approximate area of Disneyland park (0.34 mi²).",
      conversion: 2.94,
      example: "1 mi² ≈ 2.94 Disneylands",
    },
    {
      unit: "University Campuses (average)",
      description: "Average area of US university campuses (100 acres).",
      conversion: 6.4,
      example: "1 mi² ≈ 6.4 average university campuses",
    },
    {
      unit: "Golf Courses (18-hole)",
      description: "Average area of an 18-hole course (150 acres).",
      conversion: 4.27,
      example: "1 mi² ≈ 4.27 golf courses",
    },
  ],
  SquareYards: [
    {
      unit: "Square Foot (ft²)",
      description: "Standard imperial unit for area measurements.",
      conversion: 9,
      example: "1 yd² = 9 ft², 0.111111 yd² = 1 ft²",
    },
    {
      unit: "Square Meter (m²)",
      description: "The SI unit of area.",
      conversion: 0.836127,
      example: "1 yd² ≈ 0.836127 m², 1.19599 yd² = 1 m²",
    },
    {
      unit: "Acre",
      description: "Common land measurement unit in imperial systems.",
      conversion: 0.000206612,
      example: "1 yd² ≈ 0.000207 acres, 4,840 yd² = 1 acre",
    },
    {
      unit: "Square Mile (mi²)",
      description: "Imperial unit for very large areas.",
      conversion: 0.000000322831,
      example: "1 yd² ≈ 3.228×10⁻⁷ mi², 3,097,600 yd² = 1 mi²",
    },
    {
      unit: "Square Inch (in²)",
      description: "Imperial unit for small areas.",
      conversion: 1296,
      example: "1 yd² = 1,296 in², 0.000771605 yd² = 1 in²",
    },
    {
      unit: "Hectare (ha)",
      description: "Metric unit for land area.",
      conversion: 0.0000836127,
      example: "1 yd² ≈ 8.361×10⁻⁵ ha, 11,960 yd² ≈ 1 ha",
    },
    {
      unit: "Square Centimeter (cm²)",
      description: "Common metric unit equal to 0.0001 square meters.",
      conversion: 8361.27,
      example: "1 yd² ≈ 8,361 cm², 0.0001196 yd² = 1 cm²",
    },
    {
      unit: "Square Millimeter (mm²)",
      description: "Metric unit for small areas.",
      conversion: 836127,
      example: "1 yd² ≈ 836,127 mm², 0.000001196 yd² = 1 mm²",
    },
    {
      unit: "Football Field (American)",
      description: "Approximate area including end zones (5,300 m²).",
      conversion: 0.000157688,
      example: "1 yd² ≈ 0.000158 football fields, 6,342 yd² ≈ 1 field",
    },
    {
      unit: "Tennis Court (doubles)",
      description: "Approximate area of a doubles tennis court (260 m²).",
      conversion: 0.00321502,
      example: "1 yd² ≈ 0.00322 tennis courts, 311 yd² ≈ 1 court",
    },
    {
      unit: "Basketball Court (NBA)",
      description: "Approximate area of an NBA court (436.64 m²).",
      conversion: 0.001914,
      example: "1 yd² ≈ 0.00191 NBA courts, 522 yd² ≈ 1 court",
    },
    {
      unit: "King Size Bed",
      description: "Approximate area (3.77 m²).",
      conversion: 0.2218,
      example: "1 yd² ≈ 0.222 king beds, 4.51 yd² ≈ 1 bed",
    },
    {
      unit: "Parking Space",
      description: "Standard parking space area (12.5 m²).",
      conversion: 0.0669,
      example: "1 yd² ≈ 0.0669 spaces, 14.95 yd² ≈ 1 space",
    },
    {
      unit: "A4 Sheet of Paper",
      description: "Area of one A4 sheet (0.06237 m²).",
      conversion: 13.41,
      example: "1 yd² ≈ 13.4 A4 sheets, 0.0746 yd² = 1 sheet",
    },
    {
      unit: "Postage Stamp",
      description: "Approximate area of a standard stamp (0.0004 m²).",
      conversion: 2090,
      example: "1 yd² ≈ 2,090 stamps, 0.000479 yd² = 1 stamp",
    },
    {
      unit: "Pixel (at 300 ppi)",
      description: "Area of one pixel at 300 pixels per inch.",
      conversion: 1296000,
      example: "1 yd² ≈ 1.3 million pixels at 300 ppi",
    },
    {
      unit: "Baseball Infield",
      description: "Approximate area of a baseball infield (83.61 m²).",
      conversion: 0.009961,
      example: "1 yd² ≈ 0.00996 infields, 100.4 yd² ≈ 1 infield",
    },
    {
      unit: "Olympic Swimming Pool",
      description: "Approximate surface area (1,250 m²).",
      conversion: 0.000669,
      example: "1 yd² ≈ 0.000669 pools, 1,495 yd² ≈ 1 pool",
    },
    {
      unit: "Coffee Table",
      description: "Average area of a coffee table (0.5 m²).",
      conversion: 1.67,
      example: "1 yd² ≈ 1.67 coffee tables, 0.6 yd² ≈ 1 table",
    },
    {
      unit: "Refrigerator (side-by-side)",
      description: "Approximate footprint (1.2 m²).",
      conversion: 0.697,
      example: "1 yd² ≈ 0.7 refrigerators, 1.43 yd² ≈ 1 refrigerator",
    },
    {
      unit: "Queen Size Mattress",
      description: "Approximate area (3.0 m²).",
      conversion: 0.279,
      example: "1 yd² ≈ 0.28 mattresses, 3.59 yd² ≈ 1 mattress",
    },
    {
      unit: "Dining Table (6-seater)",
      description: "Approximate area (2.5 m²).",
      conversion: 0.334,
      example: "1 yd² ≈ 0.33 tables, 3 yd² ≈ 1 table",
    },
    {
      unit: "Office Cubicle",
      description: "Average area of a small cubicle (4.6 m²).",
      conversion: 0.182,
      example: "1 yd² ≈ 0.18 cubicles, 5.5 yd² ≈ 1 cubicle",
    },
    {
      unit: "Smart Car Parking Space",
      description: "Area needed for a Smart car (7.5 m²).",
      conversion: 0.111,
      example: "1 yd² ≈ 0.11 Smart car spaces, 8.97 yd² ≈ 1 space",
    },
    {
      unit: "Flat Screen TV (65-inch)",
      description: "Approximate area when laid flat (1.2 m²).",
      conversion: 0.697,
      example: "1 yd² ≈ 0.7 TVs, 1.43 yd² ≈ 1 TV",
    },
    {
      unit: "Standard Door",
      description: "Approximate area of a standard door (2 m²).",
      conversion: 0.418,
      example: "1 yd² ≈ 0.42 doors, 2.39 yd² ≈ 1 door",
    },
    {
      unit: "Bathtub",
      description: "Approximate area of a standard bathtub (1.5 m²).",
      conversion: 0.557,
      example: "1 yd² ≈ 0.56 tubs, 1.79 yd² ≈ 1 tub",
    },
    {
      unit: "Washing Machine",
      description: "Approximate footprint (0.7 m²).",
      conversion: 1.19,
      example: "1 yd² ≈ 1.2 machines, 0.84 yd² ≈ 1 machine",
    },
    {
      unit: "Bookshelf (small)",
      description: "Approximate footprint (0.5 m²).",
      conversion: 1.67,
      example: "1 yd² ≈ 1.7 bookshelves, 0.6 yd² ≈ 1 bookshelf",
    },
    {
      unit: "Area of a Human Body (lying down)",
      description: "Approximate area of average adult (0.7 m²).",
      conversion: 1.19,
      example: "1 yd² ≈ 1.2 body areas, 0.84 yd² ≈ 1 person",
    },
  ],
  Stone: [
    {
      unit: "Pound (lb)",
      description: "Standard imperial unit of weight.",
      conversion: 14,
      example: "1 stone = 14 lbs, 0.0714286 stone = 1 lb",
    },
    {
      unit: "Kilogram (kg)",
      description: "The SI unit of mass.",
      conversion: 6.35029,
      example: "1 stone ≈ 6.35 kg, 0.157473 stone = 1 kg",
    },
    {
      unit: "Ounce (oz)",
      description: "Small imperial weight unit.",
      conversion: 224,
      example: "1 stone = 224 oz, 0.00446429 stone = 1 oz",
    },
    {
      unit: "Gram (g)",
      description: "Metric unit of mass.",
      conversion: 6350.29,
      example: "1 stone ≈ 6,350 g, 0.000157473 stone = 1 g",
    },
    {
      unit: "Ton (metric)",
      description: "Metric ton equal to 1,000 kilograms.",
      conversion: 0.00635029,
      example: "1 stone ≈ 0.00635 metric tons, 157.473 stone = 1 metric ton",
    },
    {
      unit: "Ton (short, US)",
      description: "US customary unit equal to 2,000 pounds.",
      conversion: 0.007,
      example: "1 stone = 0.007 short tons, 142.857 stone = 1 short ton",
    },
    {
      unit: "Ton (long, UK)",
      description: "British imperial unit equal to 2,240 pounds.",
      conversion: 0.00625,
      example: "1 stone = 0.00625 long tons, 160 stone = 1 long ton",
    },
    {
      unit: "Hundredweight (UK cwt)",
      description: "British imperial unit equal to 112 pounds.",
      conversion: 0.125,
      example: "1 stone = 0.125 UK cwt, 8 stone = 1 UK cwt",
    },
    {
      unit: "Hundredweight (US cwt)",
      description: "US customary unit equal to 100 pounds.",
      conversion: 0.14,
      example: "1 stone = 0.14 US cwt, 7.14286 stone = 1 US cwt",
    },
    {
      unit: "Carat (metric)",
      description: "Unit used for measuring gemstones.",
      conversion: 31751.5,
      example: "1 stone ≈ 31,751 carats, 0.0000315 stone = 1 carat",
    },
    {
      unit: "Grain",
      description: "Smallest imperial weight unit.",
      conversion: 98000,
      example: "1 stone = 98,000 grains, 0.0000102 stone = 1 grain",
    },
    {
      unit: "Pennyweight",
      description: "Unit used in troy weight system.",
      conversion: 4083.33,
      example: "1 stone ≈ 4,083 dwt, 0.0002449 stone = 1 dwt",
    },
    {
      unit: "Newtons (Earth gravity)",
      description: "Metric unit of force (weight under Earth gravity).",
      conversion: 62.275,
      example: "1 stone ≈ 62.3 N, 0.01606 stone = 1 N",
    },
    {
      unit: "Human Body Weight (average)",
      description: "Approximate average adult human weight.",
      conversion: 0.1,
      example: "1 stone ≈ 0.1 average humans, 10 stone ≈ 1 average human",
    },
    {
      unit: "Bags of Sugar (1kg)",
      description: "Common household reference.",
      conversion: 6.35,
      example: "1 stone ≈ 6.35 bags, 0.157 stone = 1 bag",
    },
    {
      unit: "Bricks (standard)",
      description: "Approximate weight of standard building brick.",
      conversion: 21.2,
      example: "1 stone ≈ 21 bricks, 0.0472 stone = 1 brick",
    },
    {
      unit: "Gallon of Water (US)",
      description: "Weight of water at standard conditions.",
      conversion: 1.59,
      example: "1 stone ≈ 1.6 gallons, 0.63 stone = 1 gallon",
    },
    {
      unit: "Laptop Computers (average)",
      description: "Approximate weight of typical laptop.",
      conversion: 42.4,
      example: "1 stone ≈ 42 laptops, 0.0236 stone = 1 laptop",
    },
    {
      unit: "Basketballs (regulation)",
      description: "Approximate weight of NBA basketball.",
      conversion: 84.7,
      example: "1 stone ≈ 85 basketballs, 0.0118 stone = 1 basketball",
    },
    {
      unit: "Bags of Flour (1kg)",
      description: "Common baking reference.",
      conversion: 6.35,
      example: "1 stone ≈ 6.35 bags, 0.157 stone = 1 bag",
    },
    {
      unit: "Cans of Soup (400g)",
      description: "Typical canned food weight.",
      conversion: 15.9,
      example: "1 stone ≈ 16 cans, 0.063 stone = 1 can",
    },
    {
      unit: "Bottles of Wine (750ml)",
      description: "Approximate weight including bottle.",
      conversion: 8.47,
      example: "1 stone ≈ 8.5 bottles, 0.118 stone = 1 bottle",
    },
    {
      unit: "Bags of Rice (5kg)",
      description: "Common grocery item.",
      conversion: 1.27,
      example: "1 stone ≈ 1.3 bags, 0.787 stone = 1 bag",
    },
    {
      unit: "Newborn Babies (average)",
      description: "Approximate birth weight.",
      conversion: 0.45,
      example: "1 stone ≈ 0.45 babies, 2.22 stone = 1 baby",
    },
    {
      unit: "House Cats (average)",
      description: "Typical domestic cat weight.",
      conversion: 0.91,
      example: "1 stone ≈ 0.9 cats, 1.1 stone = 1 cat",
    },
    {
      unit: "Chihuahuas (average)",
      description: "Small dog breed reference.",
      conversion: 3.18,
      example: "1 stone ≈ 3 Chihuahuas, 0.315 stone = 1 Chihuahua",
    },
    {
      unit: "Bags of Potatoes (2.5kg)",
      description: "Common grocery purchase.",
      conversion: 2.54,
      example: "1 stone ≈ 2.5 bags, 0.394 stone = 1 bag",
    },
    {
      unit: "Hardcover Books (average)",
      description: "Typical weight of hardcover book.",
      conversion: 21.2,
      example: "1 stone ≈ 21 books, 0.0472 stone = 1 book",
    },
    {
      unit: "iPad (10.2-inch model)",
      description: "Modern device reference.",
      conversion: 56.6,
      example: "1 stone ≈ 57 iPads, 0.0177 stone = 1 iPad",
    },
    {
      unit: "Bottles of Water (500ml)",
      description: "Standard plastic water bottle.",
      conversion: 12.7,
      example: "1 stone ≈ 13 bottles, 0.0787 stone = 1 bottle",
    },
  ],
  Teaspoon: [
    {
      unit: "Cubic Meter (m³)",
      description:
        "The SI unit of volume, representing a cube with 1-meter sides.",
      conversion: 0.00000492892,
      example: "1 teaspoon ≈ 0.00000492892 m³, 202,884 teaspoons ≈ 1 m³",
    },
    {
      unit: "Liter (L)",
      description: "Common metric unit equal to 1 cubic decimeter.",
      conversion: 0.00492892,
      example: "1 teaspoon ≈ 0.00492892 L, 202.884 teaspoons ≈ 1 L",
    },
    {
      unit: "Milliliter (mL)",
      description:
        "Common metric unit for small volumes, equal to 1 cubic centimeter.",
      conversion: 4.92892,
      example: "1 teaspoon = 4.92892 mL, 0.202884 teaspoons ≈ 1 mL",
    },
    {
      unit: "Gallon (US liquid)",
      description: "Standard US liquid volume unit.",
      conversion: 0.00130208,
      example: "1 teaspoon ≈ 0.00130208 gallons, 768 teaspoons ≈ 1 gallon",
    },
    {
      unit: "Quart (US liquid)",
      description: "US customary unit equal to 1/4 gallon.",
      conversion: 0.00520833,
      example: "1 teaspoon ≈ 0.00520833 quarts, 192 teaspoons ≈ 1 quart",
    },
    {
      unit: "Pint (US liquid)",
      description: "US customary unit equal to 1/8 gallon.",
      conversion: 0.0104167,
      example: "1 teaspoon ≈ 0.0104167 pints, 96 teaspoons ≈ 1 pint",
    },
    {
      unit: "Fluid Ounce (US fl oz)",
      description: "Small US liquid volume unit equal to 1/128 gallon.",
      conversion: 0.166667,
      example: "1 teaspoon ≈ 0.166667 fl oz, 6 teaspoons ≈ 1 fl oz",
    },
    {
      unit: "Cubic Foot (ft³)",
      description: "Imperial unit of volume for larger measurements.",
      conversion: 0.000174063,
      example: "1 teaspoon ≈ 0.000174063 ft³, 5,745 teaspoons ≈ 1 ft³",
    },
    {
      unit: "Cubic Yard (yd³)",
      description: "Common construction and landscaping volume unit.",
      conversion: 0.00000644657,
      example: "1 teaspoon ≈ 0.00000644657 yd³, 155,116 teaspoons ≈ 1 yd³",
    },
    {
      unit: "Tablespoon (US tbsp)",
      description: "Common cooking measurement equal to 3 tsp.",
      conversion: 0.333333,
      example: "1 teaspoon = 1/3 tablespoon, 3 teaspoons = 1 tablespoon",
    },
    {
      unit: "Cup (US)",
      description: "Common cooking measurement equal to 16 tbsp.",
      conversion: 0.0208333,
      example: "1 teaspoon ≈ 0.0208333 cups, 48 teaspoons ≈ 1 cup",
    },
    {
      unit: "Cubic Inch (in³)",
      description: "Imperial unit of volume for smaller measurements.",
      conversion: 0.300781,
      example:
        "1 teaspoon ≈ 0.300781 cubic inches, 3.32468 teaspoons ≈ 1 cubic inch",
    },
    {
      unit: "Barrel (oil)",
      description: "Standard volume for crude oil and petroleum products.",
      conversion: 0.000031002,
      example: "1 teaspoon ≈ 0.000031002 barrel, 32,256 teaspoons ≈ 1 barrel",
    },
    {
      unit: "Board Foot",
      description: "Lumber volume measurement equal to 1 ft × 1 ft × 1 in.",
      conversion: 0.00208876,
      example:
        "1 teaspoon ≈ 0.00208876 board foot, 478.753 teaspoons ≈ 1 board foot",
    },
    {
      unit: "Acre-foot",
      description: "Large volume unit used in water reservoir measurements.",
      conversion: 3.99594e-9,
      example:
        "1 teaspoon ≈ 3.99594e-9 acre-foot, 2.50262e8 teaspoons ≈ 1 acre-foot",
    },
    {
      unit: "Gallon (UK imperial)",
      description: "British imperial gallon, about 20% larger than US gallon.",
      conversion: 0.00108421,
      example:
        "1 teaspoon ≈ 0.00108421 UK gallon, 922.33 teaspoons ≈ 1 UK gallon",
    },
    {
      unit: "Fluid Ounce (UK fl oz)",
      description: "Imperial fluid ounce, slightly smaller than US fl oz.",
      conversion: 0.173474,
      example: "1 teaspoon ≈ 0.173474 UK fl oz, 5.76456 teaspoons ≈ 1 UK fl oz",
    },
    {
      unit: "Shot Glass (1.5 fl oz)",
      description: "Standard volume for alcoholic shots.",
      conversion: 0.111111,
      example: "1 teaspoon ≈ 0.111111 shots, 9 teaspoons ≈ 1 shot",
    },
    {
      unit: "Soda Can (12 fl oz)",
      description: "Common reference volume for beverages.",
      conversion: 0.0138889,
      example: "1 teaspoon ≈ 0.0138889 cans, 72 teaspoons ≈ 1 can",
    },
    {
      unit: "Baseball (regulation size)",
      description: "Approximate volume of a baseball (≈13.39 cubic inches).",
      conversion: 0.0224756,
      example: "1 teaspoon ≈ 0.0224756 baseballs, 44.5 teaspoons ≈ 1 baseball",
    },
    {
      unit: "Golf Ball (regulation size)",
      description: "Approximate volume of a golf ball (≈2.482 cubic inches).",
      conversion: 0.121177,
      example: "1 teaspoon ≈ 0.121177 golf balls, 8.25 teaspoons ≈ 1 golf ball",
    },
    {
      unit: "Earth's Volume",
      description: "Theoretical volume of planet Earth (approximate).",
      conversion: 4.554e-24,
      example:
        "1 teaspoon ≈ 4.554e-24 Earth volumes, 2.19648e23 teaspoons ≈ 1 Earth volume",
    },
  ],
  Ton: [
    {
      unit: "Kilogram (kg)",
      description: "The SI base unit of mass, equal to 1,000 grams.",
      conversion: 1000,
      example: "1 ton = 1,000 kg, 0.001 ton = 1 kg",
    },
    {
      unit: "Gram (g)",
      description: "Metric unit equal to 1/1000 of a kilogram.",
      conversion: 1000000,
      example: "1 ton = 1,000,000 g, 0.000001 ton = 1 g",
    },
    {
      unit: "Pound (lb)",
      description: "Common imperial unit of mass.",
      conversion: 2204.62,
      example: "1 ton ≈ 2,204.62 lb, 0.000453592 ton = 1 lb",
    },
    {
      unit: "Ounce (oz)",
      description: "Imperial unit equal to 1/16 of a pound.",
      conversion: 35274,
      example: "1 ton ≈ 35,274 oz, 0.0000283495 ton = 1 oz",
    },
    {
      unit: "Stone (UK)",
      description: "British unit equal to 14 pounds.",
      conversion: 157.473,
      example: "1 ton ≈ 157.473 stone, 0.00635029 ton = 1 stone",
    },
    {
      unit: "Ton (short/US)",
      description: "US customary unit equal to 2,000 pounds.",
      conversion: 1.10231,
      example: "1 ton ≈ 1.10231 short tons, 0.907185 ton = 1 short ton",
    },
    {
      unit: "Ton (long/UK)",
      description: "British imperial unit equal to 2,240 pounds.",
      conversion: 0.984207,
      example: "1 ton ≈ 0.984207 long tons, 1.01605 ton = 1 long ton",
    },
    {
      unit: "Quintal (metric)",
      description: "Metric unit equal to 100 kilograms.",
      conversion: 10,
      example: "1 ton = 10 quintals, 0.1 ton = 1 quintal",
    },
    {
      unit: "Carat (ct)",
      description: "Unit used for gemstones and pearls (1 carat = 200 mg).",
      conversion: 5000000,
      example: "1 ton = 5,000,000 carats, 0.0000002 ton = 1 carat",
    },
    {
      unit: "Atomic Mass Unit (u)",
      description: "Unit for atomic and molecular masses.",
      conversion: 6.02214179e29,
      example: "1 ton ≈ 6.022e29 u, 1.66054e-30 ton = 1 u",
    },
    {
      unit: "Slug",
      description: "Imperial unit of mass (used in physics).",
      conversion: 68.5218,
      example: "1 ton ≈ 68.5218 slugs, 0.0145939 ton = 1 slug",
    },
    {
      unit: "Hundredweight (US/cwt)",
      description: "US unit equal to 100 pounds.",
      conversion: 22.0462,
      example: "1 ton ≈ 22.0462 cwt, 0.0453592 ton = 1 cwt",
    },
    {
      unit: "Hundredweight (UK)",
      description: "British unit equal to 112 pounds.",
      conversion: 19.6841,
      example: "1 ton ≈ 19.6841 cwt, 0.0508023 ton = 1 UK cwt",
    },
    {
      unit: "Grain (gr)",
      description: "Smallest imperial unit (used for bullets, arrows, etc.).",
      conversion: 15432358.4,
      example: "1 ton ≈ 15,432,358 gr, 0.0000000647989 ton = 1 gr",
    },
    {
      unit: "Troy Ounce (oz t)",
      description: "Used for precious metals.",
      conversion: 32150.7,
      example: "1 ton ≈ 32,150.7 oz t, 0.0000311035 ton = 1 oz t",
    },
    {
      unit: "Elephant (African bush)",
      description: "Average adult weight reference (~6,000 kg).",
      conversion: 0.166667,
      example: "1 ton ≈ 1/6 of an elephant, 6 tons ≈ 1 elephant",
    },
    {
      unit: "Car (average midsize)",
      description: "Typical vehicle weight reference (~1,500 kg).",
      conversion: 0.666667,
      example: "1 ton ≈ 2/3 of a car, 1.5 tons ≈ 1 car",
    },
    {
      unit: "Blue Whale (largest animal)",
      description: "Maximum recorded weight (~190,000 kg).",
      conversion: 0.00526316,
      example: "1 ton ≈ 1/190 of a blue whale, 190 tons ≈ 1 whale",
    },
    {
      unit: "Eiffel Tower",
      description: "Structural weight reference (~10,100 tons).",
      conversion: 0.0000990099,
      example: "1 ton ≈ 1/10,100 of the Eiffel Tower",
    },
    {
      unit: "Statue of Liberty",
      description: "Weight reference (~225 tons).",
      conversion: 0.00444444,
      example: "1 ton ≈ 1/225 of the statue's weight",
    },
    {
      unit: "Earth's Mass",
      description: "Theoretical mass of planet Earth.",
      conversion: 1.6744e-22,
      example: "1 ton ≈ 1.67e-22 Earth masses, 5.972e21 tons ≈ 1 Earth",
    },
    {
      unit: "Sun's Mass",
      description: "Mass of our star (1.989 × 10³⁰ kg).",
      conversion: 5.02785e-28,
      example: "1 ton ≈ 5.03e-28 solar masses, 1.989e27 tons ≈ 1 Sun",
    },
  ],
  Watts: [
    {
      unit: "Kilowatt (kW)",
      description:
        "Equal to 1,000 watts, commonly used for electrical power ratings.",
      conversion: 0.001,
      example: "1,000 W = 1 kW, 1 W = 0.001 kW",
    },
    {
      unit: "Megawatt (MW)",
      description:
        "Equal to 1 million watts, used for power plants and large engines.",
      conversion: 0.000001,
      example: "1,000,000 W = 1 MW, 1 W = 0.000001 MW",
    },
    {
      unit: "Horsepower (hp)",
      description:
        "Mechanical power unit, approximately the power of one horse.",
      conversion: 0.00134102,
      example: "1 W ≈ 0.00134 hp, 745.7 W ≈ 1 hp",
    },
    {
      unit: "BTU/hour (BTU/h)",
      description:
        "British Thermal Unit per hour, common in heating/cooling systems.",
      conversion: 3.41214,
      example: "1 W ≈ 3.412 BTU/h, 0.293 W ≈ 1 BTU/h",
    },
    {
      unit: "Ton of Refrigeration (TR)",
      description: "Cooling capacity equal to 12,000 BTU/hour.",
      conversion: 0.000284345,
      example: "1 W ≈ 0.000284 TR, 3,516.85 W ≈ 1 TR",
    },
    {
      unit: "Calorie/second (cal/s)",
      description: "Energy transfer rate in calories per second.",
      conversion: 0.238846,
      example: "1 W ≈ 0.239 cal/s, 4.1868 W ≈ 1 cal/s",
    },
    {
      unit: "Foot-pound/second (ft·lb/s)",
      description: "Mechanical power unit in imperial system.",
      conversion: 0.737562,
      example: "1 W ≈ 0.738 ft·lb/s, 1.3558 W ≈ 1 ft·lb/s",
    },
    {
      unit: "Volt-ampere (VA)",
      description:
        "Apparent power in electrical systems (equal to watts for DC).",
      conversion: 1,
      example: "1 W = 1 VA in DC circuits",
    },
    {
      unit: "Erg/second (erg/s)",
      description: "CGS unit of power (1 erg/s = 10⁻⁷ watts).",
      conversion: 10000000,
      example: "1 W = 10,000,000 erg/s, 0.0000001 W = 1 erg/s",
    },
    {
      unit: "Pferdestärke (PS)",
      description: "German metric horsepower unit.",
      conversion: 0.00135962,
      example: "1 W ≈ 0.00136 PS, 735.499 W ≈ 1 PS",
    },
    {
      unit: "Human Power Output",
      description: "Average sustained human power (≈100 W for adults).",
      conversion: 0.01,
      example: "1 W ≈ 1% of human power, 100 W ≈ 1 human power equivalent",
    },
    {
      unit: "Incandescent Light Bulb",
      description: "Typical power consumption (60-100 W).",
      conversion: 0.016667,
      example: "1 W ≈ 1/60 of a 60W bulb",
    },
    {
      unit: "LED Light Bulb",
      description: "Modern equivalent (≈10 W for 60W brightness).",
      conversion: 0.1,
      example: "1 W ≈ 1/10 of a 10W LED bulb",
    },
    {
      unit: "Laptop Computer",
      description: "Average power consumption (≈50 W).",
      conversion: 0.02,
      example: "1 W ≈ 1/50 of a laptop's power draw",
    },
    {
      unit: "Solar Panel Output",
      description: "Per square meter in full sunlight (≈200 W/m²).",
      conversion: 0.005,
      example: "1 W ≈ 1/200 of a square meter panel output",
    },
    {
      unit: "Wind Turbine (Large)",
      description: "Modern 2MW turbine at rated capacity.",
      conversion: 0.0000005,
      example: "1 W ≈ 1/2,000,000 of a large turbine's output",
    },
    {
      unit: "Nuclear Power Plant",
      description: "Typical output (1GW = 1 billion watts).",
      conversion: 0.000000001,
      example: "1 W ≈ 1 billionth of a GW plant's output",
    },
    {
      unit: "Sun's Total Output",
      description: "Solar power (3.828×10²⁶ W).",
      conversion: 2.612e-27,
      example: "1 W ≈ 2.612e-27 of the Sun's power",
    },
  ],
  Yards: [
    {
      unit: "Meter (m)",
      description:
        "The SI base unit of length, equal to approximately 3.28 feet.",
      conversion: 0.9144,
      example: "1 yard = 0.9144 m, 1.09361 yards = 1 m",
    },
    {
      unit: "Foot (ft)",
      description: "Imperial unit equal to 12 inches or 1/3 of a yard.",
      conversion: 3,
      example: "1 yard = 3 feet, 0.333333 yards = 1 foot",
    },
    {
      unit: "Inch (in)",
      description: "Imperial unit equal to 1/36 of a yard.",
      conversion: 36,
      example: "1 yard = 36 inches, 0.0277778 yards = 1 inch",
    },
    {
      unit: "Mile (mi)",
      description: "Imperial unit equal to 1,760 yards.",
      conversion: 0.000568182,
      example: "1 yard ≈ 0.000568 miles, 1,760 yards = 1 mile",
    },
    {
      unit: "Centimeter (cm)",
      description: "Metric unit equal to 1/100 of a meter.",
      conversion: 91.44,
      example: "1 yard = 91.44 cm, 0.0109361 yards = 1 cm",
    },
    {
      unit: "Kilometer (km)",
      description: "Metric unit equal to 1,000 meters.",
      conversion: 0.0009144,
      example: "1 yard ≈ 0.000914 km, 1,093.61 yards = 1 km",
    },
    {
      unit: "Nautical Mile (nmi)",
      description: "Unit used in maritime and aviation navigation.",
      conversion: 0.000493737,
      example: "1 yard ≈ 0.000494 nmi, 2,025.37 yards = 1 nmi",
    },
    {
      unit: "Light-Year (ly)",
      description: "Distance light travels in one year (astronomical unit).",
      conversion: 9.66522e-17,
      example: "1 yard ≈ 9.67e-17 ly, 1.03462e+16 yards = 1 ly",
    },
    {
      unit: "Fathom",
      description: "Nautical unit equal to 2 yards (6 feet).",
      conversion: 0.5,
      example: "1 yard = 0.5 fathoms, 2 yards = 1 fathom",
    },
    {
      unit: "Rod",
      description: "Traditional unit equal to 5.5 yards.",
      conversion: 0.181818,
      example: "1 yard ≈ 0.181818 rods, 5.5 yards = 1 rod",
    },
    {
      unit: "Furlong",
      description: "Unit used in agriculture equal to 220 yards.",
      conversion: 0.00454545,
      example: "1 yard ≈ 0.004545 furlongs, 220 yards = 1 furlong",
    },
    {
      unit: "Football Field (US)",
      description: "Standard American football field length (100 yards).",
      conversion: 0.01,
      example: "1 yard = 1% of a football field, 100 yards = 1 field",
    },
    {
      unit: "Basketball Court (NBA)",
      description: "NBA court length (94 feet ≈ 31.33 yards).",
      conversion: 0.031915,
      example: "1 yard ≈ 3.19% of an NBA court",
    },
    {
      unit: "Blue Whale Length",
      description: "Average length of largest animal (≈30 yards).",
      conversion: 0.0333333,
      example: "1 yard ≈ 1/30 of a blue whale's length",
    },
    {
      unit: "Semi-Truck Trailer",
      description: "Standard trailer length (≈20 yards).",
      conversion: 0.05,
      example: "1 yard = 5% of a trailer length",
    },
    {
      unit: "London Bus (Routemaster)",
      description: "Classic double-decker bus length (≈8.38 yards).",
      conversion: 0.119331,
      example: "1 yard ≈ 11.93% of a bus length",
    },
    {
      unit: "Giraffe Height",
      description: "Average adult male height (≈5.5 yards).",
      conversion: 0.181818,
      example: "1 yard ≈ 18.18% of a giraffe's height",
    },
    {
      unit: "Earth's Circumference",
      description: "Distance around the equator (≈43,941,760 yards).",
      conversion: 2.27561e-8,
      example: "1 yard ≈ 2.28e-8 of Earth's circumference",
    },
    {
      unit: "Football (Soccer) Pitch",
      description: "Standard pitch length (100-130 yards).",
      conversion: 0.00869565,
      example: "1 yard ≈ 0.87% of a 115-yard pitch",
    },
    {
      unit: "Human Step",
      description: "Average adult step length (≈0.8 yards).",
      conversion: 1.25,
      example: "1 yard ≈ 1.25 steps",
    },
    {
      unit: "Tennis Court Length",
      description: "Singles court length (78 feet ≈ 26 yards).",
      conversion: 0.0384615,
      example: "1 yard ≈ 3.85% of a tennis court",
    },
    {
      unit: "Olympic Swimming Pool",
      description: "Standard length (50 meters ≈ 54.68 yards).",
      conversion: 0.018288,
      example: "1 yard ≈ 1.83% of a pool length",
    },
    {
      unit: "Eiffel Tower Height",
      description: "Total height (1,083 feet ≈ 361 yards).",
      conversion: 0.00277008,
      example: "1 yard ≈ 0.277% of the Eiffel Tower",
    },
    {
      unit: "Statue of Liberty Height",
      description: "Ground to torch (305 feet ≈ 101.67 yards).",
      conversion: 0.00983607,
      example: "1 yard ≈ 0.984% of the statue's height",
    },
    {
      unit: "Planck Length",
      description: "Theoretical smallest measurable length.",
      conversion: 5.65824e34,
      example: "1 yard ≈ 5.66e34 Planck lengths",
    },
  ],
};

export default Definations;
