// btn : view live 
let btn__proj = document.querySelector('#btn__proj');
// href selector
let project__href = document.querySelector('#btn__proj a');

// logic : panel index
let panel__index = 1;
panel__view(panel__index);

// function : btn controls
function panel__next(n) {
    panel__view(panel__index += n);
}

// function : thumbnail controls
function panel__current(n) {
    panel__view(panel__index = n);
}

// function : panel view
function panel__view(n) {
    let i;
    let panels = document.getElementsByClassName('panels');
    let thumbs = document.getElementsByClassName('thumbs');
    let project__txt = document.querySelector('#project__txt');
    
    if (n > panels.length) {
        panel__index = 1;
    }
    if (n < 1) {
        panel__index = panels.length;
    }
    for (i = 0; i < panels.length; i++) {
        panels[i].style.display = 'none';
        project__links();
    }
    for (i = 0; i < thumbs.length; i++) {
        thumbs[i].className = thumbs[i].className.replace('active', '');
    }

    panels[panel__index-1].style.display = 'flex';
    thumbs[panel__index-1].className += ' active';
    project__txt.innerHTML = thumbs[panel__index - 1].alt;
    project__href.innerHTML = thumbs[panel__index - 1].alt;
}

// function links
function project__links() {
    
    // validate link
    if (project__href.innerHTML == 'vanaheim') {
        btn__proj.innerHTML.setAttribute('href', 'https://github.com/decode-harris/VANAHEIM');
        // test
        console.log('projects href = set : github / vanaheim');
    }
}