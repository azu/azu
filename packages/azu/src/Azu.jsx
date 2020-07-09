const path = require("path");
const React = require("react");
const { Box, Text } = require("ink");
const SelectInput = require("ink-select-input").default;
const open = require("open");

const handleSelect = (item) => {
    if (item.url) {
        open(item.url);
    }

    if (item.action) {
        item.action();
    }
};

const createItems = (items) => {
    for (const item of items) {
        item.key = item.url || item.label;
    }

    return items;
};

const items = createItems([
    {
        label: "Twitter",
        url: "https://twitter.com/azu_re",
    },
    {
        label: "GitHub",
        url: "https://github.com/azu",
    },
    {
        label: "Blog",
        url: "https://efcl.info/",
    },
    {
        label: "JSer.info",
        url: "https://jser.info/",
    },
    {
        label: "Ask Me Anything",
        url: "https://github.com/azu/azu/issues/new?template=AMA.md",
    },
    {
        label: "Quit",
        action() {
            process.exit();
        },
    },
]);

module.exports = () => (
    <Box flexDirection="column">
        <Box marginBottom={1}>
            <Text>Hi! I'm @azu.</Text>
            <Text>I'm a OSS programmer.</Text>
        </Box>
        <SelectInput items={items} onSelect={handleSelect} />
    </Box>
);
