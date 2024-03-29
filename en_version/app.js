document.addEventListener("DOMContentLoaded", function () {

    const animation__title = document.querySelector('.animation__title');
    setTimeout(() => {
        animation__title.classList.add("active");
    }, 300)

    setTimeout(() => {
        animation__title.classList.remove("active");
    }, 9000)

    //---------------------------------------------------------
    //---------------------------------------------------------

    const video = document.querySelector(".video__item");
    const sub_video_block = document.querySelector('.sup__video');

    let mas_video = ["../video/analize_traffic.mp4",
        "../video/security.mp4",
        "../video/restricted_areas.mp4",
        "../video//analize_traffic.webm",
        "../video/security.webm",
        "../video/restricted_areas.webm"];

    let sup__video = ["traffic analysts",
        "security agencies",
        "restricted areas"]

    let i_video = 0;

    setInterval(() => {
        ++i_video;
        if (i_video != 3) {
            sub_video_block.innerHTML = `Solution for <span class="blue__text solution__for">${sup__video[i_video]}</span>
                                <div class="animation__title"></div>`
        }
        video.innerHTML = `<video muted autoplay loop src="${mas_video[i_video]}">
                            <source src="${mas_video[i_video + 3]}" type="video/webm">
                            <source src="${mas_video[i_video]}" type="video/mp4">
                        </video>`
        const anim__solution = document.querySelector('.solution__for');

        if (i_video != 3) {
            setTimeout(() => {
                const animation__title = document.querySelector('.animation__title');
                animation__title.classList.add("active");
            }, 300)
        }

        if (i_video != 2) {
            setTimeout(() => {
                const animation__title = document.querySelector('.animation__title');
                animation__title.classList.remove("active");
            }, 9000)
        }

        if (i_video == 3) {
            i_video = -1;
        }
    }, 10000)
});