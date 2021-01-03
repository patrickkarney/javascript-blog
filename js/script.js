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
    console.log("articleSelector: ", articleSelector);
    const targetArticle = document.querySelector(articleSelector);
    console.log("targetArticle: ", targetArticle);  
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
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorsSelector = '.post-author',
  optTagsListSelector = '.post .list',
  optCloudClassCount = 5,
  optCloudClassPrefix = 'tag-size-';
  

  function generateTitleLinks(customSelector = ''){
    
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log("customSelector: ", customSelector);
    console.log("articles: ", articles);
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

  function calculateTagsParams(tags){
    const params = {max: 0, min: 999999};
    
    
    for( let tag in tags ){
      params.max = Math.max(tags[tag], params.max);
      params.min = Math.min(tags[tag], params.min);
      console.log(tag + ' is used ' + tags[tag] + ' times');
      }
      
    
    return params;
  }

  function calculateTagClass(count, params){
    /* create const "maxParamsDiff" for counting difference between "params.max" and "params.min"*/
    const  maxParamsDiff = params.max - params.min;
    console.log('Różnica maksymalna parametrów: ', maxParamsDiff);
    /*create const "paramsDiff" for counting difference between "count" and "params.min" */
    const paramsDiff = count - params.min;
    console.log('różnica od danego parametru: ', paramsDiff);
    /*create const for countig the quotient "paramsDiff"/"maxParamsDiff" */
    const quotient = paramsDiff/maxParamsDiff;
    console.log('iloraz: ', quotient);
    /*Use Math.floor for findig the class size */
    const classNumber = Math.floor( quotient*(optCloudClassCount - 1) + 1);
    console.log('classNumber: ', classNumber);
    return classNumber;

  }
  
  function generateTags(){
    
    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};
    
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
       
      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      
      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + ', </span></a></li>';
        /* add generated code to html variable */
        html = html + linkHTML;
        /* [NEW] check if this link is NOT already in allTags */
        if(!allTags[tag]) {
          /* [NEW] add tag to allTags object */
          allTags[tag] = 1;
        } else {
          allTags[tag]++;
        }
      /* END LOOP: for each tag */
      }
    /* insert HTML of all the links into the tags wrapper */
    tagWrapper.innerHTML = html;
    /* END LOOP: for every article: */
    }
    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams);
    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector('.tags');
    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){
      /* [NEW] generate code of a link and add it to allTagsHTML */
      allTagsHTML += '<li><a href="#tag-' + tag + '" class="' + calculateTagClass(allTags[tag], tagsParams) + '"><span>' + tag + ' </span></a>' + ' (' + allTags[tag] + ') </li>';
      console.log('calculateTagClass: ', calculateTagClass(allTags[tag], tagsParams));
    }
    /* [NEW] END LOOP: for each tag in allTags: */

    /*[NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML;
    console.log('allTags: ', allTags);
    
    
    
  }
  
  

  function tagClickHandler(event){
    /* prevent default action for this event */  
    /* make new constant named "clickedElement" and give it the value of "this" */
    event.preventDefault();
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-','');
    /* find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log("aktywne tagi: ", activeTagLinks);
    /* START LOOP: for each active tag link */
    for(let activeTagLink of activeTagLinks){
      /* remove class active */
      activeTagLink.classList.remove('active');
    
    /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
    console.log("tagLinks: ",tagLinks);
    /* START LOOP: for each found tag link */
    for(let tagLink of tagLinks){
      tagLink.classList.add('active');
    
      /* add class active */
  
    /* END LOOP: for each found tag link */
    }
    console.log('tag:', tag);
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="'+ tag +'"]');
  }
  
  function addClickListenersToTags(){
    /* find all links to tags */
    const linkTags = document.querySelectorAll('a[href^="#tag-"]');
    /* START LOOP: for each link */
    for(let linkTag of linkTags){
      linkTag.addEventListener('click', tagClickHandler);
    }
      /* add tagClickHandler as event listener for that link */
  
    /* END LOOP: for each link */
  }
  generateTags();
  addClickListenersToTags();

  function generateAuthors(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);  
    /* START LOOP: for every article: */
    for(let article of articles){
    
      /* find authors wrapper */
      const authorWrapper = article.querySelector(optArticleAuthorsSelector);
      /* make html variable with empty string */
      let html = '';
      /* get author from data-authors attribute */
      const articleAuthor = article.getAttribute('data-author');
      
      /* generate HTML of the link */
      const linkHTML = '<a href="#author-' + articleAuthor + '">' + articleAuthor + '</a>';
      
      /* add generated code to html variable */
      html = html + linkHTML;
      /* insert HTML of all the links into the authors wrapper */
      authorWrapper.innerHTML = html;
    /* END LOOP: for every article: */
    }
  }
  generateAuthors();

  function authorClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log('Author href: ', href);
    /* make a new constant "author" and extract author from the "href" constant */
    const author = href.replace('#author-','');
    /* find all author links with class active */
    const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
    console.log('aktywni autorzy: ', activeAuthorLinks);
    /* START LOOP: for each active author link */
    for (let activeAuthorLink of activeAuthorLinks){
      /* remove class active */
      activeAuthorLink.classList.remove('active');
    /* END LOOP: for each active author link */
    }
    /* find all author links with "href" attribute equal to the "href" constant */
    const targetAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');
    console.log("targetAuthorLinks: ",targetAuthorLinks);
    /* START LOOP: for each found author link */
    for(let targetAuthorLink of targetAuthorLinks){
      /* add class active */
      targetAuthorLink.classList.add('active');
  
    /* END LOOP: for each found author link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="'+ author +'"]');
}

  function addClickListenersToAuthors(){
    /* find all links to authors */
    const authorLinks = document.querySelectorAll('a[href^="#author-"]');
    console.log('authorLinks: ',authorLinks);
    /* START LOOP: for each link */
    for(let authorLink of authorLinks){
      /* add authorClickHandler as event listener for that link */
      authorLink.addEventListener('click', authorClickHandler);
    /* END LOOP: for each link */
    }
  }

  addClickListenersToAuthors();
}