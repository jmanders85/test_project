import axios from 'axios';
import {shuffle} from './ShuffleFive';

const api = 'https://willowtreeapps.com/api/v1.0/profiles/';

export let handleFetch = () => {
    //set where to display fetched results
    let willowGang = document.getElementById('display-data');

    //fetch data
    axios.get(api).then(res => {
        console.log(res);
        //if promise is successful feed response data to shuffle()
        willowGang.innerHTML = shuffle(res);

    }).catch(err => console.log(err));

};





