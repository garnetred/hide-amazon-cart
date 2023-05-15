# Hide Amazon Cart

## Abstract
This browser extension hides the Amazon cart sidebar that appears on the right-hand side if a user has at least one item in the cart. Normally, you would see this sidebar on the `/cart` route and when viewing other Amazon items. With this extension the cart is hidden, but you can still view your cart by visiting `amazon.com/cart`. 

## Tech Stack
This project uses vanilla JS, CSS, and HTML. 

## Setup/Installation
You can clone the repo locally using `git clone`. 

[This article](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) offers detailed instructions on loading an unpacked chrome extension. You can navigate to the chrome extensions page via the puzzle piece icon in the toolbar. From there, you can click "load unpacked extension" and choose the folder via the popup. You should then see the yellow cart icon appear in the toolbar. 
When you click on the icon, you should see "Hide Amazon Cart." If you navigate to Amazon and add an item to your cart, you should not see the sidebar in the `amazon.com/cart` page or on other Amazon item pages. 

## Next Steps
This is a pretty simple extension so no plans to add new features other than maintaining it. 
