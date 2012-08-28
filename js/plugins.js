/* Project: NOMPROJET - Date: 20120806 - Author: C2iS.fr > TRI */
/* JS PLUGINS */




// Gestion du console.log (évite le bug sur ie si la console n'est pas ouverte)
function consoleLog (data) {
    if(window.console && console.log )
        console.log(data);
}


function polyfillPlaceholder(){
    var active = document.activeElement;
    $('[placeholder]').focus(function () {
        if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
            $(this).val('').removeClass('placeholder');
        }
    }).blur(function () {
            if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
                $(this).val($(this).attr('placeholder')).addClass('placeholder');
            }
        });
    $('[placeholder]').blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            if ($(this).val() == $(this).attr('placeholder')) {
                $(this).val('');
            }
        })
    });
    $(active).focus();
}


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