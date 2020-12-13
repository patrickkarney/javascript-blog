{
    
  const titleClickHandler = function(event){
    console.log('Link was clicked!');
    console.log(event);
    event.preventDefault();
    const clickedElement = this;
    
  
  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts .active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log('selektor: ', articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log('Artykuł: ', targetArticle);

  /* [DONE] add class 'active' to the correct article */
  
  targetArticle.classList.add('active');


  }

  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  
  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function generateTitleLinks(){

    /* [DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = ''; 

    /* for each article */

    const articles = optArticleSelector;

    for (let article of articles){

    /* get the article id */

    const articleId = articles.getAttribute('id');
    console.log('id artykułu: ', articleId, article);

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */
    }

  }

  generateTitleLinks();
}