
function convertValues() {
    const valor = document.querySelector("#inputvalor").value
    const resulvalorde = document.querySelector("#textvalorde")
    const resulvalorpara = document.querySelector("#textvalorpara")
    const firstoption = document.querySelector("#firstoption")
    const secondoption = document.querySelector("#secondoption")
    const moedade = document.querySelector(".textmoedade")
    const moedapara = document.querySelector(".textmoedapara")
    const img1 = document.querySelector(".imgmoeda1")
    const img2 = document.querySelector(".imgmoeda2")



    // real para outros
    if (firstoption.value == "BRL") {
        resulvalorde.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor)
        moedade.innerHTML = firstoption.value
        img1.src = "img/brasil 2.png"

        if (secondoption.value == "BRL") {
            resulvalorpara.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(valor)
            moedapara.innerHTML = secondoption.value
            img2.src = "img/brasil 2.png"
        }

        if (secondoption.value == "USD") {
            resulvalorpara.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(valor / 5.04)
            moedapara.innerHTML = secondoption.value
            img2.src = "img/estados-unidos (1) 1.png"
        }

        if (secondoption.value == "EUR") {
            resulvalorpara.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR'
            }).format(valor / 5.32)
            moedapara.innerHTML = secondoption.value
            img2.src = "img/logoeuropa.png"
        }
    }

    // Dólar para outros
    if (firstoption.value == "USD") {
        resulvalorde.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valor)
        moedade.innerHTML = firstoption.value
        img1.src = "img/estados-unidos (1) 1.png"

        if (secondoption.value == "USD") {
            resulvalorpara.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(valor)
            moedapara.innerHTML = secondoption.value
            img2.src = "img/estados-unidos (1) 1.png"
        }

        if (secondoption.value == "BRL") {
            resulvalorpara.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(valor * 5.04)
            moedapara.innerHTML = secondoption.value
            img2.src = "img/brasil 2.png"
        }


        if (secondoption.value == "EUR") {
            resulvalorpara.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR'
            }).format(valor * 0.95)
            moedapara.innerHTML = secondoption.value
            img2.src = "img/logoeuropa.png"
        }
    }

    // Euro para outros
    if (firstoption.value == "EUR") {
        resulvalorde.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR'
        }).format(valor)
        moedade.innerHTML = firstoption.value
        img1.src = "img/logoeuropa.png"

        if (secondoption.value == "EUR") {
            resulvalorpara.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR'
            }).format(valor)
            moedapara.innerHTML = secondoption.value
            img2.src = "img/logoeuropa.png"
        }

        if (secondoption.value == "BRL") {
            resulvalorpara.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(valor * 5.32)
            moedapara.innerHTML = secondoption.value
            img2.src = "img/brasil 2.png"
        }

        if (secondoption.value == "USD") {
            resulvalorpara.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(valor * 1.06)
            moedapara.innerHTML = secondoption.value
            img2.src = "img/estados-unidos (1) 1.png"
        }
    }

}

