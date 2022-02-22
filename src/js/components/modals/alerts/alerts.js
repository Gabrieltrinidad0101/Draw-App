function base(title,text,status){
    new Notify ({
        title,
        text,
        autoclose: true,
        speed: 2000,
        effect: 'slide',
        status
    })
}

export function success(title,text){
    base(title,text,"success")
}

export function error(title,text){
    base(title,text,"error")
}