---
layout: default
title: Home
nav: home
---

<main id="main-content" class="simple-shell">
  <section class="intro-block">
    <p class="kicker"><span data-lang="en">Profile</span><span data-lang="ja">プロフィール</span></p>
    <h1 class="intro-name"><span data-lang="en">Soma Saito</span><span data-lang="ja">Soma Saito</span></h1>
  </section>

  <section class="content-section" id="papers">
    <div class="section-line"><h2><span data-lang="en">Papers</span><span data-lang="ja">論文</span></h2><span>2026</span></div>
    <article class="paper-row">
      <div class="paper-row-index">02</div>
      <div class="paper-row-content">
        <h3><span data-lang="en">Categorical Semantics and Operational Soundness for an Extended Simply Typed Lambda Calculus in Lean 4</span><span data-lang="ja">Lean 4における拡張単純型付きラムダ計算の圏論的意味論と操作的健全性</span></h3>
        <p data-lang="en">Denotation of intrinsically typed STLCextBool in a chosen Cartesian closed category with primitive Boolean structure, and denotational preservation for full-congruence and call-by-value reduction.</p>
        <p data-lang="ja">原始Bool構造を備えた構造指定カルテシアン閉圏において内在的型付きSTLCextBoolを表示し、完全合同閉包と値呼び簡約に対する表示保存性を示しました。</p>
        <div class="paper-meta">
          <span class="tag-pill tag-pill--sage">Japanese 14 pp. / English 11 pp.</span>
          <span class="tag-pill tag-pill--rust">Lean 4 · Categorical semantics</span>
        </div>
        <div class="paper-links"><a href="{{ '/research/papers/paper2.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">日本語 PDF ↗</a><a href="{{ '/research/papers/saito_paper2_categorical_semantics_stlcextbool_en.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">English PDF ↗</a></div>
      </div>
    </article>
    <article class="paper-row">
      <div class="paper-row-index">01</div>
      <div class="paper-row-content">
        <h3><span data-lang="en">Formalizing Type Safety for Call-by-Value Evaluation in the Simply Typed Lambda Calculus with Booleans in Lean 4</span><span data-lang="ja">Lean 4における単純型付きラムダ計算のcall-by-value評価に対する型安全性証明の形式化に関する研究</span></h3>
        <p data-lang="en">Preservation, progress, and multi-step type safety for the STLCextBool development.</p>
        <p data-lang="ja">STLCextBoolについて、preservation、progress、そして多段階簡約に基づくCBVにおけるtype safetyの形式的な証明を与えました。</p>
        <div class="paper-meta">
          <span class="tag-pill tag-pill--sage">Japanese 16 pp. / English 11 pp.</span>
          <span class="tag-pill tag-pill--rust">Lean 4 · Metatheory</span>
        </div>
        <div class="paper-links"><a href="{{ '/research/papers/paper1.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">日本語 PDF ↗</a><a href="{{ '/research/papers/saito_paper1_cbv_type_safety_stlcextbool_en.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">English PDF ↗</a></div>
      </div>
    </article>
  </section>

  <section class="content-section">
    <div class="section-line"><h2><span data-lang="en">Notes</span><span data-lang="ja">ノート</span></h2><span>Math</span></div>
    <a class="list-row" href="{{ '/math/category-theory/' | relative_url }}"><span>01</span><div><h3><span data-lang="en">Category theory</span><span data-lang="ja">圏論</span></h3><p data-lang="en">Categories, functors, and the language of structure.</p><p data-lang="ja">圏や関手を通して、数学的構造を記述する言語を学びます。</p></div><b>→</b></a>
    <a class="list-row" href="{{ '/math/set-theory/' | relative_url }}"><span>02</span><div><h3><span data-lang="en">Set theory</span><span data-lang="ja">集合論</span></h3><p data-lang="en">The elementary language of sets and functions.</p><p data-lang="ja">集合や写像について、基礎からやさしくまとめています。</p></div><b>→</b></a>
  </section>

  <section class="content-section">
    <div class="section-line"><h2><span data-lang="en">Research</span><span data-lang="ja">研究</span></h2><span>Lean 4</span></div>
    <a class="list-row" href="{{ '/research/' | relative_url }}"><span>→</span><div><h3><span data-lang="en">Formalized metatheory</span><span data-lang="ja">形式化メタ理論</span></h3><p data-lang="en">Type safety, reduction, and typed lambda calculi.</p><p data-lang="ja">型安全性や簡約など、型付きラムダ計算にまつわるテーマを取り上げています。</p></div><b>→</b></a>
  </section>

  <section class="content-section">
    <div class="section-line"><h2><span data-lang="en">Profile</span><span data-lang="ja">プロフィール</span></h2></div>
    <div class="profile-grid">
      <div class="profile-label"><span data-lang="en">Affiliation</span><span data-lang="ja">所属</span></div>
      <div class="profile-value">
        <span data-lang="en">Kogakuin University, B2 — Dept. of Information Sciences</span>
        <span data-lang="ja">工学院大学 情報学部 B2</span>
      </div>
      <div class="profile-label"><span data-lang="en">Interests</span><span data-lang="ja">関心分野</span></div>
      <div class="profile-value interests">
        <p data-lang="en">Type theory and category theory, with a particular interest in formalized mathematics — using proof assistants such as Lean 4 to verify metatheoretic results by hand and machine alike.</p>
        <p data-lang="en">Currently working through the categorical semantics of typed programming languages, and how denotational models relate to operational behaviour.</p>
        <p data-lang="ja">型理論と圏論、そして形式化数学に関心があります。Lean 4のような証明支援系を用いて、メタ理論的な結果を人手と機械の両方で検証することに取り組んでいます。</p>
        <p data-lang="ja">現在は型付きプログラミング言語の圏論的意味論、そして表示的モデルと操作的振る舞いの関係について学んでいます。</p>
      </div>
    </div>
  </section>

  <section class="content-section contact-section" id="contact">
    <div class="section-line"><h2><span data-lang="en">Contact</span><span data-lang="ja">連絡先</span></h2></div>
    <p><a href="mailto:j125141@g.kogakuin.jp">j125141@g.kogakuin.jp</a></p>
    <p><a href="https://x.com/uch4sq_" target="_blank" rel="noopener noreferrer">X / @uch4sq_ ↗</a></p>
  </section>
</main>
