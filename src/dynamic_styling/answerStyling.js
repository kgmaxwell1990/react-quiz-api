export function answersOn() {
    
    document.getElementById('c_answer').classList.add('btn_green');
    document.getElementById('c_answer').classList.remove('hover');
    document.getElementById('icon_correct').innerHTML="check";
    
    let wrong_answers = document.getElementsByClassName('w_answer');
    for (let i = 0; i <= wrong_answers.length -1; i++) {
        wrong_answers[i].classList.add('btn_red');
        wrong_answers[i].classList.remove('hover');
    }
    let all_answers = document.getElementsByClassName('answer_btn');
    for (let i = 0; i <= all_answers.length -1; i++) {
        all_answers[i].disabled = true;
        all_answers[i].classList.remove('hover');
    }
    
    let answers_text = document.getElementsByClassName('answers_text');
    for (let i = 0; i <= answers_text.length -1; i++) {
        answers_text[i].classList.add('color_white');
    }
    
    let answers_icon = document.getElementsByClassName('icon_wrong');
    for (let i = 0; i <= answers_icon.length -1; i++) {
        answers_icon[i].innerHTML="clear";
    }
}

export function answersOff() {
    
    document.getElementById('c_answer').classList.remove('btn_green');
    document.getElementById('c_answer').classList.add('hover');
    document.getElementById('icon_correct').innerHTML="";
    
    let wrong_answers = document.getElementsByClassName('w_answer');
    for (let i = 0; i <= wrong_answers.length -1; i++) {
        wrong_answers[i].classList.remove('btn_red');
        wrong_answers[i].classList.add('hover');
    }
    let all_answers = document.getElementsByClassName('answer_btn');
    for (let i = 0; i <= all_answers.length -1; i++) {
        all_answers[i].disabled = false;
        all_answers[i].classList.add('hover');
    }
    
    let answers_text = document.getElementsByClassName('answers_text');
    for (let i = 0; i <= answers_text.length -1; i++) {
        answers_text[i].classList.remove('color_white');
    }
    
    let answers_icon = document.getElementsByClassName('icon_wrong');
    for (let i = 0; i <= answers_icon.length -1; i++) {
        answers_icon[i].innerHTML="";
    }
}