
// get canvas
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");


let graph = new Graph(cicles_inf.length, canvas.width, canvas.height);
graph.processCicles(cicles_inf);
graph.drawSections(ctx);
graph.drawTitles(ctx);


