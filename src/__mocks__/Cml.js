function CmlToHtml(json) {
    return [
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
    ]
}

export default {
    CmlToHtml
}