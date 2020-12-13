{
  /* [DONE] remove class 'active' from all article links  */
  /* [DONE] add class 'active' to the clicked link */
  /* [DONE] remove class 'active' from all articles */
  /* [DONE] get 'href' attribute from the clicked link */
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  /* [DONE] add class 'active' to the correct article */  

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
  
    clickedElement.classList.add('active');
    const activeArticles = document.querySelectorAll('.posts .active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }  

    const articleSelector = clickedElement.getAttribute('href');
    const targetArticle = document.querySelector(articleSelector);  
    targetArticle.classList.add('active');
  }

  /* [DONE] remove contents of titleList */
  /* [DONE] for each article */
  /* [DONE] get the article id */
  /* [DONE] find the title element && get the title from the title element */
  /* create HTML of the link */
  /* insert link into titleList */

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function generateTitleLinks(){  
    
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';

    for (let article of articles){
      const articleId = article.getAttribute('id');
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;      
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      html = html + linkHTML;
    }

    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');
  
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }

  generateTitleLinks();
}