// testcode
// $("#gu_btn").css("color","red");


// test jrumble
// $(function(){
//     $('#my-kabuto').jrumble();
//     $('#my-kabuto').on({
//         mouseenter: function(){
//             $('#my-kabuto').trigger('startRumble');
//         },
//         mouseleave: function(){
//             $('#my-kabuto').trigger('stopRumble');
//         }
//     });
// });

let my_hp = 100;
let pc_hp = 100;

document.getElementById('my-life-bar').style.width = '100%';
document.getElementById('pc-life-bar').style.width = '100%';


// グーを選んだとき
$('#gu_btn').on('click',function(){
    // コンピューターの出した手
    // 1.乱数
    const pc = Math.floor(Math.random()*3);

    let pc_hand = '';
    let result = '';

    if(pc == 0){
        pc_hand = 'グー';
        result = 'あいこ';
    }else if(pc == 1){
        pc_hand = 'チョキ';
        result = '勝ち';
    }else if(pc == 2){
        pc_hand = 'パー';
        result = '負け';
    }

    // 2.表示処理
    // お互いの選択した手のサイズを一時的に大きくする
    $('#my_gu_img').addClass('hand_img_big');
    setTimeout(function(){
        $('#my_gu_img').removeClass('hand_img_big');
    },2000)

    if(pc_hand == 'グー'){
        $('#pc_gu_img').addClass('hand_img_big');
        setTimeout(function(){
            $('#pc_gu_img').removeClass('hand_img_big');
        },2000)
    }else if(pc_hand == 'チョキ'){
        $('#pc_cho_img').addClass('hand_img_big');
        setTimeout(function(){
            $('#pc_cho_img').removeClass('hand_img_big');
        },2000)
    }else if(pc_hand == 'パー'){
        $('#pc_par_img').addClass('hand_img_big');
        setTimeout(function(){
            $('#pc_par_img').removeClass('hand_img_big');
        },2000);
    };

    // 勝った場合、自分のかぶとむしを動かして、相手にダメージ演出
    if(result == '勝ち'){
        $(function(){
            // 自分のかぶとむし動かす
            $('#my-kabuto').jrumble({
                'x':30,
                'y':30,
                'rotation':30
            });
            $('#my-kabuto').trigger('startRumble');
            setTimeout(function(){
                $('#my-kabuto').trigger('stopRumble');
            },700);

            // 相手のかぶとむしダメージ演出
            setTimeout(function(){
                $('#pc-kabuto').addClass('custom-blink');
            },700);
            setTimeout(function(){
                $('#pc-kabuto').removeClass('custom-blink');
            },1400);
        });

        // hp操作
        pc_hp -=  60;
        // 0で止める操作
        if(pc_hp < 0){
            pc_hp = 0;
            setTimeout(function(){
                document.getElementById('pc-life-mark').style.visibility = 'hidden'
            }, 1700)
        };

        setTimeout(function(){
            document.getElementById('pc-life-bar').style.width = pc_hp + '%';
            document.querySelector('#pc_hp').textContent = pc_hp;
        },1400);

    //  負けた場合
    }else if(result == '負け'){
        $(function(){
            // 相手のかぶとむし動かす
            $('#pc-kabuto').jrumble({
                'x':30,
                'y':30,
                'rotation':30
            });
            $('#pc-kabuto').trigger('startRumble');
            setTimeout(function(){
                $('#pc-kabuto').trigger('stopRumble');
            },700);

            // 自分のかぶとむしダメージ演出
            setTimeout(function(){
                $('#my-kabuto').addClass('custom-blink');
            },700);
            setTimeout(function(){
                $('#my-kabuto').removeClass('custom-blink');
            },1400);
        });
        // hp操作
        my_hp -= 60;
        // 0で止める操作
        if(my_hp < 0){
            my_hp = 0;
            setTimeout(function(){
                document.getElementById('my-life-mark').style.visibility = 'hidden'
            }, 1700)
        };

        setTimeout(function(){
            document.getElementById('my-life-bar').style.width = my_hp + '%';
            document.querySelector('#my_hp').textContent = my_hp;
        },1400);

    // あいこの場合
    }else if(result == 'あいこ'){
        // お互いのかぶとむしダメージ演出
        $('#my-kabuto, #pc-kabuto').addClass('custom-blink');
        setTimeout(function(){
            $('#my-kabuto, #pc-kabuto').removeClass('custom-blink');
        },700);

        // hp操作
        my_hp -= 10;
        pc_hp -= 10;
        // 0で止める操作
        if(pc_hp < 0){
            pc_hp = 0;
        };
        if(my_hp < 0){
            my_hp = 0;
            setTimeout(function(){
                document.getElementById('my-life-mark').style.visibility = 'hidden'
                document.getElementById('pc-life-mark').style.visibility = 'hidden'
            }, 1000)
        };

        setTimeout(function(){
            document.getElementById('my-life-bar').style.width = my_hp + '%';
            document.getElementById('pc-life-bar').style.width = pc_hp + '%';
            document.querySelector('#my_hp').textContent = my_hp;
            document.querySelector('#pc_hp').textContent = pc_hp;
        },700);
    };

})


