const path = require("path");
const meow = require("meow");
const termImg = require("term-img");
const terminalImage = require("terminal-image");
const importJsx = require("import-jsx");
const React = require("react");
const { render } = require("ink");

const ui = importJsx("./Azu");

const cli = meow(
    `
	Usage
	  $ npx azu
`,
    {
        autoHelp: true,
        autoVersion: true
    }
);

export const run = async () => {
    const image = await terminalImage.file(path.join(__dirname, "../resources/avatar.png"), {
        width: 32,
        height: 32,
        preserveAspectRatio: false
    });
    console.log(image);
    render(React.createElement(ui));
};
