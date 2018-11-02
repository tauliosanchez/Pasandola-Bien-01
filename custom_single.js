
jQuery(document).ready(function(){

    "use strict";
    var template_name   = jQuery('iframe.full-screen-preview__frame').attr('data-title');
    jQuery('.sub_title span').html(template_name);
    jQuery('.sub_desc span').html(template_name);
        var guest_visited = readCookie('tz_visited');
        if(guest_visited !='visited'){
            setTimeout(function(){
                jQuery("#footer-sidebar").addClass("tz-display");
            }, 7000);
        }


    var subscrible_height = jQuery('#footer-sidebar').height();
    jQuery('#footer-sidebar').css({
        'bottom':'-'+subscrible_height+'px'
    })
    jQuery('.tz-close').on('click',function(){
        var guest_visit     = 'visited';
        createCookie('tz_visited',guest_visit,1);
        jQuery('#footer-sidebar').removeClass('tz-display');
    })

});