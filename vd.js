// var scene = new THREE.Scene();
// var W = window.innerWidth;
// var H = window.innerHeight;
// var camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 1000);
// camera.position.z = 10;

// var renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(W, H);
// renderer.setClearColor(0x262626, 1);
// document.body.appendChild(renderer.domElement);

// // Lighting
// var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.position.set(-1, 1, 1);
// var light2 = new THREE.DirectionalLight(0xffffff, 0.7);
// light2.position.set(1, -1, 1);
// scene.add(directionalLight, light2);

// var material = new THREE.MeshLambertMaterial({ color: 0xF14769 });
// var material2 = new THREE.MeshLambertMaterial({ color: 0xEE2D47 });

// var heart = new THREE.Object3D();
// var row1 = new THREE.Object3D();
// var row2 = new THREE.Object3D();
// var row3 = new THREE.Object3D();
// var row4 = new THREE.Object3D();
// var row5 = new THREE.Object3D();
// var row6 = new THREE.Object3D();

// var startTime = Date.now();

// for (var i = -2; i < 3; i++) {
//   if (i != 0) {
//     var cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
//     cube.position.set(i + 0.1 * i, 1.1, -0.6);
//     var cube2 = cube.clone();
//     cube2.position.z = 0.6;
//     row1.add(cube, cube2);
//   }
// }
// heart.add(row1);

// for (var i = -3; i < 4; i++) {
//   var cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material2);
//   cube.position.set(i + 0.1 * i, 0, -0.6);
//   var cube2 = cube.clone();
//   cube2.position.z = 0.6;
//   row2.add(cube, cube2);
// }
// heart.add(row2);

// for (var i = -3; i < 4; i++) {
//   var cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
//   cube.position.set(i + 0.1 * i, -1.1, -0.6);
//   var cube2 = cube.clone();
//   cube2.position.z = 0.6;
//   row3.add(cube, cube2);
// }
// heart.add(row3);

// for (var i = -2; i < 3; i++) {
//   var cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material2);
//   cube.position.set(i + 0.1 * i, -2.2, -0.6);
//   var cube2 = cube.clone();
//   cube2.position.z = 0.6;
//   row4.add(cube, cube2);
// }
// heart.add(row4);

// for (var i = -1; i < 2; i++) {
//   var cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
//   cube.position.set(i + 0.1 * i, -3.3, -0.6);
//   var cube2 = cube.clone();
//   cube2.position.z = 0.6;
//   row5.add(cube, cube2);
// }
// heart.add(row5);

// var cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material2);
// cube.position.set(0, -4.4, -0.6);
// var cube2 = cube.clone();
// cube2.position.z = 0.6;
// row6.add(cube, cube2);
// heart.add(row6);

// scene.add(heart);

// // Render loop
// var speed = 1;
// function render() {
//   var dtime = Date.now() - startTime;
//   row1.rotation.y = 0.7 * Math.sin(dtime / 300);
//   row2.rotation.y = 0.7 * Math.sin((dtime + 100) / 300);
//   row3.rotation.y = 0.7 * Math.sin((dtime + 200) / 300);
//   row4.rotation.y = 0.7 * Math.sin((dtime + 300) / 300);
//   row5.rotation.y = 0.7 * Math.sin((dtime + 400) / 300);
//   row6.rotation.y = 0.7 * Math.sin((dtime + 500) / 300);

//   requestAnimationFrame(render);
//   renderer.render(scene, camera);
// }
// render();

// // Handle window resize
// window.addEventListener('resize', function (e) {
//   W = window.innerWidth;
//   H = window.innerHeight;
//   renderer.setSize(W, H);
//   camera.aspect = W / H;
//   camera.updateProjectionMatrix();
// }, false);

$(document).ready(function () {
  $(".container").mousedown(function () {
    $(".card")
      .stop()
      .animate(
        {
          top: "-90px",
        },
        "slow"
      )
      .off("mouseup");
  });
});


// *********************************************

// Функция для перенаправления пользователя
function redirectToAnotherPage() {
    window.location.href = "sosal.html"; // Замените на URL вашей другой страницы
  }
  
  // Функция для скрытия кнопки
  function hideButton() {
    const btnFalse = document.querySelector(".btn-false");
    btnFalse.style.display = "none"; // Скрываем кнопку
  }
