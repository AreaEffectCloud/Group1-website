var faqQuestions = document.getElementsByClassName("faq-item-contents");

for (var i = 0; i < faqQuestions.length; i++) {
    faqQuestions[i].addEventListener("click", function() {
        // faq-item-text
        var faqImage = this.children[0];
        if (faqImage.style.color === 'rgb(0, 44, 244)') {
            faqImage.style.color = 'rgb(0, 0, 0)';
        } else {
            faqImage.style.color = 'rgb(0, 44, 244)';
        }
        // faq-item-img
        var faqImage = this.children[1];
        if (faqImage.style.transform) {
            faqImage.style.transform = null;
        } else {
            faqImage.style.transform = 'rotate(180deg)';
        }
        // faq-item-answer
        var faqAnswer = this.nextElementSibling;
        if (faqAnswer.style.maxHeight) {
            faqAnswer.style.maxHeight = null;
        } else {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        } 
    });
}
