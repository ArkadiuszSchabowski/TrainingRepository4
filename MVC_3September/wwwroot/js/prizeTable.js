class PrizeTable {
    constructor() {
        this.prizeTable = document.getElementById("prizeTable");
        this.CreateTableInsidePrizeTable();
    }

    CreateTableInsidePrizeTable = () => {
        for (let i = 10; i >= 1; i--) {
            let table = document.createElement("div");
            table.classList.add("blueVioletRow");

            switch (i) {
                case 10:
                    table.innerText = 1000000;
                    table.id = "RowQuestion10";
                    break;
                case 9:
                    table.innerText = 100000;
                    table.id = "RowQuestion9";
                    break;
                case 8:
                    table.innerText = 50000;
                    table.id = "RowQuestion8";
                    break;
                case 7:
                    table.innerText = 25000;
                    table.id = "RowQuestion7";
                    break;
                case 6:
                    table.innerText = 10000;
                    table.id = "RowQuestion6";
                    break;
                case 5:
                    table.innerText = 5000;
                    table.id = "RowQuestion5";
                    break;
                case 4:
                    table.innerText = 2000;
                    table.id = "RowQuestion4";
                    break;
                case 3:
                    table.innerText = 1000;
                    table.id = "RowQuestion3";
                    break;
                case 2:
                    table.innerText = 700;
                    table.id = "RowQuestion2";
                    break;
                case 1:
                    table.innerText = 400;
                    table.id = "RowQuestion1";
                    table.style.borderBottom = "none";
                    break;
            }
            this.prizeTable.appendChild(table);
        }
    }
}
let prizeTable = new PrizeTable();