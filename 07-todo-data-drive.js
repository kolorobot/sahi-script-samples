_include("framework/config/config.js");
_include("framework/pages/TodoPage.js");

var $tasks = [
    ["Task 1", 1],
    ["Task 2", 2],
    ["Task 3", 3],
    ["Task 4", 4],
    ["Task 5", 5],
    ["Task 6", 6],
    ["Task 7", 7],
    ["Task 8", 8],
    ["Task 9", 9],
    ["Task 10", 10]
];

function addTask($title, $total) {
    $todoPage.addTask($title);
    var $task = $todoPage.getTask($title);

    _assert($task.exists());
    _assertEqual(1, $todoPage.pending());

    $task.markCompleted();
    _assertEqual($total, $todoPage.completed());
}

function removeTask($title) {
    var $task = $todoPage.getTask($title);
    $task.remove();
}

var $todoPage = new TodoPage();

$todoPage.navigateTo();
_assert($todoPage.isAt());

$todoPage.clearAllItems();
_assert($todoPage.hasNoTasks());

_dataDrive(addTask, $tasks);
_dataDrive(removeTask, $tasks);

$todoPage.hasNoTasks();