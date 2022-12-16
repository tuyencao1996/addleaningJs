
function textconTent() {
    const eleBTN = document.querySelector('.js-text-content')
    let eleIMG = document.querySelector('.js-img-text')
    const string = [
        "../imgs/bau.jpg",
        "../imgs/tom.jpg",
        "../imgs/cua.jpg",
        "../imgs/ca.jpg",
        "../imgs/ga.jpg",
        "../imgs/nai.jpg",
    ]

    eleBTN.addEventListener('click',() =>{
        eleIMG.style.display = 'block'
    
        setInterval(() => {
            const addLog = Math.floor(Math.random()*6)

                eleIMG.src = string[addLog]
            
            console.log(addLog)
        }, 1000);
    })
}
textconTent()


// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// // expected output: "a"
// // expected output: "b"
// // expected output: "c"


// for (let i = 10; i >= 0; i++){

//     console.log(i)
// }