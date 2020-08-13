(function () {
    const $change = $(".change")
    const spans = ["Beautful", "Art", "Life", "Complex", "Amazing"]
    let index = 0
    
    function animateSpan() {
        let hide = {
            opacity: 0,
            marginLeft: "60px",
        }
        let show = {
            opacity: 1,
            marginLeft: "20px"
        }
        $change.animate(hide, 1000, () => {
            $change.css("marginLeft", "0")
        })
        setTimeout(() => $change.text(spans[index]), 1000)
        if (index < 4) { 
            index++
        } else {
            index = 0
        }
        $change.animate(show, 1000)
    }
    
    setTimeout(() => {
        animateSpan()
        setInterval(animateSpan, 4000)
    }, 2000)
}())