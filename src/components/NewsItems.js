import React, { useContext, useEffect, useState } from 'react'
import News from './News'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import NoteContext from '../context/NoteContext';

export default function NewsItems(props) {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateData = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
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

    const a = useContext(NoteContext);

    return (
        <>
        {console.log(a.name + " " + a.surname)}
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
