module.exports = function(el, callback) {
    function getHeight() {
        el.style.height = "";
        var height = Math.min(el.scrollHeight, 300);
        el.style.height = height + "px";
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