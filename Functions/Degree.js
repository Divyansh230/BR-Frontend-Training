const choice = Math.floor(Math.random() * 2) + 1;

(function convert(choice) {
    switch (choice) {
        case 1:

            const degC = Math.floor(Math.random() * 100);
            const far = (degC * 9 / 5) + 32;
            console.log(`##Celsus:${degC} and Farhenheit ${far}`);
            break;

        case 2:
            const degF = Math.floor(Math.random() * 180) + 32;
            const C = (degF - 32) * 5 / 9;
            console.log(`#Celcisus : ${C} and Farhenhiet ${degF}`);
            break;
        default:
            console.log("Invalid");
    }
})(choice);