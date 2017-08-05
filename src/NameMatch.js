import jquery from 'jquery';

export let checkIfNameMatch = (showFiveNames, whoIs) => {
    jquery(function(){
        //console.log(showFiveNames);
        //console.log(whoIs);

        //add unique id for name to be guessed
        jquery('.who-is .willow-names').attr('id', 'winner').removeClass('willow-names');

        //drill into inner node of each object and get ids
        let targetId = whoIs.id;
        let listOfImages = document.getElementsByClassName('willow-img');

        //see object ids here
        console.log(targetId);

        //this would be the desired behavior HOWEVER with images checking against ids. Since I'll not print nasty id's to the DOM
        for (let i = 0; i < listOfImages.length; i++) {
            //Ps:click on each id and see results
            jquery(listOfImages[i]).click(function (e) {
                if (targetId === e.target.id) {
                    console.log('yes!');
                    jquery(this).css("border", "3px solid green");
                } else {
                    console.log('hell no!');
                    jquery(this).css("border", "3px solid red");
                }
            })
        }


        //Blocked HERE:
        //On loop through object. Event listener on IMG,
        //if ids match show green else show red color

        /*
        jquery('.emp-list').click(function () {
            for (let i= 0; i < listOfNames.length; i++) {
                let clickedText = listOfNames[i].innerHTML;

                if (rightNameId === clickedText) {
                    console.log('yes!');
                    jquery(this).css("border", "3px solid green");
                }
                else {
                    console.log('hell no!');
                    jquery(this).css("border", "3px solid red");
                }
            }
        })
        */
    });
};
