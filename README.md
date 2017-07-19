# What is this?

This is a minimal reproduction that illustrates that Babel sourcemaps are not valid out of the box prior to entering other tooling like Webpack or Ember CLI.


# Why Sourcemaps Are Hard To Get Right
Since encoding sourcemaps does relative encoding; reads the previous encoded line to encode the current line, any line after an invalid line makes the sourcemap not valid from that point forward. This is typically results in the end user of having the sourcemap work some of the time and not others.

Do to how the encoding of sourcemaps happen, it is crucial to any code that is partaking in compilation of the source to retain the original information of the source. Babel attempts to do this through the `path` API however there is nothing stopping plugins for directly manipulating the AST. This this requires that every part of the build pipeline, or at least the parts that are compiling code and producing sourcemaps, to always do the correct thing.
