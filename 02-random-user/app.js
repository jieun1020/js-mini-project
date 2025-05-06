// import getElement from "./utils/getElement";
import { displayUser } from "./utils/displayUser.js";
import getUser from "./utils/fatchUser.js";
import getElement from "./utils/getElement.js";

const btn = getElement('.btn');

async function showUser(){
    const person = await getUser();
    displayUser(person);
}

btn.addEventListener('click', showUser)
window.addEventListener('DOMContentLoaded', showUser);


