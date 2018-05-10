"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const { h, render, Component } = require("ink");
const SelectInput = require("./component/Select");
const path = require("path");
const opn = require("opn");
const open = url => opn(url, { wait: false });
const handleSelect = item => {
    if (item.url) {
        open(item.url);
    }
    if (item.action) {
        item.action();
    }
};

const items = [{
    label: "Twitter",
    url: "https://twitter.com/azu_re"
}, {
    label: "GitHub",
    url: "https://github.com/azu"
}, {
    label: "Blog",
    url: "https://efcl.info/"
}, {
    label: "JSer.info",
    url: "https://jser.info/"
}, {
    label: "Ask Me Anything",
    url: "https://github.com/azu/azu/issues"
}, {
    label: "Quit",
    action() {
        process.exit();
    }
}];

class Azu extends Component {
    render() {
        return h(
            "div",
            null,
            h(
                "div",
                null,
                h(
                    "span",
                    null,
                    `Hello, I am Azu.`
                ),
                h("br", null),
                h(
                    "span",
                    null,
                    `I'm a client-side programmer.`
                )
            ),
            h("br", null),
            h(SelectInput, { items: items, onSelect: handleSelect })
        );
    }
}
exports.Azu = Azu;
//# sourceMappingURL=Azu.js.map