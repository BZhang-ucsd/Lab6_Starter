// RecipeCard.js

class RecipeCard extends HTMLElement {
  constructor() {
    super();

    // A1. Attach the shadow DOM to this Web Component (leave the mode open)
    this.attachShadow({ mode: 'open' });

    // A2. Create an <article> element
    this.article = document.createElement('article');

    // A3. Create a style element
    this.styleElement = document.createElement('style');

    // A4. Insert all of the styles from cardTemplate.html into the <style> element
    this.styleElement.textContent = `
    * {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    article {
      align-items: center;
      border: 1px solid rgb(223, 225, 229);
      border-radius: 8px;
      display: grid;
      grid-template-rows: 118px 56px 14px 18px 15px 36px;
      height: auto;
      row-gap: 5px;
      padding: 0 16px 16px 16px;
      width: 178px;
    }

    div.rating {
      align-items: center;
      column-gap: 5px;
      display: flex;
    }

    div.rating>img {
      height: auto;
      display: inline-block;
      object-fit: scale-down;
      width: 78px;
    }

    article>img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      height: 118px;
      object-fit: cover;
      margin-left: -16px;
      width: calc(100% + 32px);
    }

    p.ingredients {
      height: 32px;
      line-height: 16px;
      padding-top: 4px;
      overflow: hidden;
    }

    p.organization {
      color: black !important;
    }

    p.title {
      display: -webkit-box;
      font-size: 16px;
      height: 36px;
      line-height: 18px;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    p:not(.title),
    span,
    time {
      color: #70757A;
      font-size: 12px;
    }
    `;

    // A5. Append the <style> and <article> elements to the Shadow DOM
    this.shadowRoot.append(this.styleElement, this.article);
  }

  set data(data) {
    if (!data) return;

    // A6. Select the <article> we added to the Shadow DOM in the constructor
    // A7. Set the contents of the <article> with the <article> template
    this.article.innerHTML = `
      <img src="${data.imgSrc}" alt="${data.imgAlt}">
      <p class="title">
        <a href="${data.titleLnk}">${data.titleTxt}</a>
      </p>
      <p class="organization">${data.organization}</p>
      <div class="rating">
        <span>${data.rating}</span>
        <img src="Lab6_Starter/assets/images/icons/${data.rating}-star.svg" alt="${data.rating} stars">
        <span>(${data.numRatings})</span>
      </div>
      <time>${data.lengthTime}</time>
      <p class="ingredients">${data.ingredients}</p>
    `;
  }
}

// A8. Define the Class as a customElement
customElements.define('recipe-card', RecipeCard);
