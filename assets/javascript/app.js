function copyEmail(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
function checkoutmyresume(element) {
    var $resume = $("<input>");
    $("body").append($resume);
    $resume.val($(element).text()).select();
    document.execCommand("copy");
    $resume.remove();
}