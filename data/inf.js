const cicles_inf = [
    {
        "ciclo": 1,
        "cursos": [
            {
                "clave": "1MAT04",
                "curso": "Álgebra Matricial y Geometría Analítica",
                "abrev": "AMGA",
                "ct": 4,
                "requisitos": [],
                "creditos": 4.50
            },
            {
                "clave": "1MAT05",
                "curso": "Fundamentos de Cálculo",
                "abrev": "Fucal",
                "ct": 4,
                "requisitos": [],
                "creditos": 4.50
            },
            {
                "clave": "1FIS01",
                "curso": "Fundamentos de Física",
                "abrev": "FUFI",
                "ct": 3,
                "requisitos": [],
                "creditos": 3.50
            },
            {
                "clave": "1QUI01",
                "curso": "Química 1",
                "abrev": "Qui 1",
                "ct": 3,
                "requisitos": ["[1QUI02]"],
                "creditos": 3.50
            },
            {
                "clave": "1QUI02",
                "curso": "Laboratorio de Química 1",
                "abrev": "Lab Qui 1",
                "ct": 0,
                "requisitos": ["[1QUI01]"],
                "creditos": 0.75
            },
            {
                "clave": "1LIN15",
                "curso": "Comunicación Académica",
                "abrev": "Comunica",
                "ct": 2,
                "requisitos": [],
                "creditos": 3.00
            }
        ]
    },
    {
        "ciclo": 2,
        "cursos": [
            {
                "clave": "1MAT06",
                "curso": "Cálculo Diferencial",
                "abrev": "Cal 1",
                "ct": 4,
                "requisitos": ["1MAT05", "[1MAT04]"],
                "creditos": 4.50
            },
            {
                "clave": "1FIS02",
                "curso": "Física 1",
                "abrev": "FA 1",
                "ct": 4,
                "requisitos": ["1FIS01", "[1MAT06]", "[1FIS03]"],
                "creditos": 4.50
            },
            {
                "clave": "1FIS03",
                "curso": "Laboratorio de Física 1",
                "abrev": "Lab FA 1",
                "ct": 0,
                "requisitos": ["[1FIS02]"],
                "creditos": 0.50
            },
            {
                "clave": "1ING02",
                "curso": "Dibujo en Ingeniería",
                "abrev": "Dibujo",
                "ct": 3,
                "requisitos": ["1MAT04"],
                "creditos": 4.50
            },
            {
                "clave": "1LIN16",
                "curso": "Trabajo Académico",
                "abrev": "TA",
                "ct": 2,
                "requisitos": ["1LIN15"],
                "creditos": 3.00
            },
            {
                "clave": "1FIL01",
                "curso": "Ciencia y Filosofía",
                "abrev": "CFIL",
                "ct": 2,
                "requisitos": [],
                "creditos": 3.00
            },
            {
                "clave": "------",
                "curso": "Electivo de Humanidades 1",
                "abrev": "Electivo 1",
                "ct": 1,
                "requisitos": [],
                "creditos": 2.00
            }
        ]
    },
    {
        "ciclo": 3,
        "cursos": [
            {
                "clave": "1MAT07",
                "curso": "Cálculo Integral",
                "abrev": "Cal 2",
                "ct": 4,
                "requisitos": ["1MAT06", "1MAT04"],
                "creditos": 4.50
            },
            {
                "clave": "1MAT08",
                "curso": "Cálculo en Varias Variables",
                "abrev": "Cal 3",
                "ct": 4,
                "requisitos": ["[1MAT07]"],
                "creditos": 4.50
            },
            {
                "clave": "1FIS04",
                "curso": "Física 2",
                "abrev": "FA 2",
                "ct": 4,
                "requisitos": ["1FIS02", "1FIS03", "[1MAT07]", "[1FIS05]"],
                "creditos": 4.50
            },
            {
                "clave": "1FIS05",
                "curso": "Laboratorio de Física 2",
                "abrev": "Lab FA 2",
                "ct": 0,
                "requisitos": ["[1FIS04]"],
                "creditos": 0.50
            },
            {
                "clave": "1INF01",
                "curso": "Fundamentos de Programación",
                "abrev": "F. Progra",
                "ct": 2,
                "requisitos": ["1FIS02"], // TODO(5): (1FIS02) => MARK >= 8, FIX IT
                "creditos": 3.00
            },
            {
                "clave": "INF134",
                "curso": "Estructuras Discretas",
                "abrev": "ED",
                "ct": 4,
                "requisitos": ["[1MAT07]"],
                "creditos": 4.50
            }
        ]
    },
    {
        "ciclo": 4,
        "cursos": [
            {
                "clave": "1MAT09",
                "curso": "Cálculo Aplicado",
                "abrev": "Cal 4",
                "ct": 4,
                "requisitos": ["1MAT08"],
                "creditos": 4.50
            },
            {
                "clave": "1FIS06",
                "curso": "Física 3",
                "abrev": "FA 3",
                "ct": 4,
                "requisitos": ["1FIS04", "1FIS05", "[1FIS07]"],
                "creditos": 4.50
            },
            {
                "clave": "1FIS07",
                "curso": "Laboratorio de Física 3",
                "abrev": "Lab FA 3",
                "ct": 0,
                "requisitos": ["[1FIS06]"],
                "creditos": 0.50
            },
            {
                "clave": "INF144",
                "curso": "Técnicas de Programación",
                "abrev": "TP",
                "ct": 4,
                "requisitos": ["1INF01"],
                "creditos": 5.00
            },
            {
                "clave": "0000H2",
                "curso": "Electivo de Humanidades 2",
                "abrev": "Electivo 2",
                "ct": 2,
                "requisitos": [],
                "creditos": 3.00
            },
            {
                "clave": "0000T1",
                "curso": "Electivo de Teología y Religión",
                "abrev": "Teo",
                "ct": 3,
                "requisitos": [],
                "creditos": 3.50
            }
        ]
    },
    {
        "ciclo": 5,
        "cursos": [
            {
                "clave": "1INF06",
                "curso": "Estructura de Datos y Programación Metódica",
                "abrev": "EDPM",
                "ct": 4,
                "requisitos": [
                    // "INF144",
                    "[INF263]"
                ],
                "creditos": 4.50
            },
            {
                "clave": "EST218",
                "curso": "Estadística Para Ingeniería",
                "abrev": "Estadística",
                "ct": 3,
                "requisitos": [
                    // "1MAT07"
                ],
                "creditos": 3.50
            },
            {
                "clave": "IEE229",
                "curso": "Electrónica Digital",
                "abrev": "ED",
                "ct": 3,
                "requisitos": [
                    // "1MAT07"
                ],
                "creditos": 3.75
            },
            {
                "clave": "IND251",
                "curso": "Gestión y Dirección de Empresas",
                "abrev": "GYDE",
                "ct": 3,
                "requisitos": [
                    "70 créditos aprobados"
                ],
                "creditos": 3.75
            },
            {
                "clave": "INF263",
                "curso": "Bases de Datos",
                "abrev": "Bases",
                "ct": 3,
                "requisitos": [
                    "70 créditos aprobados"
                ],
                "creditos": 3.75
            },
            {
                "clave": "INF263",
                "curso": "Algoritmia",
                "abrev": "Algoritmia",
                "ct": 3,
                "requisitos": [
                    "[1INF06]"
                ],
                "creditos": 3.75
            }
        ]
    },
    {
        "ciclo": 6,
        "cursos": [
            {
                "clave": "IEE240",
                "curso": "Organización y Arquitectura de Computadoras",
                "abrev": "OAC",
                "ct": 4,
                "requisitos": [
                    "IEE229"
                ],
                "creditos": 5.00
            },
            {
                "clave": "IND231",
                "curso": "Ingeniería Económica",
                "abrev": "Ingeco",
                "ct": 3,
                "requisitos": [
                    "80 créditos aprobados"
                ],
                "creditos": 3.50
            },
            {
                "clave": "INF248",
                "curso": "Sistemas de Información 1",
                "abrev": "Sistemas 1",
                "ct": 4,
                "requisitos": [
                    "IEE229", "[INF291]"
                ],
                "creditos": 5.00
            },
            {
                "clave": "INF281",
                "curso": "Lenguaje de Programación 1",
                "abrev": "LP1",
                "ct": 4,
                "requisitos": [
                    "1INF06", "INF263"
                ],
                "creditos": 5.00
            },
            {
                "clave": "INF291",
                "curso": "Métodos y Procedimientos",
                "abrev": "Métodos",
                "ct": 3,
                "requisitos": [
                    "IND251"
                ],
                "creditos": 3.50
            }
        ]
    }
];