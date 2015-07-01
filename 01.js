/*
* Dashboard: Basics
*/

_navigateTo("http://themicon.co/theme/angle/v2.4/backend-angular/#/app/dashboard");

/* Widgets */

_assertEqual(1700, _getText(_div(0, _near(_div("Uploads")))), "Uploads count invalid");
_assertEqual("700 GB", _getText(_div(0, _near(_div("Quota")))), "Quota invalid");
_assertEqual(500, _getText(_div(0, _near(_div("Reviews")))), "Review count invalid");

/* Inbound visitor statistics panel */

_log("Looking for 'Inbound visitor statistics'");
_assertTrue(_isVisible(_div("Inbound visitor statistics")));
_highlight(_div("Inbound visitor statistics"));

_highlight(_canvas(0, _in(_div("panelChart9"))));
_assertTrue(_isVisible(_canvas(0, _in(_div("panelChart9"))), "Chart not visible"));

_log("Looking for link near 'Inbound visitor statistics'");
_assertTrue(_isVisible(_link(0, _near(_div("Inbound visitor statistics")))));
_highlight(_link(0, _near(_div("Inbound visitor statistics"))));

_click(_link(0, _near(_div("Inbound visitor statistics"))));
_assertFalse(_isVisible(_canvas(0, _in(_div("panelChart9"))), "Chart is visible"));

_wait(1000); // let the panel collapse

_click(_link(0, _near(_div("Inbound visitor statistics"))));
_assertTrue(_isVisible(_canvas(0, _in(_div("panelChart9"))), "Chart not visible"));

// Tooltips verification

_mouseOver(_link(0, _near(_div("Inbound visitor statistics"))));
_assertTrue(_isVisible(_div("Collapse Panel")));

_mouseOver(_link(1, _near(_div("Inbound visitor statistics"))));
_assertTrue(_isVisible(_div("Refresh Panel")));

/* Verify data-* attribute */
var $averageMonthlyUploads = _canvas(0, _near(_div("Average Monthly Uploads"))).getAttribute("data-percentage");
_assertEqual(70, $averageMonthlyUploads);
