module.exports = function(el, callback) {
    function getHeight() {
        textarea.style.height = "";
        var height = Math.min(textarea.scrollHeight, 300);
        textarea.style.height = height + "px";
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