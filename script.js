function sortear() {
    let com = document.getElementById('comecar')
    let elem = document.getElementById('vez_chanc')

    let a = Math.floor(Math.random() * 2)

    if (a == 1) {
        com.textContent = 'X começa'
        elem.textContent = 'x'
    } else {
        com.textContent = 'O começa'
        elem.textContent = 'o'
    }

   
    
}

sortear()





function analise_diagonal(arr) {
    let a = arr[0][0]
    let b = arr[1][1]
    let c = arr[2][2]

    let res = 0

    if (a == b && a == c && c == b && a != '' && b != '' && c != '') {
        res= a
    } 

    a = arr[0][2]
    b = arr[1][1]
    c = arr[2][0]

    if (a == b && a == c && c == b && a != '' && b != '' && c != ''){
        res= a
    }

    return res

}


function analise_horizontal(arr) {
    let a, b,c;
    let res = 0 

    for (let j in arr){
        a = arr[j][0]
        b = arr[j][1]
        c = arr[j][2]

        if (a == b && a == c && c == b && a != '' && b != '' && c != '') {
            console.log('ganhou', a)
            res = a
        }

    }

    return res 
}


function analise_vertical(arr){

    let a, b,c;
    let res = 0

    for (let j in arr){
        a = arr[0][j]
        b = arr[1][j]
        c = arr[2][j]

        if (a == b && a == c && c == b && a != '' && b != '' && c != '') {
            console.log('ganhou', b)
            res = a
        }

    }

    return res 
}

function status(event) {
    let tab = [[], [], []]
    let bttns = document.querySelectorAll('.bttn')
    let elem_st = document.getElementById('ganhou_text')
    let tela_ganhou = document.getElementById('ganhou_tela_preta')


    for (let i in bttns) {
        if (i < 3) {
            tab[0].push(bttns[i].textContent)
        }
        else if (i < 6) {
            tab[1].push(bttns[i].textContent)
        }
        else if (i <= 9) {
            tab[2].push(bttns[i].textContent)
        }
    }

    let test1 = analise_horizontal(tab)
    let test2 = analise_vertical(tab)
    let test3 = analise_diagonal(tab)    

    if (test1 != 0){
        elem_st.innerHTML = `Ganhou: <br>${test1}`
        tela_ganhou.style.display = 'block'
        elem_st.style.display = 'block'

    } else if (test2 != 0) {
        elem_st.innerHTML = `Ganhou: <br>${test2}`
        tela_ganhou.style.display = 'block'
        elem_st.style.display = 'block'

    } else if (test3 != 0) {
        elem_st.innerHTML = `Ganhou: <br>${test3}`
        tela_ganhou.style.display = 'block'
        elem_st.style.display = 'block'
        
    }
    
}






function selecionar(event) {
    let element = event.currentTarget
    let play = document.getElementById('vez_chanc')


    if (element.textContent == '') {
        if (play.textContent == 'x') {
            element.textContent = 'X'
            play.textContent = 'o'
        } else if (play.textContent == 'o'){
            element.textContent = 'O'
            play.textContent = 'x'
        }
    }
    
    status(element)
}