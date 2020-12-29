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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

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

  function generateTags(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles){
      /* find tags wrapper */
      const tagWrapper = article.querySelector(optArticleTagsSelector);
      /* make html variable with empty string */
      let html='';
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log("article Tags: ", articleTags); 
      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log("tablica: ", articleTagsArray);
      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + ' "><span>' + tag + ', </span> </a></li>';
        console.log("pojedynczy tag: ", linkHTML);
        /* add generated code to html variable */
        html = html + linkHTML;
      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagWrapper.innerHTML = html;
    /* END LOOP: for every article: */
    }
  }
  
  generateTags();
}