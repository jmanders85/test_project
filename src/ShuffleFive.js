import _ from 'lodash';
import {checkIfNameMatch} from "./NameMatch";

export let shuffle = (res) => {
    //shuffle && get 5 elements at time && Reduce to get rid of comas
    const fiveNames = _.shuffle(res.data.items).slice(0,5);
    const showFiveNames = fiveNames.reduce((a, name) => {
        return (
            a + `
                   <li class="emp-list">
                     <img class="willow-img" id="${name.id}" src="${name.headshot.url}">
                     <span class="hide-me">
                     <p>${name.firstName} ${name.lastName}</p>
                     </span>
                   </li>
                `
        )

    }, '');

    //shuffle and output one element of the array
    let whoIs = _.shuffle(fiveNames)[0];

    let changeButtonName = document.getElementById("start-game");
    changeButtonName.innerHTML === 'go' ?  changeButtonName.innerHTML = 'play again' : false;

    checkIfNameMatch(showFiveNames, whoIs);
    return (
        `
           <div class="who-is">${whoIs.firstName} ${whoIs.lastName}</div>
            <ul>${showFiveNames}</ul>
        `
    );
};



