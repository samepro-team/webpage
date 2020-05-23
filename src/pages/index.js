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
      <p className="center">
        はじめまして、サメプロです。
      </p>
      <div className="card">
        <h3>初心者でも楽しく、そして深くプログラミングを学べる教室です。</h3>
        <div className="seeMoreWrap">
          <input type="checkbox" id="seeMoreTriggerAbout" className="seeMoreTrigger"/>
          <label htmlFor="seeMoreTriggerAbout" className="seeMoreButton"></label>
          <div className="seeMoreContent">
          <p>サメプロは「プログラミングをはじめてみたい方」や「プログラミング活動の幅を拡げていきたい方」などのプログラミング学習に関する「はじめの一歩」をサポートいたします。</p>

          <p>人によって「はじめの一歩」は違うと思います。</p>

          <p>例えばポートフォリオサイト制作などの Web 開発やシューティングゲーム制作などのゲーム開発などからプログラミングをはじめたい方は、やがて開発を安全かつ効率的に進めることができる環境に魅力を感じるようになるでしょう。
          コードの補完や色付けなどにより、なるべくミスなく迅速に開発を進められる環境や、コードを安全に保存したり、あるいは開発に失敗した時などに、以前の状態にコードを戻せたりする堅牢な環境です。
          このような方にサメプロは「GitHub + Visual Studio Code 入門」をご用意しております。</p>

          <p>また、エンジニア職への転向や競技プログラミングへの参加などが「はじめの一歩」となる人もいると思います。時間内により早く正確にアルゴリズムを実装することに面白みを覚える人、エンジニアとして職に就くためのコーディング面接を突破するためにプログラミングを勉強する人、また将来に備えて PAST と呼ばれるアルゴリズム検定試験を受験する人、などです。
          このような方にサメプロは「ホワイトボードで楽しく学ぶアルゴリズム入門」をご用意しております。</p>

          <p>私たちは受講者ひとりひとりを大切にし、必ず満足していただける結果を持ち帰っていただくことに尽力いたします。
          プログラミング教育必修化への対応に不安を感じる小中高生の皆様、心機一転、何か新しいことをはじめたいと考えている大学生の皆様、キャリアチェンジなどを考えている社会人の皆様、その他あらゆる理由でプログラミング学習の第一歩を踏み出したいと考えている皆様を、サメプロは全力でサポートいたします。</p> 

          </div>
        </div>
        
      </div>
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
          <Link to="modernEnvDev">
            <div className="button">
              詳細はこちら
            </div>
          </Link>
        </div>
        <div className="card">
          <h3>アルゴリズム入門</h3>
          <span>全7回　￥35,000(7回セット)</span>
          <p>
            アルゴリズムの問題を、オンラインホワイトボードを用いて議論しながら解いていくコースです。
          </p>
          <Link to="algorithm">
            <div className="button">
              詳細はこちら
            </div>
          </Link>
        </div>
        
      </div>
      
      
    </div>
    <div id="community" className="topPageContents">
      <h2>開講情報とお申し込みはこちら！</h2>
      <div className="center">
      <iframe frameborder="0" height="480" width="320" src="https://purchase.samepro.jp/items/29691511/widget/large" ></iframe>
      <iframe frameborder="0" height="480" width="320" src="https://purchase.samepro.jp/items/29412459/widget/large" ></iframe> 
      </div>
      {/* <h2>まずはサメプロSlackコミュニティに参加しよう！</h2> */}
      {/* <p className="center">コミュニティへの参加は無料！</p> */}
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfeIg0RaxSqgT4CxfzO9nEg0G4PogK-MQftjh5ZYUUzfy4PAA/viewform?embedded=true" id="communityConfirm" width="100%" height="1193" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe> --> */}
    </div>
    <div id="team" className="topPageContents">
      <h2>運営チーム</h2>
      <p className="center">
        サメプロの運営スタッフのご紹介
      </p>
      <div className="cards">
        <div className="card">
          <div className="profile">
            <h3>Kosho Asaga</h3>
            <p>サメプロ代表、Co-Founder。広報を主に担当。小学生の頃からウェブデザインに興味を持ち、現在に至るまで複数のウェブサイトの構築経験あり。最近はReact勉強中。応用情報技術者。</p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <h3>けんちょん</h3>
            <p>
              サメプロCo-Founder。アルゴリズム入門コースを担当。
              AtCoder などのプログラミングコンテストでは drken として活躍。
              Qiita 6 位。アルゴリズム関連をわかりやすく解説する記事執筆多数。
              最近はコンピュータサイエンス全域を幅広く勉強中。
            </p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <h3>Vane11ope</h3>
            <p>
              サメプロCo-Founder。GitHub + Visual Studio Code 入門コースを担当。
              Microsoft を退職し、サメプロに参画。これまでゲームプログラミングからサイバーセキュリティまで幅広い分野に携わる。OSS 活動経験もあり、radare2 のコアコミッタを務める。
            </p>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <h3>げんまい</h3>
            <p>
              サメプロCo-Founder。
              講義のサポートを主に担当。電機メーカーに勤めながら北陸先端科学技術大学院大学の博士後期課程に在籍している。組込みや画像を用いた行動認識が専門。
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage
