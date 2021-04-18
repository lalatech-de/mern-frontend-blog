import { useParams } from 'react-router-dom';

import ArticlesList   from '../components/ArticlesList';
import articleContent from './ArticleContent';
import NotFoundPage   from './NotFoundPage';

function ArticlePage() {

  let { name } = useParams();
  const article = articleContent.find(article => article.name === name);

  if(!article) return <NotFoundPage/>;

  const otherArticles=articleContent.filter(article => article.name !== name)
    .slice(0, 2);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles}/>
    </>
  );
}

export default ArticlePage;
