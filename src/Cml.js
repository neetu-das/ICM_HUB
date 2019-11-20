import { parse, stringify } from 'himalaya';
import fs from 'fs';
import smileys from './emojiList.json';
import convert from 'xml-js';

function CmlToHtml(json) {
    const template = fs.readFileSync(`${__dirname}/template.html`, "utf8");
    const parsedHtmlJson = parse(template);
    parsedHtmlJson.forEach(element => {
        if (element.tagName == 'html') {
            element.children.forEach(child => {
                if (child.tagName == 'body') {
                    const jsonItems = json;
                    jsonItems.forEach(item => {
                        if (item.type.toLowerCase() === "emoji") {
                            var smileyCode = smileys[item.value.toUpperCase()];
                            item = {
                                "type": "element",
                                "tagName": "p",
                                "attributes": [],
                                "children": [
                                    {
                                        "type": "text",
                                        "content": smileyCode
                                    }
                                ]
                            }
                        } else {
                            item.children.forEach(child => {
                                if (child.emojiValue) {
                                    child.content = child.content.replace("#emoji", smileys[child.emojiValue.toUpperCase()])
                                    delete child.emojiValue;
                                }
                            });
                        }
                        child.children.push(item);
                    });
                    return;
                }
            });
            return;
        }
    });

    return parsedHtmlJson;
}

export default {
    CmlToHtml
}