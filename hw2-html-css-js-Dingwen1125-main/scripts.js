/*
 * We put all of our scripts inside this function which is attached to the event DOmContentLoaded
 * This event is when all the elements of the page have rendered by the browser.
 * You do not need to modify the definition of this event  listener
 */
document.addEventListener('DOMContentLoaded', function () {
    /**
     * This function should be attached to the event of a user click one of the iOS or Android buttons
     * @param platform a string representing which button ie platform called this function
     */
    function handleJoinClick(platform) {
        const userEmail = prompt(`Please enter your email to be notified when Spark! Bytes is ready for ${platform}:`);

        if (userEmail) {
            console.log(`User email for ${platform}: ${userEmail}`);
            alert(`Thank you! We will notify you at ${userEmail} when Spark! Bytes is ready for ${platform}.`);
            /*
             * You will need to add more code here that will also add the users email to the list
             * titled "users who've signed up"
             */
            const lis = document.getElementById("signUpL");
            const em = document.createElement("h5");
            em.textContent = userEmail;
            lis.appendChild(em);
        } else {
            alert('No email provided. Please try again if you wish to be notified.');
        }
    }

    /*
     * Add an event listener for the iOS Button
     */
    document.getElementById("ios").addEventListener("click", function(){
        handleJoinClick('iOS');
    });
    /*
     * Add an event listener for the Android Button
     */
    document.getElementById("android").addEventListener("click", function(){
        handleJoinClick('Android');
    });

    // Below here you can add code for what happens when the user clicks "Sign Up"
    // The general flow you should follow is the following:
    //     1. Find the signup form
    //     2. Attach an event listener to the "submit" event
    //     3. That event listener should:
    //         3a. obtain the value of the entered text from the input element
    //         3b. add the value to the list of users who have signd up(using various DOM manipulation methods).
    //         3c. Create an alert if, when they click "submit" they have an empty email
    //  Help 1: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
    //  Help 2: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
    //  Help 3: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
    function subButtom(){
        const cont = document.getElementById("emai");
        if(cont.value){
            const lis = document.getElementById("signUpL");
        const em = document.createElement("h5");
        em.textContent = cont.value;
        lis.appendChild(em);
        cont.value = "";
        }else{
            alert("No email provided. Please try again if you wish to be notified.")
        }
        
    }
    document.getElementById("sign").addEventListener("click", function(){
        subButtom();
    });
});



