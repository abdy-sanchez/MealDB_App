const selectedMeal = localStorage.getItem("selectedMeal");

DisplayData(selectedMeal);




async function InnerQuery(name){

    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + name ;

    try {

        const response = await axios.get(url);

        return response.data;

        
    } catch (error) {

        console.error(`API Error: ${error}`);
        
    }

};



async function DisplayData(mealName){

    const dataCard = document.querySelector('[id="main-data"]');

    const errorCard = document.querySelector('[id="error"]');

    const dataResult = await InnerQuery(mealName);


    if(dataResult.meals == null){

        errorCard.style.display = "block";
        dataCard.style.display = "none";

    }else{

        dataCard.style.display = "block";
        errorCard.style.display = "none";

        const data = dataResult.meals[0];

            let mealName = document.querySelector('[id="meal-name"]');

            mealName.innerHTML = data.strMeal;


            let mealImage = document.querySelector('[id="meal-image"]');

            mealImage.src = data.strMealThumb;


            let mealCategory = document.querySelector('[id="category"]');

            mealCategory.innerHTML = data.strCategory;


            let mealArea = document.querySelector('[id="area"]');

            mealArea.innerHTML = data.strArea;


            let mealIngredient1 = document.querySelector('[id="ingredient1"]');
            let mealIngredient2 = document.querySelector('[id="ingredient2"]');
            let mealIngredient3 = document.querySelector('[id="ingredient3"]');
            let mealIngredient4 = document.querySelector('[id="ingredient4"]');
            let mealIngredient5 = document.querySelector('[id="ingredient5"]');
            let mealIngredient6 = document.querySelector('[id="ingredient6"]');
            let mealIngredient7 = document.querySelector('[id="ingredient7"]');
            let mealIngredient8 = document.querySelector('[id="ingredient8"]');
            let mealIngredient9 = document.querySelector('[id="ingredient9"]');
            let mealIngredient10 = document.querySelector('[id="ingredient10"]');
            let mealIngredient11 = document.querySelector('[id="ingredient11"]');
            let mealIngredient12 = document.querySelector('[id="ingredient12"]');
            let mealIngredient13 = document.querySelector('[id="ingredient13"]');
            let mealIngredient14 = document.querySelector('[id="ingredient14"]');
            let mealIngredient15 = document.querySelector('[id="ingredient15"]');
            let mealIngredient16 = document.querySelector('[id="ingredient16"]');
            let mealIngredient17 = document.querySelector('[id="ingredient17"]');
            let mealIngredient18 = document.querySelector('[id="ingredient18"]');
            let mealIngredient19 = document.querySelector('[id="ingredient19"]');
            let mealIngredient20 = document.querySelector('[id="ingredient20"]');

            mealIngredient1.innerHTML = data.strIngredient1;
            mealIngredient2.innerHTML = data.strIngredient2;
            mealIngredient3.innerHTML = data.strIngredient3;
            mealIngredient4.innerHTML = data.strIngredient4;
            mealIngredient5.innerHTML = data.strIngredient5;
            mealIngredient6.innerHTML = data.strIngredient6;
            mealIngredient7.innerHTML = data.strIngredient7;
            mealIngredient8.innerHTML = data.strIngredient8;
            mealIngredient9.innerHTML = data.strIngredient9;
            mealIngredient10.innerHTML = data.strIngredient10;
            mealIngredient11.innerHTML = data.strIngredient11;
            mealIngredient12.innerHTML = data.strIngredient12;
            mealIngredient13.innerHTML = data.strIngredient13;
            mealIngredient14.innerHTML = data.strIngredient14;
            mealIngredient15.innerHTML = data.strIngredient15;
            mealIngredient16.innerHTML = data.strIngredient16;
            mealIngredient17.innerHTML = data.strIngredient17;
            mealIngredient18.innerHTML = data.strIngredient18;
            mealIngredient19.innerHTML = data.strIngredient19;
            mealIngredient20.innerHTML = data.strIngredient20;

            let liElements = document.querySelectorAll('[id^="ingredient"]');
            

            for(i in liElements){

                if(liElements[i].textContent == ''){

                    liElements[i].setAttribute("class",'no-text');

                }else if( liElements[i].className == 'no-text' && liElements[i].textContent != ''){

                    liElements[i].setAttribute("class",'show-text');
                }

            }


            let mealRecipe = document.querySelector('[id="recipe"]');
            mealRecipe.innerHTML = data.strInstructions;

    }

};