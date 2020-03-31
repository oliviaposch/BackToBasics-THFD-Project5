const html = $('#photoGallery-thumbnails');
const searchField = $('#search'); 


$(document).ready(function() {

    let elementsThumbnails = "";
    
    /**
     * Insert Object Array elements from photo_gallery.js to index.html
     */
    $.each(photoGallery, function( index, elements){

        elementsThumbnails += `<div class="item"><a href="${elements.image}" data-fancybox="nature" data-caption="${elements.caption}">
                                    <img src="${elements.thumbnails}" alt="${elements.name}" title="${elements.name}" />
                                </a></div>`; 
        html.html(elementsThumbnails);
        
    });

    /**
     * SEARCH EVENT LISTENER 
    */

    searchField.keyup(function(){
        const items = $('.item a');
        $.each(items, function(i){
                let itemAttr = $(items[i]).attr('data-caption');
                
                if ( itemAttr.toLowerCase().indexOf(searchField.val().toLowerCase()) < 0 ) {
           
                   $(items[i]).parent().css('display', 'none'); 

                } else {
                
                    $(items[i]).parent().css('display', 'initial');
                }
        
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
                "</button>",
                close:  
                '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
                '<div><img src="photos/icons/close.svg"/></div>' +
                "</button>"
            }
    })
    
})
