import * as curriculum from "./js/curriculum.js";
import * as eventi from "./js/eventi.js";

let cv={
    nome:"Andrea Lopasso",
    titolo:"Junior Web Developer",
    dati_personali:{
        dataNascita:"05/01/2001, Sanremo",
        indirizzo:"Italia, Liguria (IM)",
        email:"lopassoandrea1@gmail.com",
        telefono:"+39 320 907 5298"
    },
    descrizione:"Sono un giovane aspirante programmatore con la passione per l’informatica fin da quando ero bambino."+
                "<br>Dopo aver conseguito il diploma come operatore elettronico a giugno 2021, ho iniziato a formarmi come web developer, iniziando con il corso Bootcamp come sviluppatore Full Stack presso Aulab Hackademy."+
                "<br>La mia passione e voglia di intraprendere e crescere nella carriera di programmatore mi hanno spinto a continuare la mia formazione frequentando il corso Java Back-End con la compagnia Protom.",
    istruzione:{
        data_diploma:"Giugno 2021",
        diploma:"Istituto superiore IIS G.Marconi Imperia<br>Conseguimento diploma operatore elettronico 80/100",
        data_aulab:"Settembre 2021-Gennaio 2022",
        link_aulab:"Aulab Hackademy. https://aulab.it/",
        aulab:"Corso coding Bootcamp sviluppo web Full Stack.",
        data_java:"Aprile 2022-Giugno 2022",
        java:"Corso Java Back-end Protom",
        link_github:"https://github.com/AndreaL021/AndreaLopasso_repository"
    },
    competenze:{
        linguaggi:["HTML", "CSS", "JAVASCRIPT", "PHP", "JAVA"],
       framework:["Bootstrap", "Laravel", "Vue.js"],
        altro:"- SEO e posizionamento motori di ricerca e Metodologie Agili, console git <br>- Sviluppo applicativi dinamici in Php, Laravel, O.O.P, database relazionali sql, Eloquent Orm"
    },
    certificazioni:{
        titolo:"-Full Stack Web Developer",
        link:"https://www.credential.net/profile/andrealopassp867424/wallet?_ga=2.31600574.1483611197.1643989396-1766135917.1643818668"
    }
}
let header=[cv.nome, cv.titolo];
let body=document.getElementById("row");
let info=document.getElementById("info");
let card_title=["Dati personali","Chi sono", "Istruzione", "Competenze", "Certificazioni", "Esperienza"];
let modal=[cv.dati_personali, cv.descrizione, cv.istruzione, cv.competenze, cv.certificazioni];

//Generazione vista
curriculum.view(header, body, info, card_title);
let card= document.querySelectorAll("#card");
eventi.card(card, modal, card_title);

