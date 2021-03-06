
// IIFE: Immediately Invoked Function Expression

// (function() {
//     console.log('IIFE');
//     let bla;
// })()
const table = document.querySelector('.table');
const tbody = document.querySelector('.table > tbody');
(async () => {
    try {
        const response = await fetch('https://api.worldbank.org/v2/country/?format=json&per_page=300');
        const data = await response.json();
        //console.log(data[1]);
        const rows = data[1].map(country => {
            return `
            <tr>
                <td>${country.id}</td>
                <td>${country.iso2Code}</td>
                <td>${country.name}</td>
                <td>${country.region.value}</td>
                <td>${country.incomeLevel.value}</td>
                <td>${country.capitalCity}</td>
            </tr>
            `;
        });
        //console.log(rows);
        tbody.innerHTML = rows.join('');
        // call data table library to render the table
        const dataTable = new DataTable(table, {
            // options to customize the table
            labels:{
                placeholder: 'find...',
                info: 'Zeige {start} bis {end} von {rows} Einträgen'
            },
            perPageSelect: [30, 50, 100, 150, 200]
        });
        console.log(dataTable);

        // add event listener to each row
        const htmlRows = document.querySelectorAll('.table > tbody > tr');
        htmlRows.forEach(row => {
            row.addEventListener('click', e => {
                alert(row.children[0].textContent)
            })
        });
    } catch (error) {
        console.log(error);
    }
})();


// new topics:
// 1. IIFE