import {getHHMMTime, getDDMMDate, checkExpiration, createElement} from "./constants";

export class Task {
  constructor(data) {
    this._color = data.color;
    this._title = data.title;
    this._tags = data.tags;
    this._picture = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._isExpired = checkExpiration(data.dueDate);
    this._deadlineTime = getHHMMTime(data.dueDate);
    this._deadlineDate = getDDMMDate(data.dueDate);

    this._element = null;
    this._state = {
      isEdit: false
    };

    this._onEdit = null;
  }

  _isRepeated() {
    return Object.values(this._repeatingDays).some((it) => it === true);
  }

  get element() {
    return this._element;
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `<article class="card card--${this._color} ${this._isRepeated() ? `card--repeat` : ``} ${this._isExpired ? `card--deadline` : ``}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled"
          >
            favorites
          </button>
        </div>
  
        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>
  
        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text"
            >
              ${this._title}
            </textarea>
          </label>
        </div>
  
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">${this._deadlineDate}</span>
              </button>
  
              <fieldset class="card__date-deadline" ${ this._deadlineDate ? `` : `disabled`} >
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder="${this._deadlineDate}"
                    name="date"
                  />
                </label>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__time"
                    type="text"
                    placeholder="${ this._deadlineTime ? this._deadlineTime : ``}"
                    name="time"
                  />
                </label>
              </fieldset>
            </div>
  
            <div class="card__hashtag">
              <div class="card__hashtag-list">
              ${[...this._tags].map((tag) => `
                <span class="card__hashtag-inner">
                  <input
                    type="hidden"
                    name="hashtag"
                    value="repeat"
                    class="card__hashtag-hidden-input"
                  />
                  <button type="button" class="card__hashtag-name">
                    #${tag}
                  </button>
                  <button type="button" class="card__hashtag-delete">
                    delete
                  </button>
                </span>`).join(``)}
              </div>
  
              <label>
                <input
                  type="text"
                  class="card__hashtag-input"
                  name="hashtag-input"
                  placeholder="Type new hashtag here"
                />
              </label>
            </div>
          </div>
  
          <label class="card__img-wrap ${ this._picture ? `` : `card__img-wrap--empty`}">
            <input
              type="file"
              class="card__img-input visually-hidden"
              name="img"
            />
            <img
              src="${this._picture}"
              alt="task picture"
              class="card__img"
            />
          </label>
        </div>
      </div>
    </form>
  </article>`.trim();
  }

  bind() {
    this._element.querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onEditButtonClick.bind(this));
  }


  _onEditButtonClick() {
    if (typeof this._onEdit === `function`) {
      this._onEdit();
    }
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unbind() {
    this._element.removeEventListener(this._onEditButtonClick());
  }

  unrender() {
    this.unbind();
    this._element = null;
  }

}
