   ---
   title: "Webinars"
   description: "Recordings of past PostDoc Potential webinars"
   permalink: /webinars
   layout: default
   ---

{% for group in site.data.webinars %}
## {{ group.year }}
<ul>
  {% for talk in group.talks %}
    <li><a href="{{ talk.url }}" target="_blank" rel="noopener">{{ talk.title }}</a></li>
  {% endfor %}
</ul>
{% endfor %}
