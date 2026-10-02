"""Render owner-supplied full reviews, first-name credits and the rating snapshot."""
from pathlib import Path
import json,re,html
R=Path(__file__).resolve().parents[1]
reviews=json.loads((R/'data/reviews.json').read_text())
rating=json.loads((R/'data/review-rating.json').read_text())
labels={
'de':['Mehr anzeigen','Weniger anzeigen','Original anzeigen','Übersetzen','Original auf Google lesen','5 von 5 Sternen'],
'en':['See more','Show less','See original','Translate','Read the original on Google','5 out of 5 stars'],
'it':['Mostra altro','Mostra meno','Mostra originale','Traduci','Leggi l’originale su Google','5 stelle su 5']}
e=html.escape
for f,lang in [('index.html','de'),('de/index.html','de'),('en/index.html','en'),('it/index.html','it')]:
 cards=[];more,less,orig,translate,source,stars=labels[lang]
 for r in reviews:
  if r['status']!='verified':continue
  assert r['originalText'] and r['originalLanguage']
  assert all(r['translations'].get(l) for l in ('de','en','it'))
  original='\n'.join(f'<span lang="{e(part["lang"])}">{e(part["text"])}</span>' for part in r.get('originalSegments', [{'lang':r['originalLanguage'],'text':r['originalText']}]))
  text=r['translations'][lang];id='review-'+str(r['order'])+'-text'
  toggle=''
  if r['originalLanguage']!=lang:
   toggle=f'<button type="button" class="loReviewLanguage" hidden aria-controls="{id}" aria-pressed="false" data-original="{e(orig)}" data-translate="{e(translate)}">{e(orig)}</button>'
  cards.append(f'''<figure class="loReviewCard" data-review-order="{r['order']}" data-page-lang="{lang}" data-original-lang="{r['originalLanguage']}">
<div class="loReviewHeading"><span aria-label="{stars}" class="loReviewStars" role="img">★★★★★</span><strong class="loReviewName">{e(r['name'])}</strong></div>
<p class="loReviewText" id="{id}" lang="{lang}">{e(text)}</p>
<template class="loReviewOriginal">{original}</template>
<div class="loReviewControls"><button type="button" class="loReviewExpand" hidden aria-expanded="false" aria-controls="{id}" data-more="{more}" data-less="{less}">{more}</button>{toggle}</div>
<figcaption><a class="loReviewSource" href="{e(r['sourceUrl'])}" rel="noopener noreferrer" target="_blank">{e(source)}</a></figcaption></figure>''')
 p=R/f;s=p.read_text()
 countLabel={'de':'Google-Rezensionen','en':'Google reviews','it':'recensioni Google'}[lang]
 dateLabel={'de':'Bewertung geprüft am','en':'Rating checked on','it':'Valutazione verificata il'}[lang]
 date='.'.join(reversed(rating['updatedAt'].split('-')))
 start=s.index('<section aria-labelledby="customerReviewsTitle"');end=s.index('</section>',start)
 section=s[start:end]
 section=re.sub(r'(<div class="loReviewsScore"><strong>).*?(</strong>)',lambda m:m[1]+f"{rating['rating']:.1f} / 5"+m[2],section,count=1)
 section=re.sub(r'<span>\d+ (?:Google-Rezensionen|Google reviews|recensioni Google)</span>',f'<span>{rating["reviewCount"]} {countLabel}</span>',section,count=1)
 section=re.sub(r'(<span class="loReviewsDate">).*?(</span>)',lambda m:m[1]+f'{dateLabel} <time datetime="{rating["updatedAt"]}">{date}</time>.'+m[2],section,count=1)
 s=s[:start]+section+s[end:]
 pattern=r'(<div aria-labelledby="customerReviewsTitle" class="loReviewsGrid"[^>]*>).*?(</div><div class="loReviewsFooter">)'
 s,n=re.subn(pattern,lambda m:m[1]+''.join(cards)+m[2],s,count=1,flags=re.S)
 assert n,f
 p.write_text(s)
print('Rendered',sum(r['status']=='verified' for r in reviews),'verified review(s);',sum(r['status']!='verified' for r in reviews),'pending originals.')
