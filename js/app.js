const html = $('#photoGallery-thumbnails');
const searchField = $('#search'); 
const searchFieldValue = searchField.val(); //console.log(searchFieldValue);

/* function print_array_element(arr, i){
    return arr[i];
}
function searchAndCompair(searchTerm, captionText) {
    captionText = print_array_element(captionText);
    let searchTermToLower = searchTerm.toLowerCase();
    let captionTextToLower = captionText.getAttribute('data-caption').toLowerCase();
    const stringResult = captionTextToLower.indexOf(searchTermToLower);
    return stringResult;
}
 */



$(document).ready(function() {

    let elementsThumbnails = "";
    
    $.each(photoGallery, function( index, elements){

        let imgCaption = elements.caption; 
        elementsThumbnails += `<div class="item"><a href="${elements.image}" data-fancybox="nature" data-caption="${imgCaption}">
                                    <img src="${elements.thumbnails}" alt="${elements.name}" title="${elements.name}" />
                                </a></div>`; 
        html.html(elementsThumbnails);
        
    });

    /**
     * SEARCH EVENT LISTENER 
    */
    searchField.keyup(function(){
        $('.item a').each(function(index){
            console.log(index);
        })
    })

    
    
    /**
     * FANCYBOX SETTINGS
     */
    $('[data-fancybox]').fancybox({
            //hide toobar buttons at the top
            buttons: [
                //"zoom",
                //"share",
                //"slideShow",
                //"fullScreen",
                //"download",
                //"thumbs",
                "close"
              ],
            infobar: false,
            btnTpl: {
                // Arrows
                arrowLeft:
                '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
                '<div><img src="photos/icons/prev.png"/></div>' +
                "</button>",

                arrowRight:
                '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
                '<div><img src="photos/icons/next.png"/></div>' +
                "</button>"
            }

    })
    
})
