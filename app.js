import { start } from "./api.js";
import {  loadByBreed} from "./dogImages.js";

// const breeds = start()
export async function createBreedList(breedList){
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
                    <option>Choose A Dog Breed</option>
                   ${Object.keys(breedList).map(function(breed){
                    return `<option>${breed}</option>`
                   }).join("")}
                </select>
    `
    }