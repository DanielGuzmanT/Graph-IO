// AXULIAR FUNCTIONS
const state = {
    accepted    : "accepted",
    denied      : "denied",
    conditioned : "conditioned"
};

// conditions for courses required to get a course
const conditions = {
    credits_f1 : "creditos", // form 1, when a course is conditioned by credits completed
    credits_f2 : "créditos", // form 2, same as form 1, but with accent mark
    parallel_1 : "\\[",        // to get position [ === 0, for course that needs to get with another course in parallel
    parallel_2 : "\\]"         // to get position ] === 1, to confirm the parallel course
};


function determineRadius(credits) {
    return 50;
    // return  (credits <= 2.0) ? 40 :
    //         (credits <= 4.0) ? 50 :
    //         (credits <= 6.0) ? 60 : 70;
}

function determineColor(num_open) {
    return  (num_open === -1) ? "#3255f0" :
            (num_open ===  0) ? "#39E444" :
            (num_open ===  1) ? "#FFFF40" :
            (num_open ===  2) ? "#FFB800" :
                                "#FF5300" ;
}

function determineColorCredits(credits) {
    return  (credits <= 20) ? determineColor(-1) :
            (credits <= 24) ? determineColor( 0) :
                              determineColor( 1) ;

}

function initArray(num) {
    let array = [];
    for (let i=0; i<num; ++i) array[i] = 0;
    return array;
}

class Graph {
    constructor(num_sections, width, height, color="#D60062") {
        this.num_sections = num_sections;
        this.width  = width;
        this.height = height;
        this.color  = color;

        this.sections = this.setupSections(num_sections);
        this.credits  = initArray(num_sections);
    }

    insert(node, pos) {
        console.log(node.key, node.course.requisitos);
        // confirm if node can be inserted in that section (number of credits requerired and courses required)
        for (let req=0; req < node.course.requisitos.length; ++req) {
            console.log("requisito: ", node.course.requisitos[req], " - ", pos);
            let requirement = this.requirementCompleted(node.course.requisitos[req], pos);
            if (requirement.conclusion === state.denied) return false;
        }

        // insert node in correct section
        this.sections[pos].insertNode(node);
        this.credits[pos] += node.course.creditos;
        return true;
    }

    setupSections(num) {
        let sections = [];

        let dist   = this.width / num;
        let margin = 30;
        let begin  = 0, end = dist;

        for (let i=0; i<num; i++) {
            sections.push(new Section(begin, end, margin, this.height - margin));
            begin += dist; end += dist;
        }

        return sections;
    }

    processCicles(cicles) {
        for (let ci=0; ci<cicles.length; ++ci) {
            let cicle = cicles[ci];
            for (let co=0; co<cicle.cursos.length; ++co) {
                let course = cicle.cursos[co];
                this.insert(new Node(course), ci);
            }
        }
    }

    drawSections(context){
        // for lines
        context.lineWidth   = 4;
        let long = 10;

        // for text
        context.font = "30px Arial";
        context.textAlign = "center";
        let y_footer = this.height - 30;

        // DRAW SECTION LINES AND CREDITS LABELS
        for (let i=0; i<this.sections.length; ++i) {
            let section = this.sections[i];

            // line
            context.strokeStyle = this.color;
            context.beginPath();
            context.moveTo(section.x_end, section.y_begin);
            context.lineTo(section.x_end, section.y_end  );
            context.stroke();

            // shadow in line
            context.fillStyle   = "rgba(200, 0, 50, 0.10)";
            context.beginPath();
            context.fillRect(section.x_end - long, section.y_begin, 2 * long, section.y_end - section.y_begin);
            context.fill();

            // credits labels
            context.strokeStyle = determineColorCredits(section.credits);
            context.fillStyle   = "rgb(0, 0, 0)";
            context.strokeText(section.credits.toString(), (section.x_end + section.x_begin) / 2, y_footer);
            context.fillText(section.credits.toString(), (section.x_end + section.x_begin) / 2, y_footer);
        }


    }

    requirementCompleted(requisito, pos_cicle){
        let requirement = {};
        requirement.conclusion = state.accepted;

        // number of credits completed
        if (requisito.search(conditions.credits_f1)!==-1 && requisito.search(conditions.credits_f2)!==-1){
            let credits_required = parseFloat(requisito);

            // confirm credits of last cicle
            if(credits_required < this.credits[pos_cicle]) {
                requirement.conclusion = state.denied;
                requirement.description = "no cumple con los créditos suficientes"; // TODO(1): IMPROVE THIS (must use enum)
            }
        } else {
            // [course] completed before or got it this cicle
            // TODO(2): FIND ANOTHER ELEGANT WAY TO EXTRACT COURSE CODE. WHY TO USE "[" AND SPLIT INSTEAD OF CONDITIONS?
            if (requisito.search(conditions.parallel_1)===0 && requisito.search(conditions.parallel_2)!==-1) {
                let course = requisito.split("[")[1].split("]")[0];
                if (!this.courseFound(course, pos_cicle)) {
                    requirement.conclusion = state.conditioned;
                    requirement.description = "debe llevarlo junto al curso " + course;
                }
            }

            // course completed before
            else {
                if (!this.courseFound(requisito, pos_cicle - 1)) {
                    requirement.conclusion = state.denied;
                    requirement.description = "no puede llevar este curso, primero debe completar el curso " + requisito;
                }
            }
        }

        return requirement;
    }

    courseFound(requisito, pos) {

        // iterate over the last sections
        for (let sec=0; sec<=pos; ++sec){
            let section = this.sections[sec];

            // iterate over the nodes(courses) in a section
            for(let no=0; no<section.length; ++no){
                let node = section.nodes[no];

                if (requisito === node.key) return true;
            }
        }
    }
}

class Node {
    constructor(course) {
        this.x = 0;
        this.y = 0;

        this.course = course;
        this.key    = course.clave;
        this.radius = determineRadius(course.creditos);
        this.open   = [];
        this.color  = determineColor(this.open.length);
    }

    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fill();
    }
}

class Section {
    constructor(x_begin, x_end, y_begin=0, y_end) {
        this.nodes   = [];
        this.length  = 0;
        this.credits = 0;

        this.x_begin = x_begin;
        this.x_end   = x_end;
        this.x_middle = (x_end + x_begin) / 2;


        this.y_begin  =  y_begin;
        this.y_end    =  y_end;
        this.y_middle = (y_end + y_begin) / 2;

        this.dist = 20;
    }

    insertNode(node) {
        // update node attributes
        node.x = (this.x_end - this.x_begin) / 2;

        // insert node
        this.nodes.push(node);
        this.credits += node.course.creditos;
        this.length++;

        // update nodes (y) positions
        for (let i=0; i<this.length; ++i) {

        }
    }
}