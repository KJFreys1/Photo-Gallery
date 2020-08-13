(function () {
    const $change = $(".change")
    const styles = {
        hide: {
            opacity: 0,
            marginLeft: "60px",
        }, show: {
            opacity: 1,
            marginLeft: "20px"
        }
    }
    const spans = ["Beautful", "Art", "Life", "Complex", "Amazing"]
    let index = 0
    
    function animateSpan() {
        $change.animate(styles.hide, 1000, () => {
            $change.css("marginLeft", "0")
            $change.text(spans[index])
        })
        index = index < 4 ? index + 1 : 0
        $change.animate(styles.show, 1000)
    }
    
    setTimeout(() => {
        animateSpan()
        setInterval(animateSpan, 4000)
    }, 2000)

    // Scroll transition behavior
    $(".nav a").on("click", function(e) {
        if (this.hash) {
            e.preventDefault()
            $("html, body").animate({
                scrollTop: $(this.hash).offset().top
            }, 800)
        }
    })
}())