class Nucleotide {
    constructor(type, position) {
        this.type = type;
        this.position = position;
        this.id = null;
        this.complement = null;
    }
    Idnew(maxExp) {
        if (maxExp == "Unic") {
            let chars = '0123456789abcdefghijklmnopqrstuvwxyz@#';
            let id = '';
            for (let i = 0; i < 256; i++) {
                let randomIndex = Math.floor(Math.random() * chars.length);
                id += chars[randomIndex];
            }
            this.id = id
        }
        if (maxExp == "Double") {
            let chars = '0123456789abcdefghijklmnopqrstuvwxyz@#';
            let id = '';
            for (let i = 0; i < 1024; i++) {
                let randomIndex = Math.floor(Math.random() * chars.length);
                id += chars[randomIndex];
            }
            this.id = id
        }
    }
    get Idget() {
        console.log(this.id)
    }

}
module.exports.Nucleotide = Nucleotide