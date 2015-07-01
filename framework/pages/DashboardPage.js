var DashboardPage = function () {

    var $_inboundVisitorStatistics = _div("Inbound visitor statistics");
    var $_inboundVisitorStatisticsCanvas = _canvas(0, _in(_div("panelChart9")));

    this.navigateTo = function () {
        _navigateTo($BASE_URL + "dashboard");
    };

    this.isAt = function () {
        return "Angle - Dashboard" == _title();
    };

    this.statistics = function () {

        var valueOf = function (name) {
            return _getText(_div(0, _near(_div(name))))
        };

        var getAverageMonthlyUploads = function () {
            return _canvas(0, _near(_div("Average Monthly Uploads"))).getAttribute("data-percentage");
        };

        return {
            uploads: valueOf("Uploads"),
            quota:   valueOf("Quota"),
            reviews: valueOf("Reviews"),
            // fits in statistics
            averageMonthlyUploads: getAverageMonthlyUploads()
        }
    };

    this.isInboundVisitorStatisticsVisible = function () {
        _log("Calling isInboundVisitorStatisticsVisible");
        return _isVisible($_inboundVisitorStatisticsCanvas);
    };

    this.collapseInboundVisitorStatistics = function () {
        if (!this.isInboundVisitorStatisticsVisible()) {
            _fail("Inbound visitor statistics are not visible. Can't collapse.");
        }
        _click(_link(0, _near($_inboundVisitorStatistics)));
        // let the panel collapse, 2nd argument must be a Sahi expression
        _wait(2000, !_isVisible($_inboundVisitorStatisticsCanvas));
    };

    this.expandInboundVisitorStatistics = function () {
        if (this.isInboundVisitorStatisticsVisible()) {
            _fail("Inbound visitor statistics are already visible. Can't expand.");
        }
        _click(_link(0, _near($_inboundVisitorStatistics)));
        // let the panel collapse, 2nd argument must be a Sahi expression
        _wait(2000, _isVisible($_inboundVisitorStatisticsCanvas));
    };

};