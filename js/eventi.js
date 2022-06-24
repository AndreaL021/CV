import * as modal_page from "./modal.js";

export function card(card, modal, modal_title) {
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener("click", function() {
            $("#staticBackdrop").modal("show");
            modalpage(i, modal, modal_title);
        });
    }
}

function modalpage(i, modal, modal_title) {
    let page= document.getElementById("page");
    if (i==0) {
        modal_page.modal1(i, page, modal_title, modal);
    }else if (i==1) {
        modal_page.modal2(i, page, modal_title, modal);
    } else if(i==2) {
        modal_page.modal3(i, page, modal_title, modal);
    } else if(i==3) {
        modal_page.modal4(i, page, modal_title, modal);
    } else if(i==4) {
        modal_page.modal5(i, page, modal_title, modal);
    } else if(i==5) {
        modal_page.modal6(i, page, modal_title, modal);
    }
}