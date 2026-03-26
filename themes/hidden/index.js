import './styles.css'

// 首页布局
export const Home = ({ posts }) => {
  return (
    <div className="hidden-container">
      <div className="hidden-post-list">
        {posts.map(post => (
          <div key={post.id} className="hidden-post-card">
            {post.cover && <img src={post.cover} className="hidden-post-cover" alt={post.title} />}
            <div className="hidden-post-body">
              <h2 className="hidden-post-title">{post.title}</h2>
              <p className="hidden-post-excerpt">{post.summary}</p>
              <div className="hidden-post-date">{post.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 文章详情页
export const Post = ({ post }) => {
  return (
    <div className="hidden-container">
      <article className="hidden-post-page">
        <h1 className="hidden-page-title">{post.title}</h1>
        <div className="hidden-page-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </div>
  )
}

// 全局布局（必须导出）
export const Layout = ({ children }) => {
  return <div className="hidden-wrapper">{children}</div>
}

// 列表页（必须导出）
export const List = Home

// 标签页（必须导出，复用首页布局）
export const Tag = Home

// 分类页（必须导出，复用首页布局）
export const Category = Home

// 搜索页（必须导出，复用首页布局）
export const Search = Home
