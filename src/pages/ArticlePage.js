import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import ArticlesList   from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import articleContent from './ArticleContent';
import NotFoundPage   from './NotFoundPage';

function ArticlePage() {

  let { name } = useParams();
  const article = articleContent.find(article => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    fetch(`/api/articles/${name}`)
      .then(res => res.json())
      .then(setArticleInfo);
  },[name]);

  if(!article) return <NotFoundPage/>;

  const otherArticles = articleContent.filter(article => article.name !== name).slice(0, 2);
  return (
    <>
      <h1>{article.title}</h1>
      <p>This post has been upvoted {articleInfo.upvotes} times</p>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments}/>
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles}/>
    </>
  );
}

export default ArticlePage;
