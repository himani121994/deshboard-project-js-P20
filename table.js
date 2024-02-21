let len;
function run() {
    let filterdata = document.getElementById('filterSelect').value;

    async function fetchData() {
        let data = await fetch('https://jsonplaceholder.typicode.com/todos');
        let response = await data.json();

        if (filterdata === 'all') {
            document.querySelector('#showdata').innerHTML = response.map(e =>
                `<tr>
                    <td>${e.id}</td>
                    <td>${e.userId}</td>
                    <td>${e.title}</td>
                    <td>${e.completed}</td>
                </tr>`
            ).join(" ");
        } else if (filterdata === 'complete') {
            let complete = response.filter((e) => e.completed === true);
            let complete1 = complete.map(e =>
                `<tr>
                    <td>${e.id}</td>
                    <td>${e.userId}</td>
                    <td>${e.title}</td>
                    <td>${e.completed}</td>
                </tr>`
            ).join(" ");
            document.querySelector('#showdata').innerHTML = complete1;
        } else if (filterdata === 'uncomplete') {
            let incomplete = response.filter((e) => e.completed === false);
            let incomplete1 = incomplete.map(e =>
                `<tr>
                    <td>${e.id}</td>
                    <td>${e.userId}</td>
                    <td>${e.title}</td>
                    <td>${e.completed}</td>
                </tr>`
            ).join(" ");
            document.querySelector('#showdata').innerHTML = incomplete1;
        }
    }

    fetchData();
}
function ch() {
    // Call the run function when the button is clicked
    run();
}

// let data = []; // Array to store fetched data

// async function fetchdata() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     data = await response.json();
//     renderTable(data); // Render table with all data initially
// }

// function renderTable(data) {
//     document.querySelector('#showdata').innerHTML = data.map(e =>
//         `<tr>
//             <td>${e.id}</td>
//             <td>${e.userId}</td>
//             <td>${e.title}</td>
//             <td>${e.completed}</td>
//         </tr>`
//     ).join("");
// }

// function filterData(status) {
//     if (status === 'all') {
//         renderTable(data); // Render all data
//     } else {
//         const filteredData = data.filter(item => item.completed.toString() === status);
//         renderTable(filteredData); // Render filtered data
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     fetchdata();

//     document.getElementById('searchBtn').addEventListener('click', function () {
//         const filterValue = document.getElementById('filterSelect').value;
//         filterData(filterValue);
//     });
// });
