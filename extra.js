try
{
    var originalSourceCode = document.getElementsByClassName("pony-full-source")[0];
    var preElem = document.createElement("pre");
    var codeElem = document.createElement("code");
    codeElem.className = 'pony';

    preElem.append(codeElem);
    originalSourceCode.parentNode.append(preElem);
    codeElem.innerHTML = originalSourceCode.innerHTML;
    originalSourceCode.parentElement.removeChild(originalSourceCode);

    var lines = $(codeElem).text().split('\n').length - 1;      
    var numbering = $('<code class="code-line-numbers"></code>').addClass('pre-numbering');

    $(codeElem)
        .addClass('has-numbering')
        .parent()
        .append(numbering);

    for (i = 1; i <= lines; i++) {
        numbering.append($('<div></div>').text(i));
    }

    hljs.highlightBlock(codeElem);
}
catch (e) 
{

}

try
{
    var line_number = window.location.href.substring(window.location.href .indexOf("#")+1);
    var line_numbers = document.getElementsByClassName("code-line-numbers")[0];
    var elem = line_numbers.children[line_number - 1];
    elem.style.backgroundColor = "yellow";
    elem.focus();
    elem.scrollIntoView();
}
catch (e) 
{

}
