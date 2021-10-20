//                                                                 Seletores,Events 
const html = {
    get(element){
        return document.querySelector(element)
    }
}

const EventosLogin = {
    Checar() {
        let mostrar = html.get('#mostrarpass')
        let input = html.get('#password')
            if(mostrar.checked && input.getAttribute('type') == 'password' ){
               html.get('.mostrar').innerHTML = '<i class="fas fa-eye-slash"></i>'
               input.setAttribute('type', 'text')
            } else {
                html.get('.mostrar').innerHTML = '<i class="fas fa-eye"></i>'
                input.setAttribute('type', 'password')
            }
    },
    Eventslistener() {
        html.get('#mostrarpass').addEventListener('input',this.Checar)
    }
}

// Gui com exibição de valores e porcentagens dentro da carteira 
// Navegação > dados pessoais > carteira 
// Guardar os valores em localstorage para sempre poder acessar -- set(),get() and remove() metodos
// Escopo de calculos 
// Grafico de circulos
// Paginação ou slideshow com os principais 'valores' da carteira 
// Função de atualização da aplicação
// Função de inicialização
function Update() {   
    EventosLogin.Eventslistener()
}
function init() {
    Update()
}
init()