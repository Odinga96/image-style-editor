function setImageURL(){
    let img_link = $("#img_input").val();

    $("#img_src").attr("src", img_link);
    $("#img_href").attr("href", img_link);
}


function setImageWidth(){
    let w = $("#img_width").val();

    $("#img_src").attr("style", `width: ${w}px`);
}



function setImageHeight(){
    let h = $("#img_height").val();

    $("#img_src").attr("style", `height: ${h}px`);
}