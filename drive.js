let close_btn = document.getElementById('btn1');
close_btn.addEventListener('click', function(){
    let sub_div = document.getElementById('box1')
    sub_div.classList.add('display_none')
    let grid9 = document.getElementById('grid_1')
    grid9.classList.add('display_show')
})

let show_flex_box = document.getElementById('btn2')
show_flex_box.addEventListener('click', function(){
    let grid_hide = document.getElementById('box1')
    grid_hide.classList.remove('display_none')
    let show_flex = document.getElementById('grid_1')
    show_flex.classList.remove('display_show')
})