// Завд 1
// class PrintMachine {
//     constructor(fontSize, fontColor, fontFamily) {
//         this.fontSize = fontSize;
//         this.fontColor = fontColor;
//         this.fontFamily = fontFamily;
//     }

//     print(text) {
//         document.write(`<p style="font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily};">${text}</p>`);
//     }
// }

// var myPrinter = new PrintMachine("20px", "blue", "Arial");
// myPrinter.print("Hello, world!");

// Завд 2
class News {
    constructor(title, text, tags, publicationDate) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publicationDate = new Date(publicationDate);
    }

    print() {
        var now = new Date();
        var timeDifference = now - this.publicationDate;
        var oneDay = 24 * 60 * 60 * 1000;
        var oneWeek = 7 * oneDay;

        var dateOutput;
        if (timeDifference < oneDay) {
            dateOutput = "сьогодні";
        } else if (timeDifference < oneWeek) {
            var daysAgo = Math.floor(timeDifference / oneDay);
            dateOutput = `${daysAgo} днів тому`;
        } else {
            dateOutput = this.publicationDate.toLocaleDateString('uk-UA');
        }

        document.write(`
            <div>
                <h2>${this.title}</h2>
                <p>${this.text}</p>
                <p>Tags: ${this.tags.join(', ')}</p>
                <p>Date: ${dateOutput}</p>
            </div>
        `);
    }
}

var newsItem = new News("Заголовок новини", "Текст новини", ["тег1", "тег2"], "2024-06-07");
newsItem.print();