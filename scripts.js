let img_slide = 1;
let first_img_slide = "Images/download3.png";
let second_img_slide = "Images/download1.jpg";
let third_img_slide = "Images/download2.jpg";



console.log(topimg_slide);

function update_gallery(n) {
    img_slide = img_slide + n;
    
    if (img_slide === 0) {
        img_slide = 3;
        document.getElementById("topimg").src = third_img_slide;
    }
    
    if (img_slide === 1) {
        document.getElementById("topimg").src = first_img_slide;
    }
    
    if (img_slide === 2) {
        document.getElementById("topimg").src = second_img_slide;
    }
    
    if (img_slide === 3) {
        document.getElementById("topimg").src = third_img_slide;
    }
    
    if (img_slide === 4) {
        img_slide = 1;
        document.getElementById("topimg").src = first_img_slide;
    }
    
    document.getElementById("topimg").styles.width = "100%";
}

function scroll_page(x, y) {
    scrollTo(x, y)
}