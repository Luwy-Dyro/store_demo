/*$(document).ready(function () {
    $("#menu_shop").click(function () {
        $(".submenu_idk").each(function () {
            displaying = $(this).css("display");
            if (displaying == "none") {
                $(this).show(function () {
                    $(this).css("display", "block");
                });
            } else {
                $(this).hide(function () {
                    $(this).css("display", "none");
                });
            }
        });
    });
    $("#menu_shop").hover(function () {
        $('.panel_shop').show();
        $('.panel_create').hide();
        $('.panel_categories').hide();
        $('.panel_sell').hide();
    });
    $("#menu_create").hover(function () {
        $('.panel_shop').hide();
        $('.panel_create').show();
        $('.panel_categories').hide();
        $('.panel_sell').hide();
    });
    $("#menu_categories").hover(function () {
        $('.panel_shop').hide();
        $('.panel_create').hide();
        $('.panel_categories').show();
        $('.panel_sell').hide();
    });
    $("#menu_sell").hover(function () {
        $('.panel_shop').hide();
        $('.panel_create').hide();
        $('.panel_categories').hide();
        $('.panel_sell').show();
    });
    $(".menu_top_idk").hover(function () {
        $('.submenu_idk').show();
        $('.panel_shop').hide();
        $('.panel_create').hide();
        $('.panel_categories').hide();
        $('.panel_sell').hide();
    });
    if ($('#idk_stre_content').length > 0) {
        $("#content").hover(function () {
            $('.submenu_idk').show();
            $('.panel_shop').hide();
            $('.panel_create').hide();
            $('.panel_categories').hide();
            $('.panel_sell').hide();
        });
        $("footer").hover(function () {
            $('.submenu_idk').show();
            $('.panel_shop').hide();
            $('.panel_create').hide();
            $('.panel_categories').hide();
            $('.panel_sell').hide();
        });
    } else {
        $("#content").hover(function () {
            $('.submenu_idk').hide();
            $('.panel_shop').hide();
            $('.panel_create').hide();
            $('.panel_categories').hide();
            $('.panel_sell').hide();
        });
        $("footer").hover(function () {
            $('.submenu_idk').hide();
            $('.panel_shop').hide();
            $('.panel_create').hide();
            $('.panel_categories').hide();
            $('.panel_sell').hide();
        });
    }
});*/
$(document).ready(function () {
    if ($('.menu_left_footer').css('float') == 'none') {
        $('.menu_toggle_footer').on('click', function () {
            $(this).next().toggle('fast').siblings('.footer_menu_content').hide('fast');
        })
    }
});
$(document).ready(function () {
    $('#browse').on('click', function () {
        $('#sidebar_filter').toggleClass('show');
    })
    if ($('.sidebar_filter').css('float') == 'none') {
        $('.menu_toggle').on('click', function () {
            $(this).next().slideToggle('slide');
        })
    }
});
$(document).ready(function () {
    if ($('.sidebar_top').css('float') == 'none') {
        $('.menu_toggle_top').on('click', function () {
            $(this).next().slideToggle('slide');
        })
    }
});
$(document).ready(function () {
    if ($('.sidebar_subcate_popular').css('float') == 'none') {
        $('.menu_toggle_bottom').on('click', function () {
            $(this).next().slideToggle('slide');
        })
    }
});

(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);
$(function(){$("#banner_idk").responsiveSlides({auto:true,pager:false,nav:false,speed:500,namespace:"priv_banner",before:function(){$('.events').append("<li>before event fired.</li>");},after:function(){$('.events').append("<li>after event fired.</li>");}});});



