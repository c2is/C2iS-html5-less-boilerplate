/* Project: NOMPROJET - Date: 20120806 - Author: C2iS.fr > TRI */

$(function() { //domReady
    //addClassGtIe(); // Test msie version and add class .gt-ieX x n // ne pas utiliser si utilisation de head.extended.js

    // ScrollTop onload (mobile) si il n'y a pas d'ancre
    if(/mobile/i.test(navigator.userAgent) && !location.hash){
        $(window).scrollTo(0, 1);
    }

// Test log exe front.js
    consoleLog('Execution front.js : ok');

// Test html5 form capacties andif do polyfills
    if(!Modernizr.input.placeholder){ //ie. placeholder
        polyfillPlaceholder();
    }

// Gestion du click sur le parent
    if( $('.linkParent').length > 0 ) {
        addLinkBlock();
    }

});


/* // ne pas utiliser si utilisation de head.extended.js
 // Test msie version and add class .gt-ieX x n
 function addClassGtIe(){
 if($.browser.msie){
 var iVersion = parseInt($.browser.version),
 iLowestVersion = 7; // version la plus basse prise en compte pour l'inté
 for (i=iLowestVersion;i<iVersion+1;i++){// la version courante est supérieur aux versions précédentes
 $('html').addClass('gt-ie'+(i-1));
 }
 }
 }*/


// Gestion du click sur le parent
function addLinkBlock(){
    $('.linkParent').each( function( ) {
        var oElem = $(this).find('.linkBlock'),
            sOnClick = oElem.attr('onclick');
        if(sOnClick)
            $(this).attr('onclick',sOnClick);
        oElem.removeAttr('onclick');

        $(this).css({cursor:'pointer'}).click(function(e) {
            var event = e;
            if (!e)
                event = window.event;
            if (event && event.target != oElem[0]) {
                var sHref = oElem.attr('href'),
                    sTarget = oElem.attr('target')?oElem.attr('target'):'_self';
                //consoleLog(sHref);
                switch (sTarget) {
                    case "_blank":
                        window.open(sHref, '');
                        break;
                    case "_parent":
                        parent.location.href = sHref;
                        break;
                    case "_top":
                        top.location.href = sHref;
                        break;
                    case "_self":
                        document.location.href = sHref;
                        break;
                    default:
                        sTarget.location.href = sHref;
                        break;
                }
            }
        });

    });
}




















