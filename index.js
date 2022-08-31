const items1 = [
    [1, 'home', 'Dashboard'],
    [2, 'my_location', 'Leads'],
    [3, 'person', 'People'],
    [4, 'domain', 'Companies'],
    [5, 'double_arrow', 'Pipelines'],
    [6, 'work', 'Projects'],
    [7, 'check_box', 'Tasks'],
    ['-', 'slow_motion_video', 'Marketing Tools'],
    [8, 'mail', 'My Tracked Emails'],
    ['-', 'data_usage', 'Reports'],
    [9, 'insert_chart', 'Legacy Reports'],
    [0, 'settings', 'Settings']
];


function render() {
    items1.map((arr)=> {
        const div = document.createElement("div");
        div.innerHTML = `<p id = "item-num">${arr[0]}</p><span class="material-symbols-outlined" id = "item-icon">${arr[1]}</span><p id ="item-name">${arr[2]}</p>`;
        div.setAttribute('id','sidebar-items');
        document.getElementById("sidebar").appendChild(div);
    })

}

render();
