let pan = document.querySelector('.con_ran .random_pane .pan');
let rule = document.querySelector('.header .con_nav #rule');
let active_rule = document.querySelector('.rule');
let notification = document.querySelector('.notification');
let notification_np = document.querySelector('.notification #num_player');
let notification_noti = document.querySelector('.notification #notifi');
let result = document.querySelector('.result p');
let play = document.querySelector('.start');
let butt_close_rule = document.querySelector('.rule .butt_close');
let butt_close_notifi = document.querySelector('.notification .butt_close');

let num_1 = document.querySelector('.con_ran .random_pane_1 .pan .number p');
let num_2 = document.querySelector('.con_ran .random_pane_2 .pan .number p');
let num_3 = document.querySelector('.con_ran .random_pane_3 .pan .number p');

let input_num_1 = document.querySelector('.input_number_player .input_number #num_1');
let input_num_2 = document.querySelector('.input_number_player .input_number #num_2');
let input_num_3 = document.querySelector('.input_number_player .input_number #num_3');

play.addEventListener('click', random_num);


function random_num() {
    num_1.innerHTML = '';
    num_2.innerHTML = '';
    num_3.innerHTML = '';
    result.innerHTML = '';

    let x_1 = 0;
    let x_2 = 0;
    let x_3 = 0;

    let snn_1 = Math.floor(Math.random() * 100);
    let snn_2 = Math.floor(Math.random() * 100);
    let snn_3 = Math.floor(Math.random() * 100);

    let pause_1 = snn_1 * 50 + 1000;
    let pause_2 = (snn_1 + snn_2) * 50 + 1000;
    let pause_3 = (snn_1 + snn_2 + snn_3) * 50 + 1000;
    // ====================== varible kiem tra gia tri =========
    let kt_1 = 0;
    let noti = 'Congratulations, you guessed correctly:  ';
    let n1 = parseInt(input_num_1.value);
    let n2 = parseInt(input_num_2.value);
    let n3 = parseInt(input_num_3.value);
    // ===========================
    notification.classList.remove('active');
    //==============kiem tra gia tri cua player =================
    setTimeout(() => {

        if (((snn_1 - 5) <= n1) && (n1 <= (snn_1 + 5))) {
            noti = `${noti} number 1 `;
            kt_1++;
        };
        if (((snn_2 - 5) <= n2) && (n2 <= (snn_2 + 5))) {
            noti = `${noti} number 2 `;
            kt_1++;
        };
        if (((snn_3 - 5) <= n3) && (n3 <= (snn_3 + 5))) {
            noti = `${noti} number 3 `;
            kt_1++;
        };

        if (kt_1 == 0) {
            // alert('chúc bạn may mắn lần sau!');
            notification_np.innerHTML = `Ba so ban da chon: ${n1} ${n2} ${n3}` ;
            notification_noti.innerHTML = 'Wish you luck next time';
            notification.classList.add('active');
        } else {
            // alert(noti);
            notification_np.innerHTML = `Ba so ban da chon: ${n1} ${n2} ${n3}` ;
            notification_noti.innerHTML = noti;
            notification.classList.add('active');
        }

    }, pause_3 + 1000);
    // ======= num 1===========
    for (var i = 0; i < 100; i++) {
        let y_1 = x_1++;
        let time = setTimeout(() => {
            num_1.innerHTML = y_1;
        }, 50 * i);
        if (y_1 == snn_1) {
            break;
        }
    }

    // ======= num 2===========
    setTimeout(() => {

        for (var i = 0; i < 100; i++) {
            let y_2 = x_2++;
            let time = setTimeout(() => {
                num_2.innerHTML = y_2;
            }, 50 * i);
            if (y_2 == snn_2) {
                break;
            }
        }
    }, pause_1);

    // ======= num 3===========
    setTimeout(() => {

        for (var i = 0; i < 100; i++) {
            let y_3 = x_3++;
            let time = setTimeout(() => {
                num_3.innerHTML = y_3;
            }, 50 * i);
            if (y_3 == snn_3) {
                break;
            }
        }
    }, pause_2);

    // ======== result ============
    setTimeout(() => {
        result.innerHTML = `${snn_1} ${snn_2} ${snn_3}`;
    }, pause_3);


}

// ======================
rule.addEventListener('click', clickrule);

function clickrule() {
    active_rule.classList.toggle('active');
}

// =======================

butt_close_rule.addEventListener('click', click_close_rule);
function click_close_rule() {
    active_rule.classList.remove('active');
}
butt_close_notifi.addEventListener('click', click_close_noti);
function click_close_noti() {
    notification.classList.remove('active');
}
