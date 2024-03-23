function toggleResearch() {
  var researchBox = document.getElementById("research");
  var externalBox = document.getElementById("external");
  var internalBox = document.getElementById("internal");

  researchBox.classList.add('hidden');
  externalBox.classList.remove('hidden');
  internalBox.classList.remove('hidden');
}

function toggleB2C() {
  var externalBox = document.getElementById("external");
  
  

  // Show B2C subpoints
  externalBox.innerHTML = '<h3>B2C</h3><ul class="subpoints"><li id="online" onmouseover="showGraph(\'Online\')">Online</li><li id="interview" onmouseover="showGraph(\'Interview\')">Interview</li><li id="public-data" onmouseover="showGraph(\'Public-Data\')">Public Data</li><li id="health" onmouseover="showGraph(\'Health\')">Health</li></ul>';

  // Remove previously shown graph box
  var graphBox = document.getElementById("graphBox");
  if (graphBox) {
      graphBox.parentNode.removeChild(graphBox);
  }
}



function toggleToExternal() {
  var externalBox = document.getElementById("external");
  var b2cBox = document.getElementById("b2c");

  externalBox.classList.remove('hidden');
  b2cBox.classList.add('hidden');
}



function showGraph(subpoint) {
  // Remove previously shown graph box
  var graphBox = document.getElementById("graphBox");
  if (graphBox) {
      graphBox.parentNode.removeChild(graphBox);
  }

  // Create a graph box dynamically
  var graphBox = document.createElement("div");
  graphBox.id = "graphBox";
  graphBox.classList.add("graph-box");

  // Dummy data for the graph
  var data = getDataForSubpoint(subpoint);

  // Populate the graph box with data
  graphBox.innerHTML = '<h4>' + subpoint.toUpperCase() + '</h4>' +
  '<canvas id="graphCanvas" width="200" height="150"></canvas>' +
  '<div class="data">' +
  '   <p><span class="bullet" style="background-color: ' + getBarColor(0) + '"></span><span class="total-review">Total Review:</span> ' + data[0] + '</p>' +
  '   <p><span class="bullet" style="background-color: ' + getBarColor(1) + '"></span><span class="negative">Negative:</span> ' + data[1] + '</p>' +
  '   <p><span class="bullet" style="background-color: ' + getBarColor(2) + '"></span><span class="positive">Positive:</span> ' + data[2] + '</p>' +
  '   <p><span class="bullet" style="background-color: ' + getBarColor(3) + '"></span><span class="comments">Comments:</span> ' + data[3] + '</p>' +
  '</div>';


  // Append the graph box to the B2C subpoint box
  var subpointBox = document.getElementById(subpoint.toLowerCase());
  subpointBox.appendChild(graphBox);

  // Draw graph on the canvas
  var canvas = document.getElementById("graphCanvas");
  var ctx = canvas.getContext("2d");
  var barWidth = 30; // Width of each bar
  var startX = 10; // Starting x-coordinate for the first bar
  var startY = 150; // Starting y-coordinate for the bars

  for (var i = 0; i < data.length; i++) {
      var height = data[i]; // Height of the bar
      ctx.fillStyle = getBarColor(i); // Get color based on index
      ctx.fillRect(startX, startY - height, barWidth, height);
      startX += barWidth + 10; // Adjust the spacing between bars
  }
}


function getDataForSubpoint(subpoint) {
  // Dummy data based on subpoint
  if (subpoint === 'Online') {
      return [50, 10, 30, 70]; // Example data for Online subpoint
  } else if (subpoint === 'Interview') {
      return [40, 20, 30, 60]; // Example data for Interview subpoint
  } else if (subpoint === 'Public-Data') {
      return [30, 15, 20, 50]; // Example data for Public Data subpoint
  }else if (subpoint === 'Health') {
      return [50, 45, 40, 70]; // Example data for Public Data subpoint
  }
  // Add more conditions for other subpoints if needed
}

function getBarColor(index) {
  // Define colors based on index (each index corresponds to a different category)
  const colors = ['blue', 'red', 'green', 'orange'];
  return colors[index % colors.length];
}



function togglePlanning() {
  var planningBox = document.getElementById("planning");
  var prdBox = document.getElementById("prd");
  var specsBox = document.getElementById("specs");

  planningBox.style.display = ('hidden'); // Hide the Planning box
  prdBox.classList.remove('hidden'); // Show the PRD box
  specsBox.classList.remove('hidden'); // Show the Specs box
}

function toggleDesiging() {
  var desigingBox = document.getElementById("desiging");
  var hardwareBox = document.getElementById("hardware");
  var softwareBox = document.getElementById("software");

  desigingBox.style.display =('hidden'); // Hide the Planning box
  hardwareBox.classList.remove('hidden'); // Show the PRD box
  softwareBox.classList.remove('hidden'); // Show the Specs box
}

function toggleManufacturing() {
  var planningBox = document.getElementById("manufacturing");
  var prdBox = document.getElementById("material");
  var specsBox = document.getElementById("production");

  planningBox.style.display = ('hidden'); // Hide the Planning box
  prdBox.classList.remove('hidden'); // Show the PRD box
  specsBox.classList.remove('hidden'); // Show the Specs box
}

function toggleSalesMarketing() {
  var salesmarketingBox = document.getElementById("salesmarketing");
  var onlineBox = document.getElementById("online-box");
  var dealearshipBox = document.getElementById("dealearship-box");

  salesmarketingBox.style.display = ('hidden'); // Hide the Planning box
  onlineBox.classList.remove('hidden'); // Show the PRD box
  dealearshipBox.classList.remove('hidden'); // Show the Specs box
}

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Close the sidebar when a link is clicked (for smaller screens)
var sidebarLinks = document.querySelectorAll(".sidebar a");
sidebarLinks.forEach(function(link) {
  link.addEventListener("click", function() {
      var sidebar = document.getElementById("sidebar");
      sidebar.classList.remove("active");
  });
});
