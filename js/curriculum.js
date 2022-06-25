export function view(header, body, info, card_title) {

    // Header
    for (let i = 0; i < header.length; i++) {
        info.innerHTML+=`
            <span class="fs-info text-center p-2">${header[i]}</span><br>
        `;
    }

    // Card
    for (let i = 0; i < card_title.length; i++) {
        body.innerHTML+=`
            <div class="col-12 col-md-6 col-lg-4 mb-4" style="user-select: none;">
                <div id="card" class="card m-2">
                    <div class="card-body d-flex justify-content-center align-items-center">
                        <h2 class="card-title">${card_title[i]}</h2>
                    </div>
                </div>
            </div>
        `;
    }
}