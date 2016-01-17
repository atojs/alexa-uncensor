/*jshint node: true, unused: false, regexp: true */
var press = require("./press.js");
var speakfree = {};
var _ = require("lodash");

speakfree.capability = Object.keys(press);

speakfree.uncensor_line = function(line) {
    var w, sub, g, res;
    w = _.words(line.toLowerCase());
    sub = _.intersection(w, speakfree.capability).sort(function(a, b) {
        return a.length < b.length;
    });
    res = line;
    _.forEach(sub, function(n) {
        g = new RegExp(n, "gi");
        res = res.replace(g, speakfree.uncensor(n));
    });
    return res;
};

speakfree.uncensor = function(word) {
    if (press.hasOwnProperty(word)) {
        var hit, ssml;
        hit = press[word];
        ssml = "<phoneme alphabet='ipa' ph='" + hit[0] + "'>" + hit[1] + "</phoneme>";
        return ssml;
    } else {
        return (word);
    }
};

module.exports = speakfree;