// チョキを選んだとき
$('#cho_btn').on('click',function(){
    // コンピューターの出した手
    // 1.乱数
    const pc = Math.floor(Math.random()*3);

    let pc_hand = '';
    let result = '';

    if(pc == 0){
        pc_hand = 'グー';
        result = '負け';
    }else if(pc == 1){
        pc_hand = 'チョキ';
        result = 'あいこ';
    }else if(pc == 2){
        pc_hand = 'パー';
        result = '勝ち';
    }
    

    // 2.表示処理
    // お互いの選択した手のサイズを一時的に大きくする
    $('#my_cho_img').addClass('hand_img_big');
    setTimeout(function(){
        $('#my_cho_img').removeClass('hand_img_big');
    },2000)

    if(pc_hand == 'グー'){
        $('#pc_gu_img').addClass('hand_img_big');
        setTimeout(function(){
            $('#pc_gu_img').removeClass('hand_img_big');
        },2000)
    }else if(pc_hand == 'チョキ'){
        $('#pc_cho_img').addClass('hand_img_big');
        setTimeout(function(){
            $('#pc_cho_img').removeClass('hand_img_big');
        },2000)
    }else if(pc_hand == 'パー'){
        $('#pc_par_img').addClass('hand_img_big');
        setTimeout(function(){
            $('#pc_par_img').removeClass('hand_img_big');
        },2000);
    };

    // 勝った場合、自分のかぶとむしを動かして、相手にダメージ演出
    if(result == '勝ち'){
        $(function(){
            // 自分のかぶとむし動かす
            $('#my-kabuto').jrumble({
                'x':8,
                'y':8,
                'rotation':10
            });
            $('#my-kabuto').trigger('startRumble');
            setTimeout(function(){
                $('#my-kabuto').trigger('stopRumble');
            },700);

            // 相手のかぶとむしダメージ演出
            setTimeout(function(){
                $('#pc-kabuto').addClass('custom-blink');
            },700);
            setTimeout(function(){
                $('#pc-kabuto').removeClass('custom-blink');
            },1400);
        });

        // hp操作
        pc_hp -=  30;
        // 0で止める操作
        if(pc_hp < 0){
            pc_hp = 0;
            setTimeout(function(){
                document.getElementById('pc-life-mark').style.visibility = 'hidden'
            }, 1700)
        };

        setTimeout(function(){
            document.getElementById('pc-life-bar').style.width = pc_hp + '%';
            document.querySelector('#pc_hp').textContent = pc_hp;
        },1400);

    //  負けた場合
    }else if(result == '負け'){
        $(function(){
            // 相手のかぶとむし動かす
            $('#pc-kabuto').jrumble({
                'x':8,
                'y':8,
                'rotation':10
            });
            $('#pc-kabuto').trigger('startRumble');
            setTimeout(function(){
                $('#pc-kabuto').trigger('stopRumble');
            },700);

            // 自分のかぶとむしダメージ演出
            setTimeout(function(){
                $('#my-kabuto').addClass('custom-blink');
            },700);
            setTimeout(function(){
                $('#my-kabuto').removeClass('custom-blink');
            },1400);
        });
        // hp操作
        my_hp -= 30;
        // 0で止める操作
        if(my_hp < 0){
            my_hp = 0;
            setTimeout(function(){
                document.getElementById('my-life-mark').style.visibility = 'hidden'
            }, 1700)
        };

        setTimeout(function(){
            document.getElementById('my-life-bar').style.width = my_hp + '%';
            document.querySelector('#my_hp').textContent = my_hp;
        },1400);

    // あいこの場合
    }else if(result == 'あいこ'){
        // お互いのかぶとむしダメージ演出
        $('#my-kabuto, #pc-kabuto').addClass('custom-blink');
        setTimeout(function(){
            $('#my-kabuto, #pc-kabuto').removeClass('custom-blink');
        },700);

        // hp操作
        my_hp -= 10;
        pc_hp -= 10;
        // 0で止める操作
        if(pc_hp < 0){
            pc_hp = 0;
        };
        if(my_hp < 0){
            my_hp = 0;
            setTimeout(function(){
                document.getElementById('my-life-mark').style.visibility = 'hidden'
                document.getElementById('pc-life-mark').style.visibility = 'hidden'
            }, 1000)
        };

        setTimeout(function(){
            document.getElementById('my-life-bar').style.width = my_hp + '%';
            document.getElementById('pc-life-bar').style.width = pc_hp + '%';
            document.querySelector('#my_hp').textContent = my_hp;
            document.querySelector('#pc_hp').textContent = pc_hp;
        },700);
    };

})

