function signo(){
  let dia = document.getElementById("dia")
  let mes = document.getElementById("mes")
  let nome = document.getElementById("nome")
  let res = document.getElementById("resposta")
  let form = document.getElementById("form")

  if(dia.value.length==0 || mes.value.length==0 || nome.value.length ==0){
    window.alert("[ERRO!!!!] FALTA DE DADOS")
  }
  else if (dia.value > 31 || mes.value >12){
    window.alert("[ERRO!!!] MÊS OU DIA INVÁLIDO")
  }
  else{
    let d = Number(dia.value)
    let m = Number(mes.value)
    let signo = ""
    if((d>=21 && m ==1) || (d<=19 && m ==2)){
        if(form.parentNode){
            form.parentNode.removeChild(form)
        }
        signo = "Aquário"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Aquário é conhecido por sua originalidade, sua mente aberta e seu compromisso com a justiça e a igualdade. As pessoas desse signo têm uma forte intuição e uma grande capacidade de pensar fora da caixa. Eles são muito independentes e valorizam sua liberdade acima de tudo. Aquário é também muito humanitário e está sempre procurando maneiras de ajudar os outros e melhorar o mundo.</p>"
        res.innerHTML+="<p>Pontos fracos: Aquário pode ser muito teimoso e inflexível em suas crenças, o que pode dificultar a resolução de problemas e a cooperação com os outros. Eles podem ser vistos como distantes ou indiferentes emocionalmente, o que pode dificultar a criação de relacionamentos profundos e significativos. Aquário também pode ser muito impaciente e impetuoso em suas decisões.</p>"
    }
    else if(d>27 && m==2){
        window.alert('ERRO!!!(Dia inválido)')
    }
    else if((d>=20 && m ==2) || (d<=20 && m ==3)){
        if(form.parentNode){
            form.parentNode.removeChild(form)
        }
        signo = "Peixes"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Peixes é um signo sensível e intuitivo, conhecido por sua compaixão,imaginação e sabedoria. São pessoas criativas e empáticas, que se preocupam profundamente com os outros e têm uma habilidade natural para sentir as emoções dos outros. Possuem uma habilidade natural para a arte, música e outras formas de expressão criativa.</p>"
        res.innerHTML+= '<p>Pontos fracos: Peixes pode ser confuso, passivo e indeciso em momentos de estresse.Eles também podem ter dificuldade em estabelecer limites e podem ser vistos como escapistas em relação aos problemas da vida.</p>'
    }
    else if((d>=21 && m ==3) || (d<=20 && m ==4)){
    if(form.parentNode){
        form.parentNode.removeChild(form)
    }
        signo = "Áries"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Áries é um signo impulsivo e enérgico, conhecido por sua coragem,determinação e liderança. São pessoas confiantes e cheias de iniciativa, que não têm medo de assumir riscos e tomar decisões difíceis. Possuem uma habilidade natural para liderar equipes e são muito determinados em alcançar seus objetivos.</p>"
        res.innerHTML+= '<p>Pontos fracos: Áries pode ser impaciente, agressivo e egoísta em momentos de estresse. Eles também podem agir sem pensar nas consequências, o que pode causar conflitos com outras pessoas. Áries pode ter dificuldade em trabalhar em equipe pode ser visto como arrogante ou dominador.</p>'
    }
    else if((d>=21 && m ==4) || (d<=20 && m ==5)){
        let form = document.getElementById("form")
    if(form.parentNode){
        form.parentNode.removeChild(form)
    }
        signo = "Touro"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Touro é um signo prático e confiável, conhecido por sua lealdade e senso de estabilidade. São pessoas trabalhadoras e persistentes, com um grande senso de determinação.Também têm uma apreciação pela beleza e pela qualidade de vida </p>"
        res.innerHTML+= "<p>Pontos fracos: Touro pode ser teimoso e inflexível em suas opiniões, o que pode dificultar a comunicação com os outros. Além disso, pode ser materialista e preguiçoso em relação a atividades físicas.</p>"
    }
    else if((d>=21 && m ==5) || (d<=20 && m ==6)){
    if(form.parentNode){
        form.parentNode.removeChild(form)
    }
        signo = "Gêmeos"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Gêmeos é conhecido por ser um signo muito inteligente e comunicativo. As pessoas desse signo geralmente têm uma mente ágil e são capazes de processar informações rapidamente. Eles são muito sociáveis e têm um grande círculo de amigos. Gêmeos é também muito adaptável, o que os torna capazes de se ajustar a novas situações com facilidade.</p>"
       res.innerHTML += "<p>Pontos fracos:  Gêmeos pode ser muito indeciso e superficial, o que pode dificultar a tomada de decisões importantes. Eles podem se dispersar facilmente, o que pode afetar sua capacidade de se concentrar em uma tarefa específica. Gêmeos também pode ter dificuldade em manter relacionamentos profundos e significativos devido à sua natureza volátil.</p>"
    }
    else if((d>=21 && m ==6) || (d<=22 && m ==7)){
    if(form.parentNode){
        form.parentNode.removeChild(form)
    }
        signo = "Câncer"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Câncer é um signo emocional e sensível, conhecido por sua compaixão, intuição e lealdade. São pessoas empáticas e acolhedoras, que se importam profundamente com os outros e estão sempre dispostas a ajudar. Possuem uma habilidade natural para criar laços emocionais e nutrir relacionamentos.</p>"
        res.innerHTML+= "<p>Pontos fracos: Câncer pode ser emocionalmente instável, carente e manipulador em momentos de estresse. Eles também podem ter dificuldade em lidar com mudanças e podem ser excessivamente protetores em relação às pessoas que amam.</p>"
    }
    else if((d>=23 && m ==7) || (d<=22 && m ==8)){
    if(form.parentNode){
        form.parentNode.removeChild(form)
    }
        signo = "Leão"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Leão é um signo dominante e expressivo, conhecido por sua generosidade, carisma e liderança. São pessoas criativas, confiantes e com uma grande presença de palco. Possuem uma habilidade natural para liderar equipes e inspirar os outros com sua energia e entusiasmo.</p>"
        res.innerHTML+= "<p>Pontos fracos: Leão pode ser arrogante, autoritário e dominador em momentos de estresse. Eles também podem ser vistos como egocêntricos e ter dificuldade em ouvir os outros. Leão pode ter dificuldade em trabalhar em equipe, a menos que sejam o líder.</p>"
    }
    else if((d>=23 && m ==8) || (d<=22 && m ==9)){
    if(form.parentNode){
        form.parentNode.removeChild(form)
    }
        signo = "Virgem"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Virgem é um signo prático e analítico, conhecido por sua atenção aos detalhes e eficiência. São pessoas inteligentes e organizadas, com um grande senso de responsabilidade. Também têm um forte senso de serviço aos outros.</p>"
        res.innerHTML += "<p>Pontos fracos: Virgem pode ser crítico e exigente consigo mesmo e com os outros, o que pode levar a uma tendência a ser perfeccionista. Além disso, pode ter dificuldade em relaxar e se divertir.</p>"
    }
    else if((d>=23 && m ==9) || (d<=22 && m ==10)){
    if(form.parentNode){
        form.parentNode.removeChild(form)
    }
        signo = "Libra"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Libra é conhecido por ser um signo muito equilibrado e justo. As pessoas desse signo valorizam a harmonia e a beleza em suas vidas. Libra é também muito criativo e tem uma grande habilidade para artes visuais e design. Eles são muito criativo e tem uma grande habilidade para artes visuais e design. Eles são muito duradouros</p>"
        res.innerHTML += "<p>Pontos fracos: Libra pode ser muito indeciso e pode levar muito tempo para tomar decisões importantes. Eles também podem ser muito passivos e evitar conflitos a todo custo, o que pode dificultar a resolução de problemas. Libra também pode ter dificuldade em tomar decisões importantes devido à sua natureza indecisa.</p>"
    }
    else if((d>=23 && m ==10) || (d<=21 && m ==11)){
    if(form.parentNode){
        form.parentNode.removeChild(form)
    }
        signo = "Escorpião"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Escorpião é um signo intenso e apaixonado, conhecido por sua determinação, mistério e lealdade. São pessoas profundas e poderosas, que não têm medo de enfrentar desafios e superar obstáculos. Possuem uma habilidade natural para investigar e descobrir a verdade em situações complexas.</p>"
        res.innerHTML += "<p>Pontos fracos: Escorpião pode ser ciumento, possessivo e manipulador em alguns momentos</p>"
    }
    else if((d>=22 && m ==11) || (d<=21 && m ==12)){
    if(form.parentNode){
        form.parentNode.removeChild(form)
    }
        signo = "Sagitário"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Sagitário é um signo aventureiro e otimista, conhecido por sua sinceridade, curiosidade e filosofia de vida. São pessoas extrovertidas e cheias de energia, que gostam de explorar novas ideias e lugares. Possuem uma habilidade natural para inspirar os outros com sua visão de futuro e entusiasmo.</p>"
        res.innerHTML += "<p>Pontos fracos: Sagitário pode ser imprudente, excessivamente confiante e  desorganizado em momentos de estresse.Eles também podem ser vistos como desconfiados e ter dificuldade em perdoar as pessoas que os traíram.</p>"
    }
    else{
    if(form.parentNode){
        form.parentNode.removeChild(form)
    }
        signo = "Capricórnio"
        res.innerHTML = `<h1>${nome.value} você é do signo de ${signo}</h1>`
        res.innerHTML+= "<p>Pontos fortes: Capricórnio é conhecido por ser um signo determinado e responsável. As pessoas desse signo são trabalhadoras e têm um forte senso de propósito e dever. São pacientes e perseverantes, o que lhes permite alcançar seus objetivos. Capricórnio é também muito leal, confiável e dedicado aos seus amigos e familiares.</p>"
        res.innerHTML +="<p>Pontos fracos: Por vezes, Capricórnio pode ser muito austero e reservado, o que pode dificultar a comunicação com os outros. Eles podem ser muito críticos e exigentes consigo mesmos e com os outros, o que pode causar conflitos e tensão nas relações pessoais. Capricórnio também pode ter dificuldade em lidar com suas emoções e expressá-las de maneira adequada.</p>"
    }
  }
}