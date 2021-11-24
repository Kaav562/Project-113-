function preload() {
    img = loadImage('https://cdn.pixabay.com/photo/2018/10/22/19/40/abstract-3766180_960_720.png');
    
}

    function setup() 
    {
        canvas = createCanvas(640, 480);
        canvas.position(110, 250);
        video = createCapture(VIDEO);
        video.hide();

        tint_color = "";
    }

    function draw(){
        image(video, 0, 0, 640, 480);
        tint(tint_color);
        image(img, 0, 0, 640, 480);
    }

    function take_snapshot() {
        save('student_name.png');
    }

    function filter_tint()
    {
        tint_color = document.getElementById("color_name").value;
    } 