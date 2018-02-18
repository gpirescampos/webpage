function introMobile() {
    var wWidth = $("#c1").innerWidth();
    var wHeight = $("#c1").innerHeight();
    var c = document.getElementById("c1");
    c.width = wWidth;
    c.height = wHeight;
    var ctx = c.getContext("2d");
    ctx.fillStyle="rgba(95, 75, 139, 0.4)";
    ctx.moveTo(0,0);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight);
    ctx.lineTo(0,wHeight-wHeight/4.3);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight/4.3);
    ctx.lineTo(0,0);
    ctx.fill();
    ctx.fillStyle="white";
    ctx.font = "100 22px Open Sans";
    ctx.fillText("techie",30,28);
    c = document.getElementById("c2");
    c.width = wWidth;
    c.height = wHeight;
    ctx = c.getContext("2d");
    ctx.fillStyle="rgba(95, 75, 139, 0.6)";
    ctx.moveTo(0,0);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight);
    ctx.lineTo(0,wHeight-wHeight/4.3);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight/4.3);
    ctx.lineTo(0,0);
    ctx.fill();
    ctx.fillStyle="white";
    ctx.font = "100 22px Open Sans";
    ctx.fillText("swift learner",30,28);
    c = document.getElementById("c3");
    c.width = wWidth;
    c.height = wHeight;
    ctx = c.getContext("2d");
    ctx.fillStyle="rgba(95, 75, 139, 0.8)";
    ctx.moveTo(0,0);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight);
    ctx.lineTo(0,wHeight-wHeight/4.3);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight/4.3);
    ctx.lineTo(0,0);
    ctx.fill();
    ctx.fillStyle="white";
    ctx.font = "100 22px Open Sans";
    ctx.fillText("problem solver *",30,28);
    c = document.getElementById("c4");
    c.width = wWidth;
    c.height = wHeight;
    ctx = c.getContext("2d");
    ctx.fillStyle="#5f4b8b";
    ctx.moveTo(0,0);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight);
    ctx.lineTo(0,wHeight-wHeight/4.3);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight/4.3);
    ctx.lineTo(0,0);
    ctx.fill();
    ctx.fillStyle="white";
    ctx.font = "100 22px Open Sans";
    ctx.fillText("challenge seeker",30,28);
}
function introDesktop() {
    var wWidth = $("#c1").innerWidth();
    var wHeight = $("#c1").innerHeight();
    var c = document.getElementById("c1");
    c.width = wWidth;
    c.height = wHeight;
    var ctx = c.getContext("2d");
    ctx.fillStyle="rgba(95, 75, 139, 0.4)";
    ctx.moveTo(0,0);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight);
    ctx.lineTo(0,wHeight-wHeight/4.3);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight/4.3);
    ctx.lineTo(0,0);
    ctx.fill();
    ctx.fillStyle="white";
    ctx.font = "100 60px Open Sans";
    ctx.fillText("techie",80,65);
    c = document.getElementById("c2");
    c.width = wWidth;
    c.height = wHeight;
    ctx = c.getContext("2d");
    ctx.fillStyle="rgba(95, 75, 139, 0.6)";
    ctx.moveTo(0,0);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight);
    ctx.lineTo(0,wHeight-wHeight/4.3);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight/4.3);
    ctx.lineTo(0,0);
    ctx.fill();
    ctx.fillStyle="white";
    ctx.font = "100 60px Open Sans";
    ctx.fillText("swift learner",80,65);
    c = document.getElementById("c3");
    c.width = wWidth;
    c.height = wHeight;
    ctx = c.getContext("2d");
    ctx.fillStyle="rgba(95, 75, 139, 0.8)";
    ctx.moveTo(0,0);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight);
    ctx.lineTo(0,wHeight-wHeight/4.3);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight/4.3);
    ctx.lineTo(0,0);
    ctx.fill();
    ctx.fillStyle="white";
    ctx.font = "100 60px Open Sans";
    ctx.fillText("problem solver *",80,65);
    c = document.getElementById("c4");
    c.width = wWidth;
    c.height = wHeight;
    ctx = c.getContext("2d");
    ctx.fillStyle="#5f4b8b";
    ctx.moveTo(0,0);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight);
    ctx.lineTo(0,wHeight-wHeight/4.3);
    ctx.lineTo(wWidth,0);
    ctx.lineTo(wWidth,wHeight/4.3);
    ctx.lineTo(0,wHeight/4.3);
    ctx.lineTo(0,0);
    ctx.fill();
    ctx.fillStyle="white";
    ctx.font = "100 60px Open Sans";
    ctx.fillText("challenge seeker",80,65);
}

