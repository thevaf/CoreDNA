const { Nucleotide } = require("./DNAclass/nucloide")
let colors = require("colors")

function transcribe(dna) {
    let RNA = []
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] == "A") {
            RNA.push("U")
        }
        if (dna[i] == "T") {
            RNA.push("A")
        }
        if (dna[i] == "C") {
            RNA.push("G")
        }
        if (dna[i] == "G") {
            RNA.push("C")
        }
        return RNA
    }

}
function Protein(DNA) {
    let count = 0
    for (let i = 0; i < DNA.length - 2; i += 3) {
        let codon = DNA[i].type + DNA[i+1].type + DNA[i+2].type;
        
        switch (codon) {
            case "GCT":
            case "GCC":
            case "GCA":
            case "GCG":
                console.log(`Alanina ${DNA[i].id}`.blue);
                count++
                break;
            case "TGT":
            case "TGC":
                console.log(`Cisteína ${DNA[i].id}`.yellow);
                count++
                break;
            case "GAT":
            case "GAC":
                console.log(`Ácido aspártico ${DNA[i].id}`.bgBlack.green);
                count++
                break;
            case "GAA":
            case "GAG":
                console.log(`Ácido glutâmico ${DNA[i].id}`.bgBlack.yellow);
                count++
                break;
            case "TTT":
            case "TTC":
                console.log(`Fenilalanina ${DNA[i].id}`.bgBlack.blue);
                count++
                break;
            case "GGT":
            case "GGC":
            case "GGA":
            case "GGG":
                console.log(`Glicina ${DNA[i].id}`.gray);
                count++
                break;
            case "CAT":
            case "CAC":
                console.log(`Histidina ${DNA[i].id}`.magenta);
                count++
                break;
            case "ATT":
            case "ATC":
            case "ATA":
                console.log(`Isoleucina ${DNA[i].id}`.bgBlack.blue);
                count++
                break;
            case "AAA":
            case "AAG":
                console.log(`Lisina ${DNA[i].id}`.bgMagenta.black);
                count++
                break;
            case "ATG":
                console.log(`Metionina ${DNA[i].id}`.green.bgGreen);
                count++
                break;
            case "TTA":
            case "TTG":
            case "CTT":
            case "CTC":
            case "CTA":
            case "CTG":
                console.log(`Leucina ${DNA[i].id}`.blue);
                count++
                break;
            case "AAT":
            case "AAC":
                console.log(`Asparagina ${DNA[i].id}`.green.bgWhite);
                count++
                break;
            case "CAA":
            case "CAG":
                console.log(`Ácido glutâmico ${DNA[i].id}`.bgBlack.yellow);
                count++
                break;
            case "CGT":
            case "CGC":
            case "CGA":
            case "CGG":
            case "AGA":
            case "AGG":
                console.log(`Arginina ${DNA[i].id}`.bgBlack.blue);
                count++
                break;
            case "TCT":
            case "TCC":
            case "TCA":
            case "TCG":
            case "AGT":
            case "AGC":
                console.log(`Serina ${DNA[i].id}`.green);
                count++
                break;
            case "ACT":
            case "ACC":
            case "ACA":
            case "ACG":
                console.log(`Treonina ${DNA[i].id}`.bgBlack.yellow);
                count++
                break;
            case "TGG":
                console.log(`Triptofano ${DNA[i].id}`.blue.bgCyan);
                count++
                break;
            case "TAT":
            case "TAC":
                console.log(`Tirosina ${DNA[i].id}`.green.bgBlack);
                count++
                break;
            case "GTT":
            case "GTC":
            case "GTA":
            case "GTG":
                console.log(`Valina ${DNA[i].id}`.bgBlack.magenta)
                 count++
        }}
    
    console.log(`Foram encontrados ${count} aminoacidos.`.bgCyan)
}

function GenerateDNARandom(length, IDN) {
    if (!["Double", "Unic"].includes(IDN)) {
        new Error("Tipo de IDN, não encontrado, os unicos possiveis são: Double e Unic")
    }
    let nuclotidesun = ["A", "C", "G", "T"]
    let DnaSequence = []
    for (let i = 0; i < length; i++) {
        const type = nuclotidesun[Math.floor(Math.random() * nuclotidesun.length)];
        const position = i;
        let nuclo = new Nucleotide(type, position)
        nuclo.Idnew(IDN)
        nuclo.complement = transcribe(type)[0]
        DnaSequence.push(nuclo);
    }
    return DnaSequence
}
function GenerateDNAPreset(text) {
    let nuclotidesun = ["A", "C", "G", "T"]
    let DnaSequence = []
    for (let i = 0; i < text.length; i++) {
       if(nuclotidesun.includes(text[i])) {
         let nuclo = new Nucleotide(text[i], i)
         nuclo.Idnew("Unic")
         nuclo.complement = transcribe(nuclo.type)[0]
         DnaSequence.push(nuclo)
       }
    }
    return DnaSequence
}


module.exports.GenerateDNARandom = GenerateDNARandom
module.exports.Protein = Protein
module.exports.GenerateDNAPreset = GenerateDNAPreset
module.exports.transcribe = transcribe