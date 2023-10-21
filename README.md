# binsub_rss_album
A web page using RSS, Podcasting 2.0  XML to distribute music and video to podcasting apps and create a webpage/web app, a IOS or Android app that has a built-in monetizing function based on Bitcoin or links to merchandise and gigs. It's up to the artist, the mechanics are in place.

My idea is to create a custom RSS reader that has music or video content on it,
using Podcasting 2.0 XML rules the content is shared on Podcasting apps and can be accessible with RSS readers.

The idea is that artists can share a link or produce an app where the user can enjoy your media and get extra features.
Maybe some content is behind a paywall, maybe users pay a SAT per minute, maybe its all free and the artists support themselves with merchandise,
Maybe release a single just to promote a tour...

The possibility is endless,the content that is declared in your XML file.

I have made a content slider that displays cards using the title, image, description, and a html5 audio player.
there's some information like webmaster and links to a webpage that are all XML items parsed with a simple JavaScript fetch script.

I did get it to work perfectly on podcastIndex.org with images, titles, description and most importantly the audio.
But the original link broke because I used a free hosting service.

wavlake.com uses Podcasting 2.0 XML properly, anything published on wavlake.com is added to the podcastindex.org site.
And becomes available on all the apps using podcasting 2.0.

So the basic idea is:
	host your files properly yourself or get a hosting provider
	create podcasting 2.0 XML: https://github.com/Podcastindex-org/podcast-namespace/blob/main/podcasting2.0.md
 	make sure it is working properly with https://podcastindex.org/ and is discoverable on apps.
  create a custom RSS reader in any web design language that fits you, or pay a guy...to:
  (the best part)
  share your content and add some design flair, use value for value models with lightning btc network,
  or give your latest video or song for free and link to your shop, your gigs, paywall a bonus track.
  let the content you share on podcasting 2.0 apps link to your own custom RSS Media player app.

This demo hosts a couple of music tracks using a content slider that cycles through cards displaying values obtained from the XML file.

One of the biggest struggles with this project is responsive design, it has to be functional and visually appealing to the user.

If anyone thinks this is a cool idea, fork the project and run with it.
If anyone gets the idea and forward some ideas to create a prototype that has a BTC monetization solution like paywalling bonus content or other options.
Responsive design, I'd like to restrict this design to a single page and have no more than 3 clicks to navigate the page.

Don't cut out the middle man, forget about the middle man !!
Use RSS !!!
