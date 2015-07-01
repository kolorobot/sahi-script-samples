_include("framework/config/config.js");
_include("framework/pages/DashboardPage.js");

// arrange
var $dashboardPage = new DashboardPage();

// act
$dashboardPage.navigateTo();

// verify statistics
_assert($dashboardPage.isAt());
_assertEqual(1700, $dashboardPage.statistics().uploads);
_assertEqual("700 GB", $dashboardPage.statistics().quota);
_assertEqual(500, $dashboardPage.statistics().reviews);
_assertEqual(70, $dashboardPage.statistics().averageMonthlyUploads);

// verify collapsing "Inbound Visitor Statistics" panel
$dashboardPage.collapseInboundVisitorStatistics();
_assert(!$dashboardPage.isInboundVisitorStatisticsVisible()); // can be skipped
$dashboardPage.expandInboundVisitorStatistics();
_assert($dashboardPage.isInboundVisitorStatisticsVisible()); // can be skipped
