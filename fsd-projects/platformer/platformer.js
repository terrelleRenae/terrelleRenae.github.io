$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50, 300, 250, 50, "red");
    createPlatform(350, 400, 250, 50, "black");
    createPlatform(900, 400, 250, 50, "yellow");
    createPlatform(600, 300, 250, 50, "green");
    createPlatform(1200, 300, 250, 50, "red");
    // TODO 3 - Create Collectables
    createCollectable("database", 700, 275);
    createCollectable("database", 1300, 275);
    createCollectable("database", 100, 275);
    
    // TODO 4 - Create Cannons
        createCannon("top", 450, 1500);
        createCannon("bottom", 1250, 1500);
        createCannon("left", 300, 1500);
        createCannon("right", 150, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
