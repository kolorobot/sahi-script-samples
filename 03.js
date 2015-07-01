/*
 * Dashboard: More on Tables
 */

_navigateTo("http://themicon.co/theme/angle/v2.4/backend-angular/#/app/table-extended");

// scrolling with JavaScript
_call(_div("Demo Table #2").scrollIntoView());

// different ways of finding checkbox in a row
click(_span(0, _in(_cell(0, _in(_row(1, _in(_table("table-ext-2"))))))));
// or
click(_span("fa fa-check", _in(_div(/checkbox/, _in(_row(1, _in(_table("table-ext-2"))))))));
// or (not sure why _leftOf does not work!
click(_span("fa fa-check", _near(_cell(/Holly Wallace/), _in(_table("table-ext-2")))));

// find a switch in a row
click(_label("switch", _rightOf(_cell(/Holly Wallace/, _in(_table("table-ext-2"))))));

_call(_div(/Demo Table #3/).scrollIntoView());
var $tableContents = _getTableContents(_table(0, _div(/Demo Table #3/)));

// working with files
var $file = "out/demo-table-3.json";
var $contents = JSON.stringify($tableContents);
_writeFile($contents, $file, true);
_assertEqual($contents, _readFile($file));


function click($accessor) {
    _highlight($accessor);
    _click($accessor);
    _wait(1000);
}