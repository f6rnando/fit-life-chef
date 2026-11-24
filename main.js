// FitLifeChef — search and filters for /recipes/, share helper for recipe pages.
function shareRecipe(url, title){
  if(navigator.share){ navigator.share({title:title, url:url}).catch(function(){}); }
  else if(navigator.clipboard){ navigator.clipboard.writeText(url).then(function(){ alert('Link copied: ' + url); }); }
  else { prompt('Copy this link:', url); }
}
document.addEventListener('DOMContentLoaded', function(){
  var q = document.getElementById('search');
  var cat = document.getElementById('category-filter');
  if(!q) return;
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-recipe]'));
  var count = document.getElementById('count');
  var minProtein = 0, maxTime = 0;
  function apply(){
    var term = q.value.toLowerCase();
    var c = cat ? cat.value : '';
    var shown = 0;
    cards.forEach(function(el){
      var ok = true;
      if(term && el.getAttribute('data-search').indexOf(term) === -1) ok = false;
      if(c && el.getAttribute('data-category') !== c && el.getAttribute('data-extra').indexOf(c) === -1) ok = false;
      if(minProtein && parseInt(el.getAttribute('data-protein'),10) < minProtein) ok = false;
      if(maxTime && parseInt(el.getAttribute('data-total'),10) > maxTime) ok = false;
      el.style.display = ok ? '' : 'none';
      if(ok) shown++;
    });
    if(count) count.textContent = shown + ' recipe' + (shown === 1 ? '' : 's');
  }
  q.addEventListener('input', apply);
  if(cat) cat.addEventListener('change', apply);
  document.querySelectorAll('[data-filter]').forEach(function(b){
    b.addEventListener('click', function(){
      var kind = b.getAttribute('data-filter');
      if(kind === 'clear'){ minProtein = 0; maxTime = 0; q.value=''; if(cat) cat.value=''; }
      if(kind === 'p30'){ minProtein = 30; maxTime = 0; }
      if(kind === 'p40'){ minProtein = 40; maxTime = 0; }
      if(kind === 't30'){ maxTime = 30; minProtein = 0; }
      if(kind === 't15'){ maxTime = 15; minProtein = 0; }
      document.querySelectorAll('[data-filter]').forEach(function(x){ x.classList.remove('active'); });
      if(kind !== 'clear') b.classList.add('active');
      apply();
    });
  });
  apply();
});
