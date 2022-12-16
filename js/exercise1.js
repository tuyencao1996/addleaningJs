function main(){

    const eleBtn = document.querySelector('.btn')
    const eleImg = document.querySelector('img')


    const AddImg = [
        "../imgs/img/photo_secnery_img2.avif ",
        "../imgs/img/photo_img1 secenery.avif",
        "../imgs/img/photo-senery_img5.avif",
        "../imgs/img/photo-senery_img4.avif",
        "../imgs/img/photo_img1 secenery.avif",
        "../imgs/img/photo-img3-secenery.avif"
    ]
    const y = 0
    eleBtn.addEventListener('click',event => {
        setInterval(() => {
            const HandleImg = Math.floor(Math.random()*6)
            console.log(HandleImg)
            // if (y < 0, y+=0, y++){
            //     eleImg.style.display = 'block'
            //     eleImg.src = AddImg[HandleImg]
            // }

        }, 1000);
    })
    const eleBntReloaPageMont = document.querySelector('.btn-reload')

    eleBntReloaPageMont.addEventListener('click',(event)=> {
        event.preventDefault()
        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5501/html/montExercise.html?#"
        }, 1000);
    })
}
main()
