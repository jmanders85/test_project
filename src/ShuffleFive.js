import _ from 'lodash';
import {checkIfNameMatch} from "./NameMatch";

//import jquery from 'jquery';

export let shuffle = (res) => {
    //extract 1st element through the 5th element
    const fiveNames = _.shuffle(res.data.items).slice(0,5)
    const showFiveNames = fiveNames.reduce((a, name) => {
        return a +
            `
                <li class="emp-list">
                  <img class="willow-img" id="${name.id}" src="${name.headshot.url}" />
                  <span class="willow-names">${name.firstName} ${name.lastName}</span>
                </li>
            `
    }, '');
    //console.log(showFiveNames);
    let whoIs = _.shuffle(fiveNames)[0];
    //console.log(typeof whoIs);
    //console.log(whoIs);

    checkIfNameMatch(fiveNames, whoIs);
    return (
        `
            <div class="who-is">${whoIs.firstName} ${whoIs.lastName}</div>
            <ul>${showFiveNames}</ul>
        `
    );
};
