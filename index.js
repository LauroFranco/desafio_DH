// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
function adicionarAluno(nome){
    novoAluno = {nome:nome,notas:[],cursos:[],faltas:0}

    alunosDaEscola.push(novoAluno)
    }
   
    function listarAlunos(){
    for(var i =0; i<alunosDaEscola.length;i++){

        var nomeDoCurso = "";
        var dataCurso="";
        var novosCursos =alunosDaEscola[i].cursos
        if (novosCursos.length > 0){
            nomeDoCurso = novosCursos[0].nomeDoCurso;
            dataCurso =  novosCursos[0].dataMatricula;
        }

        console.log( `aluno ${alunosDaEscola[i].nome} que possui as notas ${alunosDaEscola[i].notas} presente nos cursos ${nomeDoCurso} iniciado em ${dataCurso} e possui um total de ${alunosDaEscola[i].faltas} faltas` );
    }

    }
    function buscarAluno(nome){
        for(var i =0; i<alunosDaEscola.length;i++){
            if (nome==alunosDaEscola[i].nome)
                return alunosDaEscola[i];
        }
        return null
       }
    function buscarNumeroDoAluno(nome){
        for(var i =0; i<alunosDaEscola.length;i++){
            if (nome==alunosDaEscola[i].nome)
                return i;
        }
        return null
       }


    function matricularAluno(aluno, curso){
     numero=buscarNumeroDoAluno(aluno);
     if (numero !=null){
         novoCurso = {
             nomeDoCurso:curso,
             dataCurso:new Date
         };
        alunosDaEscola[numero].cursos.push(novoCurso);
        console.log(`${alunosDaEscola[numero].nome} foi matriculado no curso de ${curso}`);
     }
   }
    function aplicarFalta(aluno){
        var numero = buscarNumeroDoAluno(aluno);

    if (numero !=null && alunosDaEscola[numero].cursos.length>0 ){
        alunosDaEscola[numero].faltas += 1;
        console.log ("falta adicionada");
        return;
        }
        console.log("falta não adicionada");
    }
    
    function aplicarNota(aluno , novasNotas){
        var numero = buscarNumeroDoAluno(aluno);

    if (numero !=null && alunosDaEscola[numero].cursos.length>0 ){
         
       alunosDaEscola[numero].notas.push(...novasNotas);
       console.log ("nota adicionada");
       return;
    }
    console.log("nota não adicionada");
   }
   
     function aprovarAluno(aluno){
        numero= buscarNumeroDoAluno(aluno);
        if (numero !=null  ){
            var media =0
            for (let i = 0; i < alunosDaEscola[numero].notas.length; i++) {
                media += alunosDaEscola[numero].notas[i];
            }
            media = media/alunosDaEscola[numero].notas.length;
            if(alunosDaEscola[numero].cursos.length>0 && alunosDaEscola[numero].faltas <4 && media>=7){
                console.log("aluno aprovado")
                return
            }
            console.log("aluno reporvado")
            return
        }
        console.log("aluno não cadastrado")
     }

     //adicionarAluno("nome do novo aluno")
     //console.log(buscarAluno("nome do aluno"));
    //listarAlunos();
    //aplicarNota("nome do aluno que esta em algum curso" , [notas ])
    //aplicarFalta("nome do aluno");
    //matricularAluno("nome do aluno","cursos" )
    //aprovarAluno("nome do aluno");