// パーを選んだとき
$('#par_btn').on('click',function(){
    // コンピューターの出した手
    // 1.乱数
    const pc = Math.floor(Math.random()*3);

    let pc_hand = '';
    let result = '';

    if(pc == 0){
        pc_hand = 'グー';
        result = '勝ち';
    }else if(pc == 1){
        pc_hand = 'チョキ';
        result = '負け';
    }else if(pc == 2){
        pc_hand = 'パー';
        result = 'あいこ';
    }

    // 2.表示処理
    // お互いの選択した手のサイズを一時的に大きくする
    $('#my_par_img').addClass('hand_img_big');
    setTimeout(function(){
        $('#my_par_img').removeClass('hand_img_big');
    },2000)

    if(pc_hand == 'グー'){
        $('#pc_gu_img').addClass('hand_img_big');
        setTimeout(function(){
            $('#pc_gu_img').removeClass('hand_img_big');
        },2000)
    }else if(pc_hand == 'チョキ'){
        $('#pc_cho_img').addClass('hand_img_big');
        setTimeout(function(){
            $('#pc_cho_img').removeClass('hand_img_big');
        },2000)
    }else if(pc_hand == 'パー'){
        $('#pc_par_img').addClass('hand_img_big');
        setTimeout(function(){
            $('#pc_par_img').removeClass('hand_img_big');
        },2000);
    };

    // 勝った場合、自分のかぶとむしを動かして、相手にダメージ演出
    if(result == '勝ち'){
        $(function(){
            // 自分のかぶとむし動かす
            $('#my-kabuto').jrumble({
                'x':8,
                'y':8,
                'rotation':10
            });
            $('#my-kabuto').trigger('startRumble');
            setTimeout(function(){
                $('#my-kabuto').trigger('stopRumble');
            },700);

            // 相手のかぶとむしダメージ演出
            setTimeout(function(){
                $('#pc-kabuto').addClass('custom-blink');
            },700);
            setTimeout(function(){
                $('#pc-kabuto').removeClass('custom-blink');
            },1400);
        });

        // hp操作
        pc_hp -=  30;
        // 0で止める操作
        if(pc_hp < 0){
            pc_hp = 0;
            setTimeout(function(){
                document.getElementById('pc-life-mark').style.visibility = 'hidden'
            }, 1700)
        };

        setTimeout(function(){
            document.getElementById('pc-life-bar').style.width = pc_hp + '%';
            document.querySelector('#pc_hp').textContent = pc_hp;
        },1400);

    //  負けた場合
    }else if(result == '負け'){
        $(function(){
            // 相手のかぶとむし動かす
            $('#pc-kabuto').jrumble({
                'x':8,
                'y':8,
                'rotation':10
            });
            $('#pc-kabuto').trigger('startRumble');
            setTimeout(function(){
                $('#pc-kabuto').trigger('stopRumble');
            },700);

            // 自分のかぶとむしダメージ演出
            setTimeout(function(){
                $('#my-kabuto').addClass('custom-blink');
            },700);
            setTimeout(function(){
                $('#my-kabuto').removeClass('custom-blink');
            },1400);
        });
        // hp操作
        my_hp -= 30;
        // 0で止める操作
        if(my_hp < 0){
            my_hp = 0;
            setTimeout(function(){
                document.getElementById('my-life-mark').style.visibility = 'hidden'
            }, 1700)
        };

        setTimeout(function(){
            document.getElementById('my-life-bar').style.width = my_hp + '%';
            document.querySelector('#my_hp').textContent = my_hp;
        },1400);

    // あいこの場合
    }else if(result == 'あいこ'){
        // お互いのかぶとむしダメージ演出
        $('#my-kabuto, #pc-kabuto').addClass('custom-blink');
        setTimeout(function(){
            $('#my-kabuto, #pc-kabuto').removeClass('custom-blink');
        },700);

        // hp操作
        my_hp -= 10;
        pc_hp -= 10;
        // 0で止める操作
        if(pc_hp < 0){
            pc_hp = 0;
        };
        if(my_hp < 0){
            my_hp = 0;
            setTimeout(function(){
                document.getElementById('my-life-mark').style.visibility = 'hidden'
                document.getElementById('pc-life-mark').style.visibility = 'hidden'
            }, 1000)
        };

        setTimeout(function(){
            document.getElementById('my-life-bar').style.width = my_hp + '%';
            document.getElementById('pc-life-bar').style.width = pc_hp + '%';
            document.querySelector('#my_hp').textContent = my_hp;
            document.querySelector('#pc_hp').textContent = pc_hp;
        },700);
    };

})


// 体力が0になったときに画面の上に文字を表示










