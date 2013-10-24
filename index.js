module.exports = function(el, setHeight, callback) {
    setHeight = setHeight || false;
    function getHeight() {
        var oldHeight = el.style.height;
        el.style.height = "";
        var height = el.scrollHeight;
        if(setHeight)
            el.style.height = height + "px";
        else
            el.style.height = oldHeight + "px";
        return height;
    }
    if(callback) {
        el.addEventListener('input', function(){
            callback(getHeight());
        }, false); 
    } else {
        return getHeight();
    }   
}