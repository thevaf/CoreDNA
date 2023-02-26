const { run, GUI } = require("./src/gui")

if(process.argv[2] == "runarg") {
    console.log(run(process.argv[3], process.argv[4]))
}
if(process.argv[2] == "rungui") {
    GUI()
}