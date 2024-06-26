
//Funcion para consultar con los parametros dados

async function DataBaseQuery(option,text){

    let url = '' ;

    try {

        switch (option) {

            case 'Name':

                    url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + text ;

                break;

            case 'Category':
            
                    url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + text ;

            break;

            case 'Ingredient':

                    url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + text ;
                
                break;

            case 'Area':
                
                    url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=' + text ;

                break;
        
            default:

                    url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + text ;

                break;
        }


        const response = await axios.get(url);

        //console.log(response.data);

        return response.data;

        
    } catch (error) {

        console.error(`API Error: ${error}`);
        
    }
};




//Funcion para generar y mostrar los resultados

async function DisplayResults(option,text){

    const dataCard = document.querySelector('[id="main-data"]');

    const errorCard = document.querySelector('[id="error"]');

    const data3Options = document.querySelector('[id="data-3-options"]');

    const dataResult = await DataBaseQuery(option,text);



    if(dataResult.meals == null || text == ''){

        errorCard.style.display = "block";
        dataCard.style.display = "none";
        data3Options.style.display = "none";

    }else{

        if(option == 'Name'){

            dataCard.style.display = "block";
            errorCard.style.display = "none";
            data3Options.style.display = "none";

            //Capturamos los datos de la request y los reemplazamos

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


        }else{

            data3Options.style.display = "block";
            dataCard.style.display = "none";
            errorCard.style.display = "none";

            //Se borran los elementos de una anterior busqueda

            [...document.querySelectorAll('[class="card"]')].forEach((x)=>x.remove());


            //Capturamos los datos de la request y los reemplazamos

            const data = dataResult.meals;

            const resultNumber = document.querySelector('[id="result-number"]');

            resultNumber.innerHTML = `(${data.length}) Results were Found!`;

            //Se genera el ciclo para creal las cards con la info disponible

            const cardsMainContainer = document.querySelector('[id="meal-cards-container"]');


            //Bandera para mostrar solo 18 resultados max

            let resultsFlag = 1 ;


            for( meal of data ){

                //Card principal contenedora
                
                const card = document.createElement("div");

                

                card.setAttribute("class", "card")

                //Contenedor para la imagen

                const imgContainer = document.createElement("div");

                imgContainer.setAttribute("class","image-container");


                //Elemento img donde va la imagen

                const mealImage = document.createElement("img");

                mealImage.setAttribute("src", meal.strMealThumb);



                //Elemento anchor para los nombres de los platos

                const mealName = document.createElement("a");

                mealName.setAttribute("class","meal-link");

                mealName.setAttribute("id",meal.idMeal);

                mealName.setAttribute("href","result.html");

                mealName.innerHTML = meal.strMeal;



                //Anidamiento de los elementos creados

                imgContainer.appendChild(mealImage);

                card.appendChild(imgContainer);

                card.appendChild(mealName);

                cardsMainContainer.appendChild(card);

                resultsFlag++ ;

                if(resultsFlag > 18) break;

            }


            //-------------------------------------


            let mealClicked = document.querySelectorAll('[class="meal-link"]');

            for (element of mealClicked) {
                
                element.addEventListener("click",(clickedAnchor)=>{

                    let selectedMeal = clickedAnchor.target.innerText;

                    let selectedMealID = clickedAnchor.target.id;

                    localStorage.setItem("selectedMeal",selectedMeal);
                    localStorage.setItem("selectedMealID",selectedMealID);

                });
            }


        }

        
        
    }
};




//Funcion Principal para el boton buscar

const searchButton = document.querySelector('[id="lupa"]');


    searchButton.addEventListener("click",()=>{


        //Captura de los parametros de busqueda
    
        const selectedOption = document.querySelector('[id="dropdown"]').value ;
    
        const inputText = document.querySelector('[id="searchbar"]').value ;
    
        DisplayResults(selectedOption,inputText);
    
    });






