import ArticlesList from '../components/ArticlesList'
import articleContent from './ArticleContent.js';

function ArticlesListPage() {
  return (
    <div>
      <h1>Articles</h1>
        <ArticlesList articles={articleContent}/>
    </div>
  );
}

export default ArticlesListPage;
