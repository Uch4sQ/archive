---
layout: default
title: Home
nav: home
---

<main id="main-content">
  <section class="hero shell">
    <div class="hero-copy reveal">
      <p class="eyebrow"><span data-lang="en">Soma Saito · Mathematics, Type Theory &amp; Formalized Metatheory</span><span data-lang="ja">齋藤 湊馬 · 数学・型理論・形式化メタ理論</span></p>
      <h1>
        <span data-lang="en">Thinking in<br><em>structures.</em></span>
        <span data-lang="ja">構造から、<br><em>考える。</em></span>
      </h1>
      <div class="hero-intro">
        <p data-lang="en">I study the mathematical structures behind computation — from type theory and category theory to formalized metatheory.</p>
        <p data-lang="ja">型理論・圏論・形式化されたメタ理論を通して、計算の背後にある数学的構造を探究しています。</p>
      </div>
      <div class="hero-actions">
        <a class="button button-primary" href="#papers">
          <span data-lang="en">Read the latest paper</span><span data-lang="ja">最新のノートを読む</span>
          <span aria-hidden="true">↘</span>
        </a>
        <a class="text-link" href="#about"><span data-lang="en">About me</span><span data-lang="ja">自己紹介</span> <span aria-hidden="true">→</span></a>
      </div>
    </div>

    <aside class="hero-note reveal delay-1" aria-label="Current focus">
      <div class="orbit-mark" aria-hidden="true"><span>λ</span></div>
      <p class="note-label"><span data-lang="en">Currently exploring</span><span data-lang="ja">現在の関心</span></p>
      <p class="note-topic"><span data-lang="en">Categorical semantics<br>of programming</span><span data-lang="ja">プログラミングの<br>圏論的意味論</span></p>
      <div class="note-rule"></div>
      <p class="note-meta"><span data-lang="en">Theoretical computer science<br>&amp; mathematics</span><span data-lang="ja">理論計算機科学<br>・数学</span></p>
    </aside>
  </section>

  <section class="ticker" aria-label="Research interests">
    <div class="ticker-track">
      <span>TYPE THEORY</span><i>✦</i><span>CATEGORY THEORY</span><i>✦</i><span>LEAN 4</span><i>✦</i><span>FORMALIZED MATHEMATICS</span><i>✦</i><span>TYPE THEORY</span><i>✦</i><span>CATEGORY THEORY</span>
    </div>
  </section>

  <section class="section shell" id="papers">
    <header class="section-heading reveal">
      <div>
        <p class="eyebrow"><span data-lang="en">Selected writing</span><span data-lang="ja">公開ノート</span></p>
        <h2><span data-lang="en">Selected <em>papers</em></span><span data-lang="ja">公開<em>論文</em></span></h2>
      </div>
      <p class="section-number">02 / 02</p>
    </header>

    <article class="paper-feature reveal">
      <div class="paper-index" aria-hidden="true">01</div>
      <div class="paper-body">
        <div class="paper-tags"><span>Metatheory</span><span>Lean 4</span><span>Japanese</span><span>16 pages</span></div>
        <h3 class="paper-title-long"><span data-lang="en">Formalizing Type Safety<br>for Call-by-Value STLC in Lean 4</span><span data-lang="ja">Lean 4における単純型付きラムダ計算の<br>call-by-value評価に対する型安全性証明の形式化に関する研究</span></h3>
        <p data-lang="en">A formalization of preservation, progress, and multi-step type safety for the call-by-value semantics of simply typed lambda calculus with booleans.</p>
        <p data-lang="ja">真偽値を備えた単純型付きラムダ計算のcall-by-value意味論について、preservation、progress、多段階簡約に基づくtype safetyをLean 4上で形式化します。</p>
        <div class="paper-footer">
          <span>10 JUL 2026</span>
          <a class="button button-dark" href="{{ '/research/papers/paper1.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">
            <span data-lang="en">Open PDF</span><span data-lang="ja">PDFを開く</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div class="paper-glyph" aria-hidden="true"><span>λ</span><small>:</small><span>τ</span></div>
    </article>

    <article class="paper-feature reveal">
      <div class="paper-index" aria-hidden="true">02</div>
      <div class="paper-body">
        <div class="paper-tags"><span>Term rewriting</span><span>Lean 4</span><span>English</span><span>6 pages</span></div>
        <h3 class="paper-title-long">A Lean 4 Toolbox for First-Order Term Rewriting</h3>
        <p data-lang="en">A mechanized confluence proof pipeline covering critical pairs, Newman’s lemma, Knuth-Bendix-style arguments, and reduction orderings for termination.</p>
        <p data-lang="ja">臨界対、Newmanの補題、Knuth-Bendix型の合流性証明、停止性のための簡約順序をLean 4で機械化した英語論文です。</p>
        <div class="paper-footer">
          <span>ITP 2026 · SHORT PAPER</span>
          <a class="button button-dark" href="{{ '/research/papers/paper2-en.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">
            <span data-lang="en">Open English PDF</span><span data-lang="ja">英語PDFを開く</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div class="paper-glyph paper-glyph-alt" aria-hidden="true"><span>↠</span><small>*</small><span>◇</span></div>
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
        <span class="collection-count">02 papers · 02 threads</span>
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
