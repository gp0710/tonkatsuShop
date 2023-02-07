function openTab(tab) {
    let i;
    let tabcontent = document.querySelectorAll(".tabcontent");
    tabcontent.forEach((item) => {
        item.style.display = "none"
    })
    let show = document.querySelector(tab)
    show.style.display = "flex"
}

export default openTab
