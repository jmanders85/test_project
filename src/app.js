import {handleFetch} from './FetchData';

let app = () => {
    //fetch ajax data upon click
    document.getElementById('start-game').addEventListener('click', handleFetch);
};
app();


