# alexa-uncensor

Bypass Alexa (Amazon Echo) Text-to-Speech censorship


# Summary

alexa-uncensor generates the corresponding SSML fragments for those censored words that Alexa bleeps out. Adults only.


# Example Usage

```javascript
var bleep = require("alexa-uncensor");

var free, speech;
free    = bleep.uncensor("bullshit");
speech  = bleep.uncensor_line("Stop fucking around and write some code!");

```

# Dictionary

Only a minimal dictionary(press-sample.js) is provided. Copy this file to **press.js** and add your words.





*"The foolish and wicked practice of profane cursing and swearing is a vice so mean and low that every person of sense and character detests and despises it." -- George Washington*



