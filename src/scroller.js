!(function scroller() {
    let prevX = window.TBST2_ext_prevX;
    let prevY = window.TBST2_ext_prevY;

    if (window.scrollX * 2 < document.documentElement.clientWidth && window.scrollY * 2 < document.documentElement.clientHeight) {
          if (!!prevX || !!prevY) window.scrollTo(prevX, prevY); 
    } else {
        prevX = window.scrollX;
        prevY = window.scrollY;
        window.scrollTo(0, 0);  
    }
    
    window.TBST2_ext_prevX = prevX;
    window.TBST2_ext_prevY = prevY;
}());
