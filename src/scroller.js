!(function scroller() {
    let onTop = window.TBST2_ext_onTop;
    let prevX = window.TBST2_ext_prevX;
    let prevY = window.TBST2_ext_prevY;

    if (onTop && (prevX || prevY)) {
        window.scrollTo(prevX, prevY);

        onTop = false;
    } else {
        prevX = window.scrollX;
        prevY = window.scrollY;

        window.scrollTo(0, 0);

        onTop = true;
    }

    window.TBST2_ext_onTop = onTop;
    window.TBST2_ext_prevX = prevX;
    window.TBST2_ext_prevY = prevY;
}());