jest.mock('../src/Cml.js');
import express from 'express';
const router = express.Router();
import fs from 'fs';
import convert from 'xml-js';
import { parse, stringify } from 'himalaya';
import smileys from '../src/emojiList.json';

describe("test router", () => {
    it("should test CmlToHtml router", () => {
        router.post('/CmlToHtml', (req, res) => {
            const parsedHtmlJson = Cml.CmlToHtml(req.body);
            var mockJson = [
                {
                    "type": "element",
                    "tagName": "!doctype",
                    "attributes": [
                        {
                            "key": "html",
                            "value": null
                        }
                    ],
                    "children": []
                },
                {
                    "type": "text",
                    "content": "\n"
                },
                {
                    "type": "element",
                    "tagName": "html",
                    "attributes": [],
                    "children": [
                        {
                            "type": "text",
                            "content": "\n"
                        },
                        {
                            "type": "element",
                            "tagName": "body",
                            "attributes": [],
                            "children": [
                                {
                                    "type": "text",
                                    "content": "\n\n"
                                },
                                {
                                    "type": "element",
                                    "tagName": "h1",
                                    "attributes": [],
                                    "children": [
                                        {
                                            "type": "text",
                                            "content": "Hello Bot!"
                                        }
                                    ]
                                },
                                {
                                    "type": "text",
                                    "content": "\n\n"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "content": "\n"
                        }
                    ]
                }
            ];
            expect(parsedHtmlJson).toEqual(mockJson);
        });
    });
});
