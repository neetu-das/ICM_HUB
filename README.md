# ICM_HUB
To run the project follow below steps:

*npm install*

*npm run test*

*npm run start*

### Open Postman

hit below apis with the given data:

1. localhost:3000/HtmlToCml. It is a post api with body as Raw (HTML(text/html)). Paste below body

``` <!DOCTYPE html>
<html>
<body>

<h1>Hello Bot!</h1>

</body>
</html>
```





2. localhost:3000/CmlToHtml. It is a post api with body as Raw (JSON(application/json)). Paste below body
```[ 
   { 
      "type":"element",
      "tagName":"p",
      "attributes":[ 

      ],
      "children":[ 
         { 
            "type":"text",
            "content":"Hello from #emoji",
            "emojiValue":"grinning face"
         }
      ]
   },
   {"type":"emoji", "value" : "smiling face with halo"}
]
```

3. localhost:3000/XamlToCml. It is a post api with body as Raw (XML(text/xml)). Paste below body
```
<ContentPage xmlns="http://xamarin.com/schemas/2014/forms"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             xmlns:local="clr-namespace:XamlSamples"
             x:Class="XamlSamples.MainPage">

    <StackLayout>
        <!-- Place new controls here -->
        <Label Text="Welcome to Xamarin Forms!"
               VerticalOptions="Center"
               HorizontalOptions="Center" />
    </StackLayout>

    <Button FontWeight="Bold">
	    <WrapPanel>
	        <TextBlock Foreground="Blue">Multi</TextBlock>
	        <TextBlock Foreground="Red">Color</TextBlock>
	        <TextBlock>Button</TextBlock>
	    </WrapPanel>
	</Button>

</ContentPage>
```

4. localhost:3000/CmlToXaml It is a post api with body as Raw (JSON(application/json)). Paste below body
```{
    "elements": [
        {
            "type": "element",
            "name": "ContentPage",
            "attributes": {
                "xmlns": "http://xamarin.com/schemas/2014/forms",
                "xmlns:x": "http://schemas.microsoft.com/winfx/2009/xaml",
                "xmlns:local": "clr-namespace:XamlSamples",
                "x:Class": "XamlSamples.MainPage"
            },
            "elements": [
                {
                    "type": "element",
                    "name": "StackLayout",
                    "elements": [
                        {
                            "type": "comment",
                            "comment": " Place new controls here "
                        },
                        {
                            "type": "element",
                            "name": "Label",
                            "attributes": {
                                "Text": "Welcome to Xamarin Forms!",
                                "VerticalOptions": "Center",
                                "HorizontalOptions": "Center"
                            }
                        }
                    ]
                },
                {
                    "type": "element",
                    "name": "Button",
                    "attributes": {
                        "FontWeight": "Bold"
                    },
                    "elements": [
                        {
                            "type": "element",
                            "name": "WrapPanel",
                            "elements": [
                                {
                                    "type": "element",
                                    "name": "TextBlock",
                                    "attributes": {
                                        "Foreground": "Blue"
                                    },
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Multi"
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "TextBlock",
                                    "attributes": {
                                        "Foreground": "Red"
                                    },
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Color"
                                        }
                                    ]
                                },
                                {
                                    "type": "element",
                                    "name": "TextBlock",
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Button"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
```
