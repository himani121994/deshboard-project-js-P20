function bars(){
  document.getElementById('aside').style.display = "block";
  document.getElementById('smallaside').style.display = "none";
  document.getElementById('bars').style.display = "none";
  document.getElementById('closebar').style.display = "block";
}

function closebar(){
  document.getElementById('aside').style.display = "none";
  document.getElementById('smallaside').style.display = "block";
  document.getElementById('bars').style.display = "block";
  document.getElementById('closebar').style.display = "none";
}
let total,completed,uncompleted,totalId;
function run(){
    async function fetchdata(){
        let data = await fetch('https://jsonplaceholder.typicode.com/todos')
        let response = await data.json();
        total = response.length
        completed = response.filter(e=>e.completed === true).length;
        uncompleted = response.filter(e=>e.completed === false).length;
        totalId =  response.filter(e=>e.userId === 1).length;
        let data1 = await fetch('https://jsonplaceholder.typicode.com/albums')
        let response1 = await data1.json();
        let fill = response1.filter(e=>e.id<=5);
        document.querySelector('#showmsg').innerHTML = fill.map(e=>
          `<tr>
          <td>${e.id}</td>
          <td>${e.title}</td>
          </tr>`).join(" ");
          let data2 = await fetch('https://jsonplaceholder.typicode.com/photos');
        let response2 = await data2.json();
        let fill1 = response2.filter(e => e.id <= 5);

        let tableBody = document.querySelector('#showtable');

        fill1.forEach(e => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${e.id}</td>
                <td>${e.title}</td>
                <td><img src=${e.url}></td>
            `;
            tableBody.appendChild(row);
        });
    }   
        fetchdata()

}
let count=0;
setInterval(runningValue,50);
  function runningValue(){
    if(count<=total){
      document.querySelector("#value1").innerHTML = count
      count++
    }
    if(count<=completed){
      document.querySelector("#value2").innerHTML = count
      count++
    }
    if(count<=uncompleted){
      document.querySelector("#value3").innerHTML = count
      count++
    }
    if(count<=totalId){
      document.querySelector("#value4").innerHTML = count
      count++
    }
  }

  function logOut(){
    document.getElementById('img').src = "Google-Contacts-Wikipedia.png";
    document.getElementById('img1').src = "Google-Contacts-Wikipedia.png";
    document.getElementById('img1').style.marginLeft = "500px";
    document.getElementById('bell-div').style.display = "none";
    document.getElementById('aside-name').style.display = "none";
    document.getElementById('msg-div').style.display = "none";
    document.getElementById('hero-section').style.display = "none";
    document.getElementById('logoutBtn').style.display = "none";
    document.getElementById('hero-section-logout').style.display = "block";

  }
  function msg(){ 
    document.querySelector('#showmsg').style.display='block';
  }

           $(document).ready(function(){
           $('#bell').click(function(){
              $('#showmsg').toggle()
              $('#red-notification').css({
                'display':'none'
            })
            })
        })
//   $(document).ready(function(){
//     $('#bars').click(function(){
//       $("#smallaside").toggle( 'slow', function(){ 
//         $(this).hide(-1000,function(){
//           $('#aside').show();
//         });
//      });
//     })
// })
// $(document).ready(function(){
//   $('#bars').click(function(){
//     $("#aside").toggle( 'slow', function(){ 
//       $(this).hide(-1000,function(){
//         $('#smallaside').show();
//       });
//    });
//   })
// })

// const xArray = [55, 49, 44, 24, 15];
// const yArray = ["Italy ", "France ", "Spain ", "USA ", "Argentina "];

// const data = [{
//   x:xArray,
//   y:yArray,
//   type:"bar",
//   orientation:"h",
//   marker: {color:"rgba(255,0,0,0.6)"}
// }];

// const layout = {title:"World Wide Wine Production"};

// Plotly.newPlot("myChart", data, layout);



const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});

const xArray = [55, 49, 44, 24, 15];
const yArray = ["Italy ", "France ", "Spain ", "USA ", "Argentina "];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"h",
  marker: {color:"rgba(255,0,0,0.6)"}
}];

const layout = {title:"World Wide Wine Production"};

Plotly.newPlot("myPlot", data, layout);




function login() {
  let email1 = document.getElementById('email1').value;
  let pass1 = document.getElementById('password1').value;
  if (email1.trim() === "") {
      showError('#error_email', "Please enter your email");
      return false;
  } else if (!(email1.includes('@gmail.com') || email1.includes('@yahoo.com') || email1.includes('@outlook.com'))) {
      showError('#error_email', "Please enter a valid email");
      return false;
   } else if(!pass1.match(/[1234567890]/)){
         alert("password should be storng ");
        return false;

  } else if (!checkPasswordStrength(pass1)) {
      showError('#error_password', "Password should be strong");
      return false;
  } else {
      console.log(email1, pass1);
      alert("LogIn SUCCESSFULLY");
      return false;
  }
   
 }