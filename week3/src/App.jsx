import "./App.css";

const posts = [
  {id : 1, character: "creeper", likes: 5000},
  {id : 2, character: "enderman", likes: 1200},
  {id : 3, character: "zombie", likes: 300},
];

const imageMap = {
    creeper: "/images/크리퍼.webp",
    enderman: "/images/엔더맨.webp",
    zombie: "/images/zombie.jpg",
  };

function Post({character, likes}){
  return(
    <article className="post">
        <Profile/>
        <Image character={character}/>
        <Actions/>
        <Content character={character} likes={likes}/>
      </article>
  )
}

function Profile(){
  return (
    <header className="post-profile">
          <img className="profile-image" src="/images/profile.jpg" alt="eden 프로필" />
          <strong className="profile-username">Kong</strong>
          <button className="more-button" type="button" aria-label="더 보기">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>
  )
}

function Image({character}){
    return (
      <div className="post-image-area">
        <img className="post-image" src={imageMap[character]} alt={character}/>
      </div>  
    )
}
  

function Actions(){
  return (
    <div className="post-actions">
          <div className="left-actions">
            <button type="button" aria-label="좋아요">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
              </svg>
            </button>

            <button type="button" aria-label="댓글">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 11.6a9.2 9.2 0 1 0-4.8 8.1L22 22l-1.9-5.7a9.1 9.1 0 0 0 .9-4.7Z" />
              </svg>
            </button>

            <button type="button" aria-label="공유">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m22 2-8.5 20-4-11L1 2h21ZM9.5 11 22 2" />
              </svg>
            </button>
          </div>

          <button type="button" aria-label="저장">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 2h16v20l-8-6-8 6V2Z" />
            </svg>
          </button>
        </div>
  )
}

function Content({character, likes}){
  return (
    <section className="post-content">
          <p className="like-count">
            좋아요 <strong>{likes}</strong>개
          </p>

          <p className="caption">
            <strong>{character}</strong>
            <span>몬스터임</span>
          </p>
        </section>
  )
}


function App() {
  return (
    <main className="page">
      {posts.map((post)=> (
        <Post key = {post.id} character={post.character} likes={post.likes}/>
      ))}
    </main>
  );
}

export default App;
