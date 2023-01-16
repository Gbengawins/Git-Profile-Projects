document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.Mode-Switch');
    modeSwitch.addEventListener('click', function () { document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
    });
        
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectList = document.querySelector('.Project-Boxes');
    listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectList.classList.remove('JsGridView');
    projectList.classList.add('JsListView');
    });
        
    gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectList.classList.remove('JsListView');
    projectList.classList.add('JsGridView');
    });
        
    document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
    });
        
    document.querySelector('.Messages-Close').addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
    });
});