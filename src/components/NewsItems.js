import React, { useEffect, useState } from 'react'
import News from './News'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default function NewsItems(props) {

    // articles = [
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "Japan bids sombre farewell to slain Shinzo Abe, its longest-serving premier - Reuters.com",
    //         "description": "With prayers, flowers and flags draped in black ribbons, Japan on Tuesday said farewell to Shinzo Abe, a polarising figure who dominated politics as the country's longest-serving premier, before being gunned down at a campaign rally last week.",
    //         "url": "https://www.reuters.com/world/asia-pacific/japan-readies-sombre-farewell-slain-abe-its-longest-serving-premier-2022-07-12/",
    //         "urlToImage": "https://www.reuters.com/resizer/CuFU9cF1mYmSbBUguKLgQQldRWA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O5F2NCJSUFKBDD5XSWFQPIG2AA.jpg",
    //         "publishedAt": "2022-07-12T08:32:00Z",
    //         "content": "TOKYO, July 12 (Reuters) - With prayers, flowers and flags draped in black ribbons, Japan on Tuesday said farewell to Shinzo Abe, a polarising figure who dominated politics as the country's longest-s… [+5310 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Guardian"
    //         },
    //         "author": "Guardian staff reporter",
    //         "title": "Iran to supply Russia with hundreds of combat drones, US says - The Guardian",
    //         "description": "White House says it shows how Russia’s weaponry has been depleted by its relentless bombardment of eastern Ukraine",
    //         "url": "https://amp.theguardian.com/world/2022/jul/12/iran-drones-russia-uav-combat-ukraine",
    //         "urlToImage": "https://i.guim.co.uk/img/media/13dd9d75812aa5a49ee00332df10211d9da546c7/0_34_1500_900/master/1500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bb479877c8f55e15b5f7782b8cad3a03",
    //         "publishedAt": "2022-07-12T07:56:00Z",
    //         "content": "Iran is planning to supply Russia with hundreds of weapons-capable drones for use in Ukraine, according to a top US official.\r\nJake Sullivan, the White House national security adviser, said the infor… [+2692 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "ign",
    //             "name": "IGN"
    //         },
    //         "author": "Eric Song",
    //         "title": "Amazon Prime Day Deal: Save $70 Off the Newest Apple TV 4K HDR Media Player - IGN",
    //         "description": "Lowest Price Ever",
    //         "url": "https://www.ign.com/articles/amazon-prime-day-deal-save-70-off-the-newest-apple-tv-4k-hdr-media-player",
    //         "urlToImage": "https://assets-prd.ignimgs.com/2022/07/11/appletv-1657559007501.jpg?width=1280",
    //         "publishedAt": "2022-07-12T07:30:00Z",
    //         "content": "It's a little early, but this Amazon Prime Day deal deserves a mention; the Apple TV 4K just hit its lowest price ever. There is certainly no lack of 4K media streaming devices out there for you to c… [+2922 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "Nasa's James Webb telescope takes super sharp view of early universe - BBC News - BBC News",
    //         "description": null,
    //         "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DspoeRobCOZg",
    //         "urlToImage": null,
    //         "publishedAt": "2022-07-12T06:59:18Z",
    //         "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Zahid Mahmood, CNN",
    //         "title": "Mo Farah says he was illegally trafficked to the UK as a child: BBC - CNN",
    //         "description": "Long distance running legend Mo Farah has told the BBC that he was trafficked into the UK as a child and forced to work as a domestic servant.",
    //         "url": "https://www.cnn.com/2022/07/11/uk/mo-farah-bbc-intw-intl/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220711142334-mo-farah-2021-super-tease.jpg",
    //         "publishedAt": "2022-07-12T06:51:00Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "cbs-news",
    //             "name": "CBS News"
    //         },
    //         "author": "Caroline Linton",
    //         "title": "How to watch Tuesday's Jan. 6 committee hearing focused on extremists at the Capitol - CBS News",
    //         "description": "CBS News will broadcast the hearing as a Special Report starting at 10 a.m. ET.",
    //         "url": "https://www.cbsnews.com/live-updates/january-6-committee-hearing-schedule-july-12-2022/",
    //         "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/07/10/0f2170c3-9c57-4efb-a8b9-8a29cf5ac71a/thumbnail/1200x630/835c90b0527ad27ef4a93d55bb064f34/gettyimages-1405670218.jpg",
    //         "publishedAt": "2022-07-12T06:31:45Z",
    //         "content": "The House select committee investigating the Jan. 6 attack on the U.S. Capitol will be holding another public hearing on Tuesday, this time focusing on the role of extremists that day.\r\nCommittee mem… [+4816 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "Ukraine prepares for fresh Russian assault, West braces for worsening energy crisis - Reuters.com",
    //         "description": "Ukraine expects a fresh assault by Russian ground forces, following widespread shelling which killed more than 30 people, as Kyiv's Western allies brace for a worsening of the global energy crisis if Russia cuts its supply of oil and gas.",
    //         "url": "https://www.reuters.com/world/europe/ukraine-prepares-fresh-russian-assault-west-braces-worsening-energy-crisis-2022-07-12/",
    //         "urlToImage": "https://www.reuters.com/resizer/YE20k1EFLRHY2gw1zOgdWuuRvV0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3AYDWQHNNJP2PFH4CIKWMDMFDQ.jpg",
    //         "publishedAt": "2022-07-12T06:05:00Z",
    //         "content": "KYIV, Ukraine, July 12 (Reuters) - Ukraine expects a fresh assault by Russian ground forces, following widespread shelling which killed more than 30 people, as Kyiv's Western allies brace for a worse… [+5573 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Daily Beast"
    //         },
    //         "author": "Noah Kirsch, Zachary Petrizzo",
    //         "title": "Elon Musk Tears Into Trump, Tells Him to 'Hang Up His Hat' - The Daily Beast",
    //         "description": "The Tesla CEO also took a shot at the former president’s age, days after Trump railed over Musk’s botched Twitter deal.",
    //         "url": "https://www.thedailybeast.com/elon-musk-tears-into-donald-trump-tells-him-to-hang-up-his-hat",
    //         "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1657598289/220711-trump-musk_fhb8d1",
    //         "publishedAt": "2022-07-12T03:59:02Z",
    //         "content": "Elon Musk fired back at Donald Trump on Monday night in a series of scathing tweets, urging the former president to give up his ambitions of a political comeback.\r\nMusks comments came after Trump rip… [+2714 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "entertainment-weekly",
    //             "name": "Entertainment Weekly"
    //         },
    //         "author": "Lester Fabian Brathwaite",
    //         "title": "'Glee' star Samantha Ware speaks out after Lea Michele cast in 'Funny Girl': 'Silence is complicity' - Entertainment Weekly News",
    //         "description": "Ware had previously accused Michele of making her life on <em>Glee</em> 'a living hell,' by, among other things, allegedly threatening to defecate in Ware's wig.",
    //         "url": "https://ew.com/theater/glee-samantha-ware-lea-michele-funny-girl-reaction/",
    //         "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B380%2C426%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F07%2F12%2FSamantha-Ware.jpg",
    //         "publishedAt": "2022-07-12T02:26:00Z",
    //         "content": "While reactions to Lea Michele being cast in Funny Girl have ranged from \"funny\" to girl, Michele may be belting out \"Don't Rain on My Parade\" once Samantha Ware brings around the clouds from Twitter… [+2659 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "Washburn Fire near Yosemite National Park continues to grow - 6abc Philadelphia",
    //         "description": "California firefighters gained ground Monday in the battle against a wildfire that poses a threat to a grove of giant sequoias and a small community in Yosem...",
    //         "url": "https://www.youtube.com/watch?v=8XUQtHAlh-E",
    //         "urlToImage": "https://i.ytimg.com/vi/8XUQtHAlh-E/maxresdefault.jpg",
    //         "publishedAt": "2022-07-12T02:10:16Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Guardian"
    //         },
    //         "author": "Guardian staff reporter",
    //         "title": "Two killed in shootings at four 7-Eleven stores in southern California - The Guardian US",
    //         "description": "Attacks appear to have occurred after robberies or robbery attempts on day store is marking 95th birthday",
    //         "url": "https://amp.theguardian.com/us-news/2022/jul/11/7-eleven-shootings-california",
    //         "urlToImage": "https://i.guim.co.uk/img/media/92a7ec8d7e8615ae6b5ffe4aa552a26ba21530ba/0_140_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fdad4b145527ad2a9f0d8c4867f1d52c",
    //         "publishedAt": "2022-07-12T02:00:00Z",
    //         "content": "Two people were killed and three were wounded in shootings at four 7-Eleven locations in southern California early on Monday morning, authorities said, in a series of attacks that police believe may … [+1554 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "axios",
    //             "name": "Axios"
    //         },
    //         "author": "Kate Nocera",
    //         "title": "India will surpass China in population next year, UN projects - Axios",
    //         "description": "The world's total population will reach 8 billion later this year.",
    //         "url": "https://www.axios.com/2022/07/11/china-india-world-population-trends",
    //         "urlToImage": "https://images.axios.com/FugsRAP1U3_1qRJFHHoO5kItkos=/1366x768/smart/2022/07/11/1657565511175.png",
    //         "publishedAt": "2022-07-12T01:59:01Z",
    //         "content": "Data: United Nations; Chart: Nicki Camberg/Axios \r\nIndia is expected to surpass China as the world's most populous country by 2023, according to a new report from the United Nations looking at popula… [+2603 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Kate Sullivan, Nikki Carvajal, Jeremy Diamond and Paul LeBlanc, CNN",
    //         "title": "Biden says gun violence has turned America's communities into 'killing fields' - CNN",
    //         "description": "President Joe Biden on Monday said gun violence has turned everyday places in America into \"killing fields\" as he marked the passage of the first significant federal gun safety legislation in 30 years.",
    //         "url": "https://www.cnn.com/2022/07/11/politics/biden-mass-shooting-survivors-gun-safety-legislation/index.html",
    //         "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220710202956-joe-biden-white-house-0708-super-tease.jpg",
    //         "publishedAt": "2022-07-12T01:56:00Z",
    //         "content": "(CNN)President Joe Biden on Monday said gun violence has turned everyday places in America into \"killing fields\" as he marked the passage of the first significant federal gun safety legislation in 30… [+4877 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "associated-press",
    //             "name": "Associated Press"
    //         },
    //         "author": "Zeke Miller",
    //         "title": "Biden admin: Docs must offer abortion if mom's life at risk - The Associated Press",
    //         "description": "WASHINGTON (AP) — The Biden administration on Monday told hospitals that they “must” provide abortion services if the life of the mother is at risk, saying federal law on emergency treatment guidelines preempts state laws in jurisdictions that now ban the pro…",
    //         "url": "https://apnews.com/4221f9306a596904b9af2e0d1fad23b9",
    //         "urlToImage": "https://storage.googleapis.com/afs-prod/media/bc80d91e99f740dd8359b84cef472a05/3000.jpeg",
    //         "publishedAt": "2022-07-12T01:35:04Z",
    //         "content": "WASHINGTON (AP) The Biden administration on Monday told hospitals that they must provide abortion services if the life of the mother is at risk, saying federal law on emergency treatment guidelines p… [+3421 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "engadget",
    //             "name": "Engadget"
    //         },
    //         "author": "https://www.engadget.com/about/editors/karissa-bell",
    //         "title": "Twitter tells Musk his attempt to bail on $44 billion acquisition is ‘invalid and wrongful’ - Engadget",
    //         "description": "In a letter to Elon Musk’s attorneys, Twitter denies that it has reneged on its side of the agreement, but says Musk has done so..",
    //         "url": "https://www.engadget.com/twitter-elon-musk-invalid-and-wrongful-011600978.html",
    //         "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-04/f39f8f60-c7f8-11ec-bffe-ee6e733ba8ec",
    //         "publishedAt": "2022-07-12T01:17:16Z",
    //         "content": "Twitters lawyers have hit back\r\n at Elon Musk for his attempt to bail on his $44 billion takeover of the company. The company said Friday, immediately following Musks official notice that he wanted t… [+1329 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Variety"
    //         },
    //         "author": "Patrick Frater",
    //         "title": "Two BTS Series to Play on Disney Streaming Services Following Deal With Hybe - Variety",
    //         "description": "Two shows featuring Korean pop icons BTS are set to play on Disney’s international streaming platforms, following a content agreement between The Walt Disney Company Asia Pacific and management group Hybe Corporation. “This will be the start of a long-term co…",
    //         "url": "https://variety.com/2022/tv/news/bts-disney-streaming-hybe-1235314152/",
    //         "urlToImage": "https://variety.com/wp-content/uploads/2022/07/BTS-ARMY-Google-Search-Easter-Egg.jpg?w=1024",
    //         "publishedAt": "2022-07-12T00:05:00Z",
    //         "content": "Two shows featuring Korean pop icons BTS are set to play on Disney’s international streaming platforms, following a content agreement between The Walt Disney Company Asia Pacific and management group… [+1905 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "pgatour.com"
    //         },
    //         "author": "Rob Bolton, PGATOUR.COM",
    //         "title": "Power Rankings: The Open Championship - PGA TOUR",
    //         "description": "Bobby Jones, Sam Snead, Peter Thomson, Jack Nicklaus, Seve Ballesteros, Nick Faldo, Tiger Woods. Each has prominent positioning in the pantheon of the sport, and each is a former winner of The Open Championship at St. Andrews in Scotland. And that’s within on…",
    //         "url": "https://www.pgatour.com/power-rankings/2022/07/11/fantasy-golf-advice-tips-picks-2022-the-open-championship-british-open-st-andrews.html",
    //         "urlToImage": "https://www.pgatour.com/editorial/2022/07/11/mcilroy-proc1694-andrewredingtongetty.jpg",
    //         "publishedAt": "2022-07-11T23:42:19Z",
    //         "content": "Sam Burns, Hideki Matsuyama, Viktor Hovland, Marc Leishman and three-time Open champion Tiger Woods will be among the notables reviewed in Draws and Fades.\r\nThe 21st-century phrasing is that big play… [+2928 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NBCSports.com"
    //         },
    //         "author": "Mike Florio",
    //         "title": "Report: Seahawks have had internal discussions about adding Jimmy Garoppolo - NBC Sports",
    //         "description": "The future of 49ers quarterback Jimmy Garoppolo remains murky. One of the team’s top rivals has explored the possibility of being the one that provides clarity.Via Jeremy Fowler of ESPN.com, the Seahawks have had internal discussions about the possibility of …",
    //         "url": "https://profootballtalk.nbcsports.com/2022/07/11/report-seahawks-have-had-internal-discussions-about-adding-jimmy-garoppolo/",
    //         "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/07/GettyImages-1357370452-e1657582781445.jpg",
    //         "publishedAt": "2022-07-11T23:42:00Z",
    //         "content": "The future of 49ers quarterback Jimmy Garoppolo remains murky. One of the teams top rivals has explored the possibility of being the one that provides clarity.\r\nVia Jeremy Fowler of ESPN.com, the Sea… [+593 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "KING5.com"
    //         },
    //         "author": "KING 5 Staff",
    //         "title": "Confirmed monkeypox case in Snohomish County, probable case in Pierce County - KING5.com",
    //         "description": "There are currently 15 confirmed or probable monkeypox cases in Washington state.",
    //         "url": "https://www.king5.com/article/news/local/confirmed-probable-monkey-pox-snohomish-pierce-county/281-c497bf07-9a43-41be-84eb-9bf9a8de6c5d",
    //         "urlToImage": "https://media.king5.com/assets/WFMY/images/fc64db13-53e2-4028-80cb-00719f4d0089/fc64db13-53e2-4028-80cb-00719f4d0089_1140x641.jpg",
    //         "publishedAt": "2022-07-11T23:34:00Z",
    //         "content": "SNOHOMISH COUNTY, Wash. Health officials have confirmed a monkeypox case in Snohomish County and identified a probable case of monkeypox in Pierce County.\r\nThe monkeypox case in Snohomish County was … [+1462 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Deadline"
    //         },
    //         "author": "Rosy Cordero",
    //         "title": "Why There Won’t Be Emmy Nominations This Year For Shows Like ‘The Crown’, ‘The Boys’ & ‘The Handmaid’s Tale’ - Deadline",
    //         "description": "Netflix’s The Crown, HBO’s Westworld, Prime Video’s The Boys and Hulu’s The Handmaid’s Tale are among this year’s buzzy TV series that won’t be on Tuesday’s Primetime Emmy nominees list—but it won’t be because they were snubbed. The eligibility period set by …",
    //         "url": "https://deadline.com/2022/07/no-emmy-nominations-the-crown-the-boys-handmaids-tale-eligibility-1235061163/",
    //         "urlToImage": "https://deadline.com/wp-content/uploads/2022/07/emmys-not-eligible-tv.jpg?w=1000",
    //         "publishedAt": "2022-07-11T23:26:00Z",
    //         "content": "Netflix’s The Crown, HBO’s Westworld, Prime Video’s The Boysand Hulu’s The Handmaid’s Tale are among this year’s buzzy TV series that won’t be on Tuesday’s Primetime Emmy nominees list—but it won’t b… [+2541 chars]"
    //     }
    // ];

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // articles = []; 
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    useEffect(() => {
        updateData()
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        //eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };

    return (
        <>
        <h2 className='text-center my-3'>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        {loading && <Spinner />}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
        >
            <div className='container my-3'>
                <div className='row'>
                    {articles.map((element) => {
                        return <div className='col my-3' key={element.url}>
                            <News title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imgURL={element.urlToImage ? element.urlToImage : "https://www.deccanherald.com/sites/dh/files/articleimages/2022/07/15/malware-pixabay-1126891-1657877311.jpg"} newsURL={element.url} />
                        </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
        </>
    )
}

NewsItems.defaultProps = {
    country: "in",
    category: "general",
    pageSize: "20"
}
