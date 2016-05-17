/**
 * Created by Олег on 17.05.2016.
 */
/**
 * Created by Oleg on 17.05.2016.
 */
onload = function(){
    var blockOfComingEvents = document.getElementById("ComingEvents");
    var blockOfPastEvents = document.getElementById("PastEvents");
    var eventsRepository = document.getElementById("EventsRepository");

    for(var i = 0;i<eventsRepository.children.length;i++)
    {
        var currentEvent = eventsRepository.children[i];
        var elementWithDateContent = currentEvent.getElementsByTagName("time")[0].innerText;
        var date = getDateFromString(elementWithDateContent, "/");
        if(date<=Date.now()) {
            moveElementToAnotherElement(currentEvent, blockOfPastEvents);
        }
        else{
            moveElementToAnotherElement(currentEvent, blockOfComingEvents);
        }
    }
}

function moveElementToAnotherElement(element, anotherBlock){
    anotherBlock.insertBefore(element, anotherBlock.children[0]);
}

function getDateFromString(elementWithDateContent, separator){
    var arrayOfNumbers = elementWithDateContent.split(separator);
    var day = parseInt(arrayOfNumbers[0]);//TODO: change to arrayOfNumbers[1] if american format
    var month = parseInt(arrayOfNumbers[1]);//TODO: change to arrayOfNumbers[0] if american format
    var year = parseInt(arrayOfNumbers[2]);

    return new Date(year, month, day);
}