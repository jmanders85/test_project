import j from 'jquery';

export let checkIfNameMatch = (showFiveNames, whoIs) => {
    j(function(){
        //add unique id for the name to be guessed
        j('.who-is .willow-names').attr('id', 'winner').removeClass('willow-names');

        //drill into inner node of each object and get ids
        let winnerId = whoIs.id;
        let listOfImages = document.getElementsByClassName('willow-img');

        for (let i = 0; i < listOfImages.length; i++) {
            j(listOfImages[i]).click(function (e) {
            //does the winnerID match the clicked img id? (e.target.id)
            winnerId === e.target.id ?
                //reduce the matched set of elements to one at a specific index
                j(this).siblings(".hide-me").eq(0).addClass('right-name').show() :
                j(this).siblings(".hide-me").eq(0).addClass('wrong-name').show();
            })
        }
    });
};
