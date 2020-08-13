(function () {
    const $change = $(".change")
    const $modal = $(".modal")
    const $select = $(".select")

    let styles = {
        hide: {
            opacity: 0,
            marginLeft: "60px",
        }, show: {
            opacity: 1,
            marginLeft: "20px"
        }, block: {
            height: "100%",
            width: "100%"
        }, long: {
            height: "100%",
            width: "35%"
        }, wide: {
            height: "80%",
            width: "100%"
        }
    }

    // Check viewport
    if ($(window).width() < 450) {
        styles.block.height = "50%"
        styles.long.width = "85%"
        styles.wide.height = "35%"
    } else if ($(window).width() < 850) {
        styles.block.height = "80%"
        styles.long.width = "60%"
        styles.wide.height = "50%"
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

    // Modal behavior
    function animateModal(expand) {
        $select.animate(styles[expand], 700)
    }

    $(".item img").on("click", function(e) {
        $select.attr("src", this.src)
        $modal.css("display", "flex")
        animateModal(this.className)
    })

    $(".exit").on("click", function(e) {
        $modal.hide()
        $select.css("height", "10%")
        $select.css("width", "10%")
    })
}())