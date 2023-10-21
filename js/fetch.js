// URL of the XML document
const xmlUrl = 'https://binauralsubliminal.com/album_01/getrssfeed.php';

const img = document.getElementById('carousel');
const cardTitle = document.getElementById('card-title');
const cardDescription = document.getElementById('card-description');
const web_Master = document.getElementById('web-master');
const pub_Date = document.getElementById('web-date');
const chan_Title = document.getElementById('channel-title');
const chan_Desc = document.getElementById('channel-description');
const chan_Link = document.getElementById('channel-link');

let channelInfo = {};
let audioList = [];
let imageList = [];
let titleList = [];
let titleDescription = [];

let pictures = [];

// fetch feed
function fetchRSSFeed() {
  // Fetch the XML document
  fetch(xmlUrl)
    .then(response => response.text())
    .then(data => {
      // Parse the XML document
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');

      const channel = xmlDoc.querySelector('channel');
      const channelTitle = channel.querySelector('title').textContent;
      const channelDescription = channel.querySelector('description').textContent;
      const channelLink = channel.querySelector('link').textContent;
      const channelWebMaster = channel.querySelector('webMaster').textContent;
      const channelPubDate = channel.querySelector('pubDate').textContent;

      channelInfo.title = channelTitle;
      channelInfo.description = channelDescription;
      channelInfo.link = channelLink;
      channelInfo.webmaster = channelWebMaster;
      channelInfo.pubdate = channelPubDate;

      chan_Title.textContent = channelTitle;
      chan_Desc.textContent = channelDescription;
      chan_Link.innerHTML = `<a href="https://binauralsubliminal.my.canva.site/">rss album concept v0.0.1</a>`;
      web_Master.textContent = channelInfo.webmaster
      pub_Date.textContent = channelInfo.pubdate;

      console.log(channelInfo);

      console.log(`channel title: ${channelInfo.title}\n
      channel description: ${channelInfo.description}\n
      channel link: ${channelInfo.link}\nchannel webmaster: ${channelInfo.channelWebMaster}\n
      channel pubdate: ${channelInfo.pubdate}`);

      console.log(channelTitle);
      console.log(channelDescription);
      console.log(channelLink);
      console.log(channelWebMaster);
      console.log(channelPubDate);

      const items = xmlDoc.querySelectorAll('item');
      const images = xmlDoc.querySelectorAll('image');

      const listItems = document.getElementsByTagName('li');

      console.log(listItems);

      for (i = 0; i < items.length && images.length; i++) {

        if (i >= items.length) {
          i = 0;
        }

        const image = images[i];
        const item = items[i];

        const imageUrl = image.querySelector('url').textContent;

        const itemTitle = item.querySelector('title').textContent;
        const itemDesription = item.querySelector('description').textContent;
        const itemEnclosure = item.querySelector('enclosure').getAttribute('url');

        pictures.push(imageUrl);
        imageList.push(imageUrl);
        titleList.push(itemTitle);
        titleDescription.push(itemDesription);
        audioList.push(itemEnclosure);
      }
      img.src = pictures[0];
      img.style.zIndex = '10';
      cardTitle.textContent = titleList[0];
      cardDescription.textContent = titleDescription[0];

      console.log(`audioList: ${audioList.length}`);
      console.log(`imageList: ${imageList}`);
      console.log(`titleList: ${titleList}`);
      console.log(`titledDescription: ${titleDescription}`);

    }).catch(error => {
      console.error('Error fetching or parsing XML:', error);
      console.log(error);
    });
}
fetchRSSFeed();




function channelInfoHandle() {

  //const chan_info = document.getElementById("channel-info");
  //const chan_title = document.getElementById("chanTitle");
  //const chan_desc = document.getElementById("chanDescription");

  //  chan_info.style.backgroundImage = `url('img/thumbnail.jpg')`;
  //  chan_title.textContent = channelInfo.title;
  //  chan_desc.textContent = channelInfo.description;

}