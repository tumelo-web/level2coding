function square(size, char){
    let draw = '';
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            draw += char;
        }
        draw += '\n'
    }
    console.log(draw)
}
square(4, '&');