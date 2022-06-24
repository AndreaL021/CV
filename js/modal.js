export function modal1(i, page, modal_title, modal) {
    page.innerHTML=`
        <div class="mymodal modal-content">
            <div class="modal-header d-flex justify-content-center">
                <h5 class="modal-title" id="staticBackdropLabel"><b>${modal_title[i]}</b></h5>
            </div>
            <div class="modal-body">
                <ul>
                    <li>
                        <p>Data di nascita: ${modal[i].dataNascita}</p>
                    </li>
                    <li>
                        <p>Email: ${modal[i].email}</p>
                    </li>
                    <li>
                        <p>Indirizzo: ${modal[i].indirizzo}</p>
                    </li>
                    <li>
                        <p>Telefono: ${modal[i].telefono}</p>
                    </li>
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    `;
}
export function modal2(i, page, modal_title, modal) {
    page.innerHTML=`
        <div class="mymodal modal-content">
            <div class="modal-header d-flex justify-content-center">
                <h5 class="modal-title" id="exampleModalLabel"><b>${modal_title[i]}</b></h5>
            </div>
            <div class="modal-body text-start">
                <p style="font-size:20px;">${modal[i]}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    `;
}
export function modal3(i, page, modal_title, modal) {
    page.innerHTML=`
        <div class="mymodal modal-content">
            <div class="modal-header d-flex justify-content-center">
                <h5 class="modal-title" id="exampleModalLabel"><b>${modal_title[i]}</b></h5>
            </div>
            <div class="modal-body text-start">
                <ul>
                    <li>
                        <p>${modal[i].data_diploma} -> ${modal[i].diploma}</p>
                    </li>
                    <li>
                        <p>${modal[i].data_aulab}</p>
                        <p>${modal[i].link_aulab}</p>
                        <p>${modal[i].aulab}</p>
                    </li>
                    <li>
                        <p>${modal[i].data_java}</p>
                        <p>${modal[i].java}</p>
                    </li>
                    <li>
                        <p>Repository github:  <a href="${modal[i].link_github}"><i style="color:black;" class="fa-2x fa-brands fa-github"></i></a></p>
                    </li>
                </ul>
            </div>
            <div class="modal-footer">
            <button style="z-index:1000;" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    `;
}
export function modal4(i, page, modal_title, modal) {
    page.innerHTML=`
        <div class="mymodal modal-content">
            <div class="modal-header d-flex justify-content-center">
                <h5 class="modal-title" id="exampleModalLabel"><b>${modal_title[i]}</b></h5>
            </div>
            <div class="modal-body text-start">
                <ul>
                    <li>
                        <p>Linguaggi conosciuti:</p>
                        <ul>${linguaggi(modal, i)}</ul>
                    </li><br>
                    <li>
                        <p>Framework:</p>
                        <ul>${framework(modal, i)}</ul>
                    </li><br>
                    <li>
                        <p>Altro:</p>
                        <p>${modal[i].altro}</p>
                    </li>
                </ul>
            </div>
            <div class="modal-footer">
            <button style="z-index:1000;" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    `;
}
export function modal5(i, page, modal_title, modal) {
    page.innerHTML=`
        <div class="mymodal modal-content">
            <div class="modal-header d-flex justify-content-center">
                <h5 class="modal-title" id="exampleModalLabel"><b>${modal_title[i]}</b></h5>
            </div>
            <div class="modal-body text-start">
                <a href="${modal[i].link}"><p style="font-size:20px;">${modal[i].titolo}</p></a>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    `;
}
export function modal6(i, page, modal_title, modal) {
    page.innerHTML=`
        <div class="mymodal modal-content">
            <div class="modal-header d-flex justify-content-center">
                <h5 class="modal-title" id="exampleModalLabel"><b>${modal_title[i]}</b></h5>
            </div>
            <div class="modal-body text-start">
                <p style="font-size:20px;">In attesa della prima esperienza</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    `;
}
function linguaggi(modal, i) {
    let linguaggi="";
    for (let y = 0; y < modal[i].linguaggi.length; y++) {
        linguaggi+=`<li>${modal[i].linguaggi[y]} ${fa_linguaggi[y]}</li> `;
    }
    return linguaggi;
}
function framework(modal, i) {
    let framework="";
    for (let y = 0; y < modal[i].framework.length; y++) {
        framework+=`<li>${modal[i].framework[y]} ${fa_framework[y]}</li> `;
    }
    return framework;
}
let fa_linguaggi=[
    "<i style=\"color:orange;\" class=\"fa-2x fa-brands fa-html5\"></i>",
    "<i style=\"color:blue;\" class=\"fa-2x fa-brands fa-css3-alt\"></i>",
    "<i style=\"color:yellow;\" class=\"fa-2x fa-brands fa-js\"></i>",
    "<i style=\"color:darkviolet;\" class=\"fa-2x fa-brands fa-php\"></i>",
    "<i style=\"color:white; background-color:blue;\" class=\"fa-2x fa-brands fa-java\"></i>",
];
let fa_framework=[
    `<i style=\"color:darkviolet;\" class=" fa-2x fa-brands fa-bootstrap"></i>`,
    `<i style=\"color:red;\" class=" fa-2x fa-brands fa-laravel"></i>`,
    `<i style=\"color:green;\" class=" fa-2x fa-brands fa-vuejs"></i>`
];