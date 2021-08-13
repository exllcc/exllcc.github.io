$(function() {
    var title = document.title,
        animSeq = ["_", "ᅠ", "_", "ᅠ", "_", "ᅠ", "_"],
        animIndex = 0,
        titleIndex = 0;	
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 3) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[animIndex];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 250);
});
