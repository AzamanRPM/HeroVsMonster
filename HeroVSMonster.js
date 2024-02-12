var heroHealth = 15;
var monsterHealth= 15;

function startBattle(){
let heroAttackPower = Math.floor(Math.random()*10);

let monsterAttackPower = Math.floor(Math.random()*10);


do{
    monsterHealth-=heroAttackPower;
    console.log("Monster was Damaged " + heroAttackPower+" Monster health is now "+monsterHealth);
    if(monsterHealth>=1){
        heroHealth-=monsterAttackPower;
        console.log("Hero was Damaged "+monsterAttackPower+" Hero Health is Now "+heroHealth);
        if(heroHealth>=1){
            monsterHealth-=heroAttackPower;
        }
    }
        if(heroHealth<=0){
            console.log("***Your Hero Is dead***")
            break;
        }
        else if (monsterHealth<=0){
            console.log("***Monster is dead!*** ");
            break;
        }

    }while (heroHealth>=1)
}

console.log(startBattle());
