console.log(cicles_inf.length);

let canvas = document.getElementById('graph-board');
let ctx = canvas.getContext("2d");

let num_lines = cicles_inf.length - 1;
let cicle_width = canvas.width / cicles_inf.length;
let dist = 50;

// print lines
function print_lines(){

    let begin = 0;
    ctx.strokeStyle = "rgb(173, 219, 69)";

    for (let i=0; i<num_lines; ++i) {
        ctx.beginPath();
        ctx.moveTo(begin + cicle_width, 0);
        ctx.lineTo(begin + cicle_width, canvas.height);
        ctx.stroke();

        begin += cicle_width;
    }
}

class Course {

    constructor(course) {
        this.radius = 75;

        this.clave = course["clave"];
        this.curso = course["curso"];
        this.abrev = course["abrev"];
        this.ct = course["ct"];
        this.requisitos = course["requisitos"];
        this.creditos = course["creditos"];

        this.choose_fill_color();
    }

    choose_fill_color() {
        if (this.requisitos.length === 0) this.fill_color= "rgb(65, 191, 65)";
        else if (this.requisitos.length === 1) this.fill_color = "rgb(255, 255, 100)";
        else this.fill_color = "rgb(255, 90, 91)";
    }

    draw (ctx, pos, x){
        ctx.beginPath();
        ctx.arc(x, (pos * 2 - 1) * (this.radius + dist), this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.fill_color;
        ctx.fill();
    };
}

function print_courses(cicle, begin, end){
    let middle = (begin + end) / 2;
    for (let i=0; i<cicle["cursos"].length; ++i) {
        let course = new Course(cicle["cursos"][i]);
        course.draw(ctx, i+1, middle);
    }
}

print_lines(cicles_inf.length);

let begin = 0;
for (let cicle=0; cicle<cicles_inf.length; ++cicle) {
    print_courses(cicles_inf[cicle], begin, begin + cicle_width);
    begin += cicle_width;
    console.log(cicles_inf[cicle]);
}
