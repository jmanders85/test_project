import axios from 'axios';
import _ from 'lodash';

import {shuffle} from './ShuffleFive';

const api = 'https://willowtreeapps.com/api/v1.0/profiles/';

export let handleFetch = (mattName) => {
    //set where to display fetched results
    let willowTreeTeam = document.getElementById('display-data');

    //fetch data
    axios.get(api).then(res => {
        //console.log(res);
        //if promise is successful feed response data to shuffle()
        willowTreeTeam.innerHTML = shuffle(res);

    }).catch(err => console.log(err));

};





