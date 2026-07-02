---
layout: default
---
{% include popup.html %}
<section class="hero-section" >{% include hero.html %}</section>
<!-- <section>{% include hero-CTA.html %}</section> -->
<div class="card-story">
    <div class="card-story-left">
        <h2>Our Story</h2>
        <a href="/team" target="_blank"  class="card-story-btn" style="text-decoration:none;">Meet our team</a>
    </div>
    <div class="card-story-right">
        <p>
            PostDoc Potential started as a dinner table discussion among a group of fresh PhDs in 2025. <i>What if we create a platform for people who are transitioning from a PhD to a postdoc?</i> For people like us. A platform where postDoctoral fellows can share their insights into&mdash; project proposal writing, finding suitable fellowships, and career planning.
        </p>
    </div>
</div>

<div class="hero-image" style="border-radius: 15px;">
    <picture>
        <source srcset="{{ 'assets/img/hero-image-survey.webp' | relative_url }}" type="image/webp">
        <img src="{{ 'assets/img/hero-image-survey.png' | relative_url }}" 
            alt="Survey" 
            width="1200" height="600" loading="lazy"
            class="responsive">
    </picture>
    <div class="hero-text">
        <h1>Got A Minute?</h1>
        <br>
        <p>
            Share your views on postdoctoral opportunities
        </p>
        <br>
        <button>
            <a href="/survey/" target="_blank" class="hero-button" >Take a quick survey</a>
        </button>
    </div>
</div>
