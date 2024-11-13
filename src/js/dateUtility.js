

// Function to set the formatting of the date we will be returning
const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' }; // will return 4 Jul 25 (short month version)
    return date.toLocaleDateString('en-AU', options);
};

// Function to calculate booking dates against the current date
// REFERENCES:
//  - Date Method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//  - Convert date to local time - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
//  - DateTime formatting and UTC - https://chatgpt.com/share/6711f7ec-4038-8005-a59f-d5fea2c168e0
export const checkDateAvailable = (dateBookedTil) => {
    const currentDate = new Date();
    const bookedTilDate= new Date(dateBookedTil);

    if (bookedTilDate > currentDate){
        return formatDate(bookedTilDate);
    }
    else{
        return " Now";
    }


}