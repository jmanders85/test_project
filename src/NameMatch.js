import jquery from 'jquery';

export let checkIfNameMatch = (showFiveNames, whoIs) => {
    jquery(function(){
        //add unique id for name to be guessed
        jquery('.who-is .willow-names').attr('id', 'winner').removeClass('willow-names');

        //drill into inner node of each object and get ids
        let winnerId = whoIs.id;
        let listOfImages = document.getElementsByClassName('willow-img');
        console.log(winnerId);

        //this would be the desired behavior HOWEVER with images checking against ids. Since I'll not print nasty id's to the DOM

        for (let i = 0; i < listOfImages.length; i++) {
            //Ps:click on each id and see results
            jquery(listOfImages[i]).click(function (e) {
            //does the winnerID match the clicked e.target.id
            winnerId === e.target.id ?
                (   console.log('yes'),
                    jquery(this).css({'border': '5px solid #75cbc4'}),
                    jquery('.hide-me').show()
                )
                :
                (
                    console.log('no'),
                    jquery(this).css({'border': '5px solid #e52d27'})
                );
            })
        }

    });
};
