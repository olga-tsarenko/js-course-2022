new Promise((resolve) => {
    const hamster = {
        name: 'Хом`як',
        healthLevel: 10,
        happyLevel: 10,
        foodLevel: 10,
        addHealthLevel() {
            this.healthLevel += 3;
            this.happyLevel -= 1;
            this.foodLevel -= 1;

            const stateOfEagle = `\nМетод addHealthLevel \nЗдоров'я - ${this.healthLevel} \nЩастя - ${this.happyLevel} \nСитість - ${this.foodLevel}`;
            console.log(stateOfEagle);
        },
        addHappyLevel() {
            this.healthLevel -= 1;
            this.happyLevel += 3;
            this.foodLevel -= 1;

            const stateOfEagle = `\nМетод addHappyLevel \nЗдоров'я - ${this.healthLevel} \nЩастя - ${this.happyLevel} \nСитість - ${this.foodLevel}`;
            console.log(stateOfEagle);
        },
        addFoodLevel() {
            this.healthLevel -= 1;
            this.happyLevel -= 1;
            this.foodLevel += 3;

            const stateOfEagle = `\nМетод addFoodLevel \nЗдоров'я - ${this.healthLevel} \nЩастя - ${this.happyLevel} \nСитість - ${this.foodLevel}`;
            console.log(stateOfEagle);
        },
    };
    resolve(hamster);
}).then((data) => {
    const startDate = Date.now();

    const game = setInterval(() => {
        const random = Math.floor(Math.random() * 3);
        switch (random) {
            case 0:
                data.addHealthLevel();
                break;
            case 1:
                data.addHappyLevel();
                break;
            case 2:
                data.addFoodLevel();
                break;
            default:
                console.log('Error! Try again');
        }

        const hamsterIsDead = data.healthLevel < 1 || data.happyLevel < 1 || data.foodLevel < 1;
        if (hamsterIsDead) {
            console.log('\nОдин з показнинків тамагочі нижче 1 !!!');

            clearInterval(game);

            const endDate = Date.now();

            const calculateSeconds = Math.round((endDate - startDate) / 1000);
            console.log(`Тамагочі ${data.name} прожив: ${calculateSeconds} секунд`);
        }
    }, 500);
}).catch((error) => console.error('Error: ', error)).finally(() => console.log('Дякую за гру!'));
