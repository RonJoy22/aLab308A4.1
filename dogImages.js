import { start } from "./api.js";
import { createBreedList} from "./app.js"

export async function loadByBreed(breed){
    if(breed != "Choose A Dog Breed"){
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
      const data = await response.json()
      createSlideshow(data.message)
    }
    
  }
  
export async function createSlideshow(images){
    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${images[0]}')">
              </div>`
  
  }
  