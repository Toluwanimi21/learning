let car = {
    make: "bmw",
    model: "745li",
    year: 2010,
    getPrice: function() {
        return 5000;
    },

    printDescription: function() {
        console.log(this.mak + " " + this.model);
    }
}

car.printDescription();
console.log(car.year);