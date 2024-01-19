
var faqQuestions = document.getElementsByClassName("faq-item-contents");

for (var i = 0; i < faqQuestions.length; i++) {
    faqQuestions[i].addEventListener("click", function() {

        // faq-item-img
        var faqImage = this.children[1];
        faqImage.classList.toggle('active');
        
        // faq-item-answer
        var faqAnswer = this.nextElementSibling;
        if (faqAnswer.style.maxHeight) {
            faqAnswer.style.maxHeight = null;
        } else {
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        } 
    });
}
