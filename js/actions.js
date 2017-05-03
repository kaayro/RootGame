var actions = [
    {//0
        cmd: "ls network -m -wifi -all",
        msg: "",
        btn: [
            {desc: "Seleccionar LinkSys81560032",act: 1},
            {desc: "Seleccionar O96s25c0o55r6pNetwork1732",act: 2}
        ],
        process: [
            "leyendo redes...",
            "&nbsp;",
            "Se han encontrado 2 redes inalámbricas:",
            "&nbsp;",
            "LinkSys81560032",
            "O96s25c0o55r6pNetwork1732",
            "&nbsp;"
        ]
    },
    {//1
        cmd: "backdoor LinkSys81560032 -curl packlistener",
        msg: "Tengo que resolver la contraseña que al parecer viene en 2 conjuntos de 4 paquetes, sólo tengo que adivinar en qué está encriptado... ¿Por pares o por md5?",
        btn: [
            {desc: "Descifrar paquetes por pares",act: 3},
            {desc: "Descifrar paquetes por md5",act: 4},
            {desc: "¿Qué es esto?",act: 'msg&1'}
        ],
        process: [
            "enviando datos...",
            "&nbsp;",
            "Recibiendo paquetes:",
            "&nbsp;",
            "4cad284e3b9d22635f8fc727d456c86fPack1",//E255
            "28b18715a8d3b85fb0bf0d8587610b9dPack2",//ff00
            "7a9e0618a6d1e91fcb3f4cd16ad82577Pack3",//a096
            "d33a97659b64e1f36ff0639a0ddedd8ePack4",//d192
            "&nbsp;",
            "5b1d6afd55a2b6b5a3236c7062529caaPack1",//b910
            "98c657dc156463e2a6d1cd0fd4685afbPack2",//F012
            "a9e6c27835ff050f5f1034b54ba3f6f5Pack3",//c050
            "d33a97659b64e1f36ff0639a0ddedd8ePack4",//d192
            "&nbsp;"
        ]
    },
    {//2
        cmd: "backdoor O96s25c0o55r6pNetwork1732 -curl packlistener",
        msg: "Tengo que resolver la contraseña que al parecer viene en 2 conjuntos de 4 paquetes, sólo tengo que adivinar en qué está encriptado... ¿Por pares o por md5?",
        btn: [
            {desc: "Descifrar paquetes por pares",act: 3},
            {desc: "Descifrar paquetes por md5",act: 4},
            {desc: "¿Qué es esto?",act: 'msg&1'}
        ],
        process: [
            "enviando datos...",
            "&nbsp;",
            "Recibiendo paquetes:",
            "&nbsp;",
            "4cad284e3b9d22635f8fc727d456c86fPack1",//E255
            "28b18715a8d3b85fb0bf0d8587610b9dPack2",//ff00
            "7a9e0618a6d1e91fcb3f4cd16ad82577Pack3",//a096
            "d33a97659b64e1f36ff0639a0ddedd8ePack4",//d192
            "&nbsp;",
            "5b1d6afd55a2b6b5a3236c7062529caaPack1",//b910
            "98c657dc156463e2a6d1cd0fd4685afbPack2",//F012
            "a9e6c27835ff050f5f1034b54ba3f6f5Pack3",//c050
            "d33a97659b64e1f36ff0639a0ddedd8ePack4",//d192
            "&nbsp;"
        ]
    },
    //--------------------------------------------------Historia 1
    {//3
        cmd: "decode pair 4cad284e3b9d22635f8fc727d456c86f\n"
            +"decode pair 28b18715a8d3b85fb0bf0d8587610b9d\n"
            +"decode pair 7a9e0618a6d1e91fcb3f4cd16ad82577\n"
            +"decode pair d33a97659b64e1f36ff0639a0ddedd8e\n"
            +"decode pair 5b1d6afd55a2b6b5a3236c7062529caa\n"
            +"decode pair 98c657dc156463e2a6d1cd0fd4685afb\n"
            +"decode pair a9e6c27835ff050f5f1034b54ba3f6f5\n"
            +"decode pair d33a97659b64e1f36ff0639a0ddedd8e\n",
        msg: "Ahora sólo tengo que colocar la contraseña del wifi, si no es tendré que descifrar por md5",
        btn: [
            {desc: "Colocar contraseña",act: 5},
            {desc: "Descifrar paquetes por md5",act: 4},
            {desc: "¿Qué es esto?",act: 'msg&3'}
        ],
        process: [
            "descifrando datos...",
            "&nbsp;",
            "1 = cd8ebd23ff77468f",//E255
            "2 = 2b81adb5bb088609",//ff00
            "3 = ae68619fbfc1a857",//a096
            "4 = 3a75b413f03adede",//d192
            "5 = bdad526533c022ca",//b910
            "6 = 867c543261df48ab",//F012
            "7 = 96285f5ff045b365",//c050
            "8 = 3a75b413f03adede",//d192
            "&nbsp;"
        ]
    },
    {//4
        cmd: "decode md5 4cad284e3b9d22635f8fc727d456c86f\n"
            +"decode md5 28b18715a8d3b85fb0bf0d8587610b9d\n"
            +"decode md5 7a9e0618a6d1e91fcb3f4cd16ad82577\n"
            +"decode md5 d33a97659b64e1f36ff0639a0ddedd8e\n"
            +"decode md5 5b1d6afd55a2b6b5a3236c7062529caa\n"
            +"decode md5 98c657dc156463e2a6d1cd0fd4685afb\n"
            +"decode md5 a9e6c27835ff050f5f1034b54ba3f6f5\n"
            +"decode md5 d33a97659b64e1f36ff0639a0ddedd8e\n",
        msg: "Ahora sólo tengo que colocar la contraseña del wifi, si no es tendré que descifrar por pares",
        btn: [
            {desc: "Colocar contraseña",act: 6},
            {desc: "Descifrar paquetes por pares",act:3},
            {desc: "¿Qué es esto?",act: 'msg&4'}
        ],
        process: [
            "descifrando datos...",
            "&nbsp;",
            "1 = E255",
            "2 = ff00",
            "3 = a096",
            "4 = d192",
            "5 = b910",
            "6 = F012",
            "7 = c050",
            "8 = d192",
            "&nbsp;"
        ]
    },
    {//5
        cmd: "connect network -wifi -password cd8ebd23ff77468f\n"
            +"2b81adb5bb088609\n"
            +"ae68619fbfc1a857\n"
            +"3a75b413f03adede\n"
            +"bdad526533c022ca\n"
            +"867c543261df48ab\n"
            +"96285f5ff045b365\n"
            +"3a75b413f03adede\n",
        msg: "Rayos, no acepta la contraseña tendré que descifrar por md5",
        btn: [
            {desc: "Descifrar paquetes por md5",act: 4},
            {desc: "¿Qué es esto?",act: 'msg&5'}
        ],
        process: [
            "Solicitando acceso",
            "&nbsp;",
            "Acceso Denegado",
            "Contraseña no válida",
            "&nbsp;"
        ]
    },
    {//6
        cmd: "connect network -wifi -password E255\n"
            +"ff00\n"
            +"a096\n"
            +"d192\n"
            +"b910\n"
            +"F012\n"
            +"c050\n"
            +"d192\n",
        msg: "Vaya, ¡me conecté! ahora puedo hacer lo que quiera en esta red",
        btn: [
            {desc: "Descifrar paquetes por pares",act: 3},
            {desc: "¿Qué es esto?",act: 'msg&5'}
        ],
        process: [
            "Solicitando acceso",
            "&nbsp;",
            "Acceso Satisfactorio",
            "Obteniendo IP...",
            "IP: 192.168.1.24",
            "Conectado a la red",
            "&nbsp;"
        ]
    },
];