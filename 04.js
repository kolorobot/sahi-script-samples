/*
 * Forms: Inline edit & HTML5 Inputs
 */

_navigateTo("http://themicon.co/theme/angle/v2.4/backend-angular/#/app/form-xeditable");

_click(_link(0, _near(_label("Email:"))));
_setValue(_emailbox("Email:"), "john@doe.com");
_click(_submit("btn btn-success btn-sm", _near(_emailbox("Email:"))));

_click(_link(0,_near(_label("Tel:"))));
_setValue(_telephonebox("Tel:"), "000-00-00");
_click(_submit("btn btn-success btn-sm", _near(_telephonebox("Tel:"))));

_click(_link(0,_near(_label("Number:"))));
_setValue(_numberbox("Number:"), "35");
_click(_submit("btn btn-success btn-sm", _near(_numberbox("Number:"))));

_click(_link(0,_near(_label("Range:"))));
_setValue(_rangebox("range"), "55");
_click(_submit("btn btn-success btn-sm", _near(_rangebox("range"))));

_click(_link(0,_near(_label("Url:"))));
_setValue(_urlbox("Url:"), "http://google.com");
_click(_submit("btn btn-success btn-sm", _near(_urlbox("Url:"))));

_click(_link(0,_near(_label("Date:"))));
_setValue(_datebox("Date:"), "2015-05-20");
_click(_submit("btn btn-success btn-sm", _near(_datebox("Date:"))));

_click(_link(0,_near(_label("Time:"))));
_setValue(_timebox("Time:"), "01:00");
_click(_submit("btn btn-success btn-sm", _near(_timebox("Time:"))));
