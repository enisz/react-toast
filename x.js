const fs = require("fs");

const list = fs.readFileSync("list.txt", { encoding : "utf-8"});

let counter = 0;
let index = 0;
let items = [[]];

list.split("\n").forEach(
    line => {
        if(counter == 10) {
            index++;
            counter = 0;
            items[index] = [];
        }

        items[index].push(`"${line.trim()}"`);

        counter++;
    }
)

items.forEach(
    line => {
        console.log(line.join(", ") + ",")
    }
)