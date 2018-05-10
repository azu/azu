"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) {
    return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(
                        function(value) {
                            step("next", value);
                        },
                        function(err) {
                            step("throw", err);
                        }
                    );
                }
            }
            return step("next");
        });
    };
}

const { h, Component } = require("ink");
const path = require("path");
const termImg = require("term-img");
const terminalImage = require("terminal-image");

class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ""
        };
    }

    componentDidMount() {
        var _this = this;

        const fallback = (() => {
            var _ref = _asyncToGenerator(function*() {
                const image = yield terminalImage.file(_this.props.src);
                _this.setState({
                    image
                });
            });

            return function fallback() {
                return _ref.apply(this, arguments);
            };
        })();
        const result = termImg.string(this.props.src, { fallback });
        if (result) {
            this.setState({
                image: result
            });
        }
    }

    render() {
        return h("span", null, this.props.image);
    }
}
exports.Image = Image;
//# sourceMappingURL=ImageCLI.js.map
