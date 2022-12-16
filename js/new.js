function main(){

    const resultUrlImg = [
        "../imgs/bau.jpg",
        "../imgs/tom.jpg",
        "../imgs/cua.jpg",
        "../imgs/ca.jpg",
        "../imgs/ga.jpg",
        "../imgs/nai.jpg",
    ]


    const eleBtnxocxia = document.querySelector('.js-xoc-dia')
    const eleImgResult = document.querySelector('.js-result-img')
    const eleImgResult2 = document.querySelector('.js-result-img2')
    const eleImgResult3 = document.querySelector('.js-result-img3')
    const eleloading = document.querySelector('.js-loading')
    
    
    eleBtnxocxia.addEventListener('click', ()=>{
        eleloading.style.display = 'block'
        eleImgResult.style.display = 'none';
        eleImgResult2.style.display = 'none';
        eleImgResult3.style.display = 'none';
        
        setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6)
        const randomNumber2 = Math.floor(Math.random() * 6)
        const randomNumber3 = Math.floor(Math.random() * 6)
        console.log(randomNumber);

        eleloading.style.display = 'none'
        eleImgResult.style.display = 'block';
        eleImgResult2.style.display = 'block';
        eleImgResult3.style.display = 'block';

        eleImgResult.src = resultUrlImg[randomNumber]
        eleImgResult2.src = resultUrlImg[randomNumber2]
        eleImgResult3.src = resultUrlImg[randomNumber3]


    }, 1000)
})
}
main()