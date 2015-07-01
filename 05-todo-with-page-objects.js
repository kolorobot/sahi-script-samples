/*
 * Scenario:
 *  - clear all items and verify list is empty
 *  - add task with title only
 *  - verify task exists
 *  - edit task: change title and add description
 *  - mark completed and verify
 *  - remove task verify no tasks
 */

_include("framework/config/config.js");
_include("framework/pages/TodoPage.js");

var $todoPage = new TodoPage();

$todoPage.navigateTo();
_assert($todoPage.isAt());


$todoPage.clearAllItems();
_assert($todoPage.hasNoTasks());

$todoPage.addTask("Task 1");
_assert($todoPage.getTask("Task 1").exists());
_assertEqual(1, $todoPage.pending());
_assertEqual(0, $todoPage.completed());

$todoPage.getTask("Task 1").update("Task 1 - Modified", "Task 1 - Description");
_assert($todoPage.getTask("Task 1 - Modified").exists());

$todoPage.getTask("Task 1 - Modified").markCompleted();
_assertEqual(0, $todoPage.pending());
_assertEqual(1, $todoPage.completed());

$todoPage.getTask("Task 1 - Modified").remove();
_assert($todoPage.hasNoTasks());
