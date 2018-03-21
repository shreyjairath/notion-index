class Index {
  constructor() {
    this.$headers = [];
    this.$el = $('<div class="index">');
    this._attachItemClickHandler();
  }

  _attachItemClickHandler() {
    this.$el.on('click', '.item', (e) => {
      e.preventDefault();
      const index = $(e.target).data('index');

      if(index !== undefined) {
        this.scrollToEl(this.$headers.eq(index));
      }
    });
  }

  scrollToEl($el) {
    const $scrollingEl = $('.notion-frame .notion-scroller');
    const currScrollTop = $scrollingEl.scrollTop();
    
    $scrollingEl.animate({
      scrollTop: `${currScrollTop + $el.offset().top - 80}px`,
    })
  }

  setModel($headers) {
    this.$headers = $headers;
    const $indexItems = $headers.toArray().map((header, index) => {
      const $item = $(`<a class="item" href="#" data-index=${index}>`);
      $item.text(
        $(header).text()
      );
      return $item;
    });
    this.$el
      .empty()
      .append($indexItems);
  }
}