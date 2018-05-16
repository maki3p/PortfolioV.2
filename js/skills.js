var doughnutArray = [document.getElementById('doughnut').getContext('2d'), document.getElementById('doughnut2').getContext('2d'), document.getElementById('doughnut3').getContext('2d'), document.getElementById('doughnut4').getContext('2d'),document.getElementById('doughnut5').getContext('2d'),document.getElementById('doughnut6').getContext('2d'),document.getElementById('doughnut7').getContext('2d'),document.getElementById('doughnut8').getContext('2d'),document.getElementById('doughnut9').getContext('2d')];
for (var i = 0; i < doughnutArray.length; i++) {
  doughnutArray[i].lineWidth = 5; //thickness of the line
  doughnutArray[i].fillStyle = '#eaeaea';
  doughnutArray[i].strokeStyle = "#eaeaea";
  doughnutArray[i].beginPath();
  doughnutArray[i].arc(60, 60, 55, 4.72, 15, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
  doughnutArray[i].stroke();
}
  /*HTML*/
function loadSkills1() {
  var ctx = document.getElementById('skill1').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#E84855';
    ctx.strokeStyle = "#E84855";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 87) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 20); //speed  	
}
/*CSS*/
function loadSkills2() {
  var ctx = document.getElementById('skill2').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#E84855';
    ctx.strokeStyle = "#E84855";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 60) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 30); //speed
}

/* JavaScript*/
function loadSkills3() {
  var ctx = document.getElementById('skill3').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#E84855';
    ctx.strokeStyle = "#E84855";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 70) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 40); //speed
}
/*jQuery*/
function loadSkills4() {
  var ctx = document.getElementById('skill4').getContext('2d');
  var al = 0;
  var start = 4.72;
  var cw = ctx.canvas.width;
  var ch = ctx.canvas.height;
  var diff;

  function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
    ctx.clearRect(0, 0, cw, ch);
    ctx.lineWidth = 5; //thickness of the line
    ctx.fillStyle = '#E84855';
    ctx.strokeStyle = "#E84855";
    ctx.textAlign = 'center';
    ctx.font = "30px Radley";
    ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
    ctx.beginPath();
    ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
    ctx.stroke();
    if (al >= 80) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
      clearTimeout(sim);
      // Add scripting here that will run when progress completes
    }
    al++;
  }
  var sim = setInterval(progressSim, 50); //speed
}
/*C#*/
function loadSkills5() {
    var ctx = document.getElementById('skill5').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;
  
    function progressSim() {
      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 5; //thickness of the line
      ctx.fillStyle = '#E84855';
      ctx.strokeStyle = "#E84855";
      ctx.textAlign = 'center';
      ctx.font = "30px Radley";
      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
      ctx.beginPath();
      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
      ctx.stroke();
      if (al >= 60) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
        clearTimeout(sim);
        // Add scripting here that will run when progress completes
      }
      al++;
    }
    var sim = setInterval(progressSim, 50); //speed
  }
  /*SQL*/
  function loadSkills6() {
    var ctx = document.getElementById('skill6').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;
  
    function progressSim() {
      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 5; //thickness of the line
      ctx.fillStyle = '#E84855';
      ctx.strokeStyle = "#E84855";
      ctx.textAlign = 'center';
      ctx.font = "30px Radley";
      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
      ctx.beginPath();
      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
      ctx.stroke();
      if (al >= 75) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
        clearTimeout(sim);
        // Add scripting here that will run when progress completes
      }
      al++;
    }
    var sim = setInterval(progressSim, 50); //speed
  }
  /*Bootstrap*/
  function loadSkills7() {
    var ctx = document.getElementById('skill7').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;
  
    function progressSim() {
      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 5; //thickness of the line
      ctx.fillStyle = '#E84855';
      ctx.strokeStyle = "#E84855";
      ctx.textAlign = 'center';
      ctx.font = "30px Radley";
      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
      ctx.beginPath();
      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
      ctx.stroke();
      if (al >= 80) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
        clearTimeout(sim);
        // Add scripting here that will run when progress completes
      }
      al++;
    }
    var sim = setInterval(progressSim, 50); //speed
  }
  /*ASP.NET MVC 5*/
  function loadSkills8() {
    var ctx = document.getElementById('skill8').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;
  
    function progressSim() {
      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 5; //thickness of the line
      ctx.fillStyle = '#E84855';
      ctx.strokeStyle = "#E84855";
      ctx.textAlign = 'center';
      ctx.font = "30px Radley";
      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
      ctx.beginPath();
      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
      ctx.stroke();
      if (al >= 55) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
        clearTimeout(sim);
        // Add scripting here that will run when progress completes
      }
      al++;
    }
    var sim = setInterval(progressSim, 50); //speed
  }
  /*AngularJS*/
  function loadSkills9() {
    var ctx = document.getElementById('skill9').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;
  
    function progressSim() {
      diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2); //change the arc by multiplying .. * Math.PI*2* --> 7.5=75, 5=50 etc.
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 5; //thickness of the line
      ctx.fillStyle = '#E84855';
      ctx.strokeStyle = "#E84855";
      ctx.textAlign = 'center';
      ctx.font = "30px Radley";
      ctx.fillText(al + '%', cw * .5 + 2, ch * .5 + 8, cw);
      ctx.beginPath();
      ctx.arc(60, 60, 55, start, diff / 10 + start, false); //.arc(x, y , radius, startAngle, endAngle, anticlockwise)
      ctx.stroke();
      if (al >= 65) { // stop the recreation at your desired point, i.e change 100 to 75 if you need just 75%.
        clearTimeout(sim);
        // Add scripting here that will run when progress completes
      }
      al++;
    }
    var sim = setInterval(progressSim, 50); //speed
  }