import _ from 'lodash';
import {checkIfNameMatch} from "./NameMatch";

//import jquery from 'jquery';

export let shuffle = (res) => {
    //shuffle && iterate
    let names = _.shuffle(res.data.items
        .map(name => {
            //return name.firstName.concat(name.lastName).concat(`<img class="willow-img" src="${name.headshot.url}">`);

               return (`
                   <li class="emp-list">
                     <img class="willow-img" src="${name.headshot.url}">
                     <span class="willow-names">${name.firstName} ${name.lastName}</span>
                     <span class="willow-id">${name.id}</span>
                   </li>
                `)

        })
    );

    //extract 1st element through the 5th element && remove comas in between
    let showFiveNames = names.splice(0, 5);
    //console.log(showFiveNames);
    let whoIs = _.shuffle(showFiveNames).slice(0,1);
    //console.log(typeof whoIs);
    //console.log(whoIs);

    checkIfNameMatch(showFiveNames, whoIs);
    return (
        `
            <div class="who-is">${whoIs}</div>
            <ul>${showFiveNames}</ul>
        `
    );
};



