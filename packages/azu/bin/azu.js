#!/usr/bin/env node
"use strict";
const meow = require("meow");
const path = require("path");
const { h, render } = require("ink");

const Azu = require("../lib/Azu").Azu;

meow(`
    Usage
    
        $ azu
`);

// workaround image
const termImg = require("term-img");
const terminalImage = require("terminal-image");
const AZU_IMAGE_PATH = path.join(__dirname, "../resources/azu-c.png");
const fallback = async () => {
    const image = await terminalImage.file(AZU_IMAGE_PATH);
    console.log(image);
};

termImg(path.join(AZU_IMAGE_PATH), { fallback });

render(h(Azu));
