const { GenerateDNARandom, Protein, GenerateDNAPreset, transcribe } = require(".")
let readline = require("readline")
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
let fs = require("fs")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function run(IDN, length) {
    return GenerateDNARandom(length, IDN)
}

function GUI() {
    let IDN = null
    let length = null
    rl.question("Geração automatica s ou n? (tamanho não importa) \n", (awser) => {
        if (awser == "s") {
            rl.question("Qual o IDN(Double ou Unic)? \n", (awser) => {
                IDN = awser
                if (!["Double", "Unic"].includes(IDN)) {
                    console.log("Apenas Double ou Unic.")
                    setTimeout(() => {
                        rl.close()
                    }, 10)
                }
                console.log(IDN)
                rl.question("Qual o tamanho do DNA? \n", (awser) => {
                    length = awser
                    let adna = GenerateDNARandom(length, IDN)
                    const dna = adna.map(objeto => JSON.stringify(objeto)).join('\n')
                    Protein(adna)
                    fs.writeFile("./output/report.txt", `${dna}`, (err) => {
                        if (err) throw err
                    })
                    return console.log("Relatorio gerado em /output/report.txt".rainbow)
                })
            })

        }
        if (awser == "n") {
            rl.question("Ensira parte ou o DNA completo em um arquivo na pasta input, e coloque o nome aqui. \n", (awser) => {
                let part = awser
                fs.readFile(part, ((err, data) => {
                    let rnaarray = []
                    if (err) throw err
                    let dna = data.toString()
                    let adna = GenerateDNAPreset(dna)
                    for(let i = 0; i < dna.length; i++) {
                        if(transcribe(dna[i]) == "" || dna[i] == " " || transcribe(dna[i]) == "," || transcribe(dna[i]) == " ") continue;
                        rnaarray.push(transcribe(dna[i]))
                    }
                    let dnapreset = adna.map(objeto => JSON.stringify(objeto)).join('\n')
                    Protein(adna)
                    fs.writeFile("./output/report.txt", `${(dnapreset)}`, (err) => {
                        if (err) throw err
                    })
                    fs.writeFile("./output/reportRNA.txt", `${rnaarray}`, (err) => {
                        if (err) throw err
                    })
                    return console.log("Relatorio gerado em /output/report.txt".rainbow)

                }))
            })
        }
    })


}
module.exports.run = run
module.exports.GUI = GUI