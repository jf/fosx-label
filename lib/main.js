const {Cc,Ci} = require("chrome");

var { PrefsTarget } = require("sdk/preferences/event-target");
var target = PrefsTarget({ branchName: "extensions." + require("sdk/self").id + "." });

var dock = Cc["@mozilla.org/widget/macdocksupport;1"]
             .getService(Ci.nsIMacDockSupport);

exports.main = function(o,c) {
  dock.badgeText = target.prefs['labelText'];
};

target.on("labelText", function(prefName) {
  dock.badgeText = target.prefs[prefName];
});
