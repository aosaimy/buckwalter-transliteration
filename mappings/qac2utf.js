exports["qac2utf"] = {"'": "\u0621", // hamza-on-the-line
            "|": "\u0622", // madda
            ">": "\u0623", // hamza-on-'alif
            "&": "\u0624", // hamza-on-waaw
            "<": "\u0625", // hamza-under-'alif
            "}": "\u0626", // hamza-on-yaa'
            "A": "\u0627", // bare 'alif
            "b": "\u0628", // baa'
            "p": "\u0629", // taa' marbuuTa
            "t": "\u062A", // taa'
            "v": "\u062B", // thaa'
            "j": "\u062C", // jiim
            "H": "\u062D", // Haa'
            "x": "\u062E", // khaa'
            "d": "\u062F", // daal
            "*": "\u0630", // dhaal
            "r": "\u0631", // raa'
            "z": "\u0632", // zaay
            "s": "\u0633", // siin
            "$": "\u0634", // shiin
            "S": "\u0635", // Saad
            "D": "\u0636", // Daad
            "T": "\u0637", // Taa'
            "Z": "\u0638", // Zaa' (DHaa')
            "E": "\u0639", // cayn
            "g": "\u063A", // ghayn
            "f": "\u0641", // faa'
            "q": "\u0642", // qaaf
            "k": "\u0643", // kaaf
            "l": "\u0644", // laam
            "m": "\u0645", // miim
            "n": "\u0646", // nuun
            "h": "\u0647", // haa'
            "w": "\u0648", // waaw
            "Y": "\u0649", // 'alif maqSuura
            "y": "\u064A", // yaa'
            "F": "\u064B", // fatHatayn
            "N": "\u064C", // Dammatayn
            "K": "\u064D", // kasratayn
            "a": "\u064E", // fatHa
            "u": "\u064F", // Damma
            "i": "\u0650", // kasra
            "~": "\u0651", // shaddah
            "o": "\u0652", // sukuun
            "`": "\u0670", // dagger 'alif
            "{": "\u0671", // waSla

            //Extended
            "^": "\u0653",//Maddah
            "#": "\u0654",//HamzaAbove
            ":": "\u06Dc",// smAllhighSeen
            "@": "\u06Df",// smAllhighRoundedZero
            "\"": "\u06E0",// smAllhighUprightrectAngularZero
            "[": "\u06E2",// smAllhIghmeemiSolatedForm
            ";": "\u06E3",// sMallLowSeen
            ",": "\u06E5",// smallWaw
            ".": "\u06E6",// SmallYa
            "!": "\u06E8",// smAllhighNoon
            "-": "\u06Ea",// emptYceNtreLowStop
            "+": "\u06Eb",// emptYcenTrehighStop
            "%": "\u06Ec",// RounDedhIghsTopwitHfilledCentre
            "]": "\u06Ed",// sMallLowMeem  
      }

exports["utf2qac"] = {}
Object.keys(exports["qac2utf"]).forEach(x=>{
      if(exports["utf2qac"][exports["qac2utf"][x]] != undefined)
            console.error("two reverse mappings", exports["utf2qac"][exports["qac2utf"][x]], x, "of",exports["qac2utf"][x])
      exports["utf2qac"][exports["qac2utf"][x]] = x
})
