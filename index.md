---
layout: default
title: Home
nav: home
---

<main id="main-content">
  <section class="hero shell">
    <div class="hero-copy reveal">
      <p class="eyebrow"><span data-lang="en">Personal website</span><span data-lang="ja">個人サイト</span></p>
      <h1>
        <span data-lang="en">Soma<br><em>Saito.</em></span>
        <span data-lang="ja">齋藤<br><em>湊馬。</em></span>
      </h1>
      <div class="hero-intro">
        <p data-lang="en">Mathematics, type theory, and formalized metatheory.</p>
        <p data-lang="ja">数学・型理論・形式化メタ理論。</p>
      </div>
      <div class="hero-actions">
        <a class="button button-primary" href="#papers">
          <span data-lang="en">Read the latest paper</span><span data-lang="ja">最新のノートを読む</span>
          <span aria-hidden="true">↘</span>
        </a>
        <a class="text-link" href="#about"><span data-lang="en">About me</span><span data-lang="ja">自己紹介</span> <span aria-hidden="true">→</span></a>
      </div>
    </div>

    <aside class="hero-profile reveal delay-1" aria-label="Profile">
      <p class="eyebrow"><span data-lang="en">About</span><span data-lang="ja">プロフィール</span></p>
      <p class="profile-name"><span data-lang="en">Undergraduate student<br>at Kogakuin University</span><span data-lang="ja">工学院大学<br>学部生</span></p>
      <dl class="profile-list">
        <div><dt><span data-lang="en">Focus</span><span data-lang="ja">関心</span></dt><dd>Type theory<br>Category theory<br>Lean 4</dd></div>
        <div><dt><span data-lang="en">Based in</span><span data-lang="ja">所属</span></dt><dd>Tokyo, Japan</dd></div>
      </dl>
    </aside>
  </section>

  <section class="section shell" id="papers">
    <header class="section-heading reveal">
      <div>
        <p class="eyebrow"><span data-lang="en">Selected writing</span><span data-lang="ja">公開ノート</span></p>
        <h2><span data-lang="en">Paper <em>01</em></span><span data-lang="ja">論文 <em>01</em></span></h2>
      </div>
      <p class="section-number">01 / 01</p>
    </header>

    <article class="paper-feature reveal">
      <div class="paper-index" aria-hidden="true">01</div>
      <div class="paper-body">
        <div class="paper-tags"><span>Metatheory</span><span>Lean 4</span><span>日本語 / English</span><span>16 / 11 pages</span></div>
        <h3 class="paper-title-long"><span data-lang="en">Formalizing Type Safety<br>for Call-by-Value STLC in Lean 4</span><span data-lang="ja">Lean 4における単純型付きラムダ計算の<br>call-by-value評価に対する型安全性証明の形式化に関する研究</span></h3>
        <p data-lang="en">A formalization of preservation, progress, and multi-step type safety for the call-by-value semantics of simply typed lambda calculus with booleans.</p>
        <p data-lang="ja">真偽値を備えた単純型付きラムダ計算のcall-by-value意味論について、preservation、progress、多段階簡約に基づくtype safetyをLean 4上で形式化します。</p>
        <div class="paper-footer">
          <span>10 JUL 2026</span>
          <div class="paper-actions">
            <a class="button button-dark" href="{{ '/research/papers/paper1.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">日本語 PDF <span aria-hidden="true">↗</span></a>
            <a class="button button-light" href="{{ '/research/papers/saito_paper1_cbv_type_safety_stlcextbool_en.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">English PDF <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div class="paper-glyph" aria-hidden="true"><span>λ</span><small>:</small><span>τ</span></div>
    </article>

  </section>

  <section class="section collections shell">
    <header class="section-heading reveal">
      <div>
        <p class="eyebrow"><span data-lang="en">Explore the notes</span><span data-lang="ja">ノートを見る</span></p>
        <h2><span data-lang="en">Collections</span><span data-lang="ja">コレクション</span></h2>
      </div>
    </header>
    <div class="collection-grid">
      <a class="collection-card reveal" href="{{ '/math/' | relative_url }}">
        <span class="collection-count">02 topics</span>
        <span class="collection-symbol" aria-hidden="true">∑</span>
        <h3><span data-lang="en">Mathematics</span><span data-lang="ja">数学</span></h3>
        <p data-lang="en">Category theory, set theory, and notes on the structures that connect them.</p>
        <p data-lang="ja">圏論・集合論を中心に、数学の構造を学んだ記録です。</p>
        <span class="card-link"><span data-lang="en">Explore collection</span><span data-lang="ja">コレクションを見る</span> →</span>
      </a>
      <a class="collection-card reveal delay-1" href="{{ '/research/' | relative_url }}">
        <span class="collection-count">01 paper · 02 threads</span>
        <span class="collection-symbol" aria-hidden="true">λ</span>
        <h3><span data-lang="en">Research</span><span data-lang="ja">研究</span></h3>
        <p data-lang="en">Lean 4 metatheory, type safety, and small extensions of typed lambda calculi.</p>
        <p data-lang="ja">Lean 4によるメタ理論、型安全性、型付きラムダ計算の拡張について。</p>
        <span class="card-link"><span data-lang="en">Explore collection</span><span data-lang="ja">コレクションを見る</span> →</span>
      </a>
    </div>
  </section>

  <section class="about section shell" id="about">
    <div class="about-title reveal">
      <p class="eyebrow"><span data-lang="en">About</span><span data-lang="ja">自己紹介</span></p>
      <h2>Soma<br>Saito<span>.</span></h2>
    </div>
    <div class="about-copy reveal delay-1">
      <p class="about-lead" data-lang="en">I am an undergraduate student at Kogakuin University in Japan, majoring in theoretical computer science and mathematics.</p>
      <p class="about-lead" data-lang="ja">工学院大学で理論計算機科学と数学を学んでいる学部生です。</p>
      <p data-lang="en">This site is a public record of what I learn in seminars and independent study. I am especially interested in type theory, category theory, formalized mathematics, and categorical semantics of programming.</p>
      <p data-lang="ja">このサイトでは、ゼミや自主学習でまとめたノートを公開しています。特に型理論、圏論、形式化数学、プログラミングの圏論的意味論に関心があります。</p>
      <div class="interest-list" aria-label="Interests">
        <span>Type theory</span><span>Category theory</span><span>Lean 4</span><span>Semantics</span>
      </div>
      <div class="contact-row">
        <a href="mailto:j125141@g.kogakuin.jp">j125141<span aria-hidden="true">[at]</span><span class="sr-only">@</span>g.kogakuin.jp</a>
        <a href="https://x.com/uch4sq_" target="_blank" rel="noopener noreferrer">X / @uch4sq_ ↗</a>
      </div>
    </div>
  </section>
</main>
