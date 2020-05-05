import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import MainImage from "../components/MainImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="ホーム" />
    <MainImage />
    <div id="about" className="topPageContents">
      <h2>サメプロとは？</h2>
    </div>
    <div id="cource" className="topPageContents">
      <h2>選べる2つのコース</h2>
      <p className="center">
        近日中に他にもコース追加予定！
      </p>
      <div className="cards">
        <div className="card">
          <h3>GitHub + VS Code入門</h3>
          <span>全1回　￥6,000</span>
          <p>
            開発を安全かつ効率的に進めることができる環境を学ぶコースです。
          </p>
        </div>
        <div className="card">
          <h3>アルゴリズム入門</h3>
          <span>全7回　￥35,000(7回セット)</span>
          <p>
            アルゴリズムの問題を、オンラインホワイトボードを用いて議論しながら解いていくコースです。
          </p>
        </div>
        
      </div>
      
      
    </div>
    <div id="community" className="topPageContents">
      <h2>まずはサメプロSlackコミュニティに参加しよう！</h2>
      <p className="center">コミュニティへの参加は無料！</p>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfeIg0RaxSqgT4CxfzO9nEg0G4PogK-MQftjh5ZYUUzfy4PAA/viewform?embedded=true" id="communityConfirm" width="100%" height="1193" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
    </div>
    <div id="team" className="topPageContents">
      <h2>運営チーム</h2>
    </div>
    
  </Layout>
)

export default IndexPage
