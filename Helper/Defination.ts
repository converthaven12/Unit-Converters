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
};

export default Definations;