function socialMobile() {
    var wWidth = $("#timeline").innerWidth();
    var wHeight = $("#timeline").innerHeight();
    var c = document.getElementById("timeline");
    c.width = wWidth;
    c.height = wHeight;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#5f4b8b";
    ctx.strokeStyle = "#5f4b8b";
    ctx.beginPath();
    ctx.arc(20, 20, 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 80);
    ctx.stroke();
    ctx.moveTo(20, 90);
    ctx.arc(20, 90, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 100);
    ctx.arc(20, 100, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 110);
    ctx.arc(20, 110, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 120);
    ctx.lineTo(20, 180);
    ctx.stroke();
    ctx.moveTo(20, 180);
    ctx.arc(20, 180, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 180);
    ctx.lineTo(20, 210);
    ctx.stroke();
    ctx.moveTo(20, 210);
    ctx.arc(20, 210, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 210);
    ctx.lineTo(20, 240);
    ctx.stroke();
    ctx.moveTo(20, 240);
    ctx.arc(20, 240, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 240);
    ctx.lineTo(20, 270);
    ctx.stroke();
    ctx.moveTo(20, 270);
    ctx.arc(20, 270, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 270);
    ctx.lineTo(20, 300);
    ctx.stroke();
    ctx.moveTo(20, 300);
    ctx.arc(20, 300, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 300);
    ctx.lineTo(20, 330);
    ctx.stroke();
    ctx.moveTo(20, 340);
    ctx.arc(20, 340, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 350);
    ctx.arc(20, 350, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 360);
    ctx.arc(20, 360, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.font = "700 12px Open Sans";
    ctx.fillText("null", 30, 25);
    ctx.fill();
    ctx.font = "100 12px Open Sans";
    ctx.fillText("Big bang", 70, 25);
    ctx.fill();
    ctx.font = "700 12px Open Sans";
    ctx.fillText("1989", 30, 185);
    ctx.fill();
    ctx.font = "100 12px Open Sans";
    ctx.fillText("Born in Portugal", 70, 185);
    ctx.fill();
    ctx.font = "700 12px Open Sans";
    ctx.fillText("2013", 30, 215);
    ctx.fill();
    ctx.font = "100 12px Open Sans";
    ctx.fillText("Electrical and Computers Eng. Master", 70, 215);
    ctx.fill();
    ctx.font = "700 12px Open Sans";
    ctx.fillText("2013", 30, 245);
    ctx.fill();
    ctx.font = "100 12px Open Sans";
    ctx.fillText("Joined Accenture", 70, 245);
    ctx.fill();
    ctx.font = "700 12px Open Sans";
    ctx.fillText("2015", 30, 275);
    ctx.fill();
    ctx.font = "100 12px Open Sans";
    ctx.fillText("Moved to Deloitte Portugal", 70, 275);
    ctx.fill();
    ctx.font = "700 12px Open Sans";
    ctx.fillText("2017", 30, 305);
    ctx.fill();
    ctx.font = "100 12px Open Sans";
    ctx.fillText("Shifted to Deloitte Ireland", 70, 305);
    ctx.fill();
}

function socialDesktop() {
    var wWidth = $("#timeline").innerWidth();
    var wHeight = $("#timeline").innerHeight();
    var c = document.getElementById("timeline");
    c.width = wWidth;
    c.height = wHeight;
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#5f4b8b";
    ctx.strokeStyle = "#5f4b8b";
    ctx.beginPath();
    ctx.arc(20, 20, 4, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 70);
    ctx.stroke();
    ctx.moveTo(20, 80);
    ctx.arc(20, 80, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 90);
    ctx.arc(20, 90, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 100);
    ctx.arc(20, 100, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 110);
    ctx.lineTo(20, 160);
    ctx.stroke();
    ctx.moveTo(20, 160);
    ctx.arc(20, 160, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 160);
    ctx.lineTo(20, 240);
    ctx.stroke();
    ctx.moveTo(20, 240);
    ctx.arc(20, 240, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 240);
    ctx.lineTo(20, 320);
    ctx.stroke();
    ctx.moveTo(20, 320);
    ctx.arc(20, 320, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 320);
    ctx.lineTo(20, 400);
    ctx.stroke();
    ctx.moveTo(20, 400);
    ctx.arc(20, 400, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 400);
    ctx.lineTo(20, 480);
    ctx.stroke();
    ctx.moveTo(20, 480);
    ctx.arc(20, 480, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 480);
    ctx.lineTo(20, 510);
    ctx.stroke();
    ctx.moveTo(20, 520);
    ctx.arc(20, 520, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 530);
    ctx.arc(20, 530, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(20, 540);
    ctx.arc(20, 540, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.font = "700 24px Open Sans";
    ctx.fillText("null", 40, 28);
    ctx.fill();
    ctx.font = "100 24px Open Sans";
    ctx.fillText("Big bang", 110, 28);
    ctx.fill();
    ctx.font = "700 24px Open Sans";
    ctx.fillText("1989", 40, 168);
    ctx.fill();
    ctx.font = "100 24px Open Sans";
    ctx.fillText("Born in Portugal", 110, 168);
    ctx.fill();
    ctx.font = "700 24px Open Sans";
    ctx.fillText("2013", 40, 248);
    ctx.fill();
    ctx.font = "100 24px Open Sans";
    ctx.fillText("Electrical and Computers Eng. Master", 110, 248);
    ctx.fill();
    ctx.font = "700 24px Open Sans";
    ctx.fillText("2013", 40, 328);
    ctx.fill();
    ctx.font = "100 24px Open Sans";
    ctx.fillText("Joined Accenture", 110, 328);
    ctx.fill();
    ctx.font = "700 24px Open Sans";
    ctx.fillText("2015", 40, 408);
    ctx.fill();
    ctx.font = "100 24px Open Sans";
    ctx.fillText("Moved to Deloitte Portugal", 110, 408);
    ctx.fill();
    ctx.font = "700 24px Open Sans";
    ctx.fillText("2017", 40, 488);
    ctx.fill();
    ctx.font = "100 24px Open Sans";
    ctx.fillText("Shifted to Deloitte Ireland", 110, 488);
    ctx.fill();
}