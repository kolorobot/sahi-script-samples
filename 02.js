/*
 * Dashboard: Tables
 */

_navigateTo("http://themicon.co/theme/angle/v2.4/backend-angular/#/app/table-datatable");

highlightAndWait(_tableHeader("CSS grade"));
highlightAndWait(_tableHeader("Platform(s)"), _in(_table("datatable1")));
highlightAndWait(_row("Gecko Firefox 1.5 Win 98+ / OSX.2+ 1.8 A"), _in(_table("datatable1")));
highlightAndWait(_cell("Gecko"), _in(_table("datatable1")));


_assert(_tableHeader("Rendering engine").getAttribute("aria-sort") != "");
_click(_tableHeader("Rendering engine"));
// verify by row text
_assertEqual("Webkit Safari 1.2 OSX.3 125.5 A", _getText(_row(1)));

_assert(_tableHeader("Rendering engine").getAttribute("aria-sort") == "descending");
_click(_tableHeader("Rendering engine"));
_assert(_tableHeader("Rendering engine").getAttribute("aria-sort") == "ascending");
_assertEqual("Gecko Firefox 1.0 Win 98+ / OSX.2+ 1.7 A", _getText(_row(1)));


function highlightAndWait($accessor) {
    _highlight($accessor);
    _wait(1000);
}