const { h, Component } = require("ink");
const termImg = require("term-img");
const terminalImage = require("terminal-image");

export class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ""
        };
    }

    shouldComponentUpdate(nextProps) {
        return this.props.src !== nextProps.src;
    }

    componentDidMount() {
        const fallback = async () => {
            const image = await terminalImage.file(this.props.src);
            this.setState({
                image
            });
        };
        const result = termImg.string(this.props.src, {
            width: "128px",
            height: "128px",
            fallback
        });
        if (result) {
            this.setState({
                image: result
            });
        }
    }

    render() {
        return <span>{this.state.image}</span>;
    }
}
