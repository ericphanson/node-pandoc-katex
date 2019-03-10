#!/usr/bin/env node

// Pandoc filter to render all math with KaTeX

var pandoc = require('pandoc-filter-promisified');
var katex = require('katex');

var RI = pandoc.RawInline;

async function action(elt,format,meta) {

	if (elt.t === 'Math'){
		var [tag, math] = elt.c
		if (tag.t === "DisplayMath")
		{
			return RI("html", katex.renderToString(math, {
				displayMode : true,
				throwOnError : true
			}))
		} else if (tag.t === "InlineMath"){
			return RI("html", katex.renderToString(math))
		}
	} 
}

pandoc.stdio(action);