

exports.getDate = function() {

    const options = {
        weekday: "long",
        date: "numeric",
        month: "long"
    }
    const day = new Date();
    return day.toDateString("en-us", "options");
    

};


exports.getDay = function() {

    const options = {
        weekday: "long"
    }
    const day = new Date();
    return day.toDateString("en-us", "options");
    

};


