	// JAVASCRIPT LOGIC FOR THE COUNTDOWN TIMER

    //NOTES:
    // Variables are declared usually by “var” (sometimes by let and const)
    // Variables contain data.
    // As you can see, there are many declared variables and various variables that 
    // constitute time such as  “now”, “count down date”, etc. I heard from josh that 
    // set variable names (identifiers) must be unique and can be anything you want 
    // like pink purple poka dotted dinosaur.    
    // Oddly, the "getTime" parts of these date methods in the code do not seem to have 
    // much of a purpose, because if I delete them, it does not affect the code.
    // The general rules for constructing names for variables (unique identifiers) are:
    // •	Names can contain letters, digits, underscores, and dollar signs.
    // •	Names must begin with a letter
    // •	Names can also begin with $ and _ (but we will not use it in this tutorial)
    // •	Names are case sensitive (y and Y are different variables)
    // •	Reserved words (like JavaScript keywords) cannot be used as names
    // JS has similar data types just like solidity did (numbers, strings, objects, Booleans) 
    // but these data types used for the countdown are interesting, so I need to look at them.
    // The first two appear to be strings except the “math objects” are objects. 


    // DATE I JOINED DEVELOPER DIRECTION:
    // The “new” key word is part of an “object constructor” and is used in this case 
    // to create “date objects”. There are 4 main ways to create a date object, 
    // but in this case, they used the “new Date(dateString)” way.
    //It also looks like they used the “long date syntax”
    // If you look at the end you will notice “getTime()” which is a 
    // “get date method” which is used to get info from a date object. 
    // W3schools says it is used to get the time in milliseconds since January 1st 1970
    var JoinDate = new Date("Aug 1, 2022 19:36:00").getTime();

    // THE TIME MOVES EVERYSECOND:
    // The “setInterval()” part is a “JS Timing Event” which is executed in time intervals. 
    // There are two main methods and this “setInterval” method executes continuously 
    // and repeats the function at every given time-interval.
    // Then they stop the execution by using  “clearInterval()” seen below.
    var x = setInterval(function() {

        // GET THE DATE AND TIME OF TODAY:
        // This “new Date()” part is necessary to get todays date.
        var today = new Date().getTime();
            
        // FIND THE DIFFERENCE BETWEEN TODAY AND THE DAY I JOINED DEVELOPER DIRECTION: 
        var difference = JoinDate - today;
            
        // TIME CALCULATIONS FOR MONTHS, WEEKS, DAYS, HOURS, MINUTES, & SECONDS:
        // “math” is called the “math object” which allows you to do mathematics 
        // with numbers.
        // Math objects do not have a constructor like “new”.  The “Math.floor” 
        // is a “math method” and the syntax for any math methods is: “Math.method.(number)”. 
        // There are 4 common methods and the example is using “math.floor(x)” 
        // which returns x rounded down to it’s nearest integer.
        var months = Math.floor(difference / ((1000 * 60 * 60 * 24)* 31));
        var weeks = Math.floor(difference/((1000 * 60 * 60 * 24)*7));
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
        // OUTPUT THE RESULTS INTO THE PARAGRAPH ELEMENTS ABOVE:
        // GetElementById is a common JS html method that is meant to alter or change 
        // the hmtl content on a page. GetElementByID, in this case, will “find” an html 
        // element with the id of “demo” and will alter or change the element’s html content. 
        // Moreover, it looks like the html content (innerHTML) is a combination of all the 
        // forms of time such as day, hour, etc.
        document.getElementById("months").innerHTML = months + " : Months";
        document.getElementById("weeks").innerHTML = weeks + " : Weeks";
        document.getElementById("days").innerHTML = days + " : Days";
        document.getElementById("hours").innerHTML = hours + " : Hours";
        document.getElementById("minutes").innerHTML = minutes + " : Minutes"; 
        document.getElementById("seconds").innerHTML = seconds + " : Seconds";
            
        // DISPLAY THESE MESSAGES WHEN THE TIME RUNS OUT:
        // It stops the "setInterval" execution by using “clearInterval()” which is 
        // another timing event meant to stop the execution and it uses an if statement
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("months").innerHTML = "Year Ended";
            document.getElementById("weeks").innerHTML = "Year Ended";
            document.getElementById("days").innerHTML = "Year Ended";
            document.getElementById("hours").innerHTML = "Year Ended";
            document.getElementById("minutes").innerHTML = "Year Ended";
            document.getElementById("seconds").innerHTML = "Year Ended";
        }
    }, 1000);

