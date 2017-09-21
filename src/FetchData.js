import axios from 'axios';
import {shuffle} from './ShuffleFive';

const api = 'https://willowtreeapps.com/api/v1.0/profiles/';


export let handleFetch = (nameToFilterBy) => {
    return () => {
        //set where to display fetched results
        let willowTreeTeam = document.getElementById('display-data');
        //fetch data
        axios.get(api).then(res => {
            let namesToDisplay = res;
            if (nameToFilterBy !== undefined) {
                namesToDisplay = res.data.filter(o => o.firstName === nameToFilterBy)
            }
            willowTreeTeam.innerHTML = shuffle(namesToDisplay);
        }).catch(err => console.log(err));
    }
};




