const html = $('#photoGallery-thumbnails');
let searchField = $('#search').val('through'); 


function searchAndCompair(searchTerm, captionText) {

    let searchTermToLower = searchTerm.toLowerCase();
    let captionTextToLower = captionText.toLowerCase();
    const stringResult = captionTextToLower.indexOf(searchTermToLower);
    return stringResult;
}

/* function print_array_element(arr, i){
    return arr[i];
}
 */

const exemploText = searchField.val(); console.log(exemploText);


$(document).ready(function() {

    let elementsThumbnails = "";
    
    $.each(photoGallery, function( index, elements){

        let imgCaption = elements.caption; console.log(index);
        elementsThumbnails += `<a href="${elements.image}" data-fancybox="nature" data-caption="${imgCaption}">
                                    <img src="${elements.thumbnails}" alt="${elements.name}" title="${elements.name}" />
                                </a>`; 
        html.html(elementsThumbnails);

        //check if Search Input value and searched String found
        if(searchField.val().length > 2 && searchAndCompair(exemploText, imgCaption) ){
            if(searchAndCompair(exemploText, imgCaption) !== -1){
                //here print the content of that founded String
                html.html('content');
            }
           
        }else{
            html.html(elementsThumbnails);
        }
      
 
    });

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