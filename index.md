---
layout: default
---
{% include popup.html %}
<section class="hero-section" >{% include hero.html %}</section>
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

<div class="hero-image"  style="border-radius: 15px;">
    <picture>
        <source srcset="{{ 'assets/img/hero-image-survey.webp' | relative_url }}" type="image/webp">
        <img style="zoom:1.2" src="{{ 'assets/img/hero-image-survey.png' | relative_url }}" 
                alt="Postdoc Potential — popup survey on postdoctoral opportunities" 
                width="1200" height="600" fetchpriority="high"
                class="responsive">
    </picture>
    <div class="hero-text" style="width: 90%;">
        <h1 style="font-size: 2.5rem;">Share your views</h1>
        <br>
        <p style="font-size: 1.2rem;">
            We want to hear your opinion on postdoctoral opportunities in Earth Sciences 
        </p>
        <br>
        <button><a href="/survey/" target="_blank" class="hero-button" >Tell us here</a></button>
    </div>
</div>
