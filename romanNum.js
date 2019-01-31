function convertToRoman(num) {
    let roman = "";
    let y = "";

    if(num <= 5){
        fiveOrLess(num);
    }else if(num > 5 && num < 9){
        sixSevEight(num);
    }
    
    function fiveOrLess(x){
        if(x === 1){
            x = "I";
        }else if(x === 2){
            x = "II";
        }else if(x === 3){
            x = "III";
        }else if(x === 4){
            x = "IV";
        }else if(x === 5){
            x = "V";
        }
        y = x;
    }

    function sixSevEight(x){
        if(x === 6){
            x ="VI";
        }else if(x === 7){
            x = "VII";
        }else{
            x = "VIII";
        }
        y = x;
    }


    roman = y;
 return roman;
}
console.log(convertToRoman());
