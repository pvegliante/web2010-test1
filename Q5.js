// Question 5

// Add a new property to the cars object called 'getModels' WITHOUT typing inside
// the cars definition below.

// The value of the getModels property should be a function that creates an
// empty array called models, then pushes only the models from cars.list to the
// models array, and then returns the models array, similar to how the getBrands
// method works.

// Lastly, log to the console the return value of the getModels method.

var cars = {
    list: [
        {brand: 'honda', model: 'civic', year: 2004},
        {brand: 'ford', model: 'f-150', year: 2016},
        {brand: 'chevrolet', model: 'camaro', year: 1970}
    ],
    getBrands: function() {
        var brands = [];

        cars.list.forEach(function(car) {
            brands.push( car.brand );
        });

        return brands;
    }
};

  cars.getModel function();
    var model = [];

    cars.list.forEach(function(car) {
        model.push( car.model );
    });

    return model;

console.log(car.getModel());

// incorrect

// Answer:
cars.getModels = function() {
    var models = [];

    cars.list.forEach(function(car) {
        models.push( car.model );
    });

    return models;
}

console.log(car.getModels());
