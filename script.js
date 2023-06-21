function vowelsFunction()
{
    var inputtext = document.getElementById("input").value;
    var count = 0

    for(var i = 0; i<inputtext.length; i++)
    {
        var letter = inputtext[i].toLowerCase()
        
        if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
        {
            count = count + 1;
        }
    }
    document.getElementById("output").innerHTML = count;
